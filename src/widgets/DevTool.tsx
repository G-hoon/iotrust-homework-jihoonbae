import { useState } from 'react';
import { useDevToolStore } from '@/shared/store/useDevToolStore';

export function DevTool() {
  const [isOpen, setIsOpen] = useState(false);
  const { platform, setPlatform } = useDevToolStore();

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999 }}>
      <button
        onClick={togglePanel}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px'
        }}
      >
        🛠️
      </button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '0',
            width: '200px',
            padding: '10px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}
        >
          <h4>Dev Tool</h4>
          <div>
            <label>
              <input
                type="radio"
                name="platform"
                value="ios"
                checked={platform === 'ios'}
                onChange={() => setPlatform('ios')}
              />
              iOS
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="platform"
                value="android"
                checked={platform === 'android'}
                onChange={() => setPlatform('android')}
              />
              Android
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
