import me from '../assets/Praneeth.jpg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


function TypingText({ text, speed }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = speed || 105;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((name) => name + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);    
        }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return <p className="text-white text-[30px]">{displayedText}</p>;
}

function Home() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 space-y-6'>
      <motion.div
        className='w-[250px] h-[300px] bg-gradient-to-b rounded-full overflow-hidden shadow-2xl border-4 border-yellow-100'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 1, type: 'spring' }}
      >
        <motion.img
          src={me}
          alt="My Photo"
          className='w-full h-full object-cover p-2 rounded-full'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        />
      </motion.div>

      <TypingText text="Hii, I'm Praneeth" speed={100} />
    </div>
  );
}

export default Home;
