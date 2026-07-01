import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroMountainAsset from "@/assets/hero-mountain.jpg.asset.json";
const heroMountain = heroMountainAsset.url;
import founderVerbier from "@/assets/founder-verbier.jpg";
import founderBern from "@/assets/founder-bern.jpg";
import product9 from "@/assets/product-9.png.asset.json";
import product10 from "@/assets/product-10.png.asset.json";
import product11 from "@/assets/product-11.png.asset.json";
import product12 from "@/assets/product-12.png.asset.json";
import product13 from "@/assets/product-13.png.asset.json";
import product14 from "@/assets/product-14.png.asset.json";
import product15 from "@/assets/product-15.png.asset.json";
import product16 from "@/assets/product-16.png.asset.json";
import product17 from "@/assets/product-17.png.asset.json";
import product18 from "@/assets/product-18.png.asset.json";
import product19 from "@/assets/product-19.png.asset.json";

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
    { label: "Enfoque", href: "#approach" },
    { label: "Fundadores", href: "#founders" },
    { label: "Marcas", href: "#brands" },
    { label: "Selección", href: "#selection" },
    { label: "Preguntas frecuentes", href: "#faq" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container-editorial flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-[15px] font-bold tracking-tighter">Patagonia SkiMo</span>
          <span className="hidden text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:inline">
            DESDE SUIZA
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
        <button className="md:hidden" aria-label="Menú" onClick={() => setOpen((v) => !v)}>
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
              <WhatsAppIcon /> Hablar por WhatsApp
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
              N°01 · De Suiza a Argentina
            </span>
          </div>
          <div className="col-span-12 md:col-span-6 md:text-right">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Invierno 2026 — Ski touring / Splitboard / Freeride
            </span>
          </div>
        </div>

        <h1 className="mt-10 max-w-[18ch] text-[44px] font-bold leading-[0.95] tracking-tighter sm:text-6xl md:mt-14 md:text-[104px] md:leading-[0.92]">
          Equipamiento de montaña europeo{" "}
          <span className="text-muted-foreground">para Patagonia.</span>
        </h1>

        <div className="mt-10 grid grid-cols-12 gap-6 md:mt-16">
          <p className="col-span-12 max-w-[52ch] text-[17px] leading-[1.5] text-foreground/80 md:col-span-7 md:text-[20px]">
            Vivimos en Suiza y pasamos el año buscando equipamiento premium de montaña en Europa para traer productos
            cuidadosamente seleccionados a Argentina.
          </p>
          <div className="col-span-12 flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-foreground px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-swiss-red"
            >
              <WhatsAppIcon /> Hablar por WhatsApp
            </a>
            <a
              href="#selection"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-foreground hover:text-background"
            >
              Ver la selección
            </a>
          </div>
        </div>
      </div>

      <div className="container-editorial pb-14 md:pb-20">
        <figure className="relative overflow-hidden">
          <img
            src={heroMountain}
            alt="Esquiador de ski tour ascendiendo una arista alpina al amanecer"
            width={1920}
            height={1280}
            className="aspect-[16/10] w-full object-cover md:aspect-[21/9]"
          />
          <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span>Fig. 01 — Cerro Fitz Roy, Patagonia</span>
            <span>Foto: Archivo Patagonia SkiMo</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function BeltStrip() {
  const items = ["De Suiza.", "A Argentina.", "Pasión por la montaña."];
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
    { k: "01", t: "Comprar el ski equivocado", d: "Elegir mal el equipamiento puede significar gastar miles en algo que no se adapta a tu estilo." },
    { k: "02", t: "Selección limitada", d: "Muchas marcas no llegan a Argentina. Los productos premium son difíciles de encontrar." },
    { k: "03", t: "Demasiada información", d: "Las especificaciones no reemplazan la experiencia. La gente no necesita más opciones — necesita mejor guía." },
  ];
  return (
    <section id="approach" className="border-b border-border">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="II" label="El problema" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[56px]">
            Comprar equipamiento de montaña no debería ser tan difícil.
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
    { k: "Buscar", d: "Monitoreamos oportunidades en toda Europa. Fabricantes, distribuidores, ateliers y tiendas de resorts." },
    { k: "Seleccionar", d: "Solo elegimos equipamiento que usaríamos nosotros — en nuestra próxima línea, en nuestra próxima arista." },
    { k: "Recomendar", d: "Ayudamos a cada cliente a elegir el equipo adecuado para su terreno, nivel y ambición." },
  ];
  return (
    <section className="border-b border-border bg-secondary">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="III" label="Nuestro método" />
          </div>
          <h2 className="col-span-12 max-w-[18ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[56px]">
            Ya hicimos la investigación.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-foreground bg-foreground md:mt-20 md:grid-cols-3">
          {cols.map((c, i) => (
            <div key={c.k} className="bg-secondary p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-swiss-red">Paso 0{i + 1}</span>
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
            <SectionLabel n="IV" label="Por qué confiar" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-[28px] font-bold leading-[1.1] tracking-tighter md:text-[52px]">
              Elegimos cada producto como si fuera para nuestro próximo viaje.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2 md:gap-12">
              <p className="text-[15px] leading-[1.65] text-foreground/75 md:text-[17px]">
                No armamos un catálogo primero. Armamos criterios primero. Cada producto entra a Patagonia SkiMo solo después de
                una evaluación cuidadosa — peso, materiales, rendimiento real y confiabilidad a largo plazo en la montaña.
              </p>
              <p className="text-[15px] leading-[1.65] text-foreground/75 md:text-[17px]">
                Eso significa que nuestras recomendaciones se basan en experiencia, no en marketing. Probamos lo que vendemos, esquiamos lo que
                recomendamos y respondemos por cada equipo que sale de nuestras manos.
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
    { img: founderVerbier, name: "Fundador", city: "Verbier, CH", copy: "Radicado en el corazón de los Alpes. Ski touring y freeride, año tras año en las mismas líneas y siempre buscando la siguiente." },
    { img: founderBern, name: "Fundador", city: "Bern, CH", copy: "Radicado en la capital suiza, cerca de los talleres y distribuidores. Splitboard, backcountry y largos acercamientos." },
  ];
  return (
    <section id="founders" className="border-b border-border bg-secondary">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="V" label="Quiénes somos" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[52px]">
            Dos amigos argentinos. Una pasión. Un punto de vista en los Alpes.
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
              <p className="text-[13px] font-bold uppercase tracking-[0.16em]">Suiza</p>
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
    { name: "Movement", note: "Esquís suizos" },
    { name: "Movement Boots", note: "Hecho en Italia" },
    { name: "Colltex", note: "Pieles suizas" },
    { name: "Marker", note: "Fijaciones" },
    { name: "PLUM", note: "Fijaciones francesas" },
    { name: "Mendiboard", note: "Splitboards españoles" },
  ];
  return (
    <section id="brands" className="border-b border-border">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="VI" label="Nuestras marcas" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[52px]">
            Una colección curada, no un catálogo.
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
    {
      img: product9.url,
      cat: "Esquís",
      name: "Movement Session 90",
      desc: "Un all-mountain versátil, pensado para esquiadoras que buscan agilidad en pista y confianza fuera de ella. Ligero, tolerante y divertido en cualquier condición.",
      specs: [
        { k: "Waist", v: "90 mm" },
        { k: "Largos", v: "155 / 163 / 171 cm" },
        { k: "Radio", v: "16 m @ 171" },
        { k: "Núcleo", v: "Paulownia + Karuba" },
      ],
      price: "USD 890",
    },
    {
      img: product10.url,
      cat: "Esquís",
      name: "Movement Session 95",
      desc: "El equilibrio perfecto entre ski de resort y freeride ligero. Estable a alta velocidad, con buena flotación en nieve fresca.",
      specs: [
        { k: "Waist", v: "95 mm" },
        { k: "Largos", v: "163 / 171 / 178 cm" },
        { k: "Radio", v: "17 m @ 178" },
        { k: "Núcleo", v: "Paulownia + fibra" },
      ],
      price: "USD 940",
    },
    {
      img: product11.url,
      cat: "Esquís",
      name: "Movement Session 95 W",
      desc: "Versión all-mountain de gran rango. Diseño elegante para quienes esquían todos los días y quieren un solo ski para todo.",
      specs: [
        { k: "Waist", v: "95 mm" },
        { k: "Largos", v: "163 / 170 / 177 cm" },
        { k: "Radio", v: "17 m @ 177" },
        { k: "Núcleo", v: "Karuba light" },
      ],
      price: "USD 940",
    },
    {
      img: product12.url,
      cat: "Esquís",
      name: "Movement Sequence 92",
      desc: "Un freeride reactivo y preciso. Pensado para líneas técnicas y nieve variable de la cordillera patagónica.",
      specs: [
        { k: "Waist", v: "92 mm" },
        { k: "Largos", v: "165 / 173 / 180 cm" },
        { k: "Radio", v: "18 m @ 180" },
        { k: "Núcleo", v: "Poplar + Titanal" },
      ],
      price: "USD 1.020",
    },
    {
      img: product13.url,
      cat: "Esquís",
      name: "Movement Sequence 98",
      desc: "Más ancho, más flotador. Ideal para días de nieve profunda sin renunciar a la agilidad en el ascenso.",
      specs: [
        { k: "Waist", v: "98 mm" },
        { k: "Largos", v: "170 / 178 / 185 cm" },
        { k: "Radio", v: "19 m @ 185" },
        { k: "Núcleo", v: "Poplar + Titanal" },
      ],
      price: "USD 1.080",
    },
    {
      img: product14.url,
      cat: "Esquís de travesía",
      name: "Movement Alp Tracks 95",
      desc: "Referencia del ski touring ligero. Construcción en carbono para ascensos largos y descensos comprometidos.",
      specs: [
        { k: "Waist", v: "95 mm" },
        { k: "Peso", v: "1.190 g @ 170" },
        { k: "Largos", v: "162 / 170 / 178 cm" },
        { k: "Núcleo", v: "Karuba + carbono" },
      ],
      price: "USD 1.240",
    },
    {
      img: product15.url,
      cat: "Splitboard",
      name: "Mendiboard Split",
      desc: "Splitboard artesanal español para acceder al backcountry patagónico. Perfil directional para máxima estabilidad en descenso.",
      specs: [
        { k: "Largos", v: "158 / 162 cm" },
        { k: "Perfil", v: "Directional Rocker" },
        { k: "Núcleo", v: "Álamo + bambú" },
        { k: "Base", v: "Sinterizada" },
      ],
      price: "USD 1.180",
    },
  ];
  return (
    <section id="selection" className="border-b border-border">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="VII" label="Selección destacada" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[52px]">
            Siete piezas. Cada una elegida a propósito.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="flex flex-col border-t border-foreground pt-6">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{p.cat}</span>
                <span className="h-1.5 w-1.5 bg-swiss-red" aria-hidden />
              </div>
              <div className="mt-6 overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-contain"
                />
              </div>
              <h3 className="mt-6 text-[22px] font-bold tracking-tighter md:text-[24px]">{p.name}</h3>
              <p className="mt-3 text-[14px] leading-[1.55] text-foreground/75">{p.desc}</p>

              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border pt-4 text-[12px]">
                {p.specs.map((s) => (
                  <div key={s.k} className="flex flex-col">
                    <dt className="font-semibold uppercase tracking-[0.14em] text-muted-foreground">{s.k}</dt>
                    <dd className="mt-0.5 font-medium">{s.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 flex items-baseline justify-between border-t border-foreground pt-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Precio</span>
                <span className="text-[20px] font-bold tracking-tighter">{p.price}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-swiss-red"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" /> Consultar
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
    { t: "Contanos dónde y cómo esquías.", n: "01" },
    { t: "Te recomendamos el equipo adecuado.", n: "02" },
    { t: "Reservá tu equipo.", n: "03" },
    { t: "Recibilo en Argentina.", n: "04" },
  ];
  return (
    <section className="border-b border-border bg-secondary">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="VIII" label="Cómo funciona" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[52px]">
            Cuatro pasos, una conversación honesta.
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
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-swiss-red">Paso {s.n}</span>
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
            <SectionLabel n="IX" label="Presencia local" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="max-w-[18ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:text-[52px]">
              Disponible en Argentina.
            </h2>
            <p className="mt-8 max-w-[52ch] text-[15px] leading-[1.65] text-foreground/75 md:text-[17px]">
              Patagonia SkiMo mantiene stock en Argentina. Colaboraciones Invierno 2026 en San Martín de los Andes y El
              Chaltén — para que puedas ver, probar y retirar tu equipo en el lugar, cerca de las líneas que querés hacer.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { c: "San Martín de los Andes", r: "Neuquén, AR" },
                { c: "El Chaltén", r: "Santa Cruz, AR" },
              ].map((p) => (
                <div key={p.c} className="border-t border-foreground pt-4">
                  <p className="text-[20px] font-bold tracking-tighter md:text-[24px]">{p.c}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {p.r} · Invierno 2026
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
    { q: "¿Cómo elijo mi ski?", a: "Contanos dónde esquías, cómo esquías y qué querés hacer la próxima temporada. Vinculamos terreno, estilo y peso — no categorías de marketing." },
    { q: "¿Qué tamaño me conviene?", a: "El tamaño depende de tu altura, peso, habilidad y terreno. Mandanos los datos por WhatsApp y te guiamos paso a paso." },
    { q: "Recién empiezo. ¿Qué necesito?", a: "Un equipo que crezca con vos: esquís permisivos, una bota confiable y una fijación que no te limite. Lo armamos alrededor de tu presupuesto." },
    { q: "¿Tienen stock en Argentina?", a: "Sí. Mantenemos un stock curado en Argentina y recibimos pedidos seleccionados directamente de Europa cada temporada." },
    { q: "¿Los productos tienen garantía?", a: "Cada producto lleva la garantía oficial del fabricante. Nosotros gestionamos el proceso con la marca por vos." },
    { q: "¿Me ayudan a elegir?", a: "De eso se trata. Iniciá una conversación por WhatsApp y nosotros nos ocupamos del resto." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-border bg-secondary">
      <div className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="X" label="Preguntas frecuentes" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[32px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[52px]">
            Preguntas que respondemos todas las semanas.
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
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-swiss-red">— Hablemos</span>
        <h2 className="mx-auto mt-8 max-w-[18ch] text-[36px] font-bold leading-[1] tracking-tighter md:text-[80px]">
          ¿Todavía no sabés qué equipo te conviene?
        </h2>
        <p className="mx-auto mt-8 max-w-[42ch] text-[16px] leading-[1.6] text-foreground/75 md:text-[19px]">
          Contanos dónde esquías. Te ayudamos a elegir el equipo adecuado.
        </p>
        <div className="mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-foreground px-8 py-5 text-[13px] font-semibold uppercase tracking-[0.16em] text-background transition-colors hover:bg-swiss-red"
          >
            <WhatsAppIcon className="h-5 w-5" /> Hablar por WhatsApp
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
              De Suiza. A Argentina. Pasión por la montaña.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Contacto</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a></li>
              <li><a href="mailto:hola@patagoniaskimo.com" className="hover:underline">hola@patagoniaskimo.com</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Ubicaciones</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>Verbier, Suiza</li>
              <li>Berna, Suiza</li>
              <li>San Martín de los Andes, AR</li>
              <li>El Chaltén, AR</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Patagonia SkiMo</span>
          <span>N°01 · Edición Invierno 2026</span>
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
      aria-label="Hablar por WhatsApp"
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
