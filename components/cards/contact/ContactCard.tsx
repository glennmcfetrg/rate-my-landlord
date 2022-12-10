import { useState } from 'react';

export interface IContactCard {}

const ContactCard: React.FC<IContactCard> = () => {
  // use state hooks to manage the form values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    // prevent the default form submission behavior
    event.preventDefault();
    // TODO: submit the form values to your backend
    // reset the form values
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <form
      className="w-full max-w-sm bg-zinc-800 text-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-slate-300 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Jane Doe"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-slate-300 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="jane.doe@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-slate-300 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Please enter your message here..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button onClick={handleSubmit} className="btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
export default ContactCard;
