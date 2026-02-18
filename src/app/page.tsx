import { Hero } from "@/components/layout/Hero";
import { CompanyIntro } from "@/components/layout/CompanyIntro";
import { InstallmentPlan } from "@/components/layout/InstallmentPlan";
import { FeaturedApartments } from "@/components/layout/FeaturedApartments";
import { WhyChooseUs } from "@/components/layout/WhyChooseUs";
import { Testimonials } from "@/components/layout/Testimonials";
import { LocationSection } from "@/components/layout/LocationSection";
import { InstallmentCalculator } from "@/components/layout/InstallmentCalculator";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <div className="relative z-10 space-y-0">
        <CompanyIntro />
        <InstallmentPlan />
        <FeaturedApartments />
        <InstallmentCalculator />
        <WhyChooseUs />
        <LocationSection />
        <Testimonials />
      </div>
    </div>
  );
}
