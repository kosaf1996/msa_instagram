package controller

// https://gist.github.com/victorsteven/f1c5154cd1d9b269876e00990ecaeed0 {JWT 인증 자료}
import (
	"login/db"
	"login/helper"
	models "login/models"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis/v7"
	"github.com/twinj/uuid"
)

// ##################################
// ##           Global             ##
// ##################################
var client *redis.Client

// ##################################
// ##            Redis             ##
// ##################################

func init() {
	//.env 파일 로드
	// err_env := godotenv.Load()
	// if err_env != nil {
	// 	log.Fatal("Error loading .env file")
	// }

	// //Initializing redis
	// dsn := os.Getenv("REDIS_DSN")
	// if len(dsn) == 0 {
	dsn := "localhost:6379"
	// }
	client = redis.NewClient(&redis.Options{
		Addr: dsn, //redis port
	})
	_, err := client.Ping().Result()
	if err != nil {
		panic(err)
	}
}

// ##################################
// ##            Login             ##
// ##################################
// 로그인
func Login(c *gin.Context) {
	user := new(models.User)

	//JSON Check
	if c.Bind(&user) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read body",
		})
		return
	}

	//사용자 에게 받은 패스워드 정보
	inputpw := user.Password

	// DB 연결
	db := db.Mysql_Connect()

	//Email조회
	result := db.Find(user, "email=?", user.Email)

	// 존재하지않는 아이디일 경우
	if result.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "existing email",
		})
		return
	}

	// 암호화 패스워드 체크
	res := helper.CheckPasswordHash(user.Password, inputpw)

	// 비밀번호 검증에 실패한 경우
	if !res {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Password Faild........",
		})
		return
	}

	// JWT Token Create
	token, err := CreateToken(user.ID)
	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, err.Error())
		return
	}

	//JWT Redis Set
	saveErr := CreateAuth(user.ID, token)
	if saveErr != nil {
		c.JSON(http.StatusUnprocessableEntity, saveErr.Error())
	}

	tokens := map[string]string{
		"access_token":  token.AccessToken,
		"refresh_token": token.RefreshToken,
	}

	c.JSON(http.StatusOK, tokens)
}

// ##################################
// ##           JWT               ##
// ##################################
// 데이터베이스에 JWT 메타데이터 저장합니다. 사용자가 로그아웃을 요청한다면 이를 기록하여 JWT를 무효화할 수 있습니다.
// 액세스 토큰(access token)이 만료된 경우 리프레시 토큰(refresh token)을 사용하여 새 액세스 토큰을 생성하여 액세스 토큰이 만료가 되더라도 사용자가 다시 로그인을 하지 않게 만들 수 있습니다.
func CreateToken(userid int) (*models.TokenDetails, error) {
	td := &models.TokenDetails{}
	td.AtExpires = time.Now().Add(time.Minute * 15).Unix()
	td.AccessUuid = uuid.NewV4().String()

	td.RtExpires = time.Now().Add(time.Hour * 24 * 7).Unix()
	td.RefreshUuid = uuid.NewV4().String()

	var err error

	//Creating Access Token
	os.Setenv("ACCESS_SECRET", "msainstagram") //this should be in an env file
	atClaims := jwt.MapClaims{}
	atClaims["authorized"] = true
	atClaims["access_uuid"] = td.AccessUuid
	atClaims["user_id"] = userid
	atClaims["exp"] = td.AtExpires
	at := jwt.NewWithClaims(jwt.SigningMethodHS256, atClaims)
	td.AccessToken, err = at.SignedString([]byte(os.Getenv("ACCESS_SECRET")))
	if err != nil {
		return td, err
	}

	//Creating Refresh Token
	os.Setenv("REFRESH_SECRET", "msainstagramrefreshtoken") //this should be in an env file
	rtClaims := jwt.MapClaims{}
	rtClaims["refresh_uuid"] = td.RefreshUuid
	rtClaims["user_id"] = userid
	rtClaims["exp"] = td.RtExpires
	rt := jwt.NewWithClaims(jwt.SigningMethodHS256, rtClaims)
	td.RefreshToken, err = rt.SignedString([]byte(os.Getenv("REFRESH_SECRET")))
	if err != nil {
		return td, err
	}
	return td, err
}

// ##################################
// ##      JWT MetaData 저장 함수    ##
// ##################################
// Save token metadata to Redis
func CreateAuth(userid int, td *models.TokenDetails) error {
	at := time.Unix(td.AtExpires, 0) //converting Unix to UTC(to Time object)
	rt := time.Unix(td.RtExpires, 0)
	now := time.Now()

	//Redis Access Set
	errAccess := client.Set(td.AccessUuid, strconv.Itoa(int(userid)), at.Sub(now)).Err()
	if errAccess != nil {
		return errAccess
	}

	//Redis Refresh Set
	errRefresh := client.Set(td.RefreshUuid, strconv.Itoa(int(userid)), rt.Sub(now)).Err()
	if errRefresh != nil {
		return errRefresh
	}
	return nil
}
