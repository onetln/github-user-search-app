import PropType from 'prop-types';

function Modal({ children, open }) {
  if (!open) return null;
  return (
    <div className="modal modal-bottom sm:modal-middle modal-open">
      <div className="modal-box">{children}</div>
    </div>
  );
}

Modal.PropType = {
  children: PropType.children,
};

export default Modal;
