import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/data/categories';

export default function CategorySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl">
          Explore Popular Categories
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Discover our curated selection of trending categories tailored just for you.
        </p>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative block overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative aspect-w-3 aspect-h-2">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
