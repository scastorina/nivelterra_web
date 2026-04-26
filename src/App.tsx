/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, FormEvent } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Map, Ruler, FileText, ChevronRight, Send, LayoutGrid } from "lucide-react";
import TopographyDetails from "./pages/TopographyDetails";
import Portal from "./pages/Portal";
import AdminPanel from "./pages/AdminPanel";
import IrrigationModeling from "./pages/IrrigationModeling";

// ... (ContactForm remains the same)

function OurApps() {
  const apps = [
    {
      title: "Seguimiento de Riego",
      description: "Gestión de compuertas y mapa interactivo de lotes.",
      url: "https://riego.nivelterra.com",
    },
    {
      title: "Modelado de Parcelas",
      description: "Nivelación, diseño de pendientes y optimización de movimiento de suelos.",
      url: "https://app.nivelterra.com",
      internalPath: "/modelado-de-parcelas-de-riego"
    },
  ];

  return (
    <section id="apps" className="mt-24">
      <h2 className="text-4xl font-bold tracking-tighter mb-10">Nuestras Aplicaciones</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {apps.map((app, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col gap-4">
            <LayoutGrid className="text-emerald-700" size={32} />
            <h3 className="text-xl font-semibold">{app.title}</h3>
            <p className="text-stone-600">{app.description}</p>
            <div className="flex gap-4 mt-auto">
              <a href={app.url} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-medium hover:underline">
                Acceder a la aplicación →
              </a>
              {app.internalPath && (
                <Link to={app.internalPath} className="text-stone-500 font-medium hover:text-stone-900">
                  Ver detalles
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Nivelación de precisión",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("idle");
      alert("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div id="contacto" className="mt-24 bg-stone-900 text-stone-100 rounded-3xl p-12">
      <h2 className="text-4xl font-bold tracking-tighter mb-6">Solicita tu Presupuesto</h2>
      <p className="text-stone-400 mb-10 max-w-2xl">
        Cuéntanos sobre tu proyecto de nivelación o sistematización. Nuestro equipo técnico analizará tus requerimientos y te contactará a la brevedad.
      </p>

      {status === "success" ? (
        <div className="bg-emerald-800 text-white p-6 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">¡Mensaje enviado con éxito!</h3>
          <p>Nos pondremos en contacto contigo pronto.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="Nombre completo" 
            required 
            className="bg-stone-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-emerald-500" 
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            required 
            className="bg-stone-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-emerald-500" 
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <select 
            className="bg-stone-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 md:col-span-2"
            onChange={(e) => setFormData({...formData, projectType: e.target.value})}
          >
            <option>Nivelación de precisión</option>
            <option>Diseño de canales</option>
            <option>Gestión integral de obra</option>
          </select>
          <textarea 
            placeholder="Detalles del proyecto (ubicación, hectáreas, objetivos)" 
            rows={4} 
            className="bg-stone-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 md:col-span-2"
            onChange={(e) => setFormData({...formData, details: e.target.value})}
          ></textarea>
          <button 
            type="submit" 
            disabled={status === "submitting"}
            className="bg-emerald-700 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-600 transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === "submitting" ? "Enviando..." : "Enviar solicitud"} <Send size={18} />
          </button>
        </form>
      )}
    </div>
  );
}

function LandingPage() {
  const services = [
    // ... (services remain the same)
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans compass-bg">
      <Helmet>
        <title>Nivelterra | Precisión en el Suelo, Eficiencia en el Riego</title>
        <meta name="description" content="Servicios profesionales de topografía agrícola, sistematización de suelos y nivelación de precisión GNSS RTK para maximizar la productividad." />
        <meta name="keywords" content="topografía agrícola, nivelación de suelos, riego, agricultura de precisión, GNSS RTK, sistematización de suelos, Trimble" />
        <meta property="og:title" content="Nivelterra | Precisión en el Suelo, Eficiencia en el Riego" />
        <meta property="og:description" content="Servicios profesionales de topografía agrícola, sistematización de suelos y nivelación de precisión GNSS RTK para maximizar la productividad." />
        <meta property="og:image" content="https://i.postimg.cc/Ls098rYY/isologo.png" />
        <meta property="og:url" content="https://ais-dev-ig4qn546kypllmlx6tnhqj-171752467860.us-east1.run.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <header className="border-b border-stone-200">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://i.postimg.cc/Ls098rYY/isologo.png" alt="NIVELTERRA" className="h-8 w-8 object-contain" />
            <h1 className="text-2xl font-bold tracking-tighter">NIVELTERRA</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/portal" className="text-sm font-medium text-stone-600 hover:text-stone-900">Portal de Clientes</Link>
            <a href="#contacto" className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-700 transition">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="mb-24"
        >
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Precisión en el Suelo,<br />
            <span className="text-emerald-700">Eficiencia en el Riego.</span>
          </motion.h2>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-xl text-stone-600 max-w-2xl mb-10"
          >
            Servicios profesionales de topografía y sistematización de suelos para maximizar la productividad de tus tierras.
          </motion.p>
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-4"
          >
            <a href="#servicios" className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-800 transition">
              Conoce nuestros servicios <ChevronRight size={20} />
            </a>
            <Link to="/modelado-de-parcelas-de-riego" className="inline-flex items-center gap-2 bg-white text-stone-900 border border-stone-200 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition">
              Modelado de Parcelas de Riego
            </Link>
            <Link to="/topografia-en-movimiento-de-tierras" className="inline-flex items-center gap-2 bg-stone-100 text-stone-600 px-8 py-4 rounded-full font-medium hover:bg-stone-200 transition">
              Sistematización y Nivelación
            </Link>
          </motion.div>
        </motion.section>

        <section id="servicios" className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm"
            >
              <service.icon className="text-emerald-700 mb-6" size={32} />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-stone-600">{service.description}</p>
            </motion.div>
          ))}
        </section>

        <OurApps />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-white rounded-3xl p-12 border border-stone-100 shadow-sm"
        >
          <div className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-4xl font-bold tracking-tighter mb-6">Sobre Nosotros: Ingeniería Agronómica Aplicada al Relieve</h2>
            <p className="text-lg text-stone-600 mb-6">
              En Nivelterra, no somos simplemente operadores de maquinaria; somos profesionales de la ingeniería agronómica dedicados a transformar la topografía en productividad. Entendemos que el suelo y el agua son los recursos más valiosos de su empresa agropecuaria, y nuestra misión es optimizar su interacción a través de la sistematización de precisión.
            </p>
            <p className="text-lg text-stone-600 mb-6">
              Nuestra visión nace de la necesidad de dar respuestas técnicas y definitivas a los problemas de distribución de agua y manejo de cuencas.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Nuestra Experiencia en el Terreno</h3>
            <p className="text-lg text-stone-600 mb-6">
              Hemos forjado nuestra metodología de trabajo enfrentando los desafíos topográficos y climáticos más exigentes. La experiencia diseñando sistemas de nivelación y optimizando el flujo de agua para riego en regiones áridas y de relieves complejos, como la Patagonia, nos ha dotado de una capacidad analítica superior para resolver cualquier escenario hídrico.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Visión Macro y Precisión Micro: La Tecnología a Nuestro Favor</h3>
            <p className="text-lg text-stone-600 mb-4">
              Nuestro enfoque combina el análisis a gran escala con la ejecución milimétrica en el lote. Para lograrlo, integramos el mejor ecosistema tecnológico disponible:
            </p>
            <ul className="list-disc pl-6 mb-6 text-stone-600">
              <li><strong>Ejecución RTK y Láser:</strong> Trasladamos el diseño topográfico a la cuchilla de la pala niveladora con tecnología GNSS de precisión centimétrica para una nivelación exacta.</li>
              <li><strong>Desarrollo de Software Propio:</strong> Llevamos la gestión de obra al entorno digital con herramientas a medida. Desarrollamos sistemas de seguimiento de riego que permiten registrar la apertura y cierre de compuertas, así como las horas de riego por parcela y hectárea, brindando visibilidad total sobre la situación de cada lote y canal.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Nuestro Compromiso Educativo: El "Constructor Digital" del Agro</h3>
            <p className="text-lg text-stone-600">
              Creemos firmemente que la adopción de tecnología en el agro requiere de información clara y accesible. A través de nuestras plataformas y canales audiovisuales, compartimos la realidad de las obras, explicamos los fundamentos de la topografía moderna y demostramos el uso de las tecnologías de nivelación. Queremos formar una comunidad de productores y profesionales informados, actuando como verdaderos constructores digitales del nuevo paisaje agrícola.
            </p>
          </div>
        </motion.section>

        <ContactForm />
      </main>

      <footer className="border-t border-stone-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center flex flex-col items-center gap-4">
          <img src="https://i.postimg.cc/Ls098rYY/isologo.png" alt="NIVELTERRA" className="h-12 w-12 object-contain" />
          <p className="text-stone-500">© 2026 Nivelterra. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/topografia-en-movimiento-de-tierras" element={<TopographyDetails />} />
          <Route path="/modelado-de-parcelas-de-riego" element={<IrrigationModeling />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
