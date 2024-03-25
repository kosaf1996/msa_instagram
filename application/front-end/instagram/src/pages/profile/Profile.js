import React, {useState,useEffect, setData, fetchData} from 'react'; 
import '../../css/main/profile.css';
import axios from 'axios';


const Profile = () => {

	//사용자 정보 
	let session = sessionStorage.getItem("email")

	//Profile_Data
	const [profile, setProfile] = useState(null);


	//Profile_Data Call
	useEffect(() => {
	  const profileData = async () => {
  
		try {
		  const response = await axios.get('/api/v1/instagram/user?email='+ session);
		  setProfile(response.data);
  
		} catch (error) {
		  console.error('Error fetching data: ', error);
		}
	  };
		  
	  profileData();
	  
	  return () => {
	  };
	}, []);


	return (
	<>
		<nav class="navbar navbar-expand-lg navbar-light bg-light" style={{position: 'fixed', width: '100%'}}>
			<div class="container-fluid" style={{justifyContent: 'space-between',flexWrap: 'nowrap'}}>
				<a class="navbar-brand" href="/main"><img style={{width: '100px'}} src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/></a>
				<input class="form-control me-2" style={{width: '400px'}} type="search" placeholder="Search" aria-label="Search" />
				<div style={{display: 'flex'}}>
					<a href="/main" style={{color: 'black'}}><span class="material-icons">home</span></a>
					<span class="material-icons-outlined" id="nav_bar_add_box">add_box</span>
					<div class="dropdown">
						<a href="#" role="button"
						id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							<div class="box" style={{width: '25px', height: '25px'}}>
							<img class="profile" src="https://www.snsboom.co.kr/common/img/default_profile.png" />
							</div>
						</a>
					<ul style={{left: '-158px'}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<li><a class="dropdown-item" href="#">프로필</a></li>
						<li><hr class="dropdown-divider" /> </li>
						<li><a class="dropdown-item" href="/user/logout">로그아웃</a></li>
					</ul>
					</div>
				</div>
			</div>
		</nav>

		{/* <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center', paddingTop: '60px', backgroundColor: '#FAFAFA'}}>
			{profile.map((profile) => (
				<div>
					<div class="box" style={{width: '160px', height: '160px'}}>
						<img class="profile" src={"img/" + profile.Profile_Image}></img>
					</div>
				</div>
				<div style={{textAlign: 'left'}}>
					<div style={{display: 'flex', flexDirection: 'row', margin: '20px 0'}}>
						<div style={{fontSize: '26px', paddingRight: '30px'}}>{profile.Nickname}</div>
						<button id="button_profile_upload" style={{marginRight: '40px'}}>프로필 편집</button>
						<input id="input_fileupload" type="file" onchange="profile_upload()" name="profile" style={{display: 'none'}}></input>
						<span style={{marginRight: '40px'}} class="material-icons-outlined">settings</span>
					</div>
					<div style={{marginBottom: '20px'}}>게시물 게시물 건수 팔로워 222 팔로윙222</div>
					<div><b>{profile.Name}</b></div>
				</div>
			))}
		</div>
 */}

		<div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center', paddingTop: '60px', backgroundColor: '#FAFAFA' }}>
			{profile && (
				<div key={profile.id}> {/* 각각의 요소에 key 추가 */}
				<div className="box" style={{ width: '160px', height: '160px' }}>
					<img className="profile" src={"img/" + profile.Profile_Image} alt="Profile"></img>
				</div>
				<div style={{ textAlign: 'left' }}>
					<div style={{ display: 'flex', flexDirection: 'row', margin: '20px 0' }}>
					<div style={{ fontSize: '26px', paddingRight: '30px' }}>{profile.Nickname}</div>
					<button id="button_profile_upload" style={{ marginRight: '40px' }}>프로필 편집</button>
					<input id="input_fileupload" type="file" onchange="profile_upload()" name="profile" style={{ display: 'none' }}></input>
					<span style={{ marginRight: '40px' }} className="material-icons-outlined">settings</span>
					</div>
					<div style={{ marginBottom: '20px' }}>게시물 게시물 건수 팔로워 222 팔로윙222</div>
					<div><b>{profile.Name}</b></div>
				</div>
				</div>
			 )}
			</div>
		<div style={{borderTop: 'solid 1px rgba(50,50,50,1)', width: '100%'}}>
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '20px'}}>
				<div id="button_feed_list" style={{margin: '0 30px', display: 'flex',flexDirection: 'row',alignItems: 'center'}}><span class="material-icons-outlined">grid_on</span>내 게시물</div>
				<div id="button_like_list" style={{margin: '0 30px', display: 'flex',flexDirection: 'row',alignItems: 'center'}}><span class="material-icons-outlined">favorite_border</span>좋아요</div>
				<div id="button_bookmark_list" style={{margin: '0 30px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}><span class="material-icons-outlined">bookmark_border</span>북마크</div>
			</div>

		</div>



		<div id="feed_list" style={{width: '100%', minWidth: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '1000px'}}>
				{/* {% for feed in feed_list %} */}
					<div style={{width: '300px', height: '300px', margin: '10px 5px 0px 5px'}}>
						{/* <div><img style={{width: '300px', height: '300px', objectFit: 'cover'}} src="{% get_media_prefix %}{{ feed.image }}"/></div> */}
					</div>
				{/* {% endfor %} */}
			</div>
		</div>


		<div id="like_feed_list" style={{width: '100%', minWidth: '1000px', display: 'none', alignItems: 'center', justifyContent: 'center'}}>
			<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '1000px'}}>
				{/* {% for feed in like_feed_list %} */}
					<div style={{width: '300px', height: '300px', margin: '10px 5px 0px 5px'}}>
						{/* <div><img style={{width: '300px', height: '300px', objectFit: 'cover'}} src="{% get_media_prefix %}{{ feed.image }}"/> </div> */}
					</div>
				{/* {% endfor %} */}
			</div>
		</div>


		<div id="bookmark_feed_list" style={{width: '100%', minWidth: '1000px', display: 'none', alignItems: 'center', justifyContent: 'center'}}>
			<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '1000px'}}>
				{/* {% for feed in bookmark_feed_list %} */}
					<div style={{width: '300px', height: '300px', margin: '10px 5px 0px 5px'}}>
						{/* <div><img style={{width: '300px', height: '300px', objectFit: 'cover'}} src="{% get_media_prefix %}{{ feed.image }}"/> </div> */}
					</div>
				{/* {% endfor %} */}
			</div>
		</div>
	</>
	);
};

export default Profile;

