import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function ConfirmButton({ guestId, confirmado }) {
  const [loading, setLoading] = useState(false);

  const confirmAttendance = async () => {
    if (confirmado || loading) return;

    setLoading(true);

    const { error } = await supabase
      .from("guests")
      .update({ confirmado: true })
      .eq("id", guestId);

    if (!error) {
      window.location.href = `/confirmado/${guestId}`;
    } else {
      alert("Error al confirmar");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={confirmAttendance}
      disabled={confirmado || loading}
      className={`
        px-8 py-4 rounded-2xl text-lg text-center font-semibold shadow-lg transition
        ${
          confirmado
            ? "bg-green-700 text-white cursor-default"
            : "bg-[#222] text-white hover:bg-black active:scale-95"
        }
        ${loading ? "opacity-60" : ""}
      `}
    >
      {confirmado
        ? "¡Ya estás confirmado!"
        : loading
        ? "Confirmando..."
        : "Confirmar asistencia"}
    </button>
  );
}
