function Sentiment({ sentimentPair }) {
	return (
		<>
			<p className="labelName">{sentimentPair.sentiment}</p>
			<p className="labelCount">{sentimentPair.count}</p>
		</>
	);
}

export default Sentiment;
