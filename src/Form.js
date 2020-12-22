import React from 'react';
import './Form.css';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';


const Mail = styled.div`
@media screen and (min-width:1081px){
	.mail{
        padding-top: 50px;
        margin-left: 20em;
    }
}
`


export class Contactform extends React.Component {
	constructor(props) {
		super(props);
		this.state = { feedback: '', name: '', email: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleName = this.handleName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<Mail>
				
				<Form className="mail container">
				<h1>Contact Form</h1>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control 
							name="name"
							onChange={this.handleName}
							placeholder="Type your Name here"
							required
							value={this.state.name}
							style={{ width: '95%', height: '50px' }} />

					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Message</Form.Label>
						<Form.Control name="test-mailing"
							onChange={this.handleChange}
							placeholder="Type your message here"
							required
							value={this.state.feedback}
							style={{ width: '95%', height: '50px' }} />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>E-mail address</Form.Label>
						<Form.Control 
							name="email"
							onChange={this.handleEmail}
							placeholder="Type your mail Id here"
							required
							value={this.state.email}
							style={{ width: '95%', height: '50px' }} />
					</Form.Group>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
					<Button variant="primary" value="Submit" className="btnsubmit" onClick={this.handleSubmit}>
						Submit
	  				</Button>
				</Form>
			</Mail>
		)
	}

	handleChange(event) {
					this.setState({ feedback: event.target.value })
				}

	handleName(event) {
					this.setState({ name: event.target.value })
				}

	handleEmail(event) {
					this.setState({ email: event.target.value })
				}

	handleSubmit(event) {
		const templateId = 'portfolio';

		this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
	}

	sendFeedback(templateId, variables) {
					window.emailjs.send(
						'gmail', templateId,
						variables
					).then(res => {
						console.log('Email successfully sent!')
					})
						// Handle errors here however you like, or use a React error boundary
						.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
				}
}
