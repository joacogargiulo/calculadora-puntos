// Datos iniciales de los equipos
const equipos = [
    { pos: 1, equipo: "Velez", pts: 42, pj: 21, pg: 12, pe: 6, pp: 3, gf: 34, gc: 14, dif: 20 },
    { pos: 2, equipo: "Huracan", pts: 39, pj: 21, pg: 10, pe: 9, pp: 2, gf: 24, gc: 11, dif: 13 },
    { pos: 3, equipo: "Racing Club", pts: 34, pj: 21, pg: 10, pe: 4, pp: 7, gf: 30, gc: 20, dif: 10 },
    { pos: 4, equipo: "River Plate", pts: 33, pj: 21, pg: 8, pe: 9, pp: 4, gf: 27, gc: 16, dif: 11 },
    { pos: 5, equipo: "Talleres (C)", pts: 33, pj: 21, pg: 9, pe: 6, pp: 6, gf: 25, gc: 22, dif: 3 },
    { pos: 6, equipo: "Union", pts: 33, pj: 21, pg: 9, pe: 6, pp: 6, gf: 21, gc: 19, dif: 2 },
    { pos: 7, equipo: "Atl Tucuman", pts: 33, pj: 21, pg: 9, pe: 6, pp: 6, gf: 22, gc: 20, dif: 2 },
    { pos: 8, equipo: "Independiente", pts: 30, pj: 21, pg: 6, pe: 12, pp: 3, gf: 19, gc: 13, dif: 6 },
    { pos: 9, equipo: "Riestra", pts: 30, pj: 21, pg: 8, pe: 6, pp: 7, gf: 22, gc: 22, dif: 0 },
    { pos: 10, equipo: "Instituto", pts: 29, pj: 21, pg: 8, pe: 5, pp: 8, gf: 27, gc: 22, dif: 5 },
    { pos: 11, equipo: "Estudiantes (LP)", pts: 29, pj: 21, pg: 7, pe: 8, pp: 6, gf: 24, gc: 22, dif: 2 },
    { pos: 12, equipo: "Platense", pts: 29, pj: 21, pg: 7, pe: 8, pp: 6, gf: 17, gc: 16, dif: 1 },
    { pos: 13, equipo: "Boca Juniors", pts: 28, pj: 21, pg: 7, pe: 7, pp: 7, gf: 25, gc: 23, dif: 2 },
    { pos: 14, equipo: "Godoy Cruz", pts: 28, pj: 21, pg: 6, pe: 10, pp: 5, gf: 23, gc: 23, dif: 0 },
    { pos: 15, equipo: "Belgrano", pts: 27, pj: 21, pg: 6, pe: 9, pp: 6, gf: 24, gc: 24, dif: 0 },
    { pos: 16, equipo: "Tigre", pts: 26, pj: 21, pg: 6, pe: 8, pp: 7, gf: 25, gc: 24, dif: 1 },
    { pos: 17, equipo: "Gimnasia (LP)", pts: 26, pj: 21, pg: 6, pe: 8, pp: 7, gf: 19, gc: 19, dif: 0 },
    { pos: 18, equipo: "Lanus", pts: 26, pj: 21, pg: 8, pe: 2, pp: 11, gf: 22, gc: 28, dif: -6 },
    { pos: 19, equipo: "Rosario Central", pts: 25, pj: 21, pg: 6, pe: 7, pp: 8, gf: 23, gc: 21, dif: 2 },
    { pos: 20, equipo: "San Lorenzo", pts: 25, pj: 21, pg: 6, pe: 7, pp: 8, gf: 17, gc: 19, dif: -2 },
    { pos: 21, equipo: "Ind Rivadavia", pts: 25, pj: 21, pg: 7, pe: 4, pp: 10, gf: 14, gc: 21, dif: -7 },
    { pos: 22, equipo: "Central Cba (SdE)", pts: 24, pj: 21, pg: 6, pe: 6, pp: 9, gf: 22, gc: 27, dif: -5 },
    { pos: 23, equipo: "Argentinos", pts: 23, pj: 21, pg: 6, pe: 5, pp: 10, gf: 17, gc: 22, dif: -5 },
    { pos: 24, equipo: "Banfield", pts: 22, pj: 21, pg: 5, pe: 7, pp: 9, gf: 20, gc: 27, dif: -7 },
    { pos: 25, equipo: "Def y Justicia", pts: 22, pj: 21, pg: 5, pe: 7, pp: 9, gf: 19, gc: 30, dif: -11 },
    { pos: 26, equipo: "Sarmiento (J)", pts: 21, pj: 21, pg: 4, pe: 9, pp: 8, gf: 15, gc: 21, dif: -6 },
    { pos: 27, equipo: "Newells", pts: 21, pj: 21, pg: 5, pe: 6, pp: 10, gf: 15, gc: 28, dif: -13 },
    { pos: 28, equipo: "Barracas Central", pts: 16, pj: 21, pg: 3, pe: 7, pp: 11, gf: 10, gc: 26, dif: -16 }
];

// Lista completa de partidos restantes con fechas
const partidosRestantes = [
    // Fecha 22
    { fecha: 22, equipo1: "Union", equipo2: "Atl Tucuman" },
    { fecha: 22, equipo1: "Gimnasia (LP)", equipo2: "Newells" },
    { fecha: 22, equipo1: "Rosario Central", equipo2: "San Lorenzo" },
    { fecha: 22, equipo1: "Huracan", equipo2: "Independiente" },
    { fecha: 22, equipo1: "Central Cba (SdE)", equipo2: "Estudiantes (LP)" },
    { fecha: 22, equipo1: "River Plate", equipo2: "Barracas Central" },
    { fecha: 22, equipo1: "Godoy Cruz", equipo2: "Talleres (C)" },
    { fecha: 22, equipo1: "Racing Club", equipo2: "Ind Rivadavia" },
    { fecha: 22, equipo1: "Sarmiento (J)", equipo2: "Boca Juniors" },
    { fecha: 22, equipo1: "Riestra", equipo2: "Velez" },
    { fecha: 22, equipo1: "Lanus", equipo2: "Platense" },
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

// Generar la tabla inicial
const tbody = document.getElementById("tabla-puntos");

function renderTabla() {
    tbody.innerHTML = ""; // Limpiar la tabla antes de actualizar
    equipos.sort((a, b) => b.pts - a.pts || b.dif - a.dif); // Ordenar por puntos y diferencia de goles

    equipos.forEach((equipo, index) => {
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

// Generar los inputs para los partidos y dividir por fecha
const matchesContainer = document.getElementById("matches-container");
let currentFecha = null;

partidosRestantes.forEach((partido, index) => {
    // Crear un divisor de fecha si cambia la fecha
    if (currentFecha !== partido.fecha) {
        currentFecha = partido.fecha;
        const fechaDivisor = document.createElement("h3");
        fechaDivisor.textContent = `Fecha ${currentFecha}`;
        matchesContainer.appendChild(fechaDivisor);
    }

    // Crear el input para cada partido
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

// Calcular puntos y actualizar la tabla
    function calcularPuntos() {
        // Calcular nuevos puntos y estadísticas en base a los resultados ingresados
        partidosRestantes.forEach((partido, index) => {
            const score1 = parseInt(document.getElementById(`score-${index}-team1`).value) || 0;
            const score2 = parseInt(document.getElementById(`score-${index}-team2`).value) || 0;
    
            const equipo1 = equipos.find(e => e.equipo === partido.equipo1);
            const equipo2 = equipos.find(e => e.equipo === partido.equipo2);
    
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
    
        // Actualizar y ordenar la tabla de posiciones
        renderTabla();
    }
    
    // Renderizar la tabla inicialmente
    renderTabla();