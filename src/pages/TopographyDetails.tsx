import { motion } from "motion/react";
import { ArrowLeft, Satellite, Zap, Clock, Package, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function TopographyDetails() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans py-16 px-6">
      <Helmet>
        <title>Sistematización y Nivelación | Nivelterra</title>
        <meta name="description" content="Detalles técnicos sobre sistematización de suelos, nivelación láser y GNSS RTK para optimizar el riego y la productividad agrícola." />
        <meta property="og:title" content="Sistematización y Nivelación | Nivelterra" />
        <meta property="og:description" content="Detalles técnicos sobre sistematización de suelos, nivelación láser y GNSS RTK para optimizar el riego y la productividad agrícola." />
        <meta property="og:image" content="https://i.postimg.cc/Ls098rYY/isologo.png" />
        <meta property="og:url" content="https://ais-dev-ig4qn546kypllmlx6tnhqj-171752467860.us-east1.run.app/topografia-en-movimiento-de-tierras" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8">
          <ArrowLeft size={20} /> Volver al inicio
        </Link>
        
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-stone prose-lg max-w-none"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Sistematización y Nivelación de Suelos para Riego de Alta Eficiencia</h1>
          
          <p className="lead text-xl text-stone-600 mb-8">
            Transformamos la topografía natural de su campo en una superficie de alta precisión productiva. A través de un diseño agronómico riguroso, optimizamos el flujo del agua de riego, maximizamos el rendimiento de los cultivos y reducimos los costos operativos.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Por Qué Invertir en la Nivelación de Tierras</h2>
          <p>La gestión eficiente del agua es el pilar de la agricultura moderna. Siguiendo los modelos de manejo hídrico de regiones áridas y semiáridas líderes en el mundo, la nivelación de precisión garantiza:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Eficiencia de Riego Superior:</strong> Distribución uniforme de la lámina de agua, evitando encharcamientos en zonas bajas y déficit en las lomas.</li>
            <li><strong>Aumento de Rendimientos:</strong> Al lograr una infiltración homogénea, el cultivo germina y se desarrolla con una uniformidad insuperable.</li>
            <li><strong>Control de Salinidad y Erosión:</strong> Un escurrimiento controlado previene el lavado de nutrientes y la acumulación de sales en el perfil del suelo.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Nuestros Servicios Topográficos e Ingeniería de Proyectos</h2>
          <p>Como especialistas en ingeniería agronómica, no solo movemos tierra; diseñamos soluciones hidráulicas adaptadas a los requerimientos específicos de su cuenca y sistema de riego.</p>

          <h3 className="text-xl font-bold mt-6 mb-2">1. Levantamiento Topográfico de Alta Precisión</h3>
          <p>El primer paso para un proyecto exitoso es conocer el terreno con exactitud milimétrica. Realizamos relevamientos planialtimétricos detallados capturando la variabilidad natural del lote.</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Mapeo de alta densidad:</strong> Recopilación de miles de puntos topográficos para generar un Modelo Digital del Terreno (MDT) exacto.</li>
            <li><strong>Identificación de cuencas naturales:</strong> Análisis de los escurrimientos naturales para integrarlos al diseño de los canales de riego y drenaje.</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2">2. Generación de Proyectos de Nivelación y Sistematización</h3>
          <p>Utilizamos software de vanguardia para procesar los datos topográficos y generar un diseño de movimiento de suelos optimizado.</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Cálculo de Desmonte y Terraplén (Cut and Fill):</strong> Optimizamos el volumen de tierra a mover para minimizar las horas-máquina y reducir los costos del proyecto.</li>
            <li><strong>Diseño de Pendientes:</strong> Proyectamos pendientes simples, compuestas o de grado variable según el tipo de suelo y el caudal de riego disponible.</li>
            <li><strong>Planos y Mapas de Ejecución:</strong> Entregamos mapas de corte y relleno claros y listos para ser cargados en los monitores de la maquinaria.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Diseño y Optimización de Canales de Riego</h2>
          <p>La nivelación del lote es solo la mitad de la ecuación; la otra mitad es garantizar que el agua llegue de manera eficiente desde la fuente hasta el cultivo. Diseñamos sistemas de conducción hidráulica que aseguran una distribución óptima:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Cálculo de Capacidades:</strong> Dimensionamiento preciso de canales principales, secundarios y terciarios según el caudal requerido y la topografía del terreno.</li>
            <li><strong>Optimización de Trazados:</strong> Diseño de rutas hidráulicas que minimizan las pérdidas por fricción, evitan zonas muertas y maximizan la velocidad del agua.</li>
            <li><strong>Selección de Materiales y Revestimientos:</strong> Asesoramiento técnico en la elección de materiales para reducir drásticamente las pérdidas por infiltración.</li>
            <li><strong>Integración con la Sistematización:</strong> Aseguramos que la cota de entrega del canal coincida perfectamente con la cota de inicio de la nivelación del lote.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Transparencia y Trazabilidad: Plataforma Digital de Gestión de Obra</h2>
          <p>En Nivelterra, sabemos que la precisión técnica debe ir acompañada de un control operativo riguroso. Llevamos la gestión de nuestros proyectos al entorno digital mediante una aplicación web integral para optimizar el seguimiento de obras agronómicas.</p>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
              <Clock className="text-emerald-700 mb-4" size={32} />
              <h3 className="text-lg font-bold">Control de Tiempos</h3>
              <p className="text-sm text-stone-600">Monitoreo de maquinaria y métricas de avance diario frente al proyecto topográfico.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
              <Package className="text-emerald-700 mb-4" size={32} />
              <h3 className="text-lg font-bold">Gestión de Inventario</h3>
              <p className="text-sm text-stone-600">Trazabilidad completa de insumos, combustible y materiales en tiempo real.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
              <Sprout className="text-emerald-700 mb-4" size={32} />
              <h3 className="text-lg font-bold">Planificación Agronómica</h3>
              <p className="text-sm text-stone-600">Planificación de enmiendas y fertilización post-nivelación para restaurar el potencial productivo.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Tecnología de Vanguardia en Movimiento de Suelos</h2>
          <p>Para llevar los diseños del plano a la realidad, trabajamos con tecnologías de guiado de maquinaria líderes en el mercado global.</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
              <Satellite className="text-emerald-700 mb-4" size={32} />
              <h3 className="text-lg font-bold">Nivelación GNSS RTK</h3>
              <p className="text-sm text-stone-600">El estándar actual en la agricultura de precisión norteamericana y australiana. Permite diseños 3D con precisión centimétrica, adaptándose a topografías variables.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
              <Zap className="text-emerald-700 mb-4" size={32} />
              <h3 className="text-lg font-bold">Nivelación Láser</h3>
              <p className="text-sm text-stone-600">La tecnología de referencia histórica, ideal para la creación de planos perfectos o pendientes uniformes (Dual Slope) con alta velocidad de respuesta.</p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
