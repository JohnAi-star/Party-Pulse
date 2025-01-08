import AboutHero from "@/components/about/about-hero";
import AboutMission from "@/components/about/about-mission";
import AboutStats from "@/components/about/about-stat";
import AboutTeam from "@/components/about/about-team";
import AboutTestimonials from "@/components/about/about-testimonials";
import AboutValues from "@/components/about/about-values";

export const metadata = {
  title: 'About Us | ActivityHub',
  description:
    'Learn about our mission to bring people together through amazing group experiences',
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto space-y-20 py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AboutHero />

        {/* Stats Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-16">
          <AboutStats />
        </section>

        {/* Mission Section */}
        <section className="bg-gray-50 rounded-xl shadow-lg p-8 md:p-16">
          <AboutMission />
        </section>

        {/* Values Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-16">
          <AboutValues />
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 rounded-xl shadow-lg p-8 md:p-16">
          <AboutTestimonials />
        </section>

        {/* Team Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-16">
          <AboutTeam />
        </section>
      </div>
    </div>
  );
}
