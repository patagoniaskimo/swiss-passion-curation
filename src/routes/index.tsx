import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroMountain from "@/assets/hero-mountain.jpg";
import founderVerbier from "@/assets/founder-verbier.jpg";
import founderBern from "@/assets/founder-bern.jpg";
import productSkis from "@/assets/product-skis.jpg";
import productBoots from "@/assets/product-boots.jpg";
import productSplitboard from "@/assets/product-splitboard.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/41000000000";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.4-.3zM12 2.2A9.8 9.8 0 002.2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4a9.8 9.8 0 0014.9-8.6A9.8 9.8 0 0012 2.2zm0 17.8c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1120 12a8 8 0 01-8 8z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <BeltStrip />
      <Problem />
      <Solution />
      <TrustEditorial />
      <Founders />
      <Brands />
      <Products />
      <HowItWorks />
      <LocalPresence />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Approach", href: "#approach" },
    { label: "Founders", href: "#founders" },
    { label: "Brands", href: "#brands" },
    { label: "Selection", href: "#selection" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container-editorial flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-[15px] font-bold tracking-tighter">Patagonia SkiMo</span>
          <span className="hidden text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:inline">
            EST. Switzerland
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-foreground bg-foreground px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-foreground"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <div className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]">
            <span className="block h-[1.5px] w-6 bg-foreground" />
            <span className="block h-[1.5px] w-6 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-editorial flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-[15px] font-medium">
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-foreground px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-background"
            >
              <WhatsAppIcon /> Talk on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="container-editorial pt-14 pb-10 md:pt-24 md:pb-16">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 flex items-center gap-3 md:col-span-6">
            <span className="inline-block h-2 w-2 bg-swiss-red" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              N°01 · From Switzerland to Argentina
            </span>
          </div>
          <div className="col-span-12 md:col-span-6 md:text-right">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Winter 2026 — Ski touring / Splitboard / Freeride
            </span>
          </div>
        </div>

        <h1 className="mt-10 max-w-[18ch] text-[44px] font-bold leading-[0.95] tracking-tighter sm:text-6xl md:mt-14 md:text-[104px] md:leading-[0.92]">
          European mountain equipment{" "}
          <span className="text-muted-foreground">for Patagonia.</span>
        </h1>

        <div className="mt-10 grid grid-cols-12 gap-6 md:mt-16">
          <p className="col-span-12 max-w-[52ch] text-[17px] leading-[1.5] text-foreground/80 md:col-span-7 md:text-[20px]">
            We live in Switzerland and spend the year sourcing premium mountain equipment across Europe to bring
            carefully selected products to Argentina.
          </p>
          <div className="col-span-12 flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-foreground px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-swiss-red"
            >
              <WhatsAppIcon /> Talk on WhatsApp
            </a>
            <a
              href="#selection"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-foreground hover:text-background"
            >
              Browse the Catalog
            </a>
          </div>
        </div>
      </div>

      <div className="container-editorial pb-14 md:pb-20">
        <figure className="relative overflow-hidden">
          <img
            src={heroMountain}
            alt="Solitary ski tourer ascending an Alpine ridge at dawn"
            width={1920}
            height={1280}
            className="aspect-[16/10] w-full object-cover md:aspect-[21/9]"
          />
          <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span>Fig. 01 — Sunrise ascent, Verbier</span>
            <span>Photo: Patagonia SkiMo Archive</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function BeltStrip() {
  const items = ["From Switzerland.", "To Argentina.", "Passion for the mountains."];
  return (
    <section className="border-b border-border bg-secondary">
      <div className="container-editorial grid grid-cols-1 gap-8 py-10 md:grid-cols-3 md:gap-12 md:py-14">
        {items.map((t, i) => (
          <div key={t} className="flex items-baseline gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              0{i + 1}
            </span>
            <p className="text-[22px] font-bold tracking-tighter md:text-[28px]">{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    { k: "01", t: "Buying the wrong ski", d: "Choosing the wrong equipment can mean spending thousands on something that doesn't fit your style." },
    { k: "02", t: "Limited selection", d: "Many brands never reach Argentina. Premium products are difficult to find." },
    { k: "03", t: "Too much information", d: "Specifications don't replace experience. People don't need more options — they need better guidance." },
  ];
  return (
    <section id="approach" className="border-b border-border">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="II" label="The Problem" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[56px]">
            Buying mountain equipment shouldn't be this difficult.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3 md:gap-12">
          {items.map((it) => (
            <article key={it.k} className="border-t border-foreground pt-6">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Fig. {it.k}</span>
                <span className="h-1.5 w-1.5 bg-swiss-red" aria-hidden />
              </div>
              <h3 className="mt-5 text-[22px] font-bold tracking-tighter md:text-[26px]">{it.t}</h3>
              <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.55] text-foreground/75">{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const cols = [
    { k: "Search", d: "We constantly monitor opportunities across Europe. Manufacturers, distributors, ateliers, resort dealers." },
    { k: "Select", d: "We only choose equipment we would personally use — on our own next line, on our own next ridge." },
    { k: "Recommend", d: "We help every customer choose the right setup for their terrain, level and ambition." },
  ];
  return (
    <section className="border-b border-border bg-secondary">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="III" label="Our Method" />
          </div>
          <h2 className="col-span-12 max-w-[18ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[56px]">
            We already did the research.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-foreground bg-foreground md:mt-20 md:grid-cols-3">
          {cols.map((c, i) => (
            <div key={c.k} className="bg-secondary p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-swiss-red">Step 0{i + 1}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{String(i + 1).padStart(2, "0")} / 03</span>
              </div>
              <h3 className="mt-8 text-[34px] font-bold tracking-tighter md:text-[44px]">{c.k}</h3>
              <p className="mt-6 max-w-[38ch] text-[15px] leading-[1.55] text-foreground/75">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustEditorial() {
  return (
    <section className="border-b border-border">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="IV" label="Why Trust Us" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-[28px] font-bold leading-[1.1] tracking-tighter md:text-[52px]">
              We choose every product as if it were for our own next trip.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2 md:gap-12">
              <p className="text-[15px] leading-[1.65] text-foreground/75 md:text-[17px]">
                We don't build a catalog first. We build criteria first. Every product enters Patagonia SkiMo only after
                careful evaluation — weight, materials, real-world performance, and long-term reliability on the mountain.
              </p>
              <p className="text-[15px] leading-[1.65] text-foreground/75 md:text-[17px]">
                That means our recommendations are based on experience, not marketing. We test what we sell, we ride what
                we recommend, and we stand behind every setup that leaves our hands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founders() {
  const founders = [
    { img: founderVerbier, name: "Founder", city: "Verbier, CH", copy: "Based in the heart of the Alps. Ski touring and freeride, year after year on the same lines and always looking for the next one." },
    { img: founderBern, name: "Founder", city: "Bern, CH", copy: "Based in the Swiss capital, closer to the workshops and distributors. Splitboard, backcountry, and long approaches." },
  ];
  return (
    <section id="founders" className="border-b border-border bg-secondary">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="V" label="Who We Are" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[52px]">
            Two Argentine friends. One passion. One vantage point on the Alps.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-2 md:gap-12">
          {founders.map((f) => (
            <article key={f.city} className="grid grid-cols-1">
              <img
                src={f.img}
                alt={`${f.name} — ${f.city}`}
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale"
              />
              <div className="mt-5 flex items-baseline justify-between border-t border-foreground pt-4">
                <span className="text-[13px] font-semibold uppercase tracking-[0.16em]">{f.name}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{f.city}</span>
              </div>
              <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.55] text-foreground/75">{f.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-foreground pt-8">
          <div className="grid grid-cols-12 items-center gap-4">
            <div className="col-span-5 md:col-span-3">
              <p className="text-[13px] font-bold uppercase tracking-[0.16em]">Switzerland</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">46.9° N</p>
            </div>
            <div className="col-span-2 md:col-span-6" aria-hidden>
              <div className="relative h-px w-full bg-foreground">
                <span className="absolute -top-[3px] left-0 block h-2 w-2 rounded-full bg-foreground" />
                <span className="absolute -top-[5px] left-1/2 block h-3 w-3 -translate-x-1/2 bg-swiss-red" />
                <span className="absolute -top-[3px] right-0 block h-2 w-2 rounded-full bg-foreground" />
              </div>
            </div>
            <div className="col-span-5 text-right md:col-span-3">
              <p className="text-[13px] font-bold uppercase tracking-[0.16em]">Argentina</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">40.4° S</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  const brands = [
    { name: "Movement", note: "Swiss skis" },
    { name: "Movement Boots", note: "Made in Italy" },
    { name: "Colltex", note: "Swiss skins" },
    { name: "Marker", note: "Bindings" },
    { name: "PLUM", note: "French bindings" },
    { name: "Mendiboard", note: "Spanish splitboards" },
  ];
  return (
    <section id="brands" className="border-b border-border">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="VI" label="Our Brands" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[52px]">
            A curated collection, not a catalog.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 border-t border-foreground md:mt-20 md:grid-cols-3">
          {brands.map((b, i) => (
            <div
              key={b.name}
              className="flex min-h-[180px] flex-col justify-between border-b border-r border-foreground p-6 last:border-r-0 md:min-h-[220px] md:p-10 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-6">
                <p className="text-[24px] font-bold tracking-tighter md:text-[32px]">{b.name}</p>
                <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{b.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const products = [
    { img: productSkis, cat: "Skis", name: "Movement Alp Tracks", spec: "Weight 1180 g · 85 mm waist · 162–178" },
    { img: productBoots, cat: "Boots", name: "Touring Boot Series", spec: "Walk mode · Grilamid shell · Made in Italy" },
    { img: productSplitboard, cat: "Splitboard", name: "Mendiboard Aparra", spec: "Poplar core · Sintered base · 158–164" },
  ];
  return (
    <section id="selection" className="border-b border-border">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="VII" label="Featured Selection" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[52px]">
            A short list. Every piece chosen on purpose.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          {products.map((p) => (
            <article key={p.name} className="flex flex-col">
              <div className="overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between border-t border-foreground pt-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{p.cat}</span>
                <span className="h-1.5 w-1.5 bg-swiss-red" aria-hidden />
              </div>
              <h3 className="mt-3 text-[22px] font-bold tracking-tighter md:text-[24px]">{p.name}</h3>
              <p className="mt-2 text-[13px] text-muted-foreground">{p.spec}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-swiss-red"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" /> Ask on WhatsApp
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-foreground px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-foreground hover:text-background"
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { t: "Tell us where and how you ski.", n: "01" },
    { t: "We recommend the right equipment.", n: "02" },
    { t: "Reserve your setup.", n: "03" },
    { t: "Receive it in Argentina.", n: "04" },
  ];
  return (
    <section className="border-b border-border bg-secondary">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="VIII" label="How It Works" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[52px]">
            Four steps, one honest conversation.
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-1 md:mt-20 md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`flex min-h-[200px] flex-col justify-between border-t border-foreground py-8 pr-6 md:py-10 ${
                i !== steps.length - 1 ? "md:border-r" : ""
              }`}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-swiss-red">Step {s.n}</span>
              <p className="mt-8 max-w-[22ch] text-[20px] font-bold tracking-tighter md:text-[22px]">{s.t}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LocalPresence() {
  return (
    <section className="border-b border-border">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="IX" label="Local Presence" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="max-w-[18ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:text-[52px]">
              Available in Argentina.
            </h2>
            <p className="mt-8 max-w-[52ch] text-[15px] leading-[1.65] text-foreground/75 md:text-[17px]">
              Patagonia SkiMo keeps stock in Argentina. Winter 2026 collaborations in San Martín de los Andes and El
              Chaltén — so you can see, try and pick up your setup on the ground, close to the lines you plan to ride.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { c: "San Martín de los Andes", r: "Neuquén, AR" },
                { c: "El Chaltén", r: "Santa Cruz, AR" },
              ].map((p) => (
                <div key={p.c} className="border-t border-foreground pt-4">
                  <p className="text-[20px] font-bold tracking-tighter md:text-[24px]">{p.c}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {p.r} · Winter 2026
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "How do I choose my ski?", a: "Tell us where you ski, how you ski, and what you want to do next season. We match terrain, style and weight — not marketing categories." },
    { q: "Which size should I buy?", a: "Sizing depends on your height, weight, skill and terrain. Send us the details on WhatsApp and we'll walk you through it." },
    { q: "I'm just getting started. What do I need?", a: "A setup that grows with you: forgiving skis, a reliable boot, a binding that won't hold you back. We'll build it around your budget." },
    { q: "Do you have stock in Argentina?", a: "Yes. We hold a curated stock in Argentina and receive selected orders directly from Europe every season." },
    { q: "Do your products have warranty?", a: "Every product carries the manufacturer's official warranty. We handle the process with the brand on your behalf." },
    { q: "Can you help me choose?", a: "That's the whole point. Start a WhatsApp conversation and we'll take it from there." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-border bg-secondary">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="X" label="FAQ" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[52px]">
            Questions we answer every week.
          </h2>
        </div>

        <div className="mt-14 md:mt-20">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="border-t border-foreground last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 py-6 text-left md:py-8"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[18px] font-bold tracking-tighter md:text-[24px]">{it.q}</span>
                  <span className="relative inline-block h-4 w-4 shrink-0" aria-hidden>
                    <span className="absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-foreground" style={{ opacity: isOpen ? 0 : 1 }} />
                    <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-foreground" />
                  </span>
                </button>
                {isOpen && (
                  <div className="grid grid-cols-[auto_1fr_auto] gap-6 pb-8">
                    <span aria-hidden />
                    <p className="max-w-[62ch] text-[15px] leading-[1.65] text-foreground/75 md:text-[16px]">{it.a}</p>
                    <span aria-hidden />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-b border-border">
      <div className="container-editorial py-24 text-center md:py-40">
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-swiss-red">— Talk to us</span>
        <h2 className="mx-auto mt-8 max-w-[18ch] text-[36px] font-bold leading-[1] tracking-tighter md:text-[80px]">
          Still not sure which setup is right for you?
        </h2>
        <p className="mx-auto mt-8 max-w-[42ch] text-[16px] leading-[1.6] text-foreground/75 md:text-[19px]">
          Tell us where you ski. We'll help you choose the right equipment.
        </p>
        <div className="mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-foreground px-8 py-5 text-[13px] font-semibold uppercase tracking-[0.16em] text-background transition-colors hover:bg-swiss-red"
          >
            <WhatsAppIcon className="h-5 w-5" /> Talk on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="container-editorial py-14">
        <div className="grid grid-cols-12 items-start gap-8">
          <div className="col-span-12 md:col-span-6">
            <p className="text-[20px] font-bold tracking-tighter md:text-[24px]">Patagonia SkiMo</p>
            <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              From Switzerland. To Argentina. Passion for the mountains.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a></li>
              <li><a href="mailto:hola@patagoniaskimo.com" className="hover:underline">hola@patagoniaskimo.com</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Locations</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>Verbier, Switzerland</li>
              <li>Bern, Switzerland</li>
              <li>San Martín de los Andes, AR</li>
              <li>El Chaltén, AR</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Patagonia SkiMo</span>
          <span>N°01 · Winter 2026 Edition</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Talk on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-foreground px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-background shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-colors hover:bg-swiss-red md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="h-4 w-4" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-swiss-red">{n}</span>
      <span className="h-px w-8 bg-foreground" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">{label}</span>
    </div>
  );
}
