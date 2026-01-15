export default function HandwrittenDate({
  month = "Enero",
  days = [
    { label: "Ju", value: 29 },
    { label: "Vi", value: 30 },
    { label: "Sa", value: 31, selected: true },
    { label: "Lu", value: 1 },
    { label: "Ma", value: 2 },
    { label: "Mi", value: 3 },
  ],
}) {
  return (
    <section className="bg-paper px-6 pt-1 pb-1">
      {/* Month */}
      <h2 className="text-center font-hand text-[42px] text-ink mb-8">
        {month}
      </h2>

      {/* Calendar row */}
      <div className="flex justify-center gap-7">
        {days.map((day, i) => (
          <div key={i} className="relative text-center">
            {/* Day label */}
            <div className="text-[14px] uppercase tracking-wide text-gray-600">
              {day.label}
            </div>

            {/* Number */}
            <div className="font-hand text-[38px] text-ink relative z-10">
              {day.value}
            </div>

            {/* Heart */}
            {day.selected && (
              <svg
                viewBox="0 0 100 100"
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-80 h-20 text-red-600"
              >
                <path
                  d="M50 85
                     C20 60, 5 45, 20 30
                     C35 15, 50 30, 50 30
                     C50 30, 65 15, 80 30
                     C95 45, 80 60, 50 85 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
