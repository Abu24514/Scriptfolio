const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="w-full max-w-7xl mx-auto">

        <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">

          {/* Brand */}
          <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <img
                className="h-10 w-auto"
                src="src/assets/scriptfolio-logo.svg"
                alt="Scriptfolio logo"
              />
              <span className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                Scriptfolio
              </span>
            </div>
            <div className="w-full max-w-52 h-px mt-8 bg-linear-to-r from-gray-50 via-gray-300 to-gray-50" />
            <p className="text-sm text-gray-500 mt-6 max-w-sm leading-relaxed">
              Build resumes that speak your story. AI-powered, ATS-optimized,
              and designed to impress every recruiter.
            </p>
          </div>

          {/* Product */}
          <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-gray-900 font-semibold">Product</h3>
            <div className="flex flex-col gap-2 mt-6">
              <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Templates</a>
              <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Pricing</a>
            </div>
          </div>

          {/* Company */}
          <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-gray-900 font-semibold">Company</h3>
            <div className="flex flex-col gap-2 mt-6">
              <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">About</a>
              <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Contact</a>
              <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Careers</a>
            </div>
          </div>

          {/* Social */}
          <div className="w-full md:w-[45%] lg:w-[20%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-gray-900 font-semibold">Follow Us</h3>
            <div className="flex gap-4 mt-6 text-gray-400">
              {/* X / Twitter */}
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px mt-16 mb-4 bg-linear-to-r from-gray-50 via-gray-400 to-gray-50" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Scriptfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <div className="w-px h-4 bg-gray-200" />
            <a href="#" className="text-xs text-gray-400 hover:text-indigo-600 transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;