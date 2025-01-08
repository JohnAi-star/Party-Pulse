import { features } from '@/lib/data/features';

export default function FeaturesSection() {
  return (
    <section className="border-t bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 tracking-tight sm:text-4xl">
          Why Choose Us
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600 sm:text-xl">
          Discover the features that set us apart and make us your ideal choice.
        </p>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="rounded-lg bg-white shadow-lg p-8 transition-transform transform hover:scale-105"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                {feature.name}
              </h3>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
