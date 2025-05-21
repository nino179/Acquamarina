import { useState } from "react";

export default function AcquaMarinaSite() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "admin") setLoggedIn(true);
    else alert("Password errata!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700">Residence AcquaMarina</h1>
          <p className="text-lg text-blue-500 mt-2">Il tuo bar vista mare, ogni giorno d'estate</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contatti</h2>
          <div className="bg-white rounded-xl shadow p-4">
            <p><strong>Indirizzo:</strong> Via delle Onde, 45 - Palermo</p>
            <p><strong>Email:</strong> info@acquamarina.it</p>
            <p><strong>Telefono:</strong> +39 091 1234567</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Area Gestionale</h2>
          {!loggedIn ? (
            <div className="max-w-sm space-y-4">
              <input
                type="password"
                placeholder="Password amministratore"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl"

              />
              <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl"

              >
                Accedi
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow p-4 space-y-2">
              <h3 className="text-xl font-bold text-blue-700">Gestione Bar</h3>
              <ul className="list-disc pl-5">
                <li>Visualizza ordini giornalieri</li>
                <li>Controlla scorte</li>
                <li>Gestione personale</li>
                <li>Report vendite</li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
