import { useState } from 'react';
import { Plus } from 'lucide-react';

interface EventFormProps {
  onSubmit: (event: {
    type: 'past' | 'upcoming';
    title: string;
    date: string;
    location?: string;
    description: string;
    images: File[];
  }) => void;
}

export default function EventForm({ onSubmit }: EventFormProps) {
  const [eventType, setEventType] = useState<'past' | 'upcoming'>('upcoming');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      type: eventType,
      title,
      date,
      location: eventType === 'upcoming' ? location : undefined,
      description,
      images
    });

    // Reset form
    setTitle('');
    setDate('');
    setLocation('');
    setDescription('');
    setImages([]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Event Type
          </label>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value as 'past' | 'upcoming')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="past">Past Event</option>
            <option value="upcoming">Upcoming Event</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Event Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {eventType === 'upcoming' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#0072c6] text-white px-6 py-3 rounded-md hover:bg-[#005293] transition-colors flex items-center justify-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add {eventType === 'past' ? 'Past' : 'Upcoming'} Event
        </button>
      </form>
    </div>
  );
}