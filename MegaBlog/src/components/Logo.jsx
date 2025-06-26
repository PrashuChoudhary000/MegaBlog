import React from 'react';
import voice from "./image/voice.gif";  // Remove the curly braces {}

function Logo({ width = '100px' }) {
  return (
    <div>
      <img 
        src={voice} 
        alt="Voice GIF" 
        style={{ width }}  // Apply the width prop
      />
    </div>
  );
}

export default Logo;