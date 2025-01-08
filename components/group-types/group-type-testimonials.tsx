import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { groupTypeTestimonials } from '@/lib/data/group-type-testimonials';

type GroupTypeTestimonialsProps = {
  type: string;
};

export default function GroupTypeTestimonials({ type }: GroupTypeTestimonialsProps) {
  const testimonials = groupTypeTestimonials[type] || [];

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
        Success Stories
      </h2>
      <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-400">
        See how we’ve made a difference for our clients.
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 italic">
                &quot;{testimonial.content}&quot;
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
