function Sentiment({ sentimentPair }) {
	return (
		<>
			<p>{sentimentPair.sentiment}</p>
			<p>{sentimentPair.count}</p>
		</>
	);
}

export default Sentiment;
