import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
      setMsg('Please fill all fields.');
      return;
    }

    emailjs.send(
      'service_o8mz9f4', // <-- apna Service ID
      'template_izxdijg', // <-- tumhara Template ID
      {
        from_name: name,
        from_email: email,
        message: message,
      }
    )
    .then(() => {
      setMsg('✅ Message sent successfully!');
      form.reset();
    })
    .catch(() => {
      setMsg('❌ Failed to send message. Try again.');
    });
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="contact-row">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="you@domain.com" required />
          </div>
        </div>
        <div className="field">
          <label>Message</label>
          <textarea name="message" placeholder="Write a short message..." required></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
        <p className="note">{msg}</p>
      </form>
      <p>Or email me directly: <a href="mailto:ayushrai9142@gmail.com">ayushrai9142@gmail.com</a></p>
    </section>
  );
};

export default Contact;
