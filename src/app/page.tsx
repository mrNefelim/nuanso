import { Hero } from '@/components/sections/Hero';
import { PainPoints } from '@/components/sections/PainPoints';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Team } from '@/components/sections/Team';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <CaseStudies />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
} 