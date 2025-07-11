import { useState } from "react";
import axios from "../api/AxiosConfig";
function FeedbackForm({ eventId, onSuccess }) {
	const [formData, setFormData] = useState({
		message: "",
	});

	const handleChange = (event) => {
		console.log(event.target);
		const { name, value } = event.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const feedbackPayload = { ...formData };

		axios
			.post(`/events/${eventId}/feedback`, feedbackPayload)
			.then((response) => {
				onSuccess();
			})
			.catch((error) => {
				console.log("Failed to post feedback ", error);
			});
	};

	return (
		<form>
			<label>Your Feedback</label>
			<textarea
				id="message"
				name="message"
				value={formData.message}
				onChange={handleChange}
				rows={5}
				cols={50}
				placeholder="Write your feedback here..."
				className="descriptionArea"
			/>
			<button type="submit" onClick={handleSubmit}>
				Submit
			</button>
		</form>
	);
}

export default FeedbackForm;
