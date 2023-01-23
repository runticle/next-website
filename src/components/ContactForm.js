import Router from 'next/router';
import useForm from '../utils/useForm';
import Form from './styles/Form';

export default function ContactForm() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: '',
    message: '',
    email: '',
    subject: '',
  });

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();

        window.alert("Thanks! This didn't actually send but it will soon!")

        // setup twilio

        clearForm();
      }}
    >
      <fieldset>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            required
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={inputs.email}
            required
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="subject">
          Subject
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={inputs.subject}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={inputs.message}
            required
            onChange={(e) => handleChange(e)}
          />
        </label>

        <button type="submit">Send Message</button>
      </fieldset>
    </Form>
  );
}
