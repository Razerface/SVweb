import { Calendar, MapPin } from 'lucide-react';

interface UpcomingEventProps {
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

export default function UpcomingEvent({ 
  title, 
  date, 
  location, 
  image, 
  description 
}: UpcomingEventProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2 text-[#0072c6]" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-[#0072c6]" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}