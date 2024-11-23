import { useEffect } from "react";

// Inline styles for modal
const modalStyles = {
  overlay: {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  content: {
    background: "white",
    padding: "20px",

    width: "400px",
    textAlign: "center" as "center",
  },
  close: {
    position: "absolute" as "absolute",
    top: "10px",
    right: "10px",
    fontSize: "24px",
    cursor: "pointer",
  },
};

type modalProp = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  project: React.ReactNode;
};

const ProjectModal = ({ isOpen, setIsOpen, project }: modalProp) => {
  // Close modal when clicking outside of it

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if ((event.target as Element).classList.contains("modal")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div className="modal" style={modalStyles.overlay}>
          <div className="modal-content">
            <span
              className="close"
              onClick={() => setIsOpen(false)}
              style={modalStyles.close}
            >
              &times;
            </span>
            {project}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
