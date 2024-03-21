
import React, { useState } from 'react';
import axios from 'axios';

// import '../../css/main/main.css';

const Modal = ({ isOpen, onClose }) => {
  // if (!isOpen) return null;

  const [uploadedImage, setUploadedImage] = useState("");

  // const [imageName, setImagename] = useState("");
  const [content, setContent] = useState("");



  //state Event 
  // const onImageHandler = (event) => {
  //   setImagename(event.currentTarget.value);
  // }
  // const onContentHandler = (event) => {
  //   setContent(event.currentTarget.value);
  // }
  const onContentHandler = (event) => {
    setContent(event.target.value);        
};

  ///////////////////////////////
  //         Modal             //
  ///////////////////////////////
  // const handleShare = () => {
  //   // 공유하기 버튼 클릭 시 모달 닫기
  //   onClose();
  // };

  const handleShare = async () => {
    if (uploadedImage) {
      // console.log(content)
      // console.log(imageName)
      try {
        // 업로드된 이미지를 서버에 저장하는 API 호출
        const response = await axios.post(
          '/api/v1/instagram/feed', 
          uploadedImage, // FormData를 전달
          { 
            headers: {
              'Content-Type': 'multipart/form-data' // multipart/form-data 형식으로 전송
            }
          }
        );
        console.log('Image saved successfully:', response.data);

        // 모달 닫기
        onClose();
      } catch (error) {
        console.error('Error saving image:', error);
      }
    }
};

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      // 모달 외부를 클릭한 경우에만 모달 닫기
      onClose();
    }
  };

  ///////////////////////////////
  //       Drag & Drop         //
  ///////////////////////////////
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    uploadImage(file);
  };

  const uploadImage = (file) => {

    //formData를 통해 이미지를 전송 
    const formData = new FormData();

    // Session
    let session = sessionStorage.getItem("email")
    console.log(session)
    //이미지 파일 추가
    formData.append('image', file);
    formData.append('content', content); 
    formData.append('email', session)

    // console.log("FORM")
    // console.log(content)
    // 이미지를 formData에 추가하고 상태 업데이트
    setUploadedImage(formData);

    // 이미지 미리보기
    const reader = new FileReader();
    reader.onload = () => {
      const imgElement = document.getElementById('uploaded-image');
      imgElement.src = reader.result;
    };
    reader.readAsDataURL(file);
  };


    return (
        <>
          {isOpen && (
            <form onSubmit={handleShare}>
                <div id="first_modal" class="modal-overlay" style={{display: 'flex', opacity: '1', visibility: 'visible'}} onClick={handleClickOutside}>
                    <div class="modal-window">
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div style={{width: '40px'}}></div>
                            <div>
                                새 이미지 업로드
                            </div>
                            <div style={{width: '40px'}}>
                                <span class="modal_close material-icons-outlined"onClick={onClose}>close</span>
                            </div>
                        </div>
                        <div style={{borderTop: 'solid 1px gray',display: 'flex', flexDirection: 'row'}}>


                            <div class="img_upload_space" style={{width: '500px', height: '540px', marginTop: '10px'}} onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
                              Feed 메모를 먼저 입력해야 정상적으로 업로드 됩니다.
                              <input type="file" accept="/public/img/*" style={{ display: 'none' }} />
                              <img id="uploaded-image"  style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </div>

                            <div style={{borderLeft: 'solid 1px gray', marginLeft: '3px'}}>
                                <div >
                                    <textarea  style={{width: '276px', height: '400px'}} lass="form-control" id="input_feed_content" rows="5" onChange={onContentHandler} ></textarea>
                                </div>
                                <button onClick={handleShare} id="feed_creat_button" type="button" class="btn btn-primary" style={{width: '100%'}}>
                                    공유하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
              </form>
          )}
        </>
    );
};

export default Modal;


