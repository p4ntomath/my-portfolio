import KilluaSkateBoarding from '../assets/KilluaSkateBoarding.gif';
import hxhlogo from '../assets/hxhlogo.png';

function Contact() {
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
          <div className="p-3 w-screen lg:w-1/2 flex items-center">
            <div className="bg-[#70668c] rounded-2xl p-6 shadow-2xl border-l-4 border-red-500 border-t border-r border-b border-slate-200 w-xl">
              <h2 className="text-xl font-bold text-white mb-4 text-center">Contact Me</h2>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 bg-[#ede2ec] text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d98ad] transition-colors placeholder-slate-400"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 bg-[#ede2ec] text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d98ad] transition-colors placeholder-slate-400"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 bg-[#ede2ec] text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d98ad] transition-colors placeholder-slate-400"
                  />
                </div>
                
                <div>
                  <textarea
                    rows="3"
                    placeholder="Message"
                    className="w-full px-4 py-2 bg-[#ede2ec] text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d98ad] transition-colors placeholder-slate-400"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-slate-800  text-white rounded-lg hover:bg-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9d98ad]"
                  >
                    Send Message
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
