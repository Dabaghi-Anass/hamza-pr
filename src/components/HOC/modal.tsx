import ReactDOM from 'react-dom';
import { ExitIcon } from "@radix-ui/react-icons"
type ModalPropsType = { 
  onClose? : () => void,
  open : boolean,
  title? : string;
  children : React.ReactElement | React.ReactElement[]
};
const Modal = ({ children , title,open, onClose } : ModalPropsType) => {
  if(!open) return null;
  const modalRoot = document.getElementById('modal-root') as Element;
  return ReactDOM.createPortal(
    <div className="modal bg-primary-300">
      <div className="modal-overlay"></div>
       <div className="modal-head-overlay">
          <div className="modal-head">
              <span className="text-xl font-bold tracking-wider truncate">{title}</span>
              <button className='close-modal-btn hover:opacity-70 transition-all' onClick={onClose}>
                <ExitIcon className='w-6 h-6' />
              </button>
          </div>
       </div>
      <div className="childs">
      {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
