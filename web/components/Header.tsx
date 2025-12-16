export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Baikal Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white flex items-center justify-center cursor-pointer p-1 md:p-1.5 border-2 border-gray-200">
                <img 
                  src="/images/baikal_logo_trans.png" 
                  alt="Baikal Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-bold text-gray-900 leading-tight">
                Baikal
              </span>
              <span className="text-[10px] md:text-xs text-gray-500 font-medium">
                Design System Generator
              </span>
            </div>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm xl:text-base">Features</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm xl:text-base">About</a>
          <a href="https://github.com" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm xl:text-base">GitHub</a>
        </nav>
        
        <div className="flex items-center gap-2 md:gap-3">
          <button className="px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg md:rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg text-sm md:text-base">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
