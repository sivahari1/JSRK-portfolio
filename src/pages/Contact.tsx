import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://getform.io/f/bolmvlya', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: new FormData(e.target as HTMLFormElement),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 dark:from-pink-900 dark:via-rose-900 dark:to-orange-900">
        <div className="container mx-auto px-2 sm:px-4">
          <img src="/JSRK-portfolio/myphoto.jpg" alt="Dr. J. Siva Ramakrishna" className="mx-auto mb-6 w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-indigo-200 dark:border-indigo-600 shadow-lg" />
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or academic discussions?
            Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">sivaramj83@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+91 99856 88266</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">Institute of Aeronautical Engineering, Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send a Message</h2>
              {submitted ? (
                <div className="text-green-600 text-center font-semibold py-8">
                  Thank you for contacting me! I will get back to you soon.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  {error && <div className="text-red-600 text-center">{error}</div>}
                  <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors duration-200"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 