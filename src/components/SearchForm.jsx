import React from "react";

export default function Form({ loadWeather, error }) {
	return (
		<div
			style={{
				alignSelf: "center",
				width: "60%",
				display: "flex",
				flexDirection: "column"
			}}
		>
			<form onSubmit={loadWeather}>
				<input type="text" name="city" placeholder="City..." />
				<input type="text" name="country" placeholder="Country..." />
				<button type="submit">Get Weather</button>
			</form>
			<span className="weather-error">{error}</span>
		</div>
	);
}
