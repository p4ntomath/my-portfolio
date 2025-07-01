import { useState } from 'react';
import KilluaSkateBoarding from '../assets/KilluaSkateBoarding.gif';
import hxhlogo from '../assets/hxhlogo.png';
import { databases, DATABASE_ID, COLLECTION_ID, ID } from '../lib/appwrite';

function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate that all fields are filled
        if (!formData.fullName.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
            setSubmitStatus('validation');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Create document in Appwrite database
            // The database trigger will automatically fire the email function
            await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {
                    name: formData.fullName.trim(),
                    email: formData.email.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim(),
                    createdAt: new Date().toISOString()
                }
            );

            setSubmitStatus('success');
            setFormData({
                fullName: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
      <div className="w-screen flex flex-col items-center justify-center min-h-screen pb-2">
        {/* Top instruction */}
        <div className="p-2 ">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg border border-gray-200">
            <p className="text-xs font-medium text-gray-700 text-center whitespace-nowrap">💬 Get In Touch</p>
            <p className="text-xs text-gray-600 text-center mt-1">Send me a message and let's connect!</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">
          {/* Killua Gif */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src={KilluaSkateBoarding}
              alt="Killua Skateboarding"
            />
          </div>
          
          {/* Contact Form */}
          <div className="p-3 w-screen lg:w-1/2 flex justify-center">
            <div className="bg-[#70668c] rounded-2xl p-6 shadow-2xl border-l-4 border-t border-r border-b border-slate-200 w-xl">
              <h2 className="text-xl font-bold text-white mb-4 text-center">Contact Me</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
              
              {submitStatus === 'validation' && (
                <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
                  Please fill in all fields before submitting.
                </div>
              )}
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-2 bg-[#ede2ec] text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d98ad] transition-colors placeholder-slate-400"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-2 bg-[#ede2ec] text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d98ad] transition-colors placeholder-slate-400"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-2 bg-[#ede2ec] text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d98ad] transition-colors placeholder-slate-400"
                  />
                </div>
                
                <div>
                  <textarea
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    required
                    className="w-full px-4 py-2 bg-[#ede2ec] text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d98ad] transition-colors placeholder-slate-400"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#9d98ad] ${
                      isSubmitting 
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                        : 'bg-slate-800 text-white hover:bg-slate-900'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-8 w-full max-w-6xl text-center">
          <div className="border-t border-gray-300 pt-4">
            <div className="flex items-center justify-center gap-4">
              <img 
                src={hxhlogo}
                alt="HxH Logo"
                className="h-10 w-auto"
              />
              <p className="text-gray-600 font-japanese font-bold">All rights reserved © Copyright</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Contact;
