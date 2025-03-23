import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    guestNames: '',
    dietaryRestrictions: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await emailjs.send(
        'service_khbdncg',
        'template_25314b3',
        {
          to_email: 'mipumorpi@tuta.io',
          from_name: formData.name,
          from_email: formData.email,
          guests: formData.guests,
          guest_names: formData.guestNames,
          attending: formData.attending,
          dietary_restrictions: formData.dietaryRestrictions,
          message: formData.message
        },
        'kZy2h4PCF84eus7t4'
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        guests: '1',
        attending: 'yes',
        guestNames: '',
        dietaryRestrictions: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-serif text-center mb-8">RSVP</h1>
          
          {status === 'success' ? (
            <div className="text-center">
              <h2 className="text-2xl font-medium text-green-600 mb-4">Thank you for your RSVP!</h2>
              <p className="text-gray-600">We look forward to celebrating with you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>

              <div>
                <label htmlFor="attending" className="block text-sm font-medium text-gray-700">
                  Will you be attending?
                </label>
                <select
                  id="attending"
                  name="attending"
                  required
                  value={formData.attending}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                >
                  <option value="yes">Yes, I will attend</option>
                  <option value="no">No, I cannot attend</option>
                </select>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                >
                  {[1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="guestNames" className="block text-sm font-medium text-gray-700">
                  Names of Additional Guests
                </label>
                <textarea
                  id="guestNames"
                  name="guestNames"
                  rows={2}
                  placeholder="Please list the names of all guests attending with you"
                  value={formData.guestNames}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                ></textarea>
              </div>

              <div>
                <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700">
                  Dietary Restrictions
                </label>
                <input
                  type="text"
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-rose-500 text-white py-3 px-4 rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Send RSVP'}
              </button>

              {status === 'error' && (
                <p className="text-red-600 text-center">
                  There was an error sending your RSVP. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RSVP;