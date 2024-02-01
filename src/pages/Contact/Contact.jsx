import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import "./Contact.styles.css";

function Contact() {
	const form = useRef();
	const [emailStatus, setEmailStatus] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const isFormFilledOut = name && email && message;

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text);

					Swal.fire({
						icon: "success",
						title: "Success!",
						text: "Your message has been sent successfully.",
						timer: 3000,
						showConfirmButton: false,
					});

					setEmailStatus("Your message was sent successfully");
					setTimeout(() => setEmailStatus(""), 3000);
					e.target.reset();
					setName("");
					setEmail("");
					setMessage("");
				},
				(error) => {
					console.log(error.text);

					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "There was a problem sending your message.",
						timer: 3000,
						showConfirmButton: false,
					});
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
									onChange={(e) => setName(e.target.value)}
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
									onChange={(e) => setEmail(e.target.value)}
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
									rows="5"
									onChange={(e) => setMessage(e.target.value)}
								></textarea>
							</div>
							<div className="">
								<div className="d-grid gap-2">
									<input
										type="submit"
										value="Send"
										className="btn btn-primary custom-button"
										disabled={!isFormFilledOut}
									/>
								</div>
							</div>
							<div className="email-status-message">
								{emailStatus && <p>{emailStatus}</p>}
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
}

export default Contact;
