import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ShareBotton from './ShareButton.jsx'

export default function AdminGuestList() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuests = async () => {
      const { data, error } = await supabase
        .from("guests")
        .select("id, name, confirmado")
        .order("confirmado", { ascending: false });

      if (!error) {
        setGuests(data);
      }
      setLoading(false);
    };

    fetchGuests();
  }, []);

  const total = guests.length;
  const confirmed = guests.filter(g => g.confirmado).length;
  const pending = total - confirmed;

  if (loading) {
    return <p className="text-center">Cargando invitados…</p>;
  }

  return (
    <section className="px-6 py-10">
      {/* Stats */}
      <div className="flex justify-center gap-6 mb-8 text-sm">
        <span>👥 Total: <strong>{total}</strong></span>
        <span>✅ Confirmados: <strong>{confirmed}</strong></span>
        <span>⏳ Pendientes: <strong>{pending}</strong></span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b ">
              <th className="text-left py-2">Nombre</th>
              <th className="text-center py-2">Estado</th>
              <th className="text-center py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {guests.map((guest) => (
              <tr key={guest.id} className="border-b last:border-0">
                <td className="py-2">{guest.name}</td>
                <td className="py-2 text-center">
                  {guest.confirmado ? (
                    <span className="text-green-700 font-semibold">
                      ✅
                    </span>
                  ) : (
                    <span className="text-gray-400">
                      ❌
                    </span>
                  )}
                </td>
                <td>
                  <ShareBotton
                    guestId={guest.id}
                    guestName={guest.name}
                    client:load
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
