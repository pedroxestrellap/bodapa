import { useEffect, useState } from "react";

export default function CountdownFlip({ targetDate }) {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTime({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const blocks = [
    { label: "días", value: time.days },
    { label: "horas", value: time.hours },
    { label: "minutos", value: time.minutes },
    { label: "segundos", value: time.seconds },
  ];

  return (
    <section className="bg-paper px-6 pb-20 text-center">
      <p className="text-[38px] text-ink mb-8 name-script">
        Faltan para el gran día
      </p>

      <div className="flex justify-center gap-4">
        {blocks.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Flip block */}
            <div className="flex gap-[2px]">
              {item.value.split("").map((digit, idx) => (
                <div
                  key={idx}
                  className="w-9 h-12 bg-black text-white
                             flex items-center justify-center
                             text-[28px] font-mono rounded-[6px]"
                >
                  {digit}
                </div>
              ))}
            </div>

            {/* Label */}
            <p className="mt-2 text-[18px] text-wine tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
