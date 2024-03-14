import React from 'react';

const Login = () => {
	return (
        <html lang="en">
            <head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                
                <script src="http://code.jquery.com/jquery-latest.min.js"></script>
                
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                
                <title>로그인</title>
            </head>
            <body style={{backgroundColor: '#FAFAFA'}}>
            
                {/* // <!-- 회원가입 박스 --> */}
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                    <div style={{padding:'20px', textAlign: 'center', border: 'solid 1px rgba(219,219,219,0.1)', width: '300px', height: '400px', backgroundColor: 'white'}}>
                        {/* <!-- 인스타 로고 --> */}
                        <div style={{paddingBottom: '10px' }}><a class="navbar-brand" href="#"><img style={{width: '150px'}} src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img></a></div>
                        <div style={{fontWeight: 'bold', color: 'gray', paddingBottom: '20px'}}>친구들의 사진과 동영상을 보려면 가입하세요. 자동 배포 테스트</div>
                        {/* <!-- 이메일 --> */}
                        <div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="email_input" placeholder="name@example.com" style={{fontSize: '14px', height: '24px' }}></input>
                                <label for="email_input" style={{fontSize: '14px', padding: '4px 10px'}}>이메일 주소</label>
                            </div>
                        </div>
                        {/* <!-- 비밀번호 --> */}
                        <div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="password_input" placeholder="name@example.com" style={{fontSize: '14px', height: '24px' }}></input>
                                <label for="password_input" style={{fontSize: '14px', padding: '4px 10px'}}>비밀번호</label>
                            </div>
                        </div>
                        {/* <!-- 로그인 버튼 --> */}
                        <button id="login_button" class="btn btn-primary" style={{width: '100%'}}>로그인</button>
                    </div>
                    <div style={{padding: '20px', marginTop: '10px', textAlign: 'center', border: 'solid 1px rgba(219, 219,219, 0.1)', width: '300px', height: '70px', backgroundColor: 'white'}}>
                        <div>계정이 없으신가요? <a href="/user/join">가입하기</a></div>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            </body>

        </html>

	);
};

export default Login;

