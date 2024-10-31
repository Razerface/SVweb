import { useState } from 'react';
import { Lock } from 'lucide-react';

interface AdminAccessProps {
  onAdminAccess: (success: boolean) => void;
}

export default function AdminAccess({ onAdminAccess }: AdminAccessProps) {
  const [showPinInput, setShowPinInput] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [error, setError] = useState('');

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPin === '1234') {
      onAdminAccess(true);
      setError('');
    } else {
      setError('Invalid PIN');
      setEnteredPin('');
    }
  };

  return (
    <div className="mb-8">
      {!showPinInput ? (
        <button
          onClick={() => setShowPinInput(true)}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors flex items-center"
        >
          <Lock className="h-5 w-5 mr-2" />
          Admin Access
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter PIN
              </label>
              <input
                type="password"
                maxLength={4}
                value={enteredPin}
                onChange={(e) => setEnteredPin(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-[#0072c6] text-white px-4 py-2 rounded hover:bg-[#005293] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}