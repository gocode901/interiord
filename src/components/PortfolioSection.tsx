"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { BeforeAfterComparison } from "@/components/BeforeAfterComparison";

const categories = ["All", "Residential", "Commercial", "Renovation"] as const;

const portfolioItems = [
  {
    title: "Monochrome Penthouse",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Executive Office Lounge",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Heritage Villa Refresh",
    category: "Renovation",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Minimal Family Residence",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Luxury Retail Experience",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Boutique Apartment Upgrade",
    category: "Renovation",
    image:
      "https://images.unsplash.com/photo-1613545325268-9265e1609167?auto=format&fit=crop&w=1200&q=80",
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="section-space">
      <div className="container-shell">
        <AnimatedReveal>
          <h2 className="font-serif text-3xl md:text-4xl">Curated Portfolio</h2>
          <p className="mt-4 max-w-2xl text-black/70">
            A refined collection of residential and commercial interiors designed to feel timeless,
            functional, and deeply personal.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.05} className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-luxe-gold bg-luxe-gold text-white"
                  : "border-black/15 bg-white hover:border-luxe-gold hover:text-luxe-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <AnimatedReveal key={item.title} delay={index * 0.04}>
              <article className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-black/50">{item.category}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <AnimatedReveal>
            <BeforeAfterComparison
              beforeSrc="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
              afterSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury living room renovation"
            />
          </AnimatedReveal>

          <AnimatedReveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-black shadow-soft">
              <div className="aspect-video">
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="none"
                  poster="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"
                >
                  <source
                    src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="bg-white p-5">
                <h3 className="text-lg font-semibold">Studio Walkthrough</h3>
                <p className="mt-2 text-sm text-black/70">
                  View how we shape space, light, texture, and flow in a complete project cycle.
                </p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
