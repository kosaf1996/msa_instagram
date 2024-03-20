import React from 'react';
// import '../../css/main/main.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

    return (
        <>
            {isOpen && ( // 모달이 열렸을 때만 렌더링
                <div id="first_modal" className="modal-overlay" style={{display: 'flex', opacity: '1', visibility: 'visible'}}onClick={onClose}>
                    <div className="modal-window">
                        <div>
                            <div style={{ width: '40px' }}></div>
                            <div>새 이미지 업로드</div>
                            <div style={{ width: '40px' }}>
                                <span className="modal_close material-icons-outlined">close</span>
                            </div>
                        </div>
                        <div
                            className="img_upload_space"
                            style={{ width: '778px', height: '540px', marginTop: '10px' }}
                        ></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;


//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         {children}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;
