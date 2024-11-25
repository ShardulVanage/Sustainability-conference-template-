// src/components/TawkTo.jsx
import { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    // Remove any existing Tawk.to script
    const existingScript = document.getElementById('tawkto-script');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and add new script
    const script = document.createElement('script');
    script.id = 'tawkto-script';
    script.async = true;
    script.src = 'https://embed.tawk.to/673f143b4304e3196ae649bd/1id76e275'; // Your Tawk.to URL
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Error handling
    script.onerror = () => {
      console.error('Failed to load Tawk.to script');
    };

    // Success handling
    script.onload = () => {
      console.log('Tawk.to script loaded successfully');
    };

    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      const scriptToRemove = document.getElementById('tawkto-script');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};

export default TawkTo;