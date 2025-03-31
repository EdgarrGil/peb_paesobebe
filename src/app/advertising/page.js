"use client";
import { useState } from 'react';

export default function AdvertisingPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    budget: '',
    campaignDetails: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Advertising form submitted:', formData);
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        budget: '',
        campaignDetails: '',
      });
    }, 3000);
  };

  return (
    <div className="bg-[var(--background)] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[var(--text)] mb-4">ADVERTISING OPPORTUNITIES</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Partner with PaEsoBebe to reach our engaged Latin urban community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--background-alt)] p-6 rounded-sm shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Why Advertise With Us?</h2>
            <ul className="space-y-4 text-[var(--text-secondary)]">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Targeted Latin urban audience</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>High engagement rates</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Multiple advertising formats</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Flexible campaign options</span>
              </li>
            </ul>
          </div>

          <div className="bg-[var(--background-alt)] p-6 rounded-sm shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Advertising Options</h2>
            <ul className="space-y-4 text-[var(--text-secondary)]">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Video pre-roll advertising</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Banner advertisements</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Sponsored content</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Custom partnership opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[var(--background-alt)] p-8 rounded-sm shadow-lg">
          {isSubmitted ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="text-2xl font-bold text-[var(--text)] mb-2">Request Received!</h3>
              <p className="text-[var(--text-secondary)]">Thank you for your interest in advertising with us. Our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-[var(--text)] font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full p-3 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-[var(--text)] font-medium mb-2">Contact Name</label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full p-3 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[var(--text)] font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[var(--text)] font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="website" className="block text-[var(--text)] font-medium mb-2">Website</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-3 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-[var(--text)] font-medium mb-2">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  >
                    <option value="">Select a range</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000+">$25,000+</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="campaignDetails" className="block text-[var(--text)] font-medium mb-2">Campaign Details</label>
                <textarea
                  id="campaignDetails"
                  name="campaignDetails"
                  value={formData.campaignDetails}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Tell us about your campaign goals, target audience, and preferred advertising formats..."
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold rounded-sm transition"
                >
                  SUBMIT ADVERTISING REQUEST
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 