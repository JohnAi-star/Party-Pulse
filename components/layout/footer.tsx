import Link from 'next/link';
import { PartyPopper } from 'lucide-react';

const navigation = {
  activities: [
    { name: 'Team Building', href: '#' },
    { name: 'Stag Parties', href: '#' },
    { name: 'Hen Parties', href: '#' },
    { name: 'Corporate Events', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
  social: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Branding Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <PartyPopper className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold tracking-wide">PartyPulse</span>
            </Link>
            <p className="text-sm text-gray-400">
              Making memorable group experiences accessible to everyone.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Activities Section */}
              <div>
                <h3 className="text-sm font-semibold uppercase text-gray-300 tracking-wide">
                  Activities
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.activities.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Company Section */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold uppercase text-gray-300 tracking-wide">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Legal Section */}
              <div>
                <h3 className="text-sm font-semibold uppercase text-gray-300 tracking-wide">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Social Section */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold uppercase text-gray-300 tracking-wide">
                  Social
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.social.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PartyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
