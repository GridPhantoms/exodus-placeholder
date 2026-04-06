'use client';

import { useEffect } from 'react';

export default function ExodusComingSoon() {
  useEffect(() => {
    const rainContainer = document.getElementById('rain');
    if (!rainContainer) return;

    // Clear any old drops
    rainContainer.innerHTML = '';

    for (let i = 0; i < 140; i++) {
      const drop = document.createElement('div');
      drop.className = 'drop';

      const left = Math.random() * 100;
      const duration = Math.random() * 1.2 + 0.9;
      const delay = Math.random() * -10;

      drop.style.left = `${left}vw`;
      drop.style.animationDuration = `${duration}s`;
      drop.style.animationDelay = `${delay}s`;
      drop.style.opacity = (Math.random() * 0.6 + 0.4).toString();
      drop.style.height = `${Math.random() * 90 + 50}px`;

      rainContainer.appendChild(drop);
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          height: 100vh;
          background: linear-gradient(#0a001f, #1a0033);
          overflow: hidden;
          font-family: 'VT323', monospace;
          color: #ff00ff;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .grid {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image: 
            linear-gradient(rgba(255, 0, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1;
          pointer-events: none;
        }

        .rain {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 2;
        }

        .drop {
          position: absolute;
          width: 2px;
          height: 70px;
          background: linear-gradient(transparent, #ff00ff, #00ffff);
          opacity: 0.6;
          animation: fall linear infinite;
        }

        @keyframes fall {
          to { transform: translateY(100vh); }
        }

        .content {
          text-align: center;
          z-index: 10;
          padding: 50px 70px;
          border: 6px double #00ffff;
          background: rgba(10, 0, 30, 0.85);
          box-shadow: 
            0 0 25px #ff00ff,
            0 0 50px #00ffff,
            inset 0 0 40px rgba(255, 0, 255, 0.3);
          animation: flicker 1.5s infinite alternate;
        }

        h1 {
          font-size: 6.5vw;
          letter-spacing: 8px;
          text-transform: uppercase;
          color: #00ffff;
          text-shadow: 
            0 0 10px #00ffff,
            0 0 20px #00ffff,
            0 0 40px #ff00ff;
          margin-bottom: 35px;
          line-height: 1.05;
        }

        .line {
          font-size: 2.8vw;
          color: #ff00ff;
          letter-spacing: 4px;
          text-shadow: 0 0 15px #ff00ff;
          margin: 18px 0;
        }

        .scanlines {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 4px,
            rgba(255,255,255,0.06) 4px,
            rgba(255,255,255,0.06) 5px
          );
          pointer-events: none;
          z-index: 5;
          animation: scan 6s linear infinite;
        }

        @keyframes scan {
          0% { background-position: 0 0; }
          100% { background-position: 0 180px; }
        }

        .vignette {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: radial-gradient(circle at center, transparent 60%, rgba(0,0,0,0.75) 100%);
          z-index: 6;
          pointer-events: none;
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.93; }
        }
      `}</style>

      <div className="min-h-screen relative flex items-center justify-center">
        <div className="grid"></div>
        <div id="rain" className="rain"></div>
        <div className="scanlines"></div>
        <div className="vignette"></div>

        <div className="content">
          <h1>THE EXODUS BEGINS</h1>
          <div className="line">STANDBY FOR ACTIVATION</div>
        </div>
      </div>
    </>
  );
}