// =========================================================================
// 1. DATOS DE LOS PERFILES (ARQUETIPOS OFICIALES) BASADOS EN TERRENO
// Opciones: estudiante, trabajador, turista, jubilado, desempleado
// =========================================================================
const researchData = {
  valparaiso: {
    name: "Plaza Sotomayor · Valparaíso",
    surveys: 96,
    traces: 49,
    archetypes: [
      {
        id: 'estudiante',
        label: 'Estudiante',
        pct: 18,
        count: 17,
        color: '#e24a5b', // Rojo suave
        speed: 'Rápido',
        topDiff: 'Dificultad para cruzar las calles',
        desc: 'Desplazamiento diario hacia centros de estudio y combinación con locomoción colectiva.',
        motives: [
          { name: 'Tránsito de paso/conexión', pct: 59 },
          { name: 'Espera', pct: 24 },
          { name: 'Turismo', pct: 17 },
          { name: 'Trámites', pct: 0 },
          { name: 'Comercio', pct: 0 }
        ]
      },
      {
        id: 'trabajador',
        label: 'Trabajador',
        pct: 66,
        count: 63,
        color: '#f28e4b', // Naranja suave
        speed: 'Rápido',
        topDiff: 'Tránsito de vehículos',
        desc: 'Personas que trabajan en oficinas, el puerto o servicios. Priorizan trayectos directos en horarios punta.',
        motives: [
          { name: 'Trámites', pct: 41 },
          { name: 'Tránsito de paso/conexión', pct: 37 },
          { name: 'Espera', pct: 22 },
          { name: 'Turismo', pct: 0 },
          { name: 'Comercio', pct: 0 }
        ]
      },
      {
        id: 'turista',
        label: 'Turista',
        pct: 25,
        count: 24,
        color: '#62b07c', // Verde suave
        speed: 'Lento',
        topDiff: 'Falta de señalización u orientación',
        desc: 'Personas que visitan la plaza para pasear, sacar fotos o conocer los monumentos patrimoniales.',
        motives: [
          { name: 'Turismo', pct: 67 },
          { name: 'Espera', pct: 21 },
          { name: 'Tránsito de paso/conexión', pct: 12 },
          { name: 'Trámites', pct: 0 },
          { name: 'Comercio', pct: 0 }
        ]
      },
      {
        id: 'jubilado',
        label: 'Jubilado',
        pct: 11,
        count: 11,
        color: '#9f82c4', // Lila suave
        speed: 'Medio',
        topDiff: 'Cantidad de personas en las veredas',
        desc: 'Adultos mayores que frecuentan la plaza para realizar trámites personales o descansar en bancos.',
        motives: [
          { name: 'Trámites', pct: 54 },
          { name: 'Tránsito de paso/conexión', pct: 28 },
          { name: 'Espera', pct: 18 },
          { name: 'Turismo', pct: 0 },
          { name: 'Comercio', pct: 0 }
        ]
      },
      {
        id: 'desempleado',
        label: 'Desempleado',
        pct: 5,
        count: 5,
        color: '#f0c652', // Amarillo suave
        speed: 'Lento',
        topDiff: 'Falta de espacio para caminar',
        desc: 'Permanencia en la plaza mientras realizan gestiones o esperan oportunidades laborales y comerciales.',
        motives: [
          { name: 'Comercio', pct: 60 },
          { name: 'Espera', pct: 25 },
          { name: 'Tránsito de paso/conexión', pct: 15 },
          { name: 'Trámites', pct: 0 },
          { name: 'Turismo', pct: 0 }
        ]
      }
    ]
  },
  buenosaires: {
    name: "Plaza de Mayo · Buenos Aires",
    surveys: 40,
    traces: 47,
    archetypes: [
      {
        id: 'estudiante',
        label: 'Estudiante',
        pct: 30,
        count: 12,
        color: '#e24a5b',
        speed: 'Rápido',
        topDiff: 'Dificultad para cruzar las calles',
        desc: 'Combinación entre líneas de subte (A, D, E) y paradas de colectivos para dirigirse a universidades.',
        motives: [
          { name: 'Tránsito de paso/conexión', pct: 70 },
          { name: 'Espera', pct: 20 },
          { name: 'Turismo', pct: 10 },
          { name: 'Trámites', pct: 0 },
          { name: 'Comercio', pct: 0 }
        ]
      },
      {
        id: 'trabajador',
        label: 'Trabajador',
        pct: 50,
        count: 20,
        color: '#f28e4b',
        speed: 'Rápido',
        topDiff: 'Tránsito de vehículos',
        desc: 'Flujo laboral del microcentro de la ciudad que cruza avenidas anchas entre ministerios y bancos.',
        motives: [
          { name: 'Trámites', pct: 55 },
          { name: 'Tránsito de paso/conexión', pct: 35 },
          { name: 'Espera', pct: 10 },
          { name: 'Turismo', pct: 0 },
          { name: 'Comercio', pct: 0 }
        ]
      },
      {
        id: 'turista',
        label: 'Turista',
        pct: 50,
        count: 20,
        color: '#62b07c',
        speed: 'Lento',
        topDiff: 'Tiempos de espera para cruzar',
        desc: 'Recorrido en torno a la Casa Rosada, el Cabildo y la Pirámide de Mayo con paradas frecuentes para fotos.',
        motives: [
          { name: 'Turismo', pct: 75 },
          { name: 'Tránsito de paso/conexión', pct: 15 },
          { name: 'Espera', pct: 10 },
          { name: 'Trámites', pct: 0 },
          { name: 'Comercio', pct: 0 }
        ]
      },
      {
        id: 'jubilado',
        label: 'Jubilado',
        pct: 12,
        count: 5,
        color: '#9f82c4',
        speed: 'Medio',
        topDiff: 'Cantidad de personas en las esquinas',
        desc: 'Vecinos de la zona que acuden a trámites bancarios o caminan por los senderos arbolados de la plaza.',
        motives: [
          { name: 'Trámites', pct: 60 },
          { name: 'Tránsito de paso/conexión', pct: 25 },
          { name: 'Espera', pct: 15 },
          { name: 'Turismo', pct: 0 },
          { name: 'Comercio', pct: 0 }
        ]
      },
      {
        id: 'desempleado',
        label: 'Desempleado',
        pct: 8,
        count: 3,
        color: '#f0c652',
        speed: 'Lento',
        topDiff: 'Espacio para caminar',
        desc: 'Permanencia temporal en el eje central de la plaza en horarios diurnos.',
        motives: [
          { name: 'Comercio', pct: 65 },
          { name: 'Espera', pct: 20 },
          { name: 'Tránsito de paso/conexión', pct: 15 },
          { name: 'Trámites', pct: 0 },
          { name: 'Turismo', pct: 0 }
        ]
      }
    ]
  }
};

// Lista fija oficial de los 5 motivos solicitados
const allMotives = [
  'Tránsito de paso/conexión',
  'Trámites',
  'Turismo',
  'Espera',
  'Comercio'
];

// =========================================================================
// 2. ESTADO ACTUAL DE LA APLICACIÓN
// =========================================================================
const TOTAL_SCREENS = 3;
const MAIN_FONT = '"Plus Jakarta Sans", system-ui, sans-serif';

let currentScreen = 1;
let currentTerritory = 'valparaiso';
let selectedArchetypeId = 'estudiante';
let s3SliderValue = 0; // 0 = Chile (Valparaíso), 1 = Ambos (Comparativa), 2 = Argentina (Buenos Aires)
let timeTick = 0;

let ambientMorph = 0;
let ambientTarget = 0;

// Variables para la transición zoom entre pantalla 2 y pantalla 3
let s2ToS3Transition = 0;
let s2ToS3Target = 0;

// =========================================================================
// 3. CÍRCULOS CON FLUJO DIRECCIONAL + ANIMACIÓN ZOOM AL PASAR A PANTALLA 2
// =========================================================================
const LOOSE_CIRCLE_COUNT = 150; // 30 círculos por cada uno de los 5 perfiles

// Dirección de movimiento en la Pantalla 1 según el grupo de color:
// 0 = Rojo (arriba), 1 = Naranja (derecha), 2 = Verde (abajo),
// 3 = Lila (izquierda), 4 = Amarillo (diagonal arriba-derecha)
const groupDirections = [
  { vx: 0, vy: -1 },      // Rojo: sube
  { vx: 1, vy: 0 },       // Naranja: va hacia la derecha
  { vx: 0, vy: 1 },       // Verde: baja
  { vx: -1, vy: 0 },      // Lila: va hacia la izquierda
  { vx: 0.72, vy: -0.72 } // Amarillo: sube en diagonal
];

// Genera una lista fija de 150 círculos repartidos desde el inicio por toda la pantalla
const ambientParticles = Array.from({ length: LOOSE_CIRCLE_COUNT }, (_, i) => {
  const group = i % 5;
  const indexInGroup = Math.floor(i / 5); // 0..29 dentro de su fila ordenada

  const seedA = Math.sin(i * 12.9898) * 43758.5453;
  const randA = seedA - Math.floor(seedA);
  const seedB = Math.sin(i * 78.233 + 1.5) * 43758.5453;
  const randB = seedB - Math.floor(seedB);
  const seedC = Math.sin(i * 45.164 + 3.2) * 43758.5453;
  const randC = seedC - Math.floor(seedC);

  return {
    group,
    indexInGroup,
    // Posición normalizada actual (0 a 1) que avanza continuamente en su dirección
    x: randA,
    y: randB,
    // Velocidad propia (pausada) + un leve vaivén lateral para que no se vean rígidos
    speed: 0.00035 + randC * 0.00055,
    swayAmp: 0.00008 + randA * 0.0001,
    swayFreq: 0.006 + randB * 0.008,
    phase: randC * Math.PI * 2,
    // Velocidad del ciclo interno de aparecer/desaparecer en ruta
    fadePhase: randA * Math.PI * 2,
    fadeSpeed: 0.009 + randB * 0.008,
    // Radio suelto en Pantalla 1 vs ordenado en Pantalla 2
    freeRadius: 4 + randC * 15,
    orderedRadius: 4.2,
    maxAlpha: 0.45 + randA * 0.35
  };
});

function drawAmbientCircles(t) {
  const canvas = document.getElementById('ambient-circles-canvas');
  if (!canvas) return;

  // Acerca suavemente ambientMorph hacia su meta (0 en Pantalla 1, 1 al salir)
  ambientMorph += (ambientTarget - ambientMorph) * 0.08;
  if (Math.abs(ambientTarget - ambientMorph) < 0.001) {
    ambientMorph = ambientTarget;
  }

  // En Pantalla 2 y 3, cuando termina el zoom de salida, ocultamos este lienzo de fondo
  if (currentScreen !== 1 && ambientMorph > 0.96) {
    canvas.style.opacity = '0';
    return;
  }
  canvas.style.opacity = '1';

  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const archetypes = researchData[currentTerritory].archetypes;
  const centerX = w / 2;
  const centerY = h / 2;

  // Efecto zoom hacia afuera mientras se desvanece al pasar de Pantalla 1 a Pantalla 2
  const zoomScale = 1 + ambientMorph * 1.15;
  const transitionFade = 1 - ambientMorph;

  ambientParticles.forEach((p) => {
    const color = (archetypes[p.group] && archetypes[p.group].color) || '#d63447';
    const dir = groupDirections[p.group];

    // Avanza continuamente según la dirección de su color
    const sway = Math.sin(t * p.swayFreq + p.phase) * p.swayAmp;
    p.x += dir.vx * p.speed + (-dir.vy) * sway;
    p.y += dir.vy * p.speed + dir.vx * sway;

    // Si sale por un borde, reaparece por el borde opuesto para que nunca quede vacío
    if (p.x > 1.06) p.x = -0.06;
    if (p.x < -0.06) p.x = 1.06;
    if (p.y > 1.06) p.y = -0.06;
    if (p.y < -0.06) p.y = 1.06;

    // Desvanecimiento suave en bordes + respiración individual
    const edgeFadeX = Math.min(1, Math.max(0, Math.min(p.x + 0.06, 1.06 - p.x) / 0.16));
    const edgeFadeY = Math.min(1, Math.max(0, Math.min(p.y + 0.06, 1.06 - p.y) / 0.16));
    const edgeFade = edgeFadeX * edgeFadeY;

    const pulseFade = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t * p.fadeSpeed + p.fadePhase));
    const freeAlpha = p.maxAlpha * edgeFade * pulseFade * transitionFade;

    let px = p.x * w;
    let py = p.y * h;

    // Aplica el empuje del "zoom" al salir de la portada
    px = centerX + (px - centerX) * zoomScale;
    py = centerY + (py - centerY) * zoomScale;

    const r = p.freeRadius * (0.65 + 0.35 * pulseFade) * (1 + ambientMorph * 0.9);

    ctx.beginPath();
    ctx.arc(px, py, Math.max(1.5, r), 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = Math.max(0, freeAlpha);
    ctx.fill();
  });

  ctx.globalAlpha = 1;
}

// =========================================================================
// 4. NAVEGACIÓN ENTRE PANTALLAS Y SLIDER CONTINUO
// =========================================================================
function onScreen3SliderChange(val) {
  // val va de 0 (Chile 100%) a 50 (Centro / Promedio) a 100 (Argentina 100%)
  s3SliderValue = parseFloat(val);
  updateSliderLabelsUI();
  updateScreen3ModalIfOpen();
}

function updateScreen3ModalIfOpen() {
  const modal = document.getElementById('s3-detail-modal');
  if (!modal || modal.classList.contains('hidden')) return;

  const valpo = researchData.valparaiso;
  const baires = researchData.buenosaires;
  const blend = Math.max(0, Math.min(1, s3SliderValue / 100));

  const archV = valpo.archetypes.find((a) => a.id === selectedArchetypeId) || valpo.archetypes[0];
  const archB = baires.archetypes.find((a) => a.id === selectedArchetypeId) || baires.archetypes[0];

  const interpPct = Math.round(archV.pct * (1 - blend) + archB.pct * blend);
  const blendedMotives = allMotives.map((mName) => {
    const mV = archV.motives.find((m) => m.name === mName) || { pct: 0 };
    const mB = archB.motives.find((m) => m.name === mName) || { pct: 0 };
    return { name: mName, pct: Math.round(mV.pct * (1 - blend) + mB.pct * blend) };
  });

  let labelSuffix = '';
  if (blend >= 0.25 && blend <= 0.75) labelSuffix = ' (Promedio)';

  openS3DetailModal({
    id: archV.id,
    label: archV.label + labelSuffix,
    pct: interpPct,
    color: archV.color,
    speed: blend > 0.5 ? archB.speed : archV.speed,
    topDiff: blend > 0.5 ? archB.topDiff : archV.topDiff,
    desc: blend > 0.5 ? archB.desc : archV.desc,
    motives: blendedMotives
  });
}

function setScreen3Slider(val) {
  const slider = document.getElementById('s3-territory-slider');
  if (slider) {
    slider.value = val;
    onScreen3SliderChange(val);
  }
}

function updateSliderLabelsUI() {
  const chileLbl = document.getElementById('slider-label-chile');
  const ambosLbl = document.getElementById('slider-label-ambos');
  const argLbl = document.getElementById('slider-label-arg');

  if (!chileLbl || !ambosLbl || !argLbl) return;

  const isChile = s3SliderValue < 25;
  const isMid = s3SliderValue >= 25 && s3SliderValue <= 75;
  const isArg = s3SliderValue > 75;

  chileLbl.className = isChile ? 'cursor-pointer transition text-wire-ink font-bold' : 'cursor-pointer transition text-wire-muted hover:text-wire-ink';
  ambosLbl.className = isMid ? 'cursor-pointer transition text-wire-ink font-bold text-[10px] uppercase tracking-wider' : 'cursor-pointer transition text-wire-muted hover:text-wire-ink text-[10px] uppercase tracking-wider';
  argLbl.className = isArg ? 'cursor-pointer transition text-wire-ink font-bold' : 'cursor-pointer transition text-wire-muted hover:text-wire-ink';
}

function goToScreen(num) {
  const prevScreen = currentScreen;
  currentScreen = num;

  // Control de animaciones de zoom
  ambientTarget = num === 1 ? 0 : 1;
  s2ToS3Target = num === 3 ? 1 : 0;

  // Cierra el modal de la pantalla 3 si cambiamos de pantalla
  if (num !== 3) closeS3DetailModal();

  // Activa solo la pantalla elegida y oculta las demás con transición suave
  document.querySelectorAll('.slide-screen').forEach((sec, idx) => {
    const isTarget = idx + 1 === num;
    sec.classList.toggle('active', isTarget);
    if (isTarget) {
      sec.style.opacity = '0';
      sec.style.transform = 'scale(0.97) translateY(6px)';
      setTimeout(() => {
        sec.style.transition = 'opacity 0.45s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
        sec.style.opacity = '1';
        sec.style.transform = 'scale(1) translateY(0)';
      }, 20);
    }
  });

  const header = document.getElementById('global-header');
  const sideNav = document.getElementById('side-nav');
  const footer = document.getElementById('global-footer');
  const arrowIcon = document.getElementById('footer-arrow-icon');
  const mainStage = document.getElementById('main-stage');

  if (num === 1) {
    header.classList.add('opacity-0', 'pointer-events-none');
    sideNav.classList.add('opacity-0', 'pointer-events-none');
    footer.classList.add('opacity-0');
    if (mainStage) mainStage.classList.remove('px-12', 'pr-28', 'pt-14', 'pb-8');
  } else {
    header.classList.remove('opacity-0', 'pointer-events-none');
    sideNav.classList.remove('opacity-0', 'pointer-events-none');
    footer.classList.remove('opacity-0');
    // Mantenemos pointer-events-none en el contenedor del footer para que nunca bloquee clics detrás; su botón tiene pointer-events-auto
    if (mainStage) mainStage.classList.add('px-12', 'pr-28', 'pt-14', 'pb-8');
  }

  document.querySelectorAll('.side-nav-btn').forEach((btn) => {
    const s = parseInt(btn.dataset.screen, 10);
    const label = btn.querySelector('span:first-child');
    const badge = btn.querySelector('span:last-child');
    const hoverBase = 'bg-wire-panel/90 border border-wire-border px-2.5 py-0.5 rounded-full shadow-xs opacity-0 translate-x-1 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200';
    if (s === num) {
      label.className = `text-[11px] text-wire-ink font-semibold ${hoverBase}`;
      badge.className = 'w-7 h-7 rounded-full border border-wire-ink bg-wire-ink text-white text-[11px] font-semibold flex items-center justify-center transition';
    } else {
      label.className = `text-[11px] text-wire-muted group-hover:text-wire-ink ${hoverBase}`;
      badge.className = 'w-7 h-7 rounded-full border border-wire-border bg-wire-panel text-wire-muted group-hover:text-wire-ink group-hover:border-wire-ink text-[11px] flex items-center justify-center transition';
    }
  });

  arrowIcon.style.transform = num === TOTAL_SCREENS ? 'rotate(180deg)' : 'rotate(0deg)';
  hideS2Tooltip();

  setTimeout(() => {
    resizeAllCanvases();
    if (num === 3) renderScreen3UI();
  }, 40);
}

function nextScreen() {
  const next = currentScreen >= TOTAL_SCREENS ? 1 : currentScreen + 1;
  goToScreen(next);
}

function setTerritory(terr) {
  currentTerritory = terr;
  const mapBtns = {
    valparaiso: document.getElementById('btn-valpo'),
    buenosaires: document.getElementById('btn-baires')
  };

  Object.entries(mapBtns).forEach(([key, btn]) => {
    if (!btn) return;
    if (key === terr) {
      btn.className = 'px-3 py-1 rounded transition bg-wire-ink text-white font-semibold';
    } else {
      btn.className = 'px-3 py-1 rounded transition text-wire-muted hover:text-wire-ink';
    }
  });

  const cityData = researchData[terr];
  selectedArchetypeId = cityData.archetypes[0].id;
  document.getElementById('s3-territory-tag').innerText = cityData.name;

  if (currentScreen === 2) {
    goToScreen(3);
  } else {
    renderScreen3UI();
  }
}

// =========================================================================
// 4B. PANTALLA 02: MASA DE PARTÍCULAS COMPARATIVA (DATOS REALES)
// =========================================================================
const s2LegendItems = [
  { id: 'estudiante', label: 'Estudiante', color: '#e24a5b' },
  { id: 'trabajador', label: 'Trabajador', color: '#f28e4b' },
  { id: 'turista', label: 'Turista', color: '#62b07c' },
  { id: 'jubilado', label: 'Jubilado', color: '#9f82c4' },
  { id: 'desempleado', label: 'Desempleado', color: '#f0c652' }
];

function createMassParticles(count, cityKey, clusterSide) {
  const archetypes = researchData[cityKey].archetypes;

  // Construye la lista de arquetipos garantizando que TODOS los 5 colores estén presentes.
  // Distribución real por número de encuestas:
  // Chile (96): Trabajador 63, Turista 24, Estudiante 17, Jubilado 11, Desempleado 5
  // Argentina (40): Trabajador 20, Turista 20, Estudiante 12, Jubilado 5, Desempleado 3
  const pool = [];
  archetypes.forEach((a) => {
    // Al menos 2 círculos por grupo para que siempre se vean los 5 colores
    const qty = Math.max(2, Math.round((a.count / (cityKey === 'valparaiso' ? 120 : 60)) * count));
    for (let k = 0; k < qty; k++) {
      pool.push(a);
    }
  });

  const list = [];
  for (let i = 0; i < count; i++) {
    const seed1 = Math.sin((i + 1) * 19.31 + (clusterSide === 'valpo' ? 1.4 : 8.7)) * 43758.5453;
    const r1 = seed1 - Math.floor(seed1);
    const seed2 = Math.sin((i + 1) * 73.17 + (clusterSide === 'valpo' ? 2.8 : 12.3)) * 43758.5453;
    const r2 = seed2 - Math.floor(seed2);
    const seed3 = Math.sin((i + 1) * 41.89 + 5.7) * 43758.5453;
    const r3 = seed3 - Math.floor(seed3);

    const angle = r1 * Math.PI * 2;
    const dist = Math.pow(r2, 0.65);
    const arch = pool[i % pool.length];

    // Mayorías reales con opacidad plena (1.0).
    // Los de menor porcentaje aparecen en menor opacidad (0.38) pero claramente visibles.
    const isMajority = (cityKey === 'valparaiso' && arch.id === 'trabajador') ||
                       (cityKey === 'buenosaires' && (arch.id === 'trabajador' || arch.id === 'turista'));
    const defaultAlpha = isMajority ? 1.0 : 0.38;

    list.push({
      id: `${clusterSide}-${i}`,
      clusterSide,
      cityKey,
      archetype: arch,
      normX: Math.cos(angle) * dist,
      normY: Math.sin(angle) * dist,
      baseRadius: 3.8 + r3 * 4.6,
      defaultAlpha,
      currentScale: 1.0,
      phase: r1 * Math.PI * 2,
      speed: 0.008 + r2 * 0.012,
      screenX: 0,
      screenY: 0
    });
  }
  return list;
}

// 96 encuestas reales en Valparaíso y 40 en Buenos Aires (sitio visualizando-los-flujos)
const s2ParticlesValpo = createMassParticles(96, 'valparaiso', 'valpo');
const s2ParticlesBa = createMassParticles(40, 'buenosaires', 'ba');
const s2AllParticles = [...s2ParticlesValpo, ...s2ParticlesBa];

let s2HoveredParticle = null;
let s2Mouse = { x: -9999, y: -9999 };

function showS2ParticleTooltip(p, clientX, clientY) {
  const tip = document.getElementById('s2-hover-tooltip');
  const wrapper = document.getElementById('s2-masses-wrapper');
  if (!tip || !wrapper) return;

  const arch = p.archetype;

  document.getElementById('s2-tip-badge').innerText = `${arch.pct}% del total`;
  document.getElementById('s2-tip-badge').style.backgroundColor = arch.color;
  document.getElementById('s2-tip-title').innerText = arch.label;
  document.getElementById('s2-tip-desc').innerText = arch.desc;

  const statsEl = document.getElementById('s2-tip-stats');
  statsEl.innerHTML = `
    <div class="flex items-center justify-between text-wire-muted">
      <span>Ritmo:</span>
      <span class="text-wire-ink font-semibold">${arch.speed}</span>
    </div>
    <div class="flex items-center justify-between text-wire-muted">
      <span class="whitespace-nowrap">Mayor dificultad:</span>
      <span class="text-wire-accent font-semibold ml-2 text-right">${arch.topDiff}</span>
    </div>
  `;

  tip.classList.remove('hidden');

  const rect = wrapper.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const tipW = tip.offsetWidth || 280;
  const tipH = tip.offsetHeight || 150;

  let left = x > rect.width * 0.6 ? x - tipW - 14 : x + 16;
  left = Math.max(10, Math.min(rect.width - tipW - 10, left));
  let top = Math.max(10, Math.min(rect.height - tipH - 10, y - tipH * 0.5));

  tip.style.left = `${left}px`;
  tip.style.top = `${top}px`;
}

function hideS2Tooltip() {
  const tip = document.getElementById('s2-hover-tooltip');
  if (tip) tip.classList.add('hidden');
  s2HoveredParticle = null;
}

function drawContextMassesCanvas(t) {
  const canvas = document.getElementById('context-masses-canvas');
  if (!canvas || !canvas.offsetParent) return;

  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const leftCx = w * 0.28;
  const rightCx = w * 0.72;
  // Posición centrada verticalmente con margen respecto a la flecha inferior
  const cy = h * 0.45;
  const spreadValpoX = Math.min(w * 0.17, 195);
  const spreadValpoY = Math.min(h * 0.26, 120);
  const spreadBaX = Math.min(w * 0.14, 155);
  const spreadBaY = Math.min(h * 0.23, 105);

  // Encabezados con encuestas y trazos totales exactos
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';

  ctx.fillStyle = '#0f172a';
  ctx.font = `700 13px ${MAIN_FONT}`;
  ctx.fillText('CHILE · PLAZA SOTOMAYOR', leftCx, Math.max(18, cy - spreadValpoY - 26));
  ctx.fillStyle = '#64748b';
  ctx.font = `500 11.5px ${MAIN_FONT}`;
  ctx.fillText('96 encuestas · 49 trazos', leftCx, Math.max(34, cy - spreadValpoY - 10));

  ctx.fillStyle = '#0f172a';
  ctx.font = `700 13px ${MAIN_FONT}`;
  ctx.fillText('ARGENTINA · PLAZA DE MAYO', rightCx, Math.max(18, cy - spreadBaY - 26));
  ctx.fillStyle = '#64748b';
  ctx.font = `500 11.5px ${MAIN_FONT}`;
  ctx.fillText('40 encuestas · 47 trazos', rightCx, Math.max(34, cy - spreadBaY - 10));

  // Sin línea separadora entre ambos lugares por petición de diseño

  // Dibuja cada partícula
  s2AllParticles.forEach((p) => {
    const isValpo = p.clusterSide === 'valpo';
    const cx = isValpo ? leftCx : rightCx;
    const sx = isValpo ? spreadValpoX : spreadBaX;
    const sy = isValpo ? spreadValpoY : spreadBaY;

    // Movimiento orgánico muy suave en su lugar
    const floatX = Math.cos(t * p.speed + p.phase) * 2.2;
    const floatY = Math.sin(t * p.speed + p.phase) * 2.2;
    p.screenX = cx + p.normX * sx + floatX;
    p.screenY = cy + p.normY * sy + floatY;

    // Ampliación suave del círculo específico seleccionado
    const isHovered = s2HoveredParticle && s2HoveredParticle.id === p.id;
    const targetScale = isHovered ? 2.4 : 1.0;
    p.currentScale += (targetScale - p.currentScale) * 0.2;

    const r = p.baseRadius * p.currentScale;

    ctx.beginPath();
    ctx.arc(p.screenX, p.screenY, Math.max(2, r), 0, Math.PI * 2);
    ctx.fillStyle = p.archetype.color;
    // Las mayorías tienen color sin opacidad, los demás menor opacidad; al hacer hover se iluminan al 100%
    ctx.globalAlpha = isHovered ? 1.0 : p.defaultAlpha;
    ctx.fill();

    // Aro blanco luminoso para destacar
    ctx.strokeStyle = isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.75)';
    ctx.lineWidth = isHovered ? 2.2 : 1.0;
    ctx.stroke();

    // Aro exterior pulsante si está seleccionado
    if (isHovered) {
      ctx.beginPath();
      ctx.arc(p.screenX, p.screenY, r + 4, 0, Math.PI * 2);
      ctx.strokeStyle = p.archetype.color;
      ctx.lineWidth = 1.4;
      ctx.globalAlpha = 0.6;
      ctx.stroke();
    }
  });
  ctx.globalAlpha = 1;

  // Leyenda inferior centrada con las 5 opciones oficiales
  const itemWidth = 112;
  const totalW = s2LegendItems.length * itemWidth;
  let lx = (w - totalW) / 2 + 10;
  const ly = h - 16;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';

  s2LegendItems.forEach((item) => {
    ctx.beginPath();
    ctx.arc(lx, ly, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = item.color;
    ctx.fill();

    ctx.fillStyle = '#475569';
    ctx.font = `500 11px ${MAIN_FONT}`;
    ctx.fillText(item.label, lx + 10, ly);
    lx += itemWidth;
  });
}

// =========================================================================
// 5. PANTALLA 03: MODAL FLOTANTE Y DETALLE POR PERFIL
// =========================================================================
function openS3DetailModal(arch) {
  const modal = document.getElementById('s3-detail-modal');
  if (!modal) return;

  document.getElementById('s3-pct-badge').innerText = `${arch.pct}%`;
  document.getElementById('s3-color-dot').style.backgroundColor = arch.color;
  document.getElementById('s3-title').innerText = arch.label;
  document.getElementById('s3-desc').innerText = arch.desc;
  document.getElementById('s3-speed').innerText = arch.speed;
  document.getElementById('s3-top-diff').innerText = arch.topDiff;

  const motivesList = document.getElementById('s3-motives-list');
  motivesList.innerHTML = '';

  // Renderiza los motivos reales correspondientes
  arch.motives.forEach((m) => {
    if (m.pct > 0) {
      const dotsCount = Math.max(1, Math.round(m.pct / 4));
      let dotsHtml = '';
      for (let i = 0; i < 25; i++) {
        const active = i < dotsCount;
        dotsHtml += `<span class="inline-block w-1.5 h-1.5 rounded-full ${active ? '' : 'opacity-20'}" style="background:${active ? arch.color : '#94a3b8'};"></span>`;
      }
      motivesList.innerHTML += `
        <div class="bg-wire-card/80 border border-wire-border/60 p-2.5 rounded-xl">
          <div class="flex justify-between text-xs mb-1">
            <span class="text-wire-ink font-medium">${m.name}</span>
            <span class="font-bold" style="color:${arch.color}">${m.pct}%</span>
          </div>
          <div class="flex items-center justify-between gap-0.5">${dotsHtml}</div>
        </div>
      `;
    }
  });

  modal.classList.remove('hidden');
}

function closeS3DetailModal() {
  const modal = document.getElementById('s3-detail-modal');
  if (modal) modal.classList.add('hidden');
}

// Mantener compatibilidad con renderScreen3UI
function renderScreen3UI() {
  const city = researchData[currentTerritory];
  const activeArch = city.archetypes.find((a) => a.id === selectedArchetypeId) || city.archetypes[0];
  // Si el modal está visible, actualiza sus datos en tiempo real
  const modal = document.getElementById('s3-detail-modal');
  if (modal && !modal.classList.contains('hidden')) {
    openS3DetailModal(activeArch);
  }
}

// =========================================================================
// 6. DIBUJO Y ANIMACIÓN DE LAS CONSTELACIONES (SLIDER CONTINUO CON SUPERPOSICIÓN)
// =========================================================================
function drawConstellationCanvas(t) {
  const canvas = document.getElementById('constellation-canvas');
  if (!canvas || !canvas.offsetParent) return;

  // Transición suave de entrada zoom entre Pantalla 2 y Pantalla 3
  s2ToS3Transition += (s2ToS3Target - s2ToS3Transition) * 0.08;
  const zoomEntrance = 0.82 + s2ToS3Transition * 0.18;

  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.scale(zoomEntrance, zoomEntrance);
  ctx.translate(-w / 2, -h / 2);

  canvas._hitTargets = [];

  // Factor de mezcla continuo (0 = Chile 100%, 0.5 = 50% promedio, 1.0 = Argentina 100%)
  const blend = Math.max(0, Math.min(1, s3SliderValue / 100));

  const valpo = researchData.valparaiso;
  const baires = researchData.buenosaires;

  // Anclas de posición de los 5 círculos en el canvas (aprovechando todo el ancho)
  const nebulaAnchors = [
    { x: w * 0.20, y: h * 0.28 }, // Estudiante
    { x: w * 0.44, y: h * 0.35 }, // Trabajador
    { x: w * 0.22, y: h * 0.68 }, // Turista
    { x: w * 0.46, y: h * 0.72 }, // Jubilado
    { x: w * 0.32, y: h * 0.50 }  // Desempleado
  ];

  // Anclas de los 5 motivos en la columna derecha
  const motiveAnchors = allMotives.map((mName, idx) => ({
    name: mName,
    x: w * 0.78,
    y: h * (0.19 + idx * 0.15)
  }));

  // Calcula para cada uno de los 5 arquetipos los datos interpolados
  const blendedArchetypes = valpo.archetypes.map((archV, idx) => {
    const archB = baires.archetypes[idx];

    // Promedio continuo del porcentaje real
    const interpPct = Math.round(archV.pct * (1 - blend) + archB.pct * blend);

    // Promedio de motivos
    const blendedMotives = allMotives.map((mName) => {
      const mV = archV.motives.find((m) => m.name === mName) || { pct: 0 };
      const mB = archB.motives.find((m) => m.name === mName) || { pct: 0 };
      const val = Math.round(mV.pct * (1 - blend) + mB.pct * blend);
      return { name: mName, pct: val };
    });

    // Etiquetas dinámicas según el slider
    let labelSuffix = '';
    if (blend < 0.2) labelSuffix = '';
    else if (blend > 0.8) labelSuffix = '';
    else labelSuffix = ' (Promedio)';

    return {
      id: archV.id,
      label: archV.label + labelSuffix,
      baseLabel: archV.label,
      pct: interpPct,
      pctChile: archV.pct,
      pctArg: archB.pct,
      color: archV.color,
      speed: blend > 0.5 ? archB.speed : archV.speed,
      topDiff: blend > 0.5 ? archB.topDiff : archV.topDiff,
      desc: blend > 0.5 ? archB.desc : archV.desc,
      motives: blendedMotives
    };
  });

  // 6.1 HILOS CURVOS HACIA LOS MOTIVOS
  blendedArchetypes.forEach((arch, idx) => {
    const start = nebulaAnchors[idx];
    const isSelected = arch.id === selectedArchetypeId;

    arch.motives.forEach((m) => {
      if (m.pct > 0) {
        const target = motiveAnchors.find((ma) => ma.name === m.name);
        if (!target) return;

        const threadCount = isSelected ? Math.max(3, Math.round(m.pct / 8)) : 2;
        for (let k = 0; k < threadCount; k++) {
          const spread = (k - threadCount / 2) * 3.5;
          ctx.beginPath();
          ctx.moveTo(start.x, start.y + spread);
          const cp1x = start.x + (target.x - start.x) * 0.45;
          const cp1y = start.y + spread * 1.5 + Math.sin(t * 0.02 + k) * 3;
          const cp2x = start.x + (target.x - start.x) * 0.62;
          const cp2y = target.y + spread;
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, target.x, target.y + spread * 0.5);

          ctx.strokeStyle = arch.color;
          ctx.globalAlpha = isSelected ? 0.75 : 0.22;
          ctx.lineWidth = isSelected ? 1.8 : 1.0;
          ctx.stroke();
        }
      }
    });
  });

  ctx.globalAlpha = 1;

  // 6.2 CÍRCULOS Y CONSTELACIONES CON EFECTO DE SUPERPOSICIÓN PROGRESIVA
  blendedArchetypes.forEach((arch, idx) => {
    const anchor = nebulaAnchors[idx];
    const isSelected = arch.id === selectedArchetypeId;
    const baseRadius = 26 + arch.pct * 1.25;
    const particleCount = Math.round(arch.pct * 2.8 + 14);

    canvas._hitTargets.push({ id: arch.id, arch, x: anchor.x, y: anchor.y, r: baseRadius + 14 });

    // Anillo exterior punteado
    ctx.beginPath();
    ctx.arc(anchor.x, anchor.y, baseRadius + 8, 0, Math.PI * 2);
    ctx.setLineDash([3, 4]);
    ctx.strokeStyle = isSelected ? arch.color : 'rgba(15,23,42,0.18)';
    ctx.lineWidth = isSelected ? 1.8 : 1;
    ctx.stroke();
    ctx.setLineDash([]);

    // Partículas orgánicas en espiral
    for (let p = 0; p < particleCount; p++) {
      const angle = p * 2.39996 + idx;
      const distRatio = Math.sqrt(p / particleCount);
      const organicWobble = Math.sin(angle * 3 + t * 0.025) * 3.5;
      const r = distRatio * baseRadius + organicWobble;
      const px = anchor.x + Math.cos(angle) * r;
      const py = anchor.y + Math.sin(angle) * r;
      const dotSize = (1 - distRatio * 0.52) * (isSelected ? 4.4 : 3.2);

      ctx.beginPath();
      ctx.arc(px, py, Math.max(1.3, dotSize), 0, Math.PI * 2);
      ctx.fillStyle = arch.color;
      ctx.globalAlpha = isSelected ? (0.45 + (1 - distRatio) * 0.55) : 0.38;
      ctx.fill();
    }

    // Etiqueta central: muestra el porcentaje actual y, si estamos cerca del medio,
    // aparecen superpuestos con opacidad los porcentajes de Chile y Argentina para comparar
    ctx.globalAlpha = 1;
    ctx.fillStyle = isSelected ? arch.color : '#ffffff';
    ctx.beginPath();

    // Expande ligeramente la pastilla si estamos en modo comparativa para que quepa la comparativa
    const isMidRange = blend >= 0.25 && blend <= 0.75;
    const pillW = isMidRange ? 134 : 108;
    const pillH = isMidRange ? 32 : 24;

    ctx.roundRect(anchor.x - pillW / 2, anchor.y - pillH / 2, pillW, pillH, 8);
    ctx.fill();
    ctx.strokeStyle = isSelected ? '#ffffff' : '#e8dbe6';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (isMidRange) {
      // Línea superior: Nombre del perfil y promedio
      ctx.fillStyle = isSelected ? '#ffffff' : '#0f172a';
      ctx.font = `700 10.5px ${MAIN_FONT}`;
      ctx.fillText(`${arch.baseLabel} ~${arch.pct}%`, anchor.x, anchor.y - 6);

      // Línea inferior: Comparativa superpuesta de Chile vs Argentina
      ctx.font = `600 8.5px ${MAIN_FONT}`;
      ctx.fillStyle = isSelected ? 'rgba(255,255,255,0.85)' : '#64748b';
      ctx.fillText(`CL: ${arch.pctChile}% · AR: ${arch.pctArg}%`, anchor.x, anchor.y + 7);
    } else {
      ctx.fillStyle = isSelected ? '#ffffff' : '#0f172a';
      ctx.font = `700 11px ${MAIN_FONT}`;
      ctx.fillText(`${arch.baseLabel} ${arch.pct}%`, anchor.x, anchor.y);
    }
  });

  // 6.3 NODOS DE LOS 5 MOTIVOS A LA DERECHA
  const activeArch = blendedArchetypes.find((a) => a.id === selectedArchetypeId) || blendedArchetypes[0];
  motiveAnchors.forEach((ma) => {
    const matchedMotive = activeArch.motives.find((m) => m.name === ma.name && m.pct > 0);
    const isConnected = Boolean(matchedMotive);

    ctx.beginPath();
    ctx.arc(ma.x, ma.y, isConnected ? 6.5 : 4, 0, Math.PI * 2);
    ctx.fillStyle = isConnected ? activeArch.color : '#cbd5e1';
    ctx.fill();

    ctx.fillStyle = isConnected ? '#0f172a' : '#64748b';
    ctx.font = isConnected ? `700 12px ${MAIN_FONT}` : `500 11.5px ${MAIN_FONT}`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    const pctText = matchedMotive ? ` (${matchedMotive.pct}%)` : '';
    ctx.fillText(`${ma.name}${pctText}`, ma.x + 14, ma.y);
  });

  ctx.restore();
}

// =========================================================================
// 7. TAMAÑO DE LOS CANVAS, CLIC EN CÍRCULOS Y BUCLE DE ANIMACIÓN
// =========================================================================
function resizeAllCanvases() {
  const ambient = document.getElementById('ambient-circles-canvas');
  if (ambient) {
    ambient.width = window.innerWidth;
    ambient.height = window.innerHeight;
  }

  ['context-masses-canvas', 'constellation-canvas'].forEach((id) => {
    const c = document.getElementById(id);
    if (c && c.parentElement) {
      const rect = c.parentElement.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        c.width = rect.width;
        c.height = rect.height;
      }
    }
  });
}

function animateLoop() {
  timeTick++;
  drawAmbientCircles(timeTick);
  if (currentScreen === 2) {
    drawContextMassesCanvas(timeTick);
  }
  if (currentScreen === 3) {
    drawConstellationCanvas(timeTick);
  }
  requestAnimationFrame(animateLoop);
}

// Inicialización cuando carga la página
document.addEventListener('DOMContentLoaded', () => {
  // Conexión garantizada del Slider continuo de la Pantalla 3
  const slider = document.getElementById('s3-territory-slider');
  if (slider) {
    slider.addEventListener('input', (e) => {
      onScreen3SliderChange(e.target.value);
    });
    slider.addEventListener('change', (e) => {
      onScreen3SliderChange(e.target.value);
    });
  }

  const canvasS2 = document.getElementById('context-masses-canvas');
  if (canvasS2) {
    canvasS2.addEventListener('mousemove', (e) => {
      const rect = canvasS2.getBoundingClientRect();
      const mx = (e.clientX - rect.left) * (canvasS2.width / rect.width);
      const my = (e.clientY - rect.top) * (canvasS2.height / rect.height);

      // Detecta si el cursor está sobre un círculo específico
      let closest = null;
      let minD = 18; // Distancia máxima para seleccionar el círculo
      for (const p of s2AllParticles) {
        const d = Math.hypot(mx - p.screenX, my - p.screenY);
        if (d < minD) {
          minD = d;
          closest = p;
        }
      }

      if (closest) {
        canvasS2.style.cursor = 'pointer';
        s2HoveredParticle = closest;
        showS2ParticleTooltip(closest, e.clientX, e.clientY);
      } else {
        canvasS2.style.cursor = 'default';
        hideS2Tooltip();
      }
    });

    canvasS2.addEventListener('mouseleave', () => {
      canvasS2.style.cursor = 'default';
      hideS2Tooltip();
    });
  }

  const canvas = document.getElementById('constellation-canvas');
  if (!canvas) return;

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
    const my = (e.clientY - rect.top) * (canvas.height / rect.height);

    if (canvas._hitTargets) {
      let hit = false;
      for (const target of canvas._hitTargets) {
        if (Math.hypot(mx - target.x, my - target.y) <= target.r) {
          selectedArchetypeId = target.id;
          openS3DetailModal(target.arch);
          hit = true;
          break;
        }
      }
      // Si hace clic en un espacio vacío, cerramos el modal
      if (!hit) {
        closeS3DetailModal();
      }
    }
  });

  window.addEventListener('resize', resizeAllCanvases);
  resizeAllCanvases();
  renderScreen3UI();
  animateLoop();
});
