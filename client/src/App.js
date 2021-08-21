import React, { useCallback, useState } from "react";
import "./App.css";
import { Section1, Section2 } from "./Sections";
// import axios from "axios";

function App() {
	const [section, setSection] = useState("1");
	const [section1Answers, setSection1Answers] = useState({});
	const handleSubmission = useCallback(async section2Answers => {
		const body = {
			section1Answers,
			section2Answers
		};
		await new Promise(resolve => resolve({ data: "Thank you!" }));
		// await axios.post("mockedAPI", body)
		setSection("3");
    console.log(body)
	},[section1Answers]);
	return (
		<div className="App">
			{section === "1" && (
				<Section1
					next={answers => {
						setSection1Answers(answers);
						setSection("2");
					}}
				/>
			)}
			{section === "2" && (
				<Section2 back={() => setSection("1")} next={handleSubmission} />
			)}
			{section === "3" && <h1>Your answers are submitted successfully!</h1>}
		</div>
	);
}

export default App;
