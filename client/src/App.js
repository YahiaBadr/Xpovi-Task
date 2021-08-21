import React, { useState } from "react";
import "./App.css";
import {Section1, Section2} from "./Sections";

function App() {
  const [section, setSection] = useState("1")
	return (
		<div className="App">
			{section === "1" && <Section1 next={() => setSection("2")}/> }
			{section === "2" && <Section2 back={() => setSection("1")} next={() => setSection("3")}/> }
		</div>
	);
}

export default App;
