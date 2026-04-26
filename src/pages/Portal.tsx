import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Portal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect after login
    } catch (err) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
      <Helmet>
        <title>Portal de Clientes | Nivelterra</title>
        <meta name="description" content="Acceso exclusivo para clientes de Nivelterra. Gestiona tus proyectos y visualiza el avance de obra." />
        <meta property="og:title" content="Portal de Clientes | Nivelterra" />
        <meta property="og:description" content="Acceso exclusivo para clientes de Nivelterra. Gestiona tus proyectos y visualiza el avance de obra." />
        <meta property="og:image" content="https://i.postimg.cc/Ls098rYY/isologo.png" />
        <meta property="og:url" content="https://ais-dev-ig4qn546kypllmlx6tnhqj-171752467860.us-east1.run.app/portal" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="bg-white p-12 rounded-3xl shadow-sm border border-stone-100 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6">Portal de Clientes</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="bg-stone-100 p-4 rounded-xl"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="bg-stone-100 p-4 rounded-xl"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-emerald-700 text-white p-4 rounded-full font-bold hover:bg-emerald-800 transition">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
