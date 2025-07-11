import { useState } from "react";
import "./SentimentButton.css";
import Modal from "./Modal";
import SentimentBreakdownContainer from "./SentimentBreakdownContainer";

function SentimentButton({ eventId }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button
				className="sentimentButton"
				onClick={() => setShowModal(true)}
			>
				See Review Scores
			</button>

			{showModal && (
				<Modal
					onClose={() => setShowModal(false)}
					child={<SentimentBreakdownContainer eventId={eventId} />}
				/>
			)}
		</>
	);
}

export default SentimentButton;
