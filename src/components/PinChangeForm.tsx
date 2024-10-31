import { useState } from 'react';

interface PinChangeFormProps {
  onPinChange: (newPin: string) => void;
}

export default function PinChangeForm({ onPinChange }: PinChangeFormProps) {
  const [newPin, setNewPin] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.length === 4) {
      onPinChange(newPin);
      setNewPin('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <h3 className="text-xl font-bold mb-4">Change Admin PIN</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New PIN (4 digits)
          </label>
          <input
            type="password"
            maxLength={4}
            value={newPin}
            onChange={(e) => setNewPin(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#0072c6] text-white px-4 py-2 rounded hover:bg-[#005293] transition-colors"
        >
          Update PIN
        </button>
      </form>
    </div>
  );
}