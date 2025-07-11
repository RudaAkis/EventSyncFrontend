import { useState } from "react";
import "./FeedbackButton.css";
import Modal from "./Modal";
import FeedbackForm from "./FeedbackForm";

function AddFeedbackButton({ eventId }) {
	const [showModal, setShowModal] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	const onSuccess = () => {
		setShowModal(false);
		setShowSuccessModal(true);
	};

	return (
		<>
			<button
				className="feedbackButton"
				onClick={() => setShowModal(true)}
			>
				Submit Feedback
			</button>

			{showModal && (
				<Modal
					onClose={() => setShowModal(false)}
					child={
						<FeedbackForm eventId={eventId} onSuccess={onSuccess} />
					}
				/>
			)}
			{showSuccessModal && (
				<Modal
					onClose={() => setShowSuccessModal(false)}
					child={
						<h1 className="successMessage">
							Feedback Submited Succesfully
						</h1>
					}
				/>
			)}
		</>
	);
}

export default AddFeedbackButton;
