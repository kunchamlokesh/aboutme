'use client';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 py-5 bg-opacity-85 backdrop-blur-lg border-b border-[#1e2535]">
      <div className="max-w-[980px] mx-auto px-8 flex items-center justify-between">
        <div className="font-display font-extrabold text-lg tracking-tighter">
          LK<span className="text-[#00d4ff]">.</span>
        </div>
        <ul className="hidden md:flex gap-7 list-none">
          {['about', 'expertise', 'platform', 'tools', 'delivery', 'experience', 'contact'].map(link => (
            <li key={link}>
              <a 
                href={`#${link}` === '#delivery' ? '#support' : `#${link}`}
                className="text-[#6b7591] hover:text-[#00d4ff] text-xs font-mono transition-colors duration-200 tracking-widest uppercase"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}