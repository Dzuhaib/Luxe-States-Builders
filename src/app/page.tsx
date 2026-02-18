import { Hero } from "@/components/layout/Hero";
import { CompanyIntro } from "@/components/layout/CompanyIntro";
import { InstallmentPlan } from "@/components/layout/InstallmentPlan";
import { FeaturedApartments } from "@/components/layout/FeaturedApartments";
import { WhyChooseUs } from "@/components/layout/WhyChooseUs";
import { Testimonials } from "@/components/layout/Testimonials";
import { LocationSection } from "@/components/layout/LocationSection";
import { InstallmentCalculator } from "@/components/layout/InstallmentCalculator";
import { ScrollVelocity } from "@/components/ui/ScrollVelocity";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <div className="relative z-10 space-y-0">
        <ScrollVelocity
          texts={['EXCLUSIVE OFFERS', '0% INTEREST FOREVER']}
          velocity={50}
          className="text-white/10 italic font-black uppercase tracking-tighter"
        />
        <CompanyIntro />
        <InstallmentPlan />
        <FeaturedApartments />
        <ScrollVelocity
          texts={['HIGH ROI GUARANTEED', 'LUXURY REDEFINED']}
          velocity={60}
          className="text-white opacity-20 mt-12 font-black uppercase"
        />
        <InstallmentCalculator />
        <WhyChooseUs />
        <LocationSection />
        <Testimonials />
      </div>
    </div>
  );
}
