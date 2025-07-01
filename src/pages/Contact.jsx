import KilluaSkateBoarding from '../assets/KilluaSkateBoarding.gif';

function Contact() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">
          {/* Killua Gif */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src={KilluaSkateBoarding}
              alt="Killua Skateboarding"
            />
          </div>
          
          {/* Contact Form */}
          <div className="p-2 w-screen lg:w-1/2 flex items-center">
            <div className="bg-[#70668c] rounded-2xl p-6 shadow-2xl border-l-4 border-red-500 border-t border-r border-b border-slate-200 w-xl">
              <h2 className="text-xl font-bold text-white mb-4 text-center">Get In Touch</h2>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-[#ede2ec] text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d98ad]transition-colors placeholder-slate-400"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 bg-[#ede2ec] text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d98ad]transition-colors placeholder-slate-400"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 bg-[#ede2ec] text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d98ad]transition-colors placeholder-slate-400"
                  />
                </div>
                
                <div>
                  <textarea
                    rows="3"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 bg-[#ede2ec] text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d98ad]transition-colors placeholder-slate-400"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-slate-800  text-white rounded-lg hover:bg-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
