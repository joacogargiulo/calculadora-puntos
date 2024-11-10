// Datos iniciales de los equipos
const tablaActual = [
    { pos: 1, equipo: "Velez", pts: 42, pj: 21, pg: 12, pe: 6, pp: 3, gf: 34, gc: 14, dif: 20 },
    { pos: 2, equipo: "Huracan", pts: 42, pj: 22, pg: 11, pe: 9, pp: 2, gf: 25, gc: 11, dif: 14 },
    { pos: 3, equipo: "Union", pts: 36, pj: 22, pg: 10, pe: 6, pp: 6, gf: 24, gc: 21, dif: 3 },
    { pos: 4, equipo: "Racing Club", pts: 34, pj: 21, pg: 10, pe: 4, pp: 7, gf: 30, gc: 20, dif: 10 },
    { pos: 5, equipo: "River Plate", pts: 33, pj: 21, pg: 8, pe: 9, pp: 4, gf: 27, gc: 16, dif: 11 },
    { pos: 6, equipo: "Talleres (C)", pts: 33, pj: 21, pg: 8, pe: 9, pp: 4, gf: 25, gc: 22, dif: 3 },
    { pos: 7, equipo: "Atl Tucuman", pts: 33, pj: 22, pg: 9, pe: 6, pp: 7, gf: 21, gc: 22, dif: -1 },
    { pos: 8, equipo: "Independiente", pts: 30, pj: 22, pg: 6, pe: 12, pp: 4, gf: 19, gc: 14, dif: 5 },
    { pos: 9, equipo: "Riestra", pts: 30, pj: 21, pg: 8, pe: 6, pp: 7, gf: 22, gc: 22, dif: 0 },
    { pos: 10, equipo: "Instituto", pts: 29, pj: 21, pg: 8, pe: 5, pp: 8, gf: 27, gc: 22, dif: 5 },
    { pos: 11, equipo: "Estudiantes (LP)", pts: 29, pj: 21, pg: 7, pe: 8, pp: 6, gf: 24, gc: 22, dif: 2 },
    { pos: 12, equipo: "Gimnasia (LP)", pts: 29, pj: 22, pg: 7, pe: 8, pp: 7, gf: 20, gc: 19, dif: 1 },
    { pos: 13, equipo: "Platense", pts: 29, pj: 21, pg: 7, pe: 8, pp: 6, gf: 17, gc: 16, dif: 1 },
    { pos: 14, equipo: "Boca Juniors", pts: 28, pj: 21, pg: 7, pe: 7, pp: 7, gf: 25, gc: 23, dif: 2 },
    { pos: 15, equipo: "Godoy Cruz", pts: 28, pj: 21, pg: 6, pe: 10, pp: 5, gf: 23, gc: 23, dif: 0 },
    { pos: 16, equipo: "San Lorenzo", pts: 28, pj: 22, pg: 7, pe: 7, pp: 8, gf: 18, gc: 19, dif: -1 },
    { pos: 17, equipo: "Belgrano", pts: 27, pj: 21, pg: 6, pe: 9, pp: 6, gf: 24, gc: 24, dif: 0 },
    { pos: 18, equipo: "Tigre", pts: 26, pj: 21, pg: 6, pe: 8, pp: 7, gf: 25, gc: 24, dif: 1 },
    { pos: 19, equipo: "Lanus", pts: 26, pj: 21, pg: 6, pe: 8, pp: 7, gf: 22, gc: 28, dif: -6 },
    { pos: 20, equipo: "Rosario Central", pts: 25, pj: 22, pg: 6, pe: 7, pp: 9, gf: 23, gc: 22, dif: 1 },
    { pos: 21, equipo: "Ind Rivadavia", pts: 25, pj: 21, pg: 6, pe: 7, pp: 8, gf: 14, gc: 21, dif: -7 },
    { pos: 22, equipo: "Central Cba (SdE)", pts: 24, pj: 21, pg: 6, pe: 6, pp: 9, gf: 22, gc: 27, dif: -5 },
    { pos: 23, equipo: "Argentinos", pts: 23, pj: 21, pg: 6, pe: 5, pp: 10, gf: 17, gc: 22, dif: -5 },
    { pos: 24, equipo: "Banfield", pts: 22, pj: 21, pg: 5, pe: 7, pp: 9, gf: 20, gc: 27, dif: -7 },
    { pos: 25, equipo: "Def y Justicia", pts: 22, pj: 21, pg: 5, pe: 7, pp: 9, gf: 19, gc: 30, dif: -11 },
    { pos: 26, equipo: "Sarmiento (J)", pts: 21, pj: 21, pg: 4, pe: 9, pp: 8, gf: 15, gc: 21, dif: -6 },
    { pos: 27, equipo: "Newells", pts: 21, pj: 22, pg: 5, pe: 6, pp: 11, gf: 15, gc: 29, dif: -14 },
    { pos: 28, equipo: "Barracas Central", pts: 16, pj: 21, pg: 3, pe: 7, pp: 11, gf: 10, gc: 26, dif: -16 }
];

// Datos iniciales de la tabla anual de puntos, basada en la imagen proporcionada.
const tablaAnual = [
    { pos: 1, equipo: "Velez", pts: 67, pj: 35, pg: 19, pe: 10, pp: 6, gf: 48, gc: 27, dif: 21 },
    { pos: 2, equipo: "River Plate", pts: 60, pj: 35, pg: 15, pe: 15, pp: 5, gf: 53, gc: 26, dif: 27 },
    { pos: 3, equipo: "Racing Club", pts: 58, pj: 35, pg: 17, pe: 7, pp: 11, gf: 54, gc: 31, dif: 23 },
    { pos: 4, equipo: "Huracan", pts: 58, pj: 36, pg: 15, pe: 13, pp: 8, gf: 37, gc: 23, dif: 14 },
    { pos: 5, equipo: "Talleres (C)", pts: 57, pj: 35, pg: 14, pe: 15, pp: 6, gf: 49, gc: 38, dif: 11 },
    { pos: 6, equipo: "Godoy Cruz", pts: 57, pj: 35, pg: 15, pe: 12, pp: 8, gf: 39, gc: 29, dif: 10 },
    { pos: 7, equipo: "Estudiantes (LP)", pts: 56, pj: 35, pg: 15, pe: 11, pp: 9, gf: 43, gc: 31, dif: 12 },
    { pos: 8, equipo: "Union", pts: 56, pj: 36, pg: 15, pe: 11, pp: 10, gf: 40, gc: 35, dif: 5 },
    { pos: 9, equipo: "Boca Juniors", pts: 53, pj: 35, pg: 14, pe: 11, pp: 10, gf: 45, gc: 35, dif: 10 },
    { pos: 10, equipo: "Independiente", pts: 53, pj: 36, pg: 12, pe: 17, pp: 7, gf: 33, gc: 24, dif: 9 },
    { pos: 11, equipo: "Argentinos", pts: 49, pj: 35, pg: 13, pe: 10, pp: 12, gf: 42, gc: 36, dif: 6 },
    { pos: 12, equipo: "Lanus", pts: 49, pj: 35, pg: 13, pe: 10, pp: 12, gf: 42, gc: 42, dif: 0 },
    { pos: 13, equipo: "Def y Justicia", pts: 48, pj: 35, pg: 12, pe: 12, pp: 11, gf: 36, gc: 43, dif: -7 },
    { pos: 14, equipo: "Platense", pts: 47, pj: 35, pg: 11, pe: 14, pp: 10, gf: 27, gc: 30, dif: -3 },
    { pos: 15, equipo: "Instituto", pts: 46, pj: 35, pg: 13, pe: 7, pp: 15, gf: 45, gc: 39, dif: 6 },
    { pos: 16, equipo: "Gimnasia (LP)", pts: 45, pj: 36, pg: 12, pe: 9, pp: 15, gf: 38, gc: 42, dif: -4 },
    { pos: 17, equipo: "San Lorenzo", pts: 44, pj: 36, pg: 10, pe: 14, pp: 12, gf: 28, gc: 33, dif: -5 },
    { pos: 18, equipo: "Riestra", pts: 43, pj: 35, pg: 11, pe: 10, pp: 14, gf: 30, gc: 38, dif: -8 },
    { pos: 19, equipo: "Atl Tucuman", pts: 43, pj: 36, pg: 10, pe: 13, pp: 13, gf: 29, gc: 45, dif: -16 },
    { pos: 20, equipo: "Barracas Central", pts: 42, pj: 35, pg: 10, pe: 12, pp: 13, gf: 30, gc: 41, dif: -11 },
    { pos: 21, equipo: "Newells", pts: 42, pj: 36, pg: 11, pe: 9, pp: 16, gf: 28, gc: 44, dif: -16 },
    { pos: 22, equipo: "Belgrano", pts: 41, pj: 35, pg: 9, pe: 14, pp: 12, gf: 43, gc: 45, dif: -2 },
    { pos: 23, equipo: "Rosario Central", pts: 40, pj: 36, pg: 10, pe: 10, pp: 16, gf: 33, gc: 40, dif: -7 },
    { pos: 24, equipo: "Banfield", pts: 39, pj: 35, pg: 9, pe: 12, pp: 14, gf: 34, gc: 42, dif: -8 },
    { pos: 25, equipo: "Central Cba (SdE)", pts: 35, pj: 35, pg: 8, pe: 11, pp: 16, gf: 32, gc: 47, dif: -15 },
    { pos: 26, equipo: "Ind Rivadavia", pts: 33, pj: 35, pg: 8, pe: 9, pp: 18, gf: 27, gc: 46, dif: -19 },
    { pos: 27, equipo: "Tigre", pts: 31, pj: 35, pg: 7, pe: 10, pp: 18, gf: 32, gc: 49, dif: -17 },
    { pos: 28, equipo: "Sarmiento (J)", pts: 30, pj: 35, pg: 6, pe: 12, pp: 17, gf: 24, gc: 40, dif: -16 }
];



// Lista completa de partidos restantes con fechas
const partidosRestantes = [
    // Fecha 22
    { fecha: 22, equipo1: "Central Cba (SdE)", equipo2: "Estudiantes (LP)" },
    { fecha: 22, equipo1: "River Plate", equipo2: "Barracas Central" },
    { fecha: 22, equipo1: "Godoy Cruz", equipo2: "Talleres (C)" },
    { fecha: 22, equipo1: "Racing Club", equipo2: "Ind Rivadavia" },
    { fecha: 22, equipo1: "Sarmiento (J)", equipo2: "Boca Juniors" },
    { fecha: 22, equipo1: "Riestra", equipo2: "Velez" },
    { fecha: 22, equipo1: "Lanus", equipo2: "Platense" },
    { fecha: 22, equipo1: "Tigre", equipo2: "Def y Justicia" },
    { fecha: 22, equipo1: "Argentinos", equipo2: "Banfield" },
    { fecha: 22, equipo1: "Belgrano", equipo2: "Instituto" },
    // Fecha 23
    { fecha: 23, equipo1: "San Lorenzo", equipo2: "Racing Club" },
    { fecha: 23, equipo1: "Banfield", equipo2: "Tigre" },
    { fecha: 23, equipo1: "Def y Justicia", equipo2: "Riestra" },
    { fecha: 23, equipo1: "Platense", equipo2: "Godoy Cruz" },
    { fecha: 23, equipo1: "Atl Tucuman", equipo2: "Huracan" },
    { fecha: 23, equipo1: "Instituto", equipo2: "Argentinos" },
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
                } else if (index < 9 || (estudiantesPos >= 0 && estudiantesPos >= 3 && estudiantesPos <= 8 && index < 10)) {
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
        const score1 = parseInt(document.getElementById(`score-${index}-team1`).value) || 0;
        const score2 = parseInt(document.getElementById(`score-${index}-team2`).value) || 0;

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
    });

}

function actualizarPuntos() {
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
        <input type="number" id="score-${index}-team1" value="0" min=0>
        <span> - </span>
        <input type="number" id="score-${index}-team2" value="0">
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


// Renderizar ambas tablas inicialmente.
renderTabla();
renderTablaAnual();
