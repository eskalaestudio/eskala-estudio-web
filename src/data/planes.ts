// Fuente única de verdad de los planes.
// La usan: la sección de Planes del home y las landings /planes/[slug].
// SIN precios (el sitio no muestra precios; solo el gancho "desde $1,200" en el home).

export interface Plan {
  slug: string;
  linea: "A" | "B";
  lineaLabel: string;
  nombre: string;
  tagline: string;
  paraQuien: string;
  problema: string;
  incluye: string[];
  proceso: { paso: string; desc: string }[];
  resultado: string;
  idealSi: string[];
  noSi: string;
  destacado?: boolean;
  notaPauta?: boolean;
}

export const planes: Plan[] = [
  // ─────────── LÍNEA A · Web & Local ───────────
  {
    slug: "sitio-web",
    linea: "A",
    lineaLabel: "Web & Local",
    nombre: "Sitio Web",
    tagline: "Tu negocio, encontrable y vendiendo las 24 horas.",
    paraQuien: "El negocio que aún no existe en internet o tiene una web abandonada.",
    problema:
      "Cuando alguien te busca en Google, no te encuentra — y se va con la competencia. Sin página propia dependes de los clientes de paso y del boca a boca, y pierdes a todos los que ya te estaban buscando.",
    incluye: [
      "Página web profesional de una sección: rápida, bonita y clara",
      "Dominio .com + hosting + certificado de seguridad (SSL), todo incluido",
      "Optimizada para celular y para aparecer en Google",
      "Botón de WhatsApp y mapa de ubicación para que te contacten en un clic",
      "Conectada a medición desde el día 1: sabemos cuánta gente llega y de dónde",
      "Servicio y mantenimiento incluidos (cambios, respaldos y soporte)",
    ],
    proceso: [
      { paso: "Diagnóstico", desc: "Revisamos tu negocio, tu competencia y qué busca tu cliente ideal." },
      { paso: "Construcción", desc: "Montamos tu página con tus textos, fotos y marca en aproximadamente una semana." },
      { paso: "Publicación", desc: "La conectamos a tu dominio y a Google, con medición activa desde el día 1." },
      { paso: "Mejora continua", desc: "Cada mes actualizamos y afinamos según lo que esté funcionando." },
    ],
    resultado:
      "Apareces cuando te buscan, te contactan por WhatsApp y dejas de perder clientes que antes no te encontraban. Y medimos cuánta gente llega, para saber qué funciona.",
    idealSi: [
      "No tienes web (o está rota / abandonada)",
      "Dependes de clientes de paso y de WhatsApp",
      "Quieres verte profesional sin complicarte",
    ],
    noSi: "Ya tienes una web que convierte bien y solo te falta tráfico — ahí te sirve más un plan de crecimiento.",
  },
  {
    slug: "local-resenas",
    linea: "A",
    lineaLabel: "Web & Local",
    nombre: "Local + Reseñas",
    tagline: "Aparece primero en tu zona y sube tus estrellas.",
    paraQuien: "El negocio local que quiere ganar la búsqueda de 'cerca de mí' y mejorar su reputación.",
    problema:
      "Tus competidores con más estrellas te ganan al cliente, aunque tú seas mejor. Y las reseñas buenas casi nunca llegan solas — las malas sí. Sin un sistema, tu reputación queda al azar.",
    incluye: [
      "Todo lo del plan Sitio Web",
      "Perfil de Google Business optimizado (fotos, categorías, horarios, publicaciones)",
      "Sistema de reseñas automático: pedimos la reseña por WhatsApp en el momento justo",
      "Filtro de reputación: los clientes molestos van a un chat privado contigo, no a Google",
      "Reporte mensual de estrellas y reseñas ganadas",
    ],
    proceso: [
      { paso: "Optimización", desc: "Dejamos tu Google Business impecable y consistente (datos, fotos, categorías)." },
      { paso: "Activación", desc: "Conectamos el sistema de reseñas por WhatsApp a tus clientes recientes." },
      { paso: "Protección", desc: "Filtramos las experiencias negativas antes de que lleguen a Google." },
      { paso: "Medición", desc: "Te reportamos cuántas estrellas y reseñas ganaste cada mes." },
    ],
    resultado:
      "Subes de estrellas, apareces más arriba en Google Maps y ganas al cliente que compara antes de decidir. Tu reputación deja de ser suerte.",
    idealSi: [
      "Tienes rating entre 3.8 y 4.4, o pocas reseñas",
      "Compites en tu zona por clientes locales",
      "Vives de que te encuentren en Google Maps",
    ],
    noSi: "Todavía no tienes flujo de clientes al cual pedirle reseñas — empieza por atraer tráfico.",
  },
  {
    slug: "redes-local",
    linea: "A",
    lineaLabel: "Web & Local",
    nombre: "Redes Local",
    tagline: "Redes activas y profesionales, sin que muevas un dedo.",
    paraQuien: "El negocio que quiere estar presente y ordenado en redes, pero no tiene tiempo.",
    problema:
      "Tus redes muertas o desordenadas restan confianza justo cuando el cliente te está revisando. Y postear consistente, con buen diseño, te quita tiempo que no tienes.",
    incluye: [
      "Todo lo de Local + Reseñas",
      "Manejo de 2 redes sociales (12 publicaciones al mes)",
      "Diseño de contenido gráfico con tu marca",
      "Respuesta a mensajes y comentarios",
      "Calendario de contenido mensual (lo apruebas antes de publicar)",
    ],
    proceso: [
      { paso: "Estrategia", desc: "Definimos las líneas de contenido y el calendario del mes según tu negocio." },
      { paso: "Producción", desc: "Diseñamos los 12 posts con tu identidad; tú los apruebas antes de publicar." },
      { paso: "Publicación y comunidad", desc: "Publicamos en horarios óptimos y respondemos tus mensajes." },
      { paso: "Reporte", desc: "Te mostramos alcance, interacción y qué contenido funcionó mejor." },
    ],
    resultado:
      "Tus redes se ven profesionales y activas, generan confianza en quien te revisa antes de comprar, y te ahorran varias horas cada semana.",
    idealSi: [
      "Tus redes están abandonadas o inconsistentes",
      "No tienes tiempo de postear",
      "Quieres verte serio sin contratar a alguien de planta",
    ],
    noSi: "Quieres ventas por publicidad pagada ya — ahí necesitas un plan de crecimiento con pauta.",
  },

  // ─────────── LÍNEA B · Marketing & Pauta ───────────
  {
    slug: "arranque",
    linea: "B",
    lineaLabel: "Marketing & Pauta",
    nombre: "Arranque",
    tagline: "Empieza a atraer clientes con publicidad medible.",
    paraQuien: "El negocio establecido, listo para invertir en anuncios y empezar en serio.",
    problema:
      "Publicas pero no llega gente nueva, y no sabes qué está funcionando ni cuánto te cuesta cada cliente. Sin medición, la publicidad es tirar dinero a ciegas.",
    incluye: [
      "Reels, posts y stories cada semana",
      "2 campañas pagadas: alcance y conversión (reservas, ventas o leads)",
      "Community management",
      "Medición de conversiones desde el día 1 (GA4 + píxeles)",
      "Reporte mensual de resultados",
    ],
    proceso: [
      { paso: "Diagnóstico y medición", desc: "Instalamos la medición (GA4, píxel) y definimos qué cuenta como conversión." },
      { paso: "Contenido", desc: "Producimos el contenido que alimenta las campañas." },
      { paso: "Campañas", desc: "Lanzamos alcance + conversión y optimizamos con datos." },
      { paso: "Reporte", desc: "Te mostramos leads o ventas atribuidas y el costo por resultado." },
    ],
    resultado:
      "Empiezas a atraer clientes nuevos con números claros: cuántos, de dónde vienen y a qué costo. Dejas de improvisar.",
    idealSi: [
      "Negocio establecido con un producto que sí se vende",
      "Presupuesto para pauta + contenido",
      "Primera vez que harás anuncios en serio",
    ],
    noSi: "No tienes presupuesto sostenido para pauta — empieza por presencia y reputación (Línea A).",
    notaPauta: true,
  },
  {
    slug: "crecimiento",
    linea: "B",
    lineaLabel: "Marketing & Pauta",
    nombre: "Crecimiento",
    tagline: "Producción seria y embudo completo para crecer en firme.",
    paraQuien: "El negocio con buen potencial visual que quiere crecer en serio, no solo estar presente.",
    problema:
      "Estás estancado. Necesitas volumen de contenido, un embudo completo que acompañe al cliente de principio a fin, y optimización constante — no posts sueltos que no llevan a ningún lado.",
    incluye: [
      "Más contenido + stories a diario",
      "4 campañas full-funnel + remarketing",
      "1 sesión de foto y video al mes (equipo propio)",
      "Community management completo",
      "Tracking de conversiones + optimización semanal",
      "Reporte quincenal de resultados",
    ],
    proceso: [
      { paso: "Estrategia full-funnel", desc: "Diseñamos el embudo: atraer, enganchar, convertir y recuperar." },
      { paso: "Producción mensual", desc: "Sesión de foto/video + contenido diario con tu marca." },
      { paso: "Campañas + remarketing", desc: "4 campañas coordinadas y remarketing a quienes ya interactuaron." },
      { paso: "Optimización semanal", desc: "Ajustamos con datos cada semana; te reportamos cada quincena." },
    ],
    resultado:
      "Tracción real y sostenida: más alcance, más conversiones y un costo por cliente que baja conforme optimizamos. Es nuestro plan recomendado por defecto.",
    idealSi: [
      "Quieres crecer en serio, no solo estar presente",
      "Tienes presupuesto para pauta + contenido",
      "Tu negocio se ve bien en foto y video",
    ],
    noSi: "Apenas estás validando si tu producto vende — mejor arranca más chico.",
    destacado: true,
    notaPauta: true,
  },
  {
    slug: "dominio",
    linea: "B",
    lineaLabel: "Marketing & Pauta",
    nombre: "Dominio",
    tagline: "Domina tu categoría en digital.",
    paraQuien: "La marca con presupuesto que quiere liderar su nicho, no solo participar.",
    problema:
      "Quieres ser EL referente de tu categoría, no uno más. Para eso necesitas máxima producción, colaboraciones que amplifiquen tu marca y atención dedicada semana a semana.",
    incluye: [
      "Máxima producción de contenido + colaboraciones con influencers",
      "2 sesiones de foto y video al mes",
      "Embudo completo + Google Ads local",
      "Gestión de UGC (contenido de tus clientes) y reseñas",
      "Dashboard de resultados en vivo",
      "Optimización continua + llamada semanal",
    ],
    proceso: [
      { paso: "Estrategia de dominio", desc: "Plan para posicionarte como líder: mensaje, canales y colaboraciones." },
      { paso: "Producción premium", desc: "2 sesiones al mes + colaboraciones con creadores de tu nicho." },
      { paso: "Embudo multicanal", desc: "Meta + Google Ads local + remarketing, todo medido." },
      { paso: "Optimización + acompañamiento", desc: "Dashboard en vivo y llamada semanal contigo." },
    ],
    resultado:
      "Te despegas de la competencia: presencia dominante, flujo constante de clientes y una marca que la gente reconoce en tu categoría.",
    idealSi: [
      "Ya validaste que tu producto vende",
      "Tienes presupuesto alto y quieres liderar",
      "Valoras colaboraciones e influencers",
    ],
    noSi: "Apenas empiezas — este plan es para escalar, no para arrancar.",
    notaPauta: true,
  },
];

export const planesLineaA = planes.filter((p) => p.linea === "A");
export const planesLineaB = planes.filter((p) => p.linea === "B");
