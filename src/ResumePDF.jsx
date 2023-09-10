import React from "react";

const ResumePDF = () => {

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('/image/RESUME BENASIR.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = '/image/RESUME BENASIR.pdf';
				alink.click();
			})
		})
	}
	return (
		<>
			<center>
				<h3 className="text-danger fw-bold">Click on below button to download  Resume PDF file</h3>
				<button className="btn btn-primary m-3" onClick={onButtonClick}>
					Download PDF
				</button>
			</center>
		</>
	);
};

export default ResumePDF;
