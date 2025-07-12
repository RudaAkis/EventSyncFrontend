import { useEffect, useState } from "react";
import axios from "../api/AxiosConfig";
import Sentiment from "./Sentiment";
import "./SentimentBreakdown.css";

function SentimentBreakdownContainer({ eventId }) {
	const [sentiments, setSentiments] = useState([]);
	useEffect(() => {
		axios
			.get(`events/${eventId}/summary`)
			.then((response) => {
				setSentiments(response.data);
			})
			.catch((error) => {
				console.error("Failed to fetch sentinments ", error);
			});
	}, []);

	return (
		<div className="sentimentBreakdownContainer">
			<h2 className="sentimentHeading">Reviews</h2>
			{sentiments.length > 0 &&
				sentiments.map((sentiment) => (
					<Sentiment sentimentPair={sentiment} />
				))}
			{sentiments.length === 0 && (
				<h3 className="sentimentHeading">No reviews left</h3>
			)}
		</div>
	);
}

export default SentimentBreakdownContainer;
