import React, {useState} from 'react'; 
import '../../css/main/main.css';
import Modal from './Modal';

const Main = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
  

	return (
		<>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{position: 'fixed', width: '100%'}}>
                <div class="container-fluid" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                    <a class="navbar-brand" href="/main"><img style={{width: '100px'}} src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="profile"></img></a>
                    <input  class="form-control me-2" style={{width: '400px'}} type='search' placeholder='Search' aria-label='Search'></input>
                    
                    <div style={{display: 'flex'}}>
                        <a href="/main" style={{color: 'black'}}><span class="material-icons">home</span></a>
                        <span class="material-icons-outlined" id="nav_bar_add_box" onClick={openModal}>add_box</span>
                        {/* 모달 렌더링 */}
                            <Modal isOpen={modalOpen} onClose={closeModal}>
                            </Modal>
                        
                        <div class="dropdown">
                            <a href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="box" style={{width: '25px', height: '25px'}}>
                                {/* <img class="profile" src="{% get_media_prefix %}{{ user.profile_image }}"></img> */}
                                <img class="profile" src="img/default_profile.jpg" alt="profile"></img>

                                </div>
                            </a>
                        <ul style={{left:'-158px'}} class='dropdown-menu' aria-labelledby= 'dropdownMenuLink'>
                            <li><a class="dropdown-item" href="/profile">프로필</a></li>
                            <li><hr class="dropdown-divider"></hr> </li>
                            <li><a class="dropdown-item" href="/user/logout">로그아웃</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* <!-- 피드 리스트 --> */}
            <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center', paddingTop: '60px', backgroundColor: '#FAFAFA'}}>
                <div style={{width: '500px', height: '1000px', marginRight: '300px'}}>

                     {/* {% for feed in feed %} */}
                    {/* <!-- 피드 박스 --> */}
                    <div class="feed_box">
                        <div style={{border: 'solid 1px black', backgroundColor: 'white'}}>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',margin: '0 20px'}}>
                                {/* <!-- 유저 프로필 사진 --> */}
                                <div class="box" style={{width: '60px', height: '60px'}}>
                                    {/* <img class="profile" src="{% get_media_prefix %}{{ feed.profile_image }}"></img> */}
                                    {/* <img class="profile" src="{% get_media_prefix %}{{ feed.profile_image }}"></img> */}
                                </div>
								{/* <!-- https://www.snsboom.co.kr/common/img/default_profile.png --> */}
                                <div>
                                    {/* <!-- 유저 아이디 --> */}
                                    {/* <div>{{ feed.nickname }}</div> */}
									<div>feed.nickname</div>
                                </div>
                            </div>
                            {/* <!--피드 이미지 --><!--https://blog.kakaocdn.net/dn/o1KIw/btqu9mflPY6/rGk1mM3iugV1c6jj9Z3E80/img.jpg --> */}
                            <div></div>
							{/* <div><img style={{width: '100%'}} src="{% get_media_prefix %}{{ feed.image }}"> </img></div> */}

                            {/* <!-- 피드 이미지 하단 아이콘 --> */}
                            <div style={{margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <div>
									{/* <span id="favorite_{{ feed.id }}" feed_id="{{ feed.id }}" class="favorite material-icons-outlined" style={{color: 'red'}}>{% if feed.is_liked %}favorite{% else %}favorite_border{% endif %}</span> */}
                                    {/* <span class="favorite material-icons-outlined" style={{color: 'red'}}>if feed.is_liked favorite else favorite_border endif </span> */}
                                    <span class="material-icons-outlined">mode_comment</span>
                                    <span class="material-icons-outlined">send</span>
                                </div>
                            {/* <!-- 북마크 --> */}
                                <div>
                                    {/* <span id="bookmark_{{ feed.id }}" feed_id="{{ feed.id }}" class="bookmark material-icons-outlined"> */}
									{/* <span class="bookmark material-icons-outlined">

                                        if feed.is_marked bookmark else bookmark_border endif </span> */}
										{/* {% if feed.is_marked %}bookmark{% else %}bookmark_border{% endif %}</span> */}
                                </div>
                            </div>

                            {/* <!-- 좋아요 --> */}
                            {/* <div style={{margin: '0 20px',textAlign: 'left', fontSize: '14px'}}> 망고 외 {{ feed.like_count }}명이 좋아합니다. </div> */}
							<div style={{margin: '0 20px',textAlign: 'left', fontSize: '14px'}}> 망고 외  feed.like_count 명이 좋아합니다. </div>

                            {/* <!-- 작성자 글 --> */}
                            {/* <div style={{margin: '0 20px', textAlign: 'left', fontSize: '16px'}}><b>{{ feed.user_id }}</b> {{ feed.content }}</div> */}
							<div style={{margin: '0 20px', textAlign: 'left', fontSize: '16px'}}><b>feed.user_id</b> feed.content </div>
							

                            {/* <!-- 댓글 --> */}
                                {/* {% for reply in feed.reply_list %} */}
                                    {/* <div style={{margin: '0 20px', textAlign: 'left', fontSize: '14px'}}><b>{{ reply.nickname }}</b> {{ reply.reply_content }}</div> */}
									<div style={{margin: '0 20px', textAlign: 'left', fontSize: '14px'}}><b>reply.nickname</b> reply.reply_content</div>
                                {/* {% endfor %} */}
                            {/* <!-- 댓글 입력창 --> */}
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <input  type="email" class="form-control" style={{outline: 'none', boxShadow: 'none', border: 'none', borderTop: 'solid gray 1px', placeholder: '댓글'}}></input>
								{/* <input id="reply_{{ feed.id }}" type="email" class="form-control" style={{outline: 'none', boxShadow: 'none', border: 'none', borderTop: 'solid gray 1px', placeholder: '댓글'}}></input> */}
                                <div feed_id="{{ feed.id }}" class="upload_reply" style={{width: '50px', color: 'cornflowerblue'}}>
                                    게시
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* {% endfor %} */}
                </div>
                <div style={{width: '400px', height: '1000px', position: 'fixed', left: '62%'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 20px'}}>
                        {/* <!-- 유저 프로필 사진 --> */}
                        <div class="box" style={{width: '70px', height: '70px'}}>
                            <img class="profile" src="img/default_profile.jpg" alt="profile"></img>
                            {/* <img class="profile" src={% get_media_prefix %}{{ user.profile_image }}></img> */}
                        </div>
                        <div style={{marginLeft: '10px', textAlign: 'left'}}>
                            {/* <!-- 유저 아이디 --> */}
                            <div style={{fontWeight: 'bold'}}>
                                {/* {{ user.nickname }} */}
                                user.nickname
                            </div>
                            <div style={{color: 'gray'}}>
                                {/* {{ user.name }} */}
                                user.name
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div style={{fontWeight: 'bold', color: 'gray'}}>
                            회원님을 위한 추천
                        </div>
                        <div>
                            <a href="#!" style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>모두보기</a>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            {/* <!-- 추천인 프로필 사진 --> */}
                            <div class="box" style={{width: '35px', height: '35px'}}>
                                <img class="profile" src="https://www.snsboom.co.kr/common/img/default_profile.png" alt="profile"></img>
                            </div>
                            <div style={{marginLeft: '10px', textAlign: 'left'}}>
                                {/* <!-- 추천인 아이디 --> */}
                                <div style={{fontWeight: 'bold', fontSize: '14px'}}>
                                    user0444
                                </div>
                                <div style={{color: 'gray', fontSize: '14px'}}>
                                    추천 사유 여기
                                </div>
                            </div>
                        </div>

                        <div>
                            <a href="#!" style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '14px'}}>팔로우</a>
                        </div>
                    </div>
                    <div style={{marginTop: '50px', fontSize: '12px', color: 'gray', textAlign: 'left'}}>소개 도움말 홍보센터 API
                        <br/>개인정보처리방침 약관 위치 인기계정 해시태그 언어
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
		</>
	);
};

export default Main;


