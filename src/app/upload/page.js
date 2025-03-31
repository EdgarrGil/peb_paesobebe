"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function UploadPage() {
  const [formData, setFormData] = useState({
    videoLink: '',
    videoType: 'Music Video',
    title: '',
    description: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Video submitted successfully!');
  };

  return (
    <div className="bg-[var(--background)] min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-[var(--background-alt)] shadow-lg rounded-sm overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-extrabold text-center text-[var(--text)] mb-10">SUBMIT YOUR VIDEO</h1>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Video Link */}
              <div>
                <h2 className="text-xl font-bold text-[var(--text)] mb-3">Enter Video Link (URL)</h2>
                <p className="text-[var(--text-secondary)] mb-4">
                  If your video is already uploaded to a platform, simply paste the link here, or upload it to a platform like {' '}
                  <a href="https://sendspace.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                    Sendspace.com
                  </a>
                  {' '} and paste the link below.
                </p>
                <input
                  type="url"
                  name="videoLink"
                  value={formData.videoLink}
                  onChange={handleChange}
                  placeholder="Video Link (URL) *"
                  className="w-full p-4 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  required
                />
              </div>

              {/* Video Type */}
              <div>
                <h2 className="text-xl font-bold text-[var(--text)] mb-3">Video type</h2>
                <select
                  name="videoType"
                  value={formData.videoType}
                  onChange={handleChange}
                  className="w-full p-4 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] appearance-none cursor-pointer"
                >
                  <option value="Music Video">Music Video</option>
                  <option value="Short Film">Short Film</option>
                  <option value="Documentary">Documentary</option>
                  <option value="Vlog">Vlog</option>
                  <option value="Tutorial">Tutorial</option>
                  <option value="Live Performance">Live Performance</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Details */}
              <div>
                <h2 className="text-xl font-bold text-[var(--text)] mb-3">Details</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title *"
                    className="w-full p-4 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  />
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    rows="4"
                    className="w-full p-4 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  ></textarea>
                </div>
              </div>

              {/* Email */}
              <div>
                <h2 className="text-xl font-bold text-[var(--text)] mb-3">Email</h2>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="w-full p-4 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold text-lg rounded-sm transition duration-200 transform hover:scale-[1.02]"
              >
                SUBMIT VIDEO
              </button>
            </form>
            
            {/* Terms */}
            <p className="mt-6 text-sm text-[var(--text-secondary)]">
              By submitting your video, you confirm that you have all necessary rights to authorize our use and reuse of the audio and visual material it contains, and that your submission of the video is governed by our {' '}
              <Link href="/terms" className="text-[var(--primary)] hover:underline">
                On Line Video Submission Agreement
              </Link>, and that you have read and understood all terms and conditions of that Agreement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 