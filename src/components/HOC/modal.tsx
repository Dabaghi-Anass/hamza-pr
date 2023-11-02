import ReactDOM from 'react-dom';
import { ExitIcon } from "@radix-ui/react-icons"
type ModalPropsType = { 
  onClose? : () => void,
  children : React.ReactElement | React.ReactElement[]
};
const Modal = ({ children , onClose } : ModalPropsType) => {
  const modalRoot = document.getElementById('modal-root') as Element;
  return ReactDOM.createPortal(
    <div className="modal bg-primary-300">
      <div className="modal-overlay"></div>
       <div className="modal-head">
       <button className='close-modal-btn hover:opacity-70 transition-all' onClick={onClose}>
         <ExitIcon className='w-6 h-6' />
       </button>
       </div>
      <div className="childs">
      {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
