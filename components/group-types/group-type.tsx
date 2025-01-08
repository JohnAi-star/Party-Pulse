'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GroupType } from '@/lib/types/group-type';

type GroupTypeCardProps = {
  groupType: GroupType;
};

export default function GroupTypeCard({ groupType }: GroupTypeCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-background border border-border">
      {/* Image Section */}
      <div className="relative aspect-video">
        <Image
          src={groupType.image}
          alt={groupType.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <h3 className="absolute bottom-4 left-4 z-10 text-lg font-bold text-white drop-shadow-md">
          {groupType.name}
        </h3>
      </div>

      {/* Card Content */}
      <CardContent className="p-6 bg-gradient-to-b from-white to-muted/10">
        <p className="text-sm text-muted-foreground leading-relaxed">{groupType.description}</p>

        {/* Features List */}
        <div className="mt-4 space-y-3">
          {groupType.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-foreground">
              <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <Button asChild className="mt-6 w-full bg-primary text-white hover:bg-primary/90 transition">
          <Link href={`/activities?type=${groupType.id}`}>
            <span className="text-sm font-semibold">Browse Activities</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
