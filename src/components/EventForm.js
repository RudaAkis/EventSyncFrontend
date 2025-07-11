import { useState } from "react";
import instance from "../api/AxiosConfig";

function EventForm({ addEvent, closeModal }) {
	const [formData, setFormData] = useState({
		name: "",
		description: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const eventPayload = { ...formData };

		instance
			.post("/events", eventPayload)
			.then((response) => {
				const createdEvent = response.data;
				console.log(response.data);
				addEvent(createdEvent);
				closeModal();
			})
			.catch((error) => {
				console.error("Failed to post the event ", error);
			});
	};

	return (
		<form className="eventForm">
			<label className="formLabel">Event name</label>
			<input
				type="text"
				name="name"
				value={formData.name}
				onChange={handleChange}
				className="formInput"
				placeholder="Concert..."
			></input>
			<label className="formLabel">Event description</label>
			<textarea
				id="description"
				name="description"
				value={formData.description}
				onChange={handleChange}
				rows={5}
				cols={50}
				placeholder="Event Description..."
				className="eventDescription"
			/>
			<button type="submit" onClick={handleSubmit}>
				Submit
			</button>
		</form>
	);
}

export default EventForm;
