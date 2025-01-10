import HeroSection from '@/components/home/hero-section';
import CategorySection from '@/components/home/category-section';
import FeaturesSection from '@/components/home/features-section';
import SignUpPage from './sign-up/page';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturesSection />
    </>
  );
}