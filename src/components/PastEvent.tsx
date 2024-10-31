import { Calendar } from 'lucide-react';

interface PastEventProps {
  title: string;
  date: string;
  description: string;
  images: string[];
}

export default function PastEvent({ title, date, description, images }: PastEventProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2 text-[#0072c6]" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}