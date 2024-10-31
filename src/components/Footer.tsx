import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0072c6] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-[#fcd116]" />
              <span className="font-bold text-xl">
                St Vincent and The Grenadines Association Of Calgary
              </span>
            </div>
            <p className="mt-2 text-sm">
              Making a difference in St. Vincent and the Grenadines, one
              community at a time.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#fcd116]" />
                <span>svgac@telus.net</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#fcd116]" />
                <span>+1 (403) 291-0144 </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#fcd116]" />
                <span>Calgary, Canada</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/volunteer"
                  className="hover:text-[#fcd116] transition-colors"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="/donate"
                  className="hover:text-[#fcd116] transition-colors"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-[#fcd116] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#005293]">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} VincyHope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
