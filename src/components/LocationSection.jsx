export default function LocationSection() {
  return (
    <section className="bg-paper px-6 py-16 text-center">
      {/* Title */}
      <h2 className="text-[32px] font-serif text-ink mb-6">
        Ubicación
      </h2>

      {/* Place info */}
      <div className="max-w-[320px] mx-auto mb-8">
        <p className="text-[18px] font-semibold text-ink">
          Residencial Riviera Verde I
        </p>
        <p className="text-[18px] font-semibold text-ink">
          31 de Enero | 6PM
        </p>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          Entrando por la Calle Gabriela mistral, detras de la Sirena de la Charles de Gaulle, Santo Domingo Este 
        </p>
      </div>

      {/* Map (EXACT POINT) */}
      <div className="max-w-[360px] mx-auto overflow-hidden rounded-[22px] shadow-[0_12px_30px_rgba(0,0,0,0.12)] mb-8">
        <iframe
          title="Google Maps - Residencial Riviera Verde I"
          src="https://www.google.com/maps?q=18.5282985,-69.8357779&z=18&output=embed"
          width="100%"
          height="260"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center gap-4">
        {/* Google Maps (exact) */}
        <a
          href="https://www.google.com/maps?q=18.5282985,-69.8357779"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-zinc-800 text-white px-8 py-4 rounded-[20px] font-semibold shadow-sm"
        >
          Abrir en Google Maps
        </a>

        {/* Secondary apps */}
        <div className="flex gap-6 text-sm text-gray-600">
          <a
            href="https://waze.com/ul?ll=18.5282985,-69.8357779&navigate=yes"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Waze
          </a>
          <a
            href="https://maps.apple.com/?ll=18.5282985,-69.8357779"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Apple Maps
          </a>
        </div>
      </div>
    </section>
  );
}
