import ReactDOM from 'react-dom';

const Portal = ({ isOpen, children }) => {

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="portal">
      {children}
    </div>,
    document.body,
  );
};

export default Portal;
