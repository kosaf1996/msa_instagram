import React, {useState} from 'react';
import axios from "axios"

const Login = () => {
    //state
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");


    //state Event 
    const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
      // 버튼만 누르면 리프레시 되는것을 막아줌
      event.preventDefault();

      //계정 정보 체크 
      if (!Email) {
        return alert("Email를 입력하세요.");
      }
      else if (!Password) {
        return alert("Password를 입력하세요.");
      } 
      //Axios Call 
      else {
        let body = {
            email: Email,
            password: Password,
        };
        axios.post("/api/v1/user/login", body)
        .then((res) => {
          // console.log(res.data);
          if(res.data.access_token) {
            //JWT Local 저장 
            localStorage.setItem("access_token", res.data.access_token)
            localStorage.setItem("refresh_token", res.data.access_token)
            window.location.href = '/main';

          }
          if(!res.data.access_token) {
            return alert("로그인 실패 하였습니다..");
          }
        });
      }
    }

      //   else {
      //       let body = {
      //         email,
      //         password
      //       };
      //       axios.post("http://localhost:60000/api/v1/user/login", body)
      //       .then((res) => {
      //         console.log(res.data);
      //         if(res.data.code === 200) {
      //           console.log("로그인");
      //           dispatch(loginUser(res.data.userInfo));
      //           setMsg("");
      //         }
      //         if(res.data.code === 400) {
      //           setMsg("ID, Password가 비어있습니다.");
      //         }
      //         if(res.data.code === 401) {
      //           setMsg("존재하지 않는 ID입니다.");
      //         }
      //         if(res.data.code === 402) {
      //           setMsg("Password가 틀립니다.");
      //         }
      //       });
      //     }
      //     setLoading(true);
      // }
      
	return (
        <>            
                {/* // <!-- 회원가입 박스 --> */}
                <div className="login" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                    <div className="login-div1"style={{padding:'20px', textAlign: 'center', border: 'solid 1px rgba(219,219,219,0.1)', width: '300px', height: '400px', backgroundColor: 'white'}}>
                        {/* <!-- 인스타 로고 --> */}
                        <div style={{paddingBottom: '10px' }}><a class="navbar-brand" href="#"><img style={{width: '150px'}} src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img></a></div>
                        <div style={{fontWeight: 'bold', color: 'gray', paddingBottom: '20px'}}>친구들의 사진과 동영상을 보려면 가입하세요. 자동 배포 테스트</div>
                        {/* <!-- 이메일 --> */}
                        <form onSubmit={onSubmitHandler}>
                          <div>
                              <div class="form-floating mb-3">
                                  <input type="email" class="form-control" id="email_input" placeholder="name@example.com" style={{fontSize: '14px', height: '24px' }} value={Email} onChange={onEmailHandler}></input>
                                  <label for="email_input" style={{fontSize: '14px', padding: '4px 10px'}}>이메일 주소</label>
                              </div>
                          </div>
                          {/* <!-- 비밀번호 --> */}
                          <div>
                              <div class="form-floating mb-3">
                                  <input type="password" class="form-control" id="password_input" placeholder="name@example.com" style={{fontSize: '14px', height: '24px' }} value={Password} onChange={onPasswordHandler}></input>
                                  <label for="password_input" style={{fontSize: '14px', padding: '4px 10px'}}>비밀번호</label>
                              </div>
                          </div>
                          
                          {/* <!-- 로그인 버튼 --> */}
                          <button id="login_button" class="btn btn-primary" style={{width: '100%'}} formAction=''>로그인</button>
                          </form>
                    </div>
                    <div style={{padding: '20px', marginTop: '10px', textAlign: 'center', border: 'solid 1px rgba(219, 219,219, 0.1)', width: '300px', height: '70px', backgroundColor: 'white'}}>
                        <div>계정이 없으신가요? <a href="/signup">가입하기</a></div>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            {/* </body> */}
    </>
	);
};

export default Login;