export default function WeddingTimeline() {
  const events = [
    {
      time: "6:00 PM",
      title: "Bienvenida",
      description:
        "Diseñado para dar inicio a una noche especial llena de amor y propósito.",
    },
    {
      time: "6:30 PM",
      title: "Adoración",
      description:
        "Un tiempo de adoración y gratitud, preparando nuestros corazones y elevando un momento adorando a Dios antes de comenzar.",
    },
    {
      time: "7:00 PM",
      title: "Ceremonia",
      description:
        "El momento central de la noche, donde delante de Dios, familia y amigos, unimos nuestras vidas en un pacto de amor eterno.",
    },
    {
      time: "7:30 PM",
      title: "Cena",
      description:
        "Compartiremos una cena preparada con cariño, disfrutando juntos de buena compañía y conversaciones especiales.",
    },
    {
      time: "8:30 PM",
      title: "Celebración",
      description:
        "Alegría y gratitud para cerrar la noche.",
    },
  ];

  return (
    <section className="bg-paper px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="name-script text-[36px] text-wine leading-none">
          Wedding Day
        </p>
        <p className="text-lg font-semibold text-ink">
          Timeline
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Sábado · 31 de Enero 2026
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-[360px] mx-auto">
        {events.map((event, i) => (
          <div key={i} className="relative flex gap-6 pb-10">
            {/* Time */}
            <div className="w-16 text-right text-sm font-semibold text-gray-600 pt-1">
              {event.time}
            </div>

            {/* Line + leaf */}
            <div className="relative flex flex-col items-center">
              {/* Leaf */}
              <div className="text-gray-400 text-lg leading-none mb-1">
                🍃
              </div>

              {/* Line */}
              {i !== events.length - 1 && (
                <div className="w-px flex-1 bg-gray-300 mt-1"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="font-semibold text-ink">
                {event.title}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-1">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
