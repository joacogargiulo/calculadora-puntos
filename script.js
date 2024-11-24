let tablaActual
let tablaAnual
let partidosRestantes

async function obtenerDatosTablas() {
    try {
        const response = await fetch('https://api-promiedos.onrender.com/posiciones'); 
        const data = await response.json();

        // Asignar las tablas recibidas a las variables locales
        tablaActual = data.tablaPuntosPrimera;
        tablaAnual = data.tablaAnual;

        calcularPuntos(tablaActual)
        calcularPuntos(tablaAnual)
        // Renderizar las tablas en la página
        renderTabla();
        renderTablaAnual();
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
    }
}

async function obtenerPartidos() {
    try {
        const response = await fetch('https://api-promiedos.onrender.com/partido')
        const data = await response.json()

        
        filtrarPartidos(data)
        
    } catch (error) {
        
    }
}


// Lista completa de partidosRestantes restantes con fechas
const partidos = [
    // Fecha 24
    { fecha: 24, equipo1: "Tigre", equipo2: "Instituto" },
    { fecha: 24, equipo1: "Huracan", equipo2: "Boca Juniors" },
    { fecha: 24, equipo1: "Riestra", equipo2: "Banfield" },
    { fecha: 24, equipo1: "Gimnasia (LP)", equipo2: "Atl Tucuman" },
    { fecha: 24, equipo1: "Godoy Cruz", equipo2: "Velez" },
    { fecha: 24, equipo1: "Lanus", equipo2: "Def y Justicia" },
    { fecha: 24, equipo1: "Central Cba (SdE)", equipo2: "Rosario Central" },
    { fecha: 24, equipo1: "Argentinos", equipo2: "Barracas Central" },
    { fecha: 24, equipo1: "Belgrano", equipo2: "Ind Rivadavia" },
    { fecha: 24, equipo1: "Newells", equipo2: "Independiente" },
    { fecha: 24, equipo1: "Sarmiento (J)", equipo2: "Platense" },
    { fecha: 24, equipo1: "Union", equipo2: "Talleres (C)" },
    { fecha: 24, equipo1: "Racing Club", equipo2: "Estudiantes (LP)" },
    { fecha: 24, equipo1: "River Plate", equipo2: "San Lorenzo" },
    // Fecha 25
    { fecha: 25, equipo1: "San Lorenzo", equipo2: "Belgrano" },
    { fecha: 25, equipo1: "Estudiantes (LP)", equipo2: "River Plate" },
    { fecha: 25, equipo1: "Banfield", equipo2: "Lanus" },
    { fecha: 25, equipo1: "Def y Justicia", equipo2: "Godoy Cruz" },
    { fecha: 25, equipo1: "Instituto", equipo2: "Riestra" },
    { fecha: 25, equipo1: "Independiente", equipo2: "Central Cba (SdE)" },
    { fecha: 25, equipo1: "Rosario Central", equipo2: "Racing Club" },
    { fecha: 25, equipo1: "Velez", equipo2: "Sarmiento (J)" },
    { fecha: 25, equipo1: "Boca Juniors", equipo2: "Gimnasia (LP)" },
    { fecha: 25, equipo1: "Barracas Central", equipo2: "Tigre" },
    { fecha: 25, equipo1: "Platense", equipo2: "Union" },
    { fecha: 25, equipo1: "Talleres (C)", equipo2: "Huracan" },
    { fecha: 25, equipo1: "Ind Rivadavia", equipo2: "Argentinos" },
    { fecha: 25, equipo1: "Atl Tucuman", equipo2: "Newells" },
    // Fecha 26
    { fecha: 26, equipo1: "Argentinos", equipo2: "San Lorenzo" },
    { fecha: 26, equipo1: "Belgrano", equipo2: "Estudiantes (LP)" },
    { fecha: 26, equipo1: "Central Cba (SdE)", equipo2: "Racing Club" },
    { fecha: 26, equipo1: "Riestra", equipo2: "Barracas Central" },
    { fecha: 26, equipo1: "Gimnasia (LP)", equipo2: "Talleres (C)" },
    { fecha: 26, equipo1: "Godoy Cruz", equipo2: "Banfield" },
    { fecha: 26, equipo1: "Huracan", equipo2: "Platense" },
    { fecha: 26, equipo1: "Independiente", equipo2: "Atl Tucuman" },
    { fecha: 26, equipo1: "Lanus", equipo2: "Instituto" },
    { fecha: 26, equipo1: "Newells", equipo2: "Boca Juniors" },
    { fecha: 26, equipo1: "River Plate", equipo2: "Rosario Central" },
    { fecha: 26, equipo1: "Sarmiento (J)", equipo2: "Def y Justicia" },
    { fecha: 26, equipo1: "Tigre", equipo2: "Ind Rivadavia" },
    { fecha: 26, equipo1: "Union", equipo2: "Velez" },
    // Fecha 27
    { fecha: 27, equipo1: "Atl Tucuman", equipo2: "Central Cba (SdE)" },
    { fecha: 27, equipo1: "Banfield", equipo2: "Sarmiento (J)" },
    { fecha: 27, equipo1: "Barracas Central", equipo2: "Lanus" },
    { fecha: 27, equipo1: "Boca Juniors", equipo2: "Independiente" },
    { fecha: 27, equipo1: "Def y Justicia", equipo2: "Union" },
    { fecha: 27, equipo1: "Estudiantes (LP)", equipo2: "Argentinos" },
    { fecha: 27, equipo1: "Ind Rivadavia", equipo2: "Riestra" },
    { fecha: 27, equipo1: "Instituto", equipo2: "Godoy Cruz" },
    { fecha: 27, equipo1: "Platense", equipo2: "Gimnasia (LP)" },
    { fecha: 27, equipo1: "Racing Club", equipo2: "River Plate" },
    { fecha: 27, equipo1: "Rosario Central", equipo2: "Belgrano" },
    { fecha: 27, equipo1: "San Lorenzo", equipo2: "Tigre" },
    { fecha: 27, equipo1: "Talleres (C)", equipo2: "Newells" },
    { fecha: 27, equipo1: "Velez", equipo2: "Huracan" }
];

// Seleccionar elementos del DOM para ambas tablas.
const tbody = document.getElementById("tabla-puntos");
const tbodyAnual = document.getElementById("tabla-anual");

function filtrarPartidos(proxPartido) {    
    indice = partidos.findIndex(obj => 
            obj.equipo1 === proxPartido.equipo1 &&
            obj.equipo2 === proxPartido.equipo2
        );
    if (indice === -1){
        console.log("error filtrando");
        return partidos;
    }
        
    // Retorna los elementos desde el índice encontrado
    partidosRestantes =  partidos.slice(indice);
    renderizarPartidos()
}

// Generar la tabla inicial de puntos.
function renderTabla() {
    tbody.innerHTML = ""; // Limpiar la tabla antes de actualizar
    tablaActual.sort((a, b) => b.pts - a.pts || b.dif - a.dif); // Ordenar por puntos y diferencia de goles

    tablaActual.forEach((equipo, index) => {
        const row = document.createElement("tr");

        const cells = [
            index + 1,
            equipo.equipo,
            equipo.pts,
            equipo.pj,
            equipo.pg,
            equipo.pe,
            equipo.pp,
            equipo.gf,
            equipo.gc,
            equipo.dif > 0 ? `+${equipo.dif}` : `${equipo.dif}`,
        ];

        cells.forEach(cellData => {
            const cell = document.createElement("td");
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        if (index === 0) {
            row.classList.add("libertadores")
        }

        tbody.appendChild(row);
    });
}

// Generar la tabla anual de puntos
function renderTablaAnual() {
    tbodyAnual.innerHTML = ""; // Limpiar la tabla antes de actualizar.
    
    // Ordenar la tabla por puntos y diferencia de goles.
    tablaAnual.sort((a, b) => b.pts - a.pts || b.dif - a.dif);

    // Verificar la posición de Estudiantes (LP).
    let estudiantesPos = tablaAnual.findIndex(e => e.equipo === "Estudiantes (LP)");
    let racingPos = tablaAnual.findIndex(e => e.equipo === "Racing Club");

    // Determinar clases de colores según posiciones.
    tablaAnual.forEach((equipo, index) => {
        const row = document.createElement("tr");
        const cells = [
            index + 1,
            equipo.equipo,
            equipo.pts,
            equipo.pj,
            equipo.pg,
            equipo.pe,
            equipo.pp,
            equipo.gf,
            equipo.gc,
            equipo.dif > 0 ? `+${equipo.dif}` : `${equipo.dif}`,
        ];

        cells.forEach((cellData, cellIndex) => {
            const cell = document.createElement("td");
            cell.textContent = cellData;
            row.appendChild(cell);

            // Aplicar colores según la clasificación.
            if (cellIndex === 0) {
                if (equipo.equipo === "Estudiantes (LP)" || equipo.equipo === "Racing Club") {
                    cell.classList.add("estudiantes");
                } else if (
                    index < 3 ||
                    (estudiantesPos >= 0 && estudiantesPos < 3 && index < 4) ||
                    (racingPos >= 0 && racingPos < 3 && index < 4) ||
                    (racingPos >= 0 && racingPos < 3 && estudiantesPos >= 0 && estudiantesPos < 3 && index < 5)
                ) {
                    cell.classList.add("libertadores");
                } else if (
                    index < 9 ||
                    (estudiantesPos >= 0 && estudiantesPos <= 8 && index < 10) ||
                    (racingPos >= 0 && racingPos < 8 && index < 10) ||
                    (racingPos >= 0 && racingPos < 8 && estudiantesPos >= 0 && estudiantesPos < 8 && index < 11)
                ) {
                    cell.classList.add("sudamericana");
                }
            } 
        });
        tbodyAnual.appendChild(row);
    });
}

// Calcular puntos y actualizar ambas tablas.
function calcularPuntos(tabla) {
    // Calcular nuevos puntos y estadísticas en base a los resultados ingresados.
    partidosRestantes.forEach((partido, index) => {
        const score1 = parseInt(document.getElementById(`score-${index}-team1`).value)
        const score2 = parseInt(document.getElementById(`score-${index}-team2`).value)
        
        if (!isNaN(score1) && !isNaN(score2)) {
            
            const equipo1 = tabla.find(e => e.equipo === partido.equipo1);
            const equipo2 = tabla.find(e => e.equipo === partido.equipo2);
    
            equipo1.pj += 1;
            equipo2.pj += 1;
            equipo1.gf += score1;
            equipo2.gf += score2;
            equipo1.gc += score2;
            equipo2.gc += score1;
    
            if (score1 > score2) {
                equipo1.pts += 3;
                equipo1.pg += 1;
                equipo2.pp += 1;
            } else if (score1 < score2) {
                equipo2.pts += 3;
                equipo2.pg += 1;
                equipo1.pp += 1;
            } else {
                equipo1.pts += 1;
                equipo2.pts += 1;
                equipo1.pe += 1;
                equipo2.pe += 1;
            }
    
            equipo1.dif = equipo1.gf - equipo1.gc;
            equipo2.dif = equipo2.gf - equipo2.gc;
        }
    });
        

}

// Generar los inputs para los partidosRestantes y dividir por fecha.
const matchesContainer = document.getElementById("matches-container");
let currentFecha = null;

function renderizarPartidos() {
    partidosRestantes.forEach((partido, index) => {    
        // Crear un divisor de fecha si cambia la fecha.
        if (currentFecha !== partido.fecha) {
            currentFecha = partido.fecha;
            const fechaDivisor = document.createElement("h3");
            fechaDivisor.textContent = `Fecha ${currentFecha}`;
            matchesContainer.appendChild(fechaDivisor);
        }
        
        // Crear el input para cada partido.
        const matchDiv = document.createElement("div");
        matchDiv.classList.add("match");
        
        matchDiv.innerHTML = `
        <label>${partido.equipo1} vs ${partido.equipo2}</label>
        <input type="number" id="score-${index}-team1" min=0>
        <span> - </span>
        <input type="number" id="score-${index}-team2" min="0">
        `;
        matchesContainer.appendChild(matchDiv);
    });
    obtenerDatosTablas()
}


// Función para generar resultados aleatorios entre 0 y 3 para cada input
function resultadosRandom() {
    partidosRestantes.forEach((_, index) => {
        const score1Input = document.getElementById(`score-${index}-team1`);
        const score2Input = document.getElementById(`score-${index}-team2`);
        
        score1Input.value = Math.floor(Math.random() * 4);
        score2Input.value = Math.floor(Math.random() * 4);
    });
}

matchesContainer.addEventListener("input", obtenerDatosTablas)

obtenerPartidos()