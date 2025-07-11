import "./Modal.css";

function Modal({ onClose, child }) {
	const stopPropagation = (e) => e.stopPropagation();

	return (
		<div className="modalBackground" onClick={onClose}>
			<div className="modalContainer" onClick={stopPropagation}>
				<button className="modalCloseButton" onClick={onClose}>
					✖
				</button>
				{child}
			</div>
		</div>
	);
}

export default Modal;
