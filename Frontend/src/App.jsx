import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="app-container"
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundSize: '100% 100%',
        backgroundPosition: '0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px',
      }}
      initial={{
        backgroundImage: `radial-gradient(
          18% 28% at 18% 71%, 
          #ffffff33 6%, 
          #073aff1a 100%
        ), 
        radial-gradient(70% 53% at 50% 50%, #73f2ff66 0%, #073aff33 100%), 
        radial-gradient(42% 53% at 34% 72%, #ffffffff 7%, #073aff33 100%), 
        radial-gradient(21% 37% at 90% 87%, rgb(198, 247, 225) 15%, #07a4ff33 100%), 
        radial-gradient(21% 37% at 72% 23%, #6dfff39c 24%, #073aff33 100%), 
        radial-gradient(35% 56% at 91% 74%, #8a4ffff5 9%, #073aff33 100%), 
        radial-gradient(74% 86% at 67% 38%, #6d8dfff5 24%, #073aff33 100%), 
        linear-gradient(125deg, rgb(78, 105, 255) 5%, #4c00fcff 100%)`
      }}
      animate={{
        backgroundImage: `radial-gradient(
          30% 40% at 50% 60%, 
          #a3c8ff33 10%, 
          #073aff33 100%
        ), 
        radial-gradient(60% 70% at 50% 50%, #73f2ff66 0%, #073aff33 100%), 
        radial-gradient(50% 60% at 34% 72%, #ffffffff 10%, #073aff33 100%), 
        radial-gradient(30% 40% at 80% 80%, rgb(198, 247, 225) 20%, #07a4ff33 100%), 
        radial-gradient(40% 50% at 72% 23%, #6dfff39c 20%, #073aff33 100%), 
        radial-gradient(60% 70% at 91% 74%, #8a4ffff5 10%, #073aff33 100%), 
        radial-gradient(80% 90% at 67% 38%, #6d8dfff5 30%, #073aff33 100%), 
        linear-gradient(135deg, rgb(78, 105, 255) 5%, #4c00fcff 100%)`
      }}
      transition={{
        duration: 12,
        ease: 'easeInOut',
        loop: Infinity,
        repeatDelay: 1,
        repeatType: 'loop',
      }}
    >
      {/* Content */}
      <motion.div
        className="content"
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: '3rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'inline-block',
          position: 'relative',
        }}
      >
        Hover over me
      </motion.div>

      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '25px',
          height: '25px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          pointerEvents: 'none',
          mixBlendMode: 'difference', 
          transition: 'transform 0.1s ease-out',
        }}
        animate={{
          x: cursorPosition.x - 20,
          y: cursorPosition.y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 20,
        }}
      />
    </motion.div>
  );
};

export default App;
