import Image from 'next/image';

export default function AboutHero() {
  return (
    <div className="relative bg-gray-900">
      {/* Background Image Section */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Team collaboration"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content Section */}
      <div className="relative py-24 sm:py-32 lg:py-40">
        <div className="container mx-auto px-6 sm:px-12 lg:px-16 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            Bringing People Together <br className="hidden sm:block" /> Through Shared Experiences
          </h1>
          <p className="mt-8 text-lg sm:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Since 2020, we've been creating unforgettable moments for groups across the UK, 
            connecting people through exciting activities and adventures.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-medium text-white hover:bg-indigo-500 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
