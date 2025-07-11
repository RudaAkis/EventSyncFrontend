import AddFeedbackButton from "./AddFeedbackButton";
import "./Event.css";
import SentimentButton from "./SentimentButton";
function Event({ event }) {
	return (
		<div className="eventContainer">
			<div>
				<h2>{event.name}</h2>
			</div>
			<div>
				<p className="descriptionParagraph">{event.description}</p>
			</div>
			<AddFeedbackButton eventId={event.id} />
			<SentimentButton eventId={event.id} />
		</div>
	);
}

export default Event;
