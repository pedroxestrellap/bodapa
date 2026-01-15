export default function PhoneFrame({ children }) {
  return (
    <div className="min-h-screen bg-wine flex items-center justify-center px-6 py-10">
      <div className="relative w-[390px]">
        <div className="rounded-[44px] bg-black p-[10px] shadow-2xl">
          <div className="relative overflow-hidden rounded-[36px] bg-paper h-[780px]">
            <div className="absolute left-1/2 top-3 -translate-x-1/2 h-6 w-28 rounded-full bg-black/90 z-20" />
            <div className="h-full overflow-y-auto scroll-smooth">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}