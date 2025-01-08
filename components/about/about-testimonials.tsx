import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/data/testimonials';

export default function AboutTestimonials() {
  return (
    <div className="container py-12">
      {/* Header Section */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Hear it straight from those who love our products.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="relative overflow-hidden rounded-lg border border-muted shadow-md transition-transform hover:scale-105 hover:shadow-lg"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                {/* User Image */}
                <div className="relative h-14 w-14 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                {/* User Details */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              {/* Testimonial Content */}
              <p className="mt-4 text-sm text-muted-foreground italic">
                “{testimonial.content}”
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
