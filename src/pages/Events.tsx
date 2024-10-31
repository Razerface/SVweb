import { useState, useEffect } from 'react';
import AdminAccess from '../components/AdminAccess';
import PinChangeForm from '../components/PinChangeForm';
import EventForm from '../components/EventForm';

interface PastEvent {
  id: number;
  title: string;
  date: string;
  images: string[];
  description: string;
}

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

export default function Events() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [pastEvents, setPastEvents] = useState<PastEvent[]>(() => {
    const saved = localStorage.getItem('pastEvents');
    return saved ? JSON.parse(saved) : [];
  });
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>(() => {
    const saved = localStorage.getItem('upcomingEvents');
    return saved ? JSON.parse(saved) : [];
  });

  // Save events to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('pastEvents', JSON.stringify(pastEvents));
  }, [pastEvents]);

  useEffect(() => {
    localStorage.setItem('upcomingEvents', JSON.stringify(upcomingEvents));
  }, [upcomingEvents]);

  const handleAdminAccess = (success: boolean) => {
    setIsAdmin(success);
  };

  const handlePinChange = (newPin: string) => {
    // In a real app, you would update the PIN in a secure way
    localStorage.setItem('adminPin', newPin);
    console.log('PIN updated to:', newPin);
  };

  const handleEventSubmit = (eventData: {
    type: 'past' | 'upcoming';
    title: string;
    date: string;
    location?: string;
    description: string;
    images: File[];
  }) => {
    if (eventData.type === 'past') {
      // Convert File objects to Data URLs for storage
      const imagePromises = eventData.images.map(file => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      });

      Promise.all(imagePromises).then(imageUrls => {
        const newPastEvent: PastEvent = {
          id: Date.now(),
          title: eventData.title,
          date: eventData.date,
          images: imageUrls,
          description: eventData.description
        };
        setPastEvents(prev => [...prev, newPastEvent]);
      });
    } else {
      // For upcoming events, store just the first image
      const reader = new FileReader();
      reader.onloadend = () => {
        const newUpcomingEvent: UpcomingEvent = {
          id: Date.now(),
          title: eventData.title,
          date: eventData.date,
          location: eventData.location || '',
          image: eventData.images.length > 0 
            ? reader.result as string
            : "https://images.unsplash.com/photo-1618477462146-050d2767eac4?auto=format&fit=crop&q=80",
          description: eventData.description
        };
        setUpcomingEvents(prev => [...prev, newUpcomingEvent]);
      };

      if (eventData.images.length > 0) {
        reader.readAsDataURL(eventData.images[0]);
      } else {
        // If no image provided, use default image
        const newUpcomingEvent: UpcomingEvent = {
          id: Date.now(),
          title: eventData.title,
          date: eventData.date,
          location: eventData.location || '',
          image: "https://images.unsplash.com/photo-1618477462146-050d2767eac4?auto=format&fit=crop&q=80",
          description: eventData.description
        };
        setUpcomingEvents(prev => [...prev, newUpcomingEvent]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Past Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={event.images[0]}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.date}</p>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <p className="text-gray-700 mb-4">{event.location}</p>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Admin Section */}
        <section className="mt-16">
          {!isAdmin ? (
            <AdminAccess onAdminAccess={handleAdminAccess} />
          ) : (
            <>
              <PinChangeForm onPinChange={handlePinChange} />
              <EventForm onSubmit={handleEventSubmit} />
            </>
          )}
        </section>
      </div>
    </div>
  );
}