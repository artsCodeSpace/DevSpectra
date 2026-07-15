import type { Metadata } from "next";
import { InteractiveServices } from "@/components/services/InteractiveServices";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom web development, e-commerce, UI/UX & branding, and digital marketing services from DevSpectra.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-screen px-6 pt-20 md:pt-28">
        <InteractiveServices />
      </section>
    </>
  );
}
