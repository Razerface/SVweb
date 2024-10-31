import { ArrowRight, Calendar, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/stvHome.png")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Building a Stronger St. Vincent Together
              </h1>
              <p className="text-xl mb-8">
                Join us in our mission to create positive change and empower
                communities across our beautiful islands.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#fcd116] text-[#0072c6] rounded-lg font-semibold hover:bg-[#e5bd14] transition-colors"
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the Home component remains the same */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Calendar className="h-12 w-12 text-[#0072c6] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
              <p className="text-gray-600">
                Join our community events and make a difference in someone's
                life.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-[#0072c6] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
              <p className="text-gray-600">
                Be part of our dedicated team of volunteers making change
                happen.
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="h-12 w-12 text-[#0072c6] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Support Us</h3>
              <p className="text-gray-600">
                Your donations help us continue our vital work in the community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#0072c6] mb-2">
                1000+
              </div>
              <div className="text-gray-600">People Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0072c6] mb-2">25+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0072c6] mb-2">20+</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0072c6] mb-2">100+</div>
              <div className="text-gray-600">Events Organized</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
