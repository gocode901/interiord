import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { PortfolioSection } from "@/components/PortfolioSection";

const services = [
  {
    title: "Residential Interior Design",
    description: "Personalized layouts, material curation, and styling for premium homes.",
  },
  {
    title: "Commercial Design",
    description: "Workspaces and branded environments that increase comfort and productivity.",
  },
  {
    title: "Renovation & Space Makeover",
    description: "End-to-end transformation of existing properties with modern luxury finishes.",
  },
  {
    title: "Design Consultation",
    description: "Expert guidance on planning, budgeting, lighting, and furniture decisions.",
  },
];

const testimonials = [
  {
    quote:
      "Aurelia Interiors transformed our home into a refined, warm space that feels like a five-star retreat.",
    author: "Ananya Mehra",
    role: "Homeowner",
  },
  {
    quote:
      "From planning to handover, the process was seamless. The office now reflects our brand perfectly.",
    author: "Rahul Kapoor",
    role: "Founder, Vela Consulting",
  },
  {
    quote:
      "They balanced aesthetics and function beautifully. Every detail was thoughtful and premium.",
    author: "Sara D'Souza",
    role: "Boutique Hotel Partner",
  },
];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-luxe-cream/90 backdrop-blur">
        <div className="container-shell flex h-20 items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-wide">
            Aurelia Interiors
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-luxe-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-luxe-gold"
          >
            Get a Free Consultation
          </Link>
        </div>
      </header>

      <main>
        <section className="section-space pb-20 pt-20 md:pt-28">
          <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
            <AnimatedReveal>
              <p className="text-sm uppercase tracking-[0.25em] text-black/60">
                Premium Interior Design Studio
              </p>
              <h1 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                Designing Spaces
                <span className="block text-luxe-gold">That Reflect Your Story</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-black/70">
                Elegant, modern, and deeply personalized interiors for luxury homes and commercial
                spaces.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-luxe-gold"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="#portfolio"
                  className="rounded-full border border-black/20 bg-white px-7 py-3 text-sm font-medium transition hover:border-luxe-gold hover:text-luxe-gold"
                >
                  View Portfolio
                </Link>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-3 shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80"
                  alt="Luxury interior living room"
                  width={1400}
                  height={1600}
                  priority
                  className="h-[520px] w-full rounded-2xl object-cover"
                />
                <div className="gold-gradient absolute bottom-7 left-7 rounded-xl px-5 py-4 text-sm text-white shadow-lg">
                  120+ Projects Delivered
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </section>

        <section id="about" className="section-space border-y border-black/10 bg-white">
          <div className="container-shell grid gap-10 lg:grid-cols-3">
            <AnimatedReveal className="lg:col-span-2">
              <h2 className="font-serif text-3xl md:text-4xl">About Our Studio</h2>
              <p className="mt-5 text-black/70">
                We are a detail-driven interior design practice specializing in premium residential
                and commercial spaces. Our approach combines timeless aesthetics, smart
                functionality, and precise execution.
              </p>
              <p className="mt-4 text-black/70">
                From concept sketches to final styling, we lead every phase with clarity and craft
                so your space feels elevated, cohesive, and uniquely yours.
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08} className="grid gap-4">
              <div className="rounded-2xl border border-black/10 p-5">
                <p className="text-3xl font-semibold text-luxe-gold">12+</p>
                <p className="mt-2 text-sm text-black/70">Years of design excellence</p>
              </div>
              <div className="rounded-2xl border border-black/10 p-5">
                <p className="text-3xl font-semibold text-luxe-gold">95%</p>
                <p className="mt-2 text-sm text-black/70">Referral-based client growth</p>
              </div>
            </AnimatedReveal>
          </div>
        </section>

        <PortfolioSection />

        <section id="services" className="section-space bg-white">
          <div className="container-shell">
            <AnimatedReveal>
              <h2 className="font-serif text-3xl md:text-4xl">Services</h2>
              <p className="mt-4 max-w-2xl text-black/70">
                Strategy-led design offerings tailored for clients who value elegance, efficiency,
                and a seamless execution process.
              </p>
            </AnimatedReveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <AnimatedReveal key={service.title} delay={index * 0.05}>
                  <article className="rounded-2xl border border-black/10 bg-luxe-cream p-6 transition hover:-translate-y-1 hover:shadow-soft">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-black/70">{service.description}</p>
                  </article>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-space border-y border-black/10 bg-luxe-cream">
          <div className="container-shell">
            <AnimatedReveal>
              <h2 className="font-serif text-3xl md:text-4xl">Client Testimonials</h2>
            </AnimatedReveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <AnimatedReveal key={testimonial.author} delay={index * 0.05}>
                  <blockquote className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
                    <p className="text-black/80">&ldquo;{testimonial.quote}&rdquo;</p>
                    <footer className="mt-5">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-black/60">{testimonial.role}</p>
                    </footer>
                  </blockquote>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-space bg-white">
          <div className="container-shell grid gap-10 lg:grid-cols-2">
            <AnimatedReveal>
              <h2 className="font-serif text-3xl md:text-4xl">Let&apos;s Design Your Next Space</h2>
              <p className="mt-4 text-black/70">
                Tell us about your project goals, style, and timeline. We&apos;ll schedule a free
                consultation to plan your next steps.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:hello@aureliainteriors.com"
                    className="font-medium text-luxe-gold hover:underline"
                  >
                    hello@aureliainteriors.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+918369048303"
                    className="font-medium text-luxe-gold hover:underline"
                  >
                    +918369048303
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/918369048303"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-luxe-gold hover:underline"
                  >
                    Chat instantly
                  </a>
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.08}>
              <form className="rounded-2xl border border-black/10 bg-luxe-cream p-6 shadow-soft">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none ring-luxe-gold transition focus:ring"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none ring-luxe-gold transition focus:ring"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none ring-luxe-gold transition focus:ring"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Project Type (Home / Office)"
                    className="rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none ring-luxe-gold transition focus:ring"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Budget Range"
                  className="mt-4 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none ring-luxe-gold transition focus:ring"
                  required
                />
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="mt-4 w-full resize-none rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none ring-luxe-gold transition focus:ring"
                />
                <button
                  type="submit"
                  className="mt-5 w-full rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-luxe-gold"
                >
                  Book My Free Consultation
                </button>
              </form>
            </AnimatedReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-luxe-charcoal py-10 text-white">
        <div className="container-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-xl">Aurelia Interiors</p>
            <p className="mt-2 text-sm text-white/70">Premium design for extraordinary spaces.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-luxe-sand">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-3 text-sm text-white/80">
            <a href="#" className="hover:text-luxe-sand">
              Instagram
            </a>
            <a href="#" className="hover:text-luxe-sand">
              Pinterest
            </a>
            <a href="#" className="hover:text-luxe-sand">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/918369048303"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700"
      >
        WhatsApp Us
      </a>
    </>
  );
}
