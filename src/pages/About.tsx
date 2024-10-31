import { Award, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#0072c6] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About SVGAC
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Dedicated to empowering communities and creating positive change
            across St. Vincent and the Grenadines.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-[#0072c6] mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To foster unity and harmony amongst members and people of St.
                Vincent and the Grenadines in Canada by promoting our heritage
                through cultural, educational and social activities for all
                those that enter our doors joining our family circle of
                Vincentians In this time of reconciliation, we believe it’s
                important we recognize that we are in Traditional Blackfoot
                Territory and give proper recognition and honour to the original
                Treaty 7 Nations of this Land. We acknowledge the Metis Nation
                of Alberta who share a deep connection to this land.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-[#0072c6] mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals working tirelessly to make a
              difference in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Candace Haniff-Elcock',
                role: 'Event Committe',
                image: 'public/stvbird.PNG',
              },
              {
                name: 'Cecelia John',
                role: 'Event Commity',
                image:
                  'public/stvbird.PNG',
              },
              {
                name: 'Lieber Morrison',
                role: 'Event Committe',
                image:
                  'public/stvbird.PNG',
              },
              {
                name: 'Sandra John Bacchu',
                role: 'Event Committe',
                image:
                  'public/stvbird.PNG',
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#0072c6]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
