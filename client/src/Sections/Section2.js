import React, { useState, useMemo, useCallback } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Button, TextField } from "@material-ui/core";

function Section2(props) {
	const [answer1, setAnswer1] = useState("");
	const [answer2, setAnswer2] = useState("");
	const handleQuestion1 = useCallback(event => {
		setAnswer1(event.target.value);
	}, []);
	const handleQuestion2 = useCallback(event => {
		setAnswer2(event.target.value);
	}, []);
	const disabledNext = useMemo(() => {
		return !((answer1 === "Yes" && answer2 * 1 > 0) || answer1 === "No");
	}, [answer1, answer2]);
	return (
		<div>
			<h1>Section 2</h1>
			<FormControl>
				<h3>Did you have an investment?</h3>
				<FormControl component="fieldset">
					<RadioGroup
						aria-label="question1"
						name="question1"
						value={answer1}
						onChange={handleQuestion1}
					>
						<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
						<FormControlLabel value="No" control={<Radio />} label="No" />
					</RadioGroup>
				</FormControl>
				<TextField
					error={answer2 !== "" && answer2 * 1 <= 0}
					id="filled-basic"
					label="How much was the investment?"
					variant="filled"
					onChange={handleQuestion2}
					disabled={answer1 !== "Yes"}
					type="number"
				/>
				<div
					style={{
						marginTop: "60px",
						justifyContent: "space-between",
						display: "flex"
					}}
				>
					<Button
						variant="contained"
						color="primary"
						onClick={props.back}
						style={{ width: "49%" }}
					>
						Back
					</Button>
					<Button
						variant="contained"
						color="primary"
						disabled={disabledNext}
						onClick={props.next}
						style={{ width: "49%" }}
					>
						Submit
					</Button>
				</div>
			</FormControl>
		</div>
	);
}

export default Section2;
