import { useEffect, useState } from "react";

export default function ShareButton({ guestId, guestName }) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    // Esto solo corre en el navegador
    setShareUrl(`${window.location.origin}/invitation/${guestId}`);
  }, [guestId]);

  const handleShare = async () => {
    if (!shareUrl) return;

    if (navigator.share) {
      await navigator.share({
        title: "Invitación de boda",
        text: `Hola ${guestName}, te compartimos nuestra invitación 💍`,
        url: shareUrl,
      });
    } else {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copiado para compartir");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="bg-zinc-800 py-1 px-3 border-3 text-white text-[12px] shadow-md font-semibold"
      disabled={!shareUrl}
    >
      Compartir
    </button>
  );
}
