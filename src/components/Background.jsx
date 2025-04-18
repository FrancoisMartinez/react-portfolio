import React, { useState, useEffect } from 'react';
import styles from '../styles/Background.module.css';

const Background = () => {
  // Start at the center of the viewport.
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // The mouse container is positioned so that its center is at the mouse.
  const parentStyle = {
    transform: `translate(${mousePos.x}px, ${mousePos.y}px) translate(-50%, -50%)`,
  };

  return (
    <div className={styles.background}>
      <div className={styles.mouseContainer} style={parentStyle}>
        <div className={styles.orbitWrapper1}>
          <div className={styles.circle1}></div>
        </div>
        <div className={styles.orbitWrapper2}>
          <div className={styles.circle2}></div>
        </div>
      </div>
    </div>
  );
};

export default Background;
