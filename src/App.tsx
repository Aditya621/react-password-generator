import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  const passwordRef = useRef<HTMLInputElement | null>(null);

  const passwordGenrator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '123456789';
    if (charAllowed) str += '()*&^%$#@!_|}{?<>';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, charAllowed, passwordGenrator]);

  const copyToClipBoard = useCallback(async () => {
    try {
      passwordRef.current?.select();
      await window.navigator.clipboard.writeText(password);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      setCopyStatus('Copy failed - check browser permissions or try manual copy');
      setTimeout(() => setCopyStatus(''), 3000);
    }
  }, [password]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Password Generator
        </h1>
        
        <div className="flex flex-col mb-6">
          <div className="flex">
            <input
              type="text"
              value={password}
              ref={passwordRef}
              readOnly
              className="w-full px-4 py-2 text-lg rounded-l-lg bg-gray-700 text-white focus:outline-none"
            />
            <button
              onClick={copyToClipBoard}
              className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors focus:outline-none"
            >
              Copy
            </button>
          </div>
          {copyStatus && (
            <span className="text-sm mt-2 text-center text-white">
              {copyStatus}
            </span>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-x-4">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-white min-w-[4rem]">
              Length: {length}
            </span>
          </div>

          <div className="flex items-center gap-x-4 text-white">
            <label className="flex items-center gap-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(prev => !prev)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              Numbers
            </label>

            <label className="flex items-center gap-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;