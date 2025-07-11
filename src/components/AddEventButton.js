import "./AddEventButton.css";
import Event from "./Event";
import { useState } from "react";
import Modal from "./Modal";
import EventForm from "./EventForm";
function AddEventButton({ addEvent }) {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<button
				className="addEventButton"
				onClick={() => setShowModal(true)}
			>
				Add Event
			</button>

			{showModal && (
				<Modal
					onClose={() => setShowModal(false)}
					child={<EventForm addEvent={addEvent} closeModal={closeModal}/>}
				/>
			)}
		</>
	);
}

export default AddEventButton;
