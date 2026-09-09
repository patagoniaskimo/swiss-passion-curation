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
      <div className="container-editorial py-10 md:py-14">
        <div className="grid grid-cols-12 gap-8 md:gap-6">
          <div className="col-span-12 md:col-span-5">
            <img
              src={logoUrl}
              alt="Patagonia SkiMo"
              width={1599}
              height={902}
              className="w-full object-contain"
            />
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <h1 className="max-w-[16ch] text-[36px] font-bold leading-[0.95] tracking-tighter sm:text-[44px] md:text-[60px] md:leading-[0.92]">
              Equipamiento&nbsp;para
              <br />
              ski de travesía.
            </h1>
            <p className="mt-6 max-w-[50ch] text-[15px] leading-[1.5] text-foreground/80 md:mt-8 md:text-[16px]">
              Explora nuestra seleccion de esquis, splitboards, fijaciones, pieles y cascos seleccionados en Europa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}




function Founders() {
  return (
    <section id="about" className="border-b border-border">
      <div className="container-editorial py-12 md:py-16">
        <SectionLabel n="VI" label="Quiénes somos" />
        <p className="mt-6 max-w-[70ch] text-[15px] leading-[1.65] text-foreground/80 md:text-[17px]">
          <span className="font-bold text-foreground">Patagonia Skimo</span> nace de dos amigos argentinos unidos por una misma pasión: la montaña.
          Vivimos en Suiza, en el corazón de los Alpes.


          Desde acá recorremos Europa buscando nuevas marcas y equipamiento de montaña.

          Equipamiento que nos entusiasma. Marcas en las que creemos. Y muchas ganas de llevar un poco de los Alpes a Argentina.
        </p>
      </div>
    </section>
  );
}

function Brands() {
  const brands = [
    { name: "Movement", logo: brandMovement.url, href: "https://movementskis.com" },
    { name: "Colltex", logo: brandColltex.url, href: "https://www.colltex.ch" },
    { name: "Marker", logo: brandMarker.url, href: "https://markerbindings.com" },
    { name: "PLUM", logo: brandPlum.url, href: "https://www.fixation-plum.com" },
    { name: "Mendiboard", logo: brandMendiboard.url, href: "https://mendiboard.com" },
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
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Sitio oficial de ${b.name}`}
              className="flex items-center justify-center"
            >
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                loading="lazy"
                className="h-auto w-full max-w-[140px] object-contain opacity-80 transition-opacity hover:opacity-100"
              />
            </a>
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
            <SectionLabel n="III" label="Selección destacada" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[26px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[38px]">
            Nuestros productos
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

function LocalPresence() {
  return (
    <section className="border-b border-border">
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="IV" label="Presencia local" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="max-w-[18ch] text-[26px] font-bold leading-[1.05] tracking-tighter md:text-[38px]">
              Disponible en Argentina.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.65] text-foreground/75 md:text-[16px] whitespace-pre-line">
              Patagonia SkiMo mantiene stock en Argentina.&nbsp;

              Podés probar y retirar tu equipo en el lugar, cerca de las líneas que querés hacer.


              También hacemos envíos a todo el país desde nuestro depósito en Buenos Aires.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { city: "San Martín de los Andes", partner: "Chilco Experiencias", href: "https://www.chilcoexperiencias.com" },
                { city: "El Chaltén", partner: "Alpine Patagonia", href: "https://www.alpinepatagonia.com" },
              ].map((p) => (
                <a
                  key={p.city}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block border border-foreground/20 p-5 transition-colors hover:bg-foreground hover:text-background"
                >
                  <p className="text-[18px] font-bold tracking-tighter md:text-[20px]">{p.city}</p>
                  <p className="text-[18px] font-bold tracking-tighter text-muted-foreground group-hover:text-background/80 md:text-[20px]">
                    {p.partner}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] underline-offset-4 group-hover:underline">
                    {new URL(p.href).hostname.replace(/^www\./, "").toUpperCase()}
                  </p>
                </a>
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
     { q: "¿Cómo elijo mi ski?", a: "Contanos dónde esquías, cómo esquías y qué querés hacer la próxima temporada. Vinculamos terreno, estilo y peso para darte la mejor opción." },
    { q: "¿Qué largo me conviene?", a: "Como guía general, para una travesía clásica se recomienda un largo entre 10 y 15 cm menos que la altura del esquiador, para un uso versátil entre 5 y 10 cm menos, y para freetouring o un uso más enfocado en la bajada entre 0 y 5 cm menos. \n\n\nSi priorizás la subida, la ligereza y la maniobrabilidad, conviene elegir un ski más corto; en cambio, si buscás más estabilidad, apoyo y mejor rendimiento en bajada, conviene un ski más largo. \n\n\nTambién es importante tener en cuenta el peso: una persona más liviana puede usar un ski un poco más corto, mientras que una persona más pesada suele beneficiarse de un poco más de largo para ganar apoyo y estabilidad." },
    { q: "¿Cómo elijo el ancho?", a: "El ancho del patín es la medida del ski en su parte más angosta, debajo de la bota. Se expresa en milímetros y cambia mucho cómo se comporta el ski.\n\nEl número que sigue al nombre del modelo indica el ancho del patín.\nPor ejemplo, un ski de entre 85 y 95 mm de ancho de patín es ligero, rápido y eficiente en subida. Suele ir mejor en travesías largas, terreno duro, primavera, nieve compacta o cuando querés ahorrar energía.\n\nEn cambio un ski de 115 mm de ancho de patín te da mucha más flotación en polvo y una sensación más estable y surfy en bajada, sobre todo en nieve profunda. Es más orientado al freerando o a priorizar el descenso. La contra es que pesa más, suele cansar más en la subida, puede ser menos preciso en nieve dura y exige más pierna." },
    { q: "¿Tienen stock en Argentina?", a: "Sí. Mantenemos un stock en Argentina. Los esquíes se pueden probar en San Martín de los Andes y el Chaltén. También tenemos nuestro depósito en Buenos Aires desde donde despachamos algunos de los pedidos." },
    { q: "¿Los productos tienen garantía?", a: "Cada producto lleva la garantía oficial del fabricante. Nosotros gestionamos el proceso con la marca por vos." },
    { q: "¿Me ayudan a elegir?", a: "De eso se trata. Iniciá una conversación por WhatsApp y nosotros te guiamos en la búsqueda de tu equipo ideal!" },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-border bg-secondary">
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="V" label="Preguntas frecuentes" />
          </div>
          <h2 className="col-span-12 max-w-[22ch] text-[26px] font-bold leading-[1.05] tracking-tighter md:col-span-8 md:text-[38px]">
            Para tener en cuenta.
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
                    <p className="max-w-[62ch] whitespace-pre-line text-[15px] leading-[1.65] text-foreground/75 md:text-[16px]">{it.a}</p>
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
          ¿Dónde esquiás?
        </h2>
        <p className="mx-auto mt-6 max-w-[42ch] text-[15px] leading-[1.6] text-foreground/75 md:text-[17px]">
          ¡Contanos y te ayudamos a elegir el equipo adecuado!
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
            <p className="text-[20px] font-bold tracking-tighter md:text-[24px]">Patagonia Skimo</p>
            <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              De Suiza. A Argentina. Pasión por la montaña.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Contacto</p>
            <ul className="mt-4 space-y-2 text-[14px]">
               <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:underline">{"WhatsApp: +41772540422\n\n\n\n"}</a></li>
               <li><a href="mailto:nieve@patagoniaskimo.com" className="hover:underline">nieve@patagoniaskimo.com</a></li>
               <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">www.instagram.com/patagoniaskimo/</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Ubicaciones</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>Verbier, Suiza</li>
               <li>{"\n"}</li>
               <li>San Martín de los Andes, Argentina</li>
               <li>El Chaltén, Argentina</li>
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
