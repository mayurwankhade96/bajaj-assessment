import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef(null);

  const dismissHandler = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }

    if (isOpen) {
      dialogRef.current.show();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <dialog
      className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-[#000000BF] max-sm:items-end"
      ref={dialogRef}
      onClick={dismissHandler}
    >
      {children}
    </dialog>,
    document.body,
  );
};

export default Modal;
