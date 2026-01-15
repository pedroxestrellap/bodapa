export default function SaveTheDateHero({ couple, dateLine, locationLine, photoSrc }) {
  return (
    <section className="px-6 pt-14 pb-10 bg-paper">
      <div className="text-center">
        <p className="name-script text-[42px] text-wine">Save the Date!</p>
      </div>

      <div className="mt-6 relative mx-auto max-w-[320px]">
        <div className="rounded-[24px] bg-burgundy p-6 shadow-xl relative">
          <div className="w-[180px] h-[140px] mx-auto rounded-[16px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.35)] ring-1 ring-white/30">
            <img
              src={photoSrc}
              className="w-full h-full object-cover object-center"
              alt="Foto de los novios"
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 bg-white rounded-xl p-4 w-[230px] text-center shadow-xl">
            <p className="text-sm text-gray-700">
              Con mucho amor, te invitamos a ser parte de este día tan especial.
            </p>
            <p className="name-script text-gray-800 mt-2">{couple}</p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-[1fr_auto] gap-3">
          <div className="bg-burgundy text-white rounded-xl p-4">
            <p className="text-sm opacity-90">Fecha</p>
            <p className="text-xl font-semibold">{dateLine}</p>
            <p className="text-sm opacity-90">{locationLine}</p>
          </div>
          <button className="bg-white rounded-xl px-4 py-4 text-wine font-semibold shadow">
            Ver detalles
          </button>
        </div>
      </div>
    </section>
  );
}