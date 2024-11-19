let tablaActual
let tablaAnual

function inicializarDatos() {
     tablaActual = [
        { pos: 1, equipo: "Velez", pts: 43, pj: 22, pg: 12, pe: 7, pp: 3, gf: 35, gc: 15, dif: 20 },
        { pos: 2, equipo: "Huracan", pts: 42, pj: 23, pg: 11, pe: 9, pp: 3, gf: 27, gc: 15, dif: 12 },
        { pos: 3, equipo: "Racing Club", pts: 40, pj: 23, pg: 12, pe: 4, pp: 7, gf: 34, gc: 22, dif: 12 },
        { pos: 4, equipo: "River Plate", pts: 36, pj: 22, pg: 9, pe: 9, pp: 4, gf: 30, gc: 16, dif: 14 },
        { pos: 5, equipo: "Talleres (C)", pts: 36, pj: 22, pg: 9, pe: 9, pp: 4, gf: 26, gc: 22, dif: 4 },
        { pos: 6, equipo: "Union", pts: 36, pj: 22, pg: 10, pe: 6, pp: 6, gf: 24, gc: 21, dif: 3 },
        { pos: 7, equipo: "Atl Tucuman", pts: 36, pj: 23, pg: 10, pe: 6, pp: 7, gf: 25, gc: 24, dif: 1 },
        { pos: 8, equipo: "Platense", pts: 33, pj: 23, pg: 8, pe: 9, pp: 6, gf: 18, gc: 16, dif: 2 },
        { pos: 9, equipo: "Instituto", pts: 32, pj: 23, pg: 9, pe: 5, pp: 9, gf: 29, gc: 25, dif: 4 },
        { pos: 10, equipo: "Riestra", pts: 32, pj: 23, pg: 8, pe: 8, pp: 7, gf: 24, gc: 24, dif: 0 },
        { pos: 11, equipo: "Boca Juniors", pts: 31, pj: 22, pg: 8, pe: 7, pp: 7, gf: 27, gc: 23, dif: 4 },
        { pos: 12, equipo: "Independiente", pts: 30, pj: 22, pg: 6, pe: 12, pp: 4, gf: 19, gc: 14, dif: 5 },
        { pos: 13, equipo: "Belgrano", pts: 30, pj: 22, pg: 7, pe: 9, pp: 6, gf: 27, gc: 25, dif: 2 },
        { pos: 14, equipo: "Estudiantes (LP)", pts: 30, pj: 22, pg: 7, pe: 9, pp: 6, gf: 25, gc: 23, dif: 2 },
        { pos: 15, equipo: "Gimnasia (LP)", pts: 29, pj: 22, pg: 7, pe: 8, pp: 7, gf: 20, gc: 19, dif: 1 },
        { pos: 16, equipo: "Tigre", pts: 29, pj: 23, pg: 7, pe: 8, pp: 8, gf: 26, gc: 28, dif: -2 },
        { pos: 17, equipo: "Godoy Cruz", pts: 28, pj: 23, pg: 6, pe: 10, pp: 7, gf: 23, gc: 25, dif: -2 },
        { pos: 18, equipo: "San Lorenzo", pts: 28, pj: 23, pg: 7, pe: 7, pp: 9, gf: 19, gc: 21, dif: -2 },
        { pos: 19, equipo: "Lanus", pts: 27, pj: 22, pg: 6, pe: 9, pp: 7, gf: 22, gc: 28, dif: -6 },
        { pos: 20, equipo: "Argentinos", pts: 26, pj: 23, pg: 7, pe: 5, pp: 11, gf: 18, gc: 23, dif: -5 },
        { pos: 21, equipo: "Def y Justicia", pts: 26, pj: 23, pg: 6, pe: 8, pp: 9, gf: 24, gc: 31, dif: -7 },
        { pos: 22, equipo: "Rosario Central", pts: 25, pj: 22, pg: 6, pe: 7, pp: 9, gf: 23, gc: 22, dif: 1 },
        { pos: 23, equipo: "Central Cba (SdE)", pts: 25, pj: 22, pg: 6, pe: 7, pp: 9, gf: 23, gc: 28, dif: -5 },
        { pos: 24, equipo: "Ind Rivadavia", pts: 25, pj: 22, pg: 6, pe: 7, pp: 9, gf: 15, gc: 23, dif: -8 },
        { pos: 25, equipo: "Banfield", pts: 22, pj: 23, pg: 5, pe: 7, pp: 11, gf: 20, gc: 29, dif: -9 },
        { pos: 26, equipo: "Sarmiento (J)", pts: 21, pj: 22, pg: 4, pe: 9, pp: 9, gf: 15, gc: 23, dif: -8 },
        { pos: 27, equipo: "Newells", pts: 21, pj: 22, pg: 5, pe: 6, pp: 11, gf: 15, gc: 29, dif: -14 },
        { pos: 28, equipo: "Barracas Central", pts: 16, pj: 22, pg: 3, pe: 7, pp: 12, gf: 10, gc: 29, dif: -19 }
    ];
    
    tablaAnual = [
        { pos: 1, equipo: "Velez", pts: 68, pj: 36, pg: 19, pe: 11, pp: 6, gf: 49, gc: 28, dif: 21 },
        { pos: 2, equipo: "Racing Club", pts: 64, pj: 37, pg: 19, pe: 7, pp: 11, gf: 58, gc: 33, dif: 25 },
        { pos: 3, equipo: "River Plate", pts: 63, pj: 36, pg: 16, pe: 15, pp: 5, gf: 56, gc: 26, dif: 30 },
        { pos: 4, equipo: "Talleres (C)", pts: 60, pj: 36, pg: 15, pe: 15, pp: 6, gf: 50, gc: 38, dif: 12 },
        { pos: 5, equipo: "Huracan", pts: 58, pj: 37, pg: 15, pe: 13, pp: 9, gf: 39, gc: 27, dif: 12 },
        { pos: 6, equipo: "Estudiantes (LP)", pts: 57, pj: 36, pg: 15, pe: 12, pp: 9, gf: 44, gc: 32, dif: 12 },
        { pos: 7, equipo: "Godoy Cruz", pts: 57, pj: 37, pg: 15, pe: 12, pp: 10, gf: 39, gc: 31, dif: 8 },
        { pos: 8, equipo: "Boca Juniors", pts: 56, pj: 36, pg: 15, pe: 11, pp: 10, gf: 47, gc: 35, dif: 12 },
        { pos: 9, equipo: "Union", pts: 56, pj: 36, pg: 15, pe: 11, pp: 10, gf: 40, gc: 35, dif: 5 },
        { pos: 10, equipo: "Independiente", pts: 53, pj: 36, pg: 12, pe: 17, pp: 7, gf: 33, gc: 24, dif: 9 },
        { pos: 11, equipo: "Argentinos", pts: 52, pj: 37, pg: 14, pe: 10, pp: 13, gf: 43, gc: 37, dif: 6 },
        { pos: 12, equipo: "Def y Justicia", pts: 52, pj: 37, pg: 13, pe: 13, pp: 11, gf: 41, gc: 44, dif: -3 },
        { pos: 13, equipo: "Platense", pts: 51, pj: 37, pg: 12, pe: 15, pp: 10, gf: 28, gc: 30, dif: -2 },
        { pos: 14, equipo: "Lanus", pts: 50, pj: 36, pg: 13, pe: 11, pp: 12, gf: 42, gc: 42, dif: 0 },
        { pos: 15, equipo: "Instituto", pts: 49, pj: 37, pg: 14, pe: 7, pp: 16, gf: 47, gc: 42, dif: 5 },
        { pos: 16, equipo: "Atl Tucuman", pts: 46, pj: 37, pg: 11, pe: 13, pp: 13, gf: 33, gc: 47, dif: -14 },
        { pos: 17, equipo: "Gimnasia (LP)", pts: 45, pj: 36, pg: 12, pe: 9, pp: 15, gf: 38, gc: 42, dif: -4 },
        { pos: 18, equipo: "Riestra", pts: 45, pj: 37, pg: 11, pe: 12, pp: 14, gf: 32, gc: 40, dif: -8 },
        { pos: 19, equipo: "Belgrano", pts: 44, pj: 36, pg: 10, pe: 14, pp: 12, gf: 46, gc: 46, dif: 0 },
        { pos: 20, equipo: "San Lorenzo", pts: 44, pj: 37, pg: 10, pe: 14, pp: 13, gf: 29, gc: 35, dif: -6 },
        { pos: 21, equipo: "Barracas Central", pts: 42, pj: 36, pg: 10, pe: 12, pp: 14, gf: 30, gc: 44, dif: -14 },
        { pos: 22, equipo: "Newells", pts: 42, pj: 36, pg: 11, pe: 9, pp: 16, gf: 28, gc: 44, dif: -16 },
        { pos: 23, equipo: "Rosario Central", pts: 40, pj: 36, pg: 10, pe: 10, pp: 16, gf: 33, gc: 40, dif: -7 },
        { pos: 24, equipo: "Banfield", pts: 39, pj: 37, pg: 9, pe: 12, pp: 16, gf: 34, gc: 44, dif: -10 },
        { pos: 25, equipo: "Central Cba (SdE)", pts: 36, pj: 36, pg: 8, pe: 12, pp: 16, gf: 33, gc: 48, dif: -15 },
        { pos: 26, equipo: "Tigre", pts: 34, pj: 37, pg: 8, pe: 10, pp: 19, gf: 33, gc: 53, dif: -20 },
        { pos: 27, equipo: "Ind Rivadavia", pts: 33, pj: 36, pg: 8, pe: 9, pp: 19, gf: 28, gc: 48, dif: -20 },
        { pos: 28, equipo: "Sarmiento (J)", pts: 30, pj: 36, pg: 6, pe: 12, pp: 18, gf: 24, gc: 42, dif: -18 }
    ];
}


// Lista completa de partidos restantes con fechas
const partidosRestantes = [
    // Fecha 23
    { fecha: 23, equipo1: "Newells", equipo2: "Central Cba (SdE)" },
    { fecha: 23, equipo1: "Estudiantes (LP)", equipo2: "Rosario Central" },
    { fecha: 23, equipo1: "Velez", equipo2: "Lanus" },
    { fecha: 23, equipo1: "Boca Juniors", equipo2: "Union" },
    { fecha: 23, equipo1: "Barracas Central", equipo2: "Belgrano" },
    { fecha: 23, equipo1: "Independiente", equipo2: "Gimnasia (LP)" },
    { fecha: 23, equipo1: "Talleres (C)", equipo2: "Sarmiento (J)" },
    { fecha: 23, equipo1: "Ind Rivadavia", equipo2: "River Plate" },
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
            equipo.dif,
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
            equipo.dif,
        ];

        cells.forEach((cellData, cellIndex) => {
            const cell = document.createElement("td");
            cell.textContent = cellData;
            row.appendChild(cell);

            // Aplicar colores según la clasificación.
            if (cellIndex === 0) {
                if (equipo.equipo === "Estudiantes (LP)") {
                    cell.classList.add("estudiantes");
                } else if (index < 3 || (estudiantesPos >= 0 && estudiantesPos < 3 && index < 4)) {
                    cell.classList.add("libertadores");
                } else if (index < 9 || (estudiantesPos >= 0 && estudiantesPos <= 8 && index < 10)) {
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

            window.scrollTo({
                top: 0,
                behavior: 'instant'
            })
        }
    });
        

}

function actualizarPuntos() {
    inicializarDatos()
    calcularPuntos(tablaActual)
    calcularPuntos(tablaAnual)
    // Renderizar ambas tablas.
    renderTabla();
    renderTablaAnual();
}

// Generar los inputs para los partidos y dividir por fecha.
const matchesContainer = document.getElementById("matches-container");
let currentFecha = null;

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


// Función para generar resultados aleatorios entre 0 y 3 para cada input
function resultadosRandom() {
    partidosRestantes.forEach((_, index) => {
        const score1Input = document.getElementById(`score-${index}-team1`);
        const score2Input = document.getElementById(`score-${index}-team2`);
        
        score1Input.value = Math.floor(Math.random() * 4);
        score2Input.value = Math.floor(Math.random() * 4);
    });
}

matchesContainer.addEventListener("input", actualizarPuntos)


// Renderizar ambas tablas inicialmente.
inicializarDatos()
renderTabla();
renderTablaAnual();
