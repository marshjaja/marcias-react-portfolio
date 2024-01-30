import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.styles.css";

function Contact() {
	const form = useRef();
	const [emailStatus, setEmailStatus] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_rhu0srq",
				"template_dz0mcl1",
				form.current,
				"TNiTixSCHu75dtXS0"
			)
			.then(
				(result) => {
					console.log(result.text);
					setEmailStatus("Message was sent successfully");
					setTimeout(() => setEmailStatus(""), 3000);
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
					setEmailStatus("There was a problem when sending the message");
					setTimeout(() => setEmailStatus(""), 3000);
				}
			);
	};
	return (
		<>
			<form ref={form} onSubmit={sendEmail}>
				<div className="container contact-container">
					<div className="row contact-row">
						<div className="col-md-6 offset-md-3">
							<h3 className="header-text text-center mb-4">
								<span className="underline-text">Get in touch</span>
							</h3>
							<div className="mb-3">
								<label htmlFor="userName" className="form-label">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									id="userName"
									name="user_name"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="userEmail" className="form-label">
									Email
								</label>
								<input
									type="email"
									className="form-control"
									id="userEmail"
									name="user_email"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="messageText" className="form-label">
									Message
								</label>
								<textarea
									className="form-control"
									id="messageText"
									name="message"
									rows="3"
								></textarea>
							</div>
							<div className="">
								<div className="d-grid gap-2">
									<button
										className="btn btn-primary custom-button"
										type="button"
									>
										Button
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
}

export default Contact;
