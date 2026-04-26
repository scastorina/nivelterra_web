import React, { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function AdminPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;
      if (!user) {
        navigate("/portal");
        return;
      }
      
      const idTokenResult = await user.getIdTokenResult();
      if (!idTokenResult.claims.admin) {
        navigate("/portal");
        return;
      }
      
      setLoading(false);
    };
    checkAdmin();
  }, [navigate]);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;
    
    const idToken = await user.getIdToken();
    
    const response = await fetch("/api/admin/create-user", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${idToken}`
      },
      body: JSON.stringify({ email, password, isAdmin }),
    });
    
    if (response.ok) {
      alert("Usuario creado con éxito");
      setEmail("");
      setPassword("");
    } else {
      alert("Error al crear usuario");
    }
  };

  if (loading) return <div className="text-center mt-20">Cargando...</div>;

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl border border-stone-100 shadow-sm">
      <Helmet>
        <title>Panel de Administración | Nivelterra</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h2 className="text-2xl font-bold mb-6">Panel de Administración</h2>
      <form onSubmit={handleCreateUser} className="flex flex-col gap-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-4 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-emerald-500" required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="p-4 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-emerald-500" required />
        <label className="flex items-center gap-2 text-stone-700">
          <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} className="w-5 h-5 accent-emerald-700" />
          Es Administrador
        </label>
        <button type="submit" className="bg-emerald-700 text-white p-4 rounded-xl font-medium hover:bg-emerald-800 transition">Crear Usuario</button>
      </form>
    </div>
  );
}
