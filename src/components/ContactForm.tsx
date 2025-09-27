// src/components/ContactForm.tsx
'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      {/* --- Name and Email Inputs (No changes here) --- */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-first-name">Name</label>
          <input className="appearance-none block w-full bg-gray-800 text-gray-200 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-red-500" id="grid-first-name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-email">Email</label>
          <input className="appearance-none block w-full bg-gray-800 text-gray-200 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-red-500" id="grid-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
      </div>
      
      {/* --- Message Textarea (No changes here) --- */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-message">Message</label>
          <textarea className="no-resize appearance-none block w-full bg-gray-800 text-gray-200 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-red-500 h-48 resize-none" id="grid-message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
      </div>
      
      <div className="md:flex md:items-center flex-col">
        <button className="w-full bg-red-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-red-700 transition duration-300 disabled:bg-gray-500" type="submit" disabled={status === 'Sending...'}>
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </form>
  );
};

export default ContactForm;