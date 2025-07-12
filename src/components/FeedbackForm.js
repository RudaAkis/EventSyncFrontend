import { useState } from "react";
import axios from "../api/AxiosConfig";
function FeedbackForm({ eventId, onSuccess }) {
	const [formData, setFormData] = useState({
		message: "",
	});

	const [errors, setErrors] = useState({});

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
				setErrors(error.response.data);
				console.log("Failed to post feedback ", error);
			});
	};

	return (
		<form className="form">
			<label className="formLabel">Your Feedback</label>
			<textarea
				id="message"
				name="message"
				value={formData.message}
				onChange={handleChange}
				rows={5}
				cols={50}
				placeholder="Write your feedback here..."
				className="formTextArea"
			/>
			{errors.message && <p className="errorMessage">{errors.message}</p>}

			<button type="submit" className="submitBtn" onClick={handleSubmit}>
				Submit
			</button>
		</form>
	);
}

export default FeedbackForm;
