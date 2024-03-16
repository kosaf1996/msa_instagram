import React, {useState} from 'react';
import axios from "axios"


const SignUp = () => {

	    //state
		const [Email, setEmail] = useState("");
		const [Password, setPassword] = useState("");
		const [Nickname, setNickName] = useState("");
		const [Name, setName] = useState("");	
	
		//state Event 
		const onEmailHandler = (event) => {
		  setEmail(event.currentTarget.value);
		}
		const onPasswordHandler = (event) => {
			setPassword(event.currentTarget.value);
		}
		const onNameHandler = (event) => {
			setName(event.currentTarget.value);
		  }
		  const onNickNameHandler = (event) => {
			setNickName(event.currentTarget.value);
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
		  else if (!Nickname) {
			return alert("Nickname을 입력하세요.");
		  } 
		  else if (!Name) {
			return alert("Name을 입력하세요.");
		  } 
		  //Axios Call 
		  else {
			let body = {
				email: Email,
				name: Name,
				nickname: Nickname,
				password: Password,
			};
			axios.post("/api/v1/user/signup", body)
			.then((res) => {
			  console.log(res.data);
			  if(res.data.code == 200) {
				window.location.href = '/';
				return alert("회원 가입에 성공 하였습니다");
			  }
			  if(!res.data.code == 200) {
				return alert("회원 가입에 실패 하였습니다..");
			  }
			});
		  }
		}
	
	return (
		<>  
			{/* <!-- 회원가입 박스 --> */}
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
				<div style={{padding: '20px', textAlign: 'center', border: 'solid 1px rgba(219,219,219,0.1)', width: '300px', height: '400px', backgroundColor: 'white'}}>

					{/* <!-- 인스타 로고 --> */}
					<div style={{paddingBottom: '10px' }}><a class="navbar-brand" href="#"><img style={{width: '150px'}} src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img></a></div>
					
					<div style={{fontWeight: 'bold', color: 'gray', paddingBottom: '20px'}}>친구들의 사진과 동영상을 보려면 가입하세요. 자동 배포 테스트</div>

					{/* <!-- 이메일 --> */}
					<form onSubmit={onSubmitHandler}>
						<div>
							<div class="form-floating mb-3">
									<input type="email" class="form-control" id="email_input"  placeholder="name@example.com" style={{fontSize: '14px', height: '24px'}} value={Email} onChange={onEmailHandler}></input>
									<label for="email_input" style={{fontSize: '14px', padding: '4px 10px'}}>이메일 주소</label>
							</div>
						</div>

						{/* <!-- 성명 --> */}
						<div>
							<div class="form-floating mb-3">
									<input type="text" class="form-control" id="name_input" placeholder="name@example.com" style={{fontSize: '14px', height: '24px'}} value={Name} onChange={onNameHandler}></input>
									<label for="name_input" style={{fontSize: '14px', padding: '4px 10px'}}>성명</label>
							</div>
						</div>

						{/* <!-- 닉네임 --> */}
						<div>
							<div class="form-floating mb-3">
									<input type="text" class="form-control" id="nickname_input" placeholder="name@example.com" style={{fontSize: '14px', height: '24px'}} value={Nickname} onChange={onNickNameHandler}></input>
									<label for="nickname_input" style={{fontSize: '14px', padding: '4px 10px'}}>닉네임</label>
							</div>
						</div>

						{/* <!-- 비밀번호 --> */}
						<div>
							<div class="form-floating mb-3">
									<input type="password" class="form-control" id="password_input" placeholder="name@example.com" style={{fontSize: '14px', height: '24px'}} value={Password} onChange={onPasswordHandler}></input>
									<label for="floatingInput" style={{fontSize: '14px', padding: '4px 10px'}}>비밀번호</label>
							</div>
						</div>

						{/* <!-- 가입 버튼 --> */}
						<button id="join_button" class="btn btn-primary" style={{width: '100%'}}>가입</button>
					</form>
				</div>
				<div style={{padding: '20px', marginTop: '10px', textAlign: 'center', border: 'solid 1px rgba(219, 219,219, 0.1)', width: '300px', height: '70px', backgroundColor: 'white'}}>
					<div>계정이 있으신가요? <a href="/">로그인</a></div>
				</div>
			</div>
			
		</>
	);
	
};

export default SignUp;

