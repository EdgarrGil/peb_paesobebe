"use client";
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-700 to-purple-700 py-20 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Ready to Share Your Music with the World?
          </h2>
          
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            Join thousands of artists who are building their careers on paesobebe. Upload your music, connect with fans, and take your sound to the next level.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-700 hover:bg-indigo-50 font-medium px-8 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105">
              Create an Account
            </button>
            <button className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-medium px-8 py-3 rounded-lg transition-all">
              Learn More
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15K+</div>
              <div className="text-indigo-200 text-sm">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50M+</div>
              <div className="text-indigo-200 text-sm">Monthly Listeners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">200K+</div>
              <div className="text-indigo-200 text-sm">Tracks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 