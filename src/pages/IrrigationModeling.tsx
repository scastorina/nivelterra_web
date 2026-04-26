import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Map, Sliders, Truck, Monitor, ChevronRight, CheckCircle2 } from "lucide-react";

export default function IrrigationModeling() {
  const features = [
    {
      icon: Map,
      title: "Modelado MDT de Precisión",
      description: "A partir de puntos de cotas GNSS, generamos un Modelo Digital del Terreno exacto para visualizar el relieve actual de la parcela.",
    },
    {
      icon: Sliders,
      title: "Diseño de Pendientes Múltiples",
      description: "Cálculo de nivelación con una o varias pendientes personalizadas y definición precisa de la dirección de riego óptima.",
    },
    {
      icon: Truck,
      title: "Optimización de Movimiento de Suelos",
      description: "Algoritmos avanzados para minimizar la distancia de transporte de tierra y optimizar los recorridos de los tractores, reduciendo costos de combustible y tiempo.",
    },
    {
      icon: Monitor,
      title: "Integración con Pantallas Trimble",
      description: "Exportación directa del proyecto final listo para ser cargado en pantallas Trimble, permitiendo una ejecución automatizada en el terreno.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <Helmet>
        <title>Modelado de Parcelas de Riego | Nivelterra</title>
        <meta name="description" content="Modelado 3D de parcelas, diseño de pendientes y optimización de movimiento de suelos para agricultura de precisión e integración con Trimble." />
        <meta property="og:title" content="Modelado de Parcelas de Riego | Nivelterra" />
        <meta property="og:description" content="Modelado 3D de parcelas, diseño de pendientes y optimización de movimiento de suelos para agricultura de precisión e integración con Trimble." />
        <meta property="og:image" content="https://i.postimg.cc/Ls098rYY/isologo.png" />
        <meta property="og:url" content="https://ais-dev-ig4qn546kypllmlx6tnhqj-171752467860.us-east1.run.app/modelado-de-parcelas-de-riego" />
        <meta property="og:type" content="article" />
      </Helmet>
      <header className="border-b border-stone-200 bg-white sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="https://i.postimg.cc/Ls098rYY/isologo.png" alt="NIVELTERRA" className="h-8 w-8 object-contain" />
            <h1 className="text-2xl font-bold tracking-tighter">NIVELTERRA</h1>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900">
            <ArrowLeft size={16} /> Volver al inicio
          </Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Software de Ingeniería
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">
            Modelado de Parcelas de Riego y Nivelación
          </h2>
          <p className="text-xl text-stone-600 mb-12 leading-relaxed">
            Nuestra plataforma avanzada permite transformar datos topográficos crudos en proyectos ejecutivos de nivelación. Optimizamos cada metro cúbico de tierra movido para garantizar la máxima eficiencia hídrica.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="https://app.nivelterra.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-800 transition shadow-lg shadow-emerald-700/20">
              Acceder a la Plataforma <ChevronRight size={20} />
            </a>
          </div>
        </motion.div>

        {/* Visual Showcase Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 aspect-video bg-stone-900"
          >
            {/* Placeholder for actual screenshot */}
            <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center p-12">
              <div className="w-full h-full border border-emerald-500/30 rounded-xl relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', size: '20px 20px' }}></div>
                <div className="text-center z-10">
                  <Map className="text-emerald-500 mx-auto mb-4" size={64} />
                  <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase">Visualización MDT 3D</p>
                </div>
                {/* Simulated UI elements */}
                <div className="absolute top-4 left-4 bg-stone-800/80 backdrop-blur p-3 rounded-lg border border-white/10 text-[10px] font-mono text-stone-300">
                  LAT: -38.9516<br/>LON: -68.0591
                </div>
                <div className="absolute bottom-4 right-4 bg-emerald-600 p-3 rounded-lg text-white text-xs font-bold">
                  PROYECTO OPTIMIZADO
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          </motion.div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold tracking-tight">Potencia Tecnológica en el Lote</h3>
            <p className="text-stone-600 text-lg">
              No solo diseñamos, optimizamos. Nuestro software calcula la solución de nivelación que requiere el menor movimiento de suelo posible, respetando las necesidades agronómicas de cada cultivo.
            </p>
            <ul className="space-y-4">
              {[
                "Cálculo automático de volúmenes de corte y relleno.",
                "Mapas de calor de elevación y pendientes.",
                "Simulación de flujo de agua superficial.",
                "Reportes detallados para presupuesto de obra."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-700">
                  <CheckCircle2 className="text-emerald-600 mt-1 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition group"
            >
              <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition">
                <feature.icon className="text-emerald-700" size={24} />
              </div>
              <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
              <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </section>

        {/* Trimble Section */}
        <section className="bg-stone-900 text-white rounded-3xl p-12 overflow-hidden relative">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold tracking-tighter mb-6">Del Diseño a la Pantalla Trimble</h3>
              <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                Eliminamos la brecha entre la oficina técnica y la maquinaria. Nuestros proyectos se exportan en formatos compatibles con los ecosistemas de agricultura de precisión más utilizados a nivel mundial.
              </p>
              <div className="flex items-center gap-6 grayscale opacity-70">
                <span className="font-bold text-2xl tracking-widest">TRIMBLE READY</span>
                <div className="h-8 w-[1px] bg-stone-700"></div>
                <span className="font-bold text-2xl tracking-widest text-emerald-500">GNSS RTK</span>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video bg-stone-800 rounded-2xl border border-stone-700 flex items-center justify-center overflow-hidden">
               {/* Simulated Trimble Screen */}
               <div className="w-4/5 h-4/5 bg-black rounded-lg border-4 border-stone-600 relative p-4 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="flex gap-2">
                      <div className="w-12 h-2 bg-stone-700 rounded"></div>
                      <div className="w-8 h-2 bg-stone-700 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 border border-stone-700 rounded flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="w-24 h-24 border-2 border-emerald-500/50 rotate-45 flex items-center justify-center">
                      <Truck className="text-emerald-500 -rotate-45" size={32} />
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-6 bg-stone-800 rounded"></div>
                    <div className="h-6 bg-stone-800 rounded"></div>
                    <div className="h-6 bg-emerald-900 rounded border border-emerald-500/30"></div>
                  </div>
               </div>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-900/20 blur-3xl rounded-full"></div>
        </section>
      </main>

      <footer className="border-t border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-stone-500 text-sm">© 2026 Nivelterra. Tecnología aplicada al relieve.</p>
        </div>
      </footer>
    </div>
  );
}
