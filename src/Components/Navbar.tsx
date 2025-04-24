import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-full h-16 flex justify-center items-center  fixed top-0 left-0 z-10 bg-gray-900">
      <motion.div
        className="text-white text-[15px] md:gap-4 space-x-10 md:text-[18px] md:w-2/4 flex justify-evenly items-center md:h-[40px] h-[30px] rounded-full  w-full"
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, type: 'spring', bounce: 0.5 }}
      >
        {navItems.map(({ label, path }) => (
          <div key={path} className="relative flex flex-col items-center justify-center">
            <Link
              to={path}
              className={`font-semibold cursor-pointer hover:text-gray-400 transition-all duration-200 ease-in-out ${
                location.pathname === path ? 'font-bold text-purple-400' : ''
              }`}
            >
              {label}
            </Link>
            {location.pathname === path && (
              <motion.div
                layoutId="underline"
                className="w-full h-[2px] bg-white rounded-full mt-1"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Navbar;
