import React, { useState, useMemo, useCallback } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";

function Section1(props) {
	const [answer1, setAnswer1] = useState("");
	const [answer2, setAnswer2] = useState("");
	const [answer3, setAnswer3] = useState("");
	const handleQuestion1 = useCallback(event => {
		setAnswer1(event.target.value);
	}, []);
	const handleQuestion2 = useCallback(event => {
		setAnswer2(event.target.value);
	}, []);
	const handleQuestion3 = useCallback(event => {
		setAnswer3(event.target.value);
	}, []);
	const disabledNext = useMemo(() => {
		return !(
			(answer1 === "B2B" && answer2 !== "") ||
			(answer1 === "B2C" && answer3 !== "") ||
			(answer1 === "Both" && answer2 !== "" && answer3 !== "")
		);
	}, [answer1, answer2, answer3]);
	return (
		<div>
			<h1>Section 1</h1>
			<FormControl>
				<h3>Is your business model B2C or B2B or Both?</h3>
				<FormControl component="fieldset">
					<RadioGroup
						aria-label="question1"
						name="question1"
						value={answer1}
						onChange={handleQuestion1}
					>
						<FormControlLabel value="B2C" control={<Radio />} label="B2C" />
						<FormControlLabel value="B2B" control={<Radio />} label="B2B" />
						<FormControlLabel value="Both" control={<Radio />} label="Both" />
					</RadioGroup>
				</FormControl>
				{(answer1 === "Both" || answer1 === "B2B") && (
					<>
						<h3 style={{ textAlign: "left" }}>
							Do you target all age brackets?
						</h3>
						<FormControl component="fieldset">
							<RadioGroup
								aria-label="question2"
								name="question2"
								value={answer2}
								onChange={handleQuestion2}
							>
								<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="No" control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>
					</>
				)}
				{(answer1 === "Both" || answer1 === "B2C") && (
					<>
						<h3 style={{ textAlign: "left" }}>Do you target all industries?</h3>
						<FormControl component="fieldset">
							<RadioGroup
								aria-label="question3"
								name="question3"
								value={answer3}
								onChange={handleQuestion3}
							>
								<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="No" control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>
					</>
				)}
				<Button
					variant="contained"
					color="primary"
					disabled={disabledNext}
					style={{ marginTop: "60px" }}
					onClick={props.next}
				>
					Next
				</Button>
			</FormControl>
		</div>
	);
}

export default Section1;
