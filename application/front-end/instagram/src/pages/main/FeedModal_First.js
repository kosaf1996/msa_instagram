import React from 'react';

const first_modal = () => {
	return (
		<>
             {/* <!-- 첫번쨰 모달--> */} 
            <div id="first_modal" class="modal_overlay">
                <div class="modal_window">
                    <div style={{borderBottom: 'solid 1px gray', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div style={{width: '40px'}}></div>
                        <div>
                            새 이미지 업로드
                        </div>
                        <div style={{width: '40px'}}>
                            <span class="modal_close material-icons-outlined">close</span>
                        </div>
                    </div>
                    <div class="img_upload_space" style={{width: '778px', height: '540px', marginTop: '10px'}}>

                    </div>
                </div>
            </div>
        </>
    )
    }