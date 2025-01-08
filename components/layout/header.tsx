'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, PartyPopper } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { name: 'Activities', href: '/activities' },
  { name: 'Locations', href: '/locations' },
  { name: 'Group Types', href: '/group-types' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-gray-50 to-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-gray-50/60 supports-[backdrop-filter]:to-white/30 shadow-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <PartyPopper className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg text-primary">PartyPulse</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-900 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search Button (Hidden on small screens) */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5 text-gray-700" />
          </Button>
          {/* Book Now Button (Hidden on small screens) */}
          <Button variant="default" className="shrink-0 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Book Now
          </Button>

          {/* Mobile Navigation Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/90 backdrop-blur-lg shadow-lg">
              <nav className="flex flex-col gap-6 p-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-800 transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-6 w-full bg-primary text-white hover:bg-primary-dark">
                  Book Now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
