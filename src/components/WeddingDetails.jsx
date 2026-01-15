import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function WeddingDetailsCard({ guestId }) {
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGuest = async () => {
      const { data } = await supabase
        .from("guests")
        .select("name, confirmado")
        .eq("id", guestId)
        .single();

      setGuest(data);
    };

    fetchGuest();
  }, [guestId]);

  const confirmAttendance = async () => {
    setLoading(true);

    await supabase
      .from("guests")
      .update({ confirmado: true })
      .eq("id", guestId);

    window.location.href = "/gracias";
  };

  if (!guest) return null;

  return (
    <section className="bg-paper px-6 py-6 flex justify-center">
      <div className="bg-wine text-white rounded-[28px] px-8 py-12 max-w-[360px] w-full relative">
        
        {/* Bloque 1 */}
        <div className="text-center mb-5">
          <p className="name-script text-[40px] mb-4">
            Detalles
          </p>
          <p className="text-sm leading-relaxed opacity-90">
            Amamos tus niños, pero sería de agrado para nosotros
            que los dejaras en casa.
          </p>
        </div>

        {/* Bloque 2 */}
        <div className="text-center mb-12">
          <p className="name-script text-[36px] mb-4">
            Regalos
          </p>
          <p className="text-sm leading-relaxed opacity-90">
            Si deseas hacernos un obsequio, agradecemos profundamente
            los regalos en efectivo o transferencia bancaria.
            Tu apoyo nos ayudará a comenzar esta nueva etapa juntos.
          </p>

          <div className="mt-4 text-sm opacity-95">
            <p><strong>Banco:</strong> BHD · Ahorro</p>
            <p><strong>Cuenta:</strong> 37429790012</p>
            <p><strong>Titular:</strong> Pedro Estrella</p>
          </div>

          <div className="mt-4 text-sm opacity-95">
            <p><strong>Banco:</strong> Popular · Corriente</p>
            <p><strong>Cuenta:</strong> 829290675</p>
            <p><strong>Titular:</strong> Penelope Arisleydi Veloz Garcia</p>
          </div>

          <div className="mt-4 text-sm opacity-95">
            <p><strong>Banco:</strong> Banreservas · Corriente</p>
            <p><strong>Cuenta:</strong> 9608923553</p>
            <p><strong>Titular:</strong> Penelope Arisleydi Veloz Garcia</p>
          </div>

          <div className="mt-4 text-sm opacity-95">
            <p><strong>Paypal:</strong> pedrox.estrellap@gmail.com</p>
          </div>
        </div>

        {/* BOTÓN / ESTADO */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
          {guest.confirmado ? (
            <div className="bg-green-700 text-whit text-center px-6 py-3 rounded-[14px] text-sm font-semibold shadow-md">
              ✔ confirmado
            </div>
          ) : (
            <button
              onClick={confirmAttendance}
              disabled={loading}
              className="bg-zinc-800 text-white px-8 py-4 rounded-[14px] text-sm font-semibold shadow-md transition active:scale-95 disabled:opacity-50"
            >
              {loading ? "Confirmando..." : "Confirmar"}
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
