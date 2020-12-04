import React from 'react';
import './Form.css';


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
  	<form className="test-mailing">
    	<h1>Contact Form</h1>
    	<div>
		<br />
		  <label>Name:</label>
		  <br />
		  <textarea
        	id="name"
        	name="name"
			onChange={this.handleName}
        	placeholder="Type your Name here"
        	required
        	value={this.state.name}
			style={{width: '70%', height: '50px'}}
        	
      	/>
		  <br />
		  <br />
		  <label>Message:</label>
		  <br />
		  <textarea
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Type your message here"
        	required
        	value={this.state.feedback}
			style={{width: '70%', height: '50px'}}
        	
      	/>
		  <br />
		  <br />
		  <label>Email:</label>
		  <br />
		  <textarea
        	id="email"
        	name="email"
			onChange={this.handleEmail}
        	placeholder="Type your mail Id here"
        	required
        	value={this.state.email}
			style={{width: '70%', height: '50px'}}
        
      	/>
    	</div>
		<br />
    	<input type="button" value="Submit" className="btnsubmit" onClick={this.handleSubmit} />
	  </form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleName(event) {
	  this.setState({name: event.target.value})
  }

  handleEmail(event) {
	  this.setState({email: event.target.value})
  }

  handleSubmit(event) {
	const templateId = 'portfolio';

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
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
