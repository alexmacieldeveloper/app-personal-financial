import React from 'react';

const WaveBackground: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          fill: '#005658', // Cor primária
        }}
      >
        <path d="M0,192L30,186.7C60,181,120,171,180,160C240,149,300,139,360,144C420,149,480,171,540,192C600,213,660,235,720,229.3C780,224,840,192,900,186.7C960,181,1020,203,1080,197.3C1140,192,1200,160,1260,144C1320,128,1380,128,1410,128L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default WaveBackground;
