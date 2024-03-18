import React from 'react';

const second_modal = () => {
	return (
		<>
            {/* <!-- 두번쨰 모달--> */} 
            <div id="second_modal" class="modal_overlay">
                <div class="modal_window">
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div style={{width: '40px'}}></div>
                        <div>
                            새 이미지 업로드
                        </div>
                        <div style={{width: '40px'}}>
                            <span class="modal_close material-icons-outlined">close</span>
                        </div>
                    </div>
                    <div style={{borderTop: 'solid 1px gray', display: 'flex', flexDirection: 'row'}}>
                        <div class="img_upload_space" style={{width: '500px', height: '540px',marginTop: '10px'}}>
                        </div>
                        <div style={{borderLeft: 'solid 1px gray', marginLeft: '3px'}}>
                            <div >
                                <textarea  style={{width: '276px', height: '400px'}} lass="form-control" id="input_feed_content" rows="5"></textarea>
                            </div>
                            <button id="feed_creat_button" type="button" class="btn btn-primary" style={{width: '100%'}}>
                                공유하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    }