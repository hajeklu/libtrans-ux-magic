
import React, { Suspense } from 'react';
import { Header } from "@/components/Header";
import { Skeleton } from "@/components/ui/skeleton";

const HeroSection = React.lazy(() => import("@/components/HeroSection"));
const ServicesSection = React.lazy(() => import("@/components/ServicesSection"));
const ContactSection = React.lazy(() => import("@/components/ContactSection"));

const SectionFallback = () => (
  <div className="w-full">
    <Skeleton className="h-96 w-full rounded-lg" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Suspense fallback={<SectionFallback />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
