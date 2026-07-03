import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoUrl from "@/assets/patagonia-skimo-hero.png";
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
import product20 from "@/assets/product-20.png.asset.json";
import product21 from "@/assets/product-21.png.asset.json";
import brandMovement from "@/assets/brand-movement.png.asset.json";
import brandColltex from "@/assets/brand-colltex.png.asset.json";
import brandMarker from "@/assets/brand-marker.png.asset.json";
import brandPlum from "@/assets/brand-plum.png.asset.json";
import brandMendiboard from "@/assets/brand-mendiboard.png.asset.json";

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
      <Brands />
      <Products />
      <LocalPresence />
      <FAQ />
      <HowItWorks />
      <Solution />
      <Founders />
      <FinalCTA />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Productos", href: "#selection" },
    { label: "Marcas", href: "#brands" },
    { label: "Cómo funciona", href: "#how-it-works" },
    { label: "Preguntas frecuentes", href: "#faq" },
    { label: "Nosotros", href: "#about" },
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
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-12 gap-8 md:gap-6">
          <div className="col-span-12 md:col-span-5">
            <img
              src={logoUrl}
              alt="Patagonia SkiMo"
              width={1599}
              height={902}
              className="w-full object-contain"
            />
            <div className="mt-8 h-[2px] w-10 bg-swiss-red md:mt-12" aria-hidden />
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground leading-relaxed">
              DESDE SUIZA.
              <br />
              PARA ARGENTINA.
              <br />
              PASIÓN POR LA MONTAÑA.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <h1 className="max-w-[16ch] text-[36px] font-bold leading-[0.95] tracking-tighter sm:text-[44px] md:text-[60px] md:leading-[0.92]">
              Equipamiento
              <br />
              europeo para
              <br />
              <span className="text-muted-foreground">ski de travesía.</span>
            </h1>
            <p className="mt-6 max-w-[50ch] text-[15px] leading-[1.5] text-foreground/80 md:mt-8 md:text-[16px]">
              Esquís, fijaciones, pieles y splitboards seleccionados en Europa por esquiadores argentinos viviendo en Suiza.
            </p>
          </div>
        </div>
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
      <div className="container-editorial py-14 md:py-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="II" label="El problema" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[26px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[40px]">
            Comprar equipamiento de montaña no debería ser tan difícil.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-3 md:gap-10">
          {items.map((it) => (
            <article key={it.k} className="border-t border-foreground pt-5">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Fig. {it.k}</span>
                <span className="h-1.5 w-1.5 bg-swiss-red" aria-hidden />
              </div>
              <h3 className="mt-4 text-[18px] font-bold tracking-tighter md:text-[22px]">{it.t}</h3>
              <p className="mt-3 max-w-[42ch] text-[14px] leading-[1.55] text-foreground/75">{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const cols = [
    { k: "Buscar", d: "Monitoreamos oportunidades en toda Europa." },
    { k: "Seleccionar", d: "Solo elegimos equipamiento que usaríamos nosotros." },
    { k: "Recomendar", d: "Ayudamos a cada cliente a elegir el equipo adecuado." },
  ];
  return (
    <section id="method" className="border-b border-border bg-secondary">
      <div className="container-editorial py-12 md:py-16">
        <SectionLabel n="VIII" label="Nuestro método" />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cols.map((c, i) => (
            <div key={c.k} className="border-t border-foreground pt-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-swiss-red">Paso 0{i + 1}</span>
              <h3 className="mt-4 text-[22px] font-bold tracking-tighter">{c.k}</h3>
              <p className="mt-2 max-w-[38ch] text-[14px] leading-[1.5] text-foreground/75">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founders() {
  return (
    <section id="about" className="border-b border-border">
      <div className="container-editorial py-12 md:py-16">
        <SectionLabel n="IX" label="Quiénes somos" />
        <p className="mt-6 max-w-[70ch] text-[15px] leading-[1.65] text-foreground/80 md:text-[17px]">
          <span className="font-bold text-foreground">Patagonia SkiMo</span> nace de dos amigos argentinos que viven en Suiza.
          Pasamos el año buscando el mejor equipamiento de montaña en Europa para traerlo a Argentina.
          Esquiamos lo que recomendamos y respondemos por cada equipo.
        </p>
      </div>
    </section>
  );
}

function Brands() {
  const brands = [
    { name: "Movement", logo: brandMovement.url },
    { name: "Colltex", logo: brandColltex.url },
    { name: "Marker", logo: brandMarker.url },
    { name: "PLUM", logo: brandPlum.url },
    { name: "Mendiboard", logo: brandMendiboard.url },
  ];
  return (
    <section id="brands" className="border-b border-border">
      <div className="container-editorial py-10 md:py-14">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <SectionLabel n="II" label="Marcas" />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Selección curada desde Europa
          </span>
        </div>
        <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5 md:gap-10">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex items-center justify-center"
            >
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                loading="lazy"
                className="h-auto w-full max-w-[140px] object-contain opacity-80 transition-opacity hover:opacity-100"
              />
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
    {
      img: product16.url,
      cat: "Botas",
      name: "Movement Freetour Boot W",
      desc: "Bota de travesía femenina, ligera y precisa. Modo caminata amplio para ascensos largos y flex sólido para descensos comprometidos.",
      specs: [
        { k: "Flex", v: "110" },
        { k: "Shell", v: "Grilamid" },
        { k: "Rango caminata", v: "60°" },
        { k: "Peso", v: "1.150 g" },
      ],
      price: "USD 720",
    },
    {
      img: product17.url,
      cat: "Botas",
      name: "Movement Freetour Boot",
      desc: "Referencia freetour: rendimiento en bajada sin sacrificar el ascenso. Construcción Grilamid y cierre rápido para transiciones eficientes.",
      specs: [
        { k: "Flex", v: "120" },
        { k: "Shell", v: "Grilamid" },
        { k: "Rango caminata", v: "60°" },
        { k: "Peso", v: "1.290 g" },
      ],
      price: "USD 780",
    },
    {
      img: product18.url,
      cat: "Fijaciones",
      name: "PLUM Pin Tech",
      desc: "Fijación de inserts francesa, ultraligera y confiable. Para quienes priorizan el ascenso y buscan máxima eficiencia en la montaña.",
      specs: [
        { k: "Tipo", v: "Pin / Tech" },
        { k: "Peso", v: "365 g / par" },
        { k: "Din", v: "5 – 10" },
        { k: "Elevadores", v: "2 posiciones" },
      ],
      price: "USD 560",
    },
    {
      img: product19.url,
      cat: "Fijaciones splitboard",
      name: "Splitboard Binding",
      desc: "Fijación splitboard con highback reforzado y placa de aluminio. Transición rápida entre modo ascenso y descenso.",
      specs: [
        { k: "Tipo", v: "Splitboard" },
        { k: "Material", v: "Aluminio + composite" },
        { k: "Talles", v: "S / M / L" },
        { k: "Peso", v: "1.750 g / par" },
      ],
      price: "USD 640",
    },
    {
      img: product20.url,
      cat: "Cascos",
      name: "Movement 3Tech Alpi Honeycomb",
      desc: "Casco híbrido de ski touring y alpinismo con tecnología Honeycomb. Ventilación ajustable, ligero y certificado para ambas disciplinas.",
      specs: [
        { k: "Certificación", v: "Ski + Alpinismo" },
        { k: "Tecnología", v: "Honeycomb 3 Functions" },
        { k: "Talles", v: "XS-M / M-L" },
        { k: "Color", v: "White / Grey" },
      ],
      price: "USD 240",
    },
    {
      img: product21.url,
      cat: "Cascos",
      name: "Movement 3Tech Alpi Honeycomb",
      desc: "Versión con detalles en naranja de alta visibilidad. Mismo casco híbrido certificado para ski touring y alpinismo con tecnología Honeycomb.",
      specs: [
        { k: "Certificación", v: "Ski + Alpinismo" },
        { k: "Tecnología", v: "Honeycomb 3 Functions" },
        { k: "Talles", v: "XS-M / M-L" },
        { k: "Color", v: "White / Orange" },
      ],
      price: "USD 240",
    },
  ];
  return (
    <section id="selection" className="border-b border-border">
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="IV" label="Selección destacada" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[26px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[38px]">
            Once piezas. Cada una elegida a propósito.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
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
              <h3 className="mt-6 text-[20px] font-bold tracking-tighter md:text-[22px]">{p.name}</h3>
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
    <section id="how-it-works" className="border-b border-border bg-secondary">
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="V" label="Cómo funciona" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[26px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[38px]">
            Cuatro pasos, una conversación honesta.
          </h2>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:mt-16 md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`flex min-h-[160px] flex-col justify-between border-t border-foreground py-8 pr-6 md:py-10 ${
                i !== steps.length - 1 ? "md:border-r" : ""
              }`}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-swiss-red">Paso {s.n}</span>
              <p className="mt-8 max-w-[22ch] text-[18px] font-bold tracking-tighter md:text-[20px]">{s.t}</p>
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
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="VI" label="Presencia local" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="max-w-[18ch] text-[26px] font-bold leading-[1.05] tracking-tighter md:text-[38px]">
              Disponible en Argentina.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.65] text-foreground/75 md:text-[16px]">
              Patagonia SkiMo mantiene stock en Argentina. Colaboraciones Invierno 2026 con Chilco Experiencias en San
              Martín de los Andes chilcoexperiencias.com y con el Indio Cuá en El Chaltén www.indio.com — para que puedas
              ver, probar y retirar tu equipo en el lugar, cerca de las líneas que querés hacer.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { c: "San Martín de los Andes", r: "Neuquén, AR" },
                { c: "El Chaltén", r: "Santa Cruz, AR" },
              ].map((p) => (
                <div key={p.c} className="border-t border-foreground pt-4">
                  <p className="text-[18px] font-bold tracking-tighter md:text-[20px]">{p.c}</p>
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
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="VII" label="Preguntas frecuentes" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[26px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[38px]">
            Preguntas que respondemos todas las semanas.
          </h2>
        </div>

        <div className="mt-12 md:mt-16">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="border-t border-foreground last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left md:py-6"
                >
                  <span className="text-[16px] font-bold tracking-tighter md:text-[20px]">{it.q}</span>
                  <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline md:text-[12px]">
                    {isOpen ? "Cerrar" : "Ver respuesta"}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6">
                    <p className="max-w-[62ch] text-[15px] leading-[1.65] text-foreground/75 md:text-[16px]">{it.a}</p>
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
      <div className="container-editorial py-20 text-center md:py-28">
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-swiss-red">— Hablemos</span>
        <h2 className="mx-auto mt-6 max-w-[18ch] text-[32px] font-bold leading-[1] tracking-tighter md:text-[64px]">
          ¿Todavía no sabés qué equipo te conviene?
        </h2>
        <p className="mx-auto mt-6 max-w-[42ch] text-[15px] leading-[1.6] text-foreground/75 md:text-[17px]">
          Contanos dónde esquías. Te ayudamos a elegir el equipo adecuado.
        </p>
        <div className="mt-10">
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
          <span>Edición Invierno 2026</span>
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

function SectionLabel({ label }: { n?: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-swiss-red" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">{label}</span>
    </div>
  );
}
