
import Logo from './Logo';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <button className="text-white/80 hover:text-white transition-colors text-sm font-medium">
          Join waitlist →
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
