import "./EventSyncPage.css";
import Event from "../components/Event";
import { useState, useEffect } from "react";
import AddEventButton from "../components/AddEventButton";
import axios from "../api/AxiosConfig";

function EventSyncPage() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios
			.get("/events")
			.then((response) => {
				setEvents(response.data);
			})
			.catch((error) => {
				console.error("Failed to fetch events ", error);
			});
	}, []);

	const addEvent = (newEvent) => {
		setEvents((prviousEvents) => [...prviousEvents, newEvent]);
	};

	return (
		<div className="mainContainer">
			<AddEventButton addEvent={addEvent} />
			{events.map((e) => (
				<Event event={e} />
			))}
		</div>
	);
}

export default EventSyncPage;
