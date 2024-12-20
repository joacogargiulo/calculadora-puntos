const matchesContainer = document.getElementById("matches-container");
const tbody = document.getElementById("tabla-puntos");
const tbodyAnual = document.getElementById("tabla-anual");
const tbodyPromedios = document.getElementById("tabla-promedios");
const loadingScreen = document.getElementById("loading-screen");
const loadingP = document.getElementById("loading-p");
const cache = {
    tablaActual: null,
    tablaAnual: null,
    tablaPromedios: null
}
const urlAPI = "https://api-promiedos.onrender.com" // URL de producción
// const urlAPI = "http://localhost:3000" // URL de desarrollo

let clasificados = []
let cuposLibertadores
let cuposSudamericana
let tablaActual = []
let tablaAnual = []
let tablaPromedios = []
let partidosRestantes = []
let currentFecha = null;
let partidoInvalido = false
let partidoEnJuego = false
let resultado1
let resultado2
let partidosEnJuego = []

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
    { fecha: 26, equipo1: "Riestra", equipo2: "Barracas Central" },
    { fecha: 26, equipo1: "Sarmiento (J)", equipo2: "Def y Justicia" },
    { fecha: 26, equipo1: "Lanus", equipo2: "Instituto" },
    { fecha: 26, equipo1: "Union", equipo2: "Velez" },
    { fecha: 26, equipo1: "Central Cba (SdE)", equipo2: "Racing Club" },
    { fecha: 26, equipo1: "Gimnasia (LP)", equipo2: "Talleres (C)" },
    { fecha: 26, equipo1: "Godoy Cruz", equipo2: "Banfield" },
    { fecha: 26, equipo1: "River Plate", equipo2: "Rosario Central" },
    { fecha: 26, equipo1: "Newells", equipo2: "Boca Juniors" },
    { fecha: 26, equipo1: "Tigre", equipo2: "Ind Rivadavia" },
    { fecha: 26, equipo1: "Argentinos", equipo2: "San Lorenzo" },
    { fecha: 26, equipo1: "Belgrano", equipo2: "Estudiantes (LP)" },
    { fecha: 26, equipo1: "Huracan", equipo2: "Platense" },
    { fecha: 26, equipo1: "Independiente", equipo2: "Atl Tucuman" },
    // Fecha 27
    { fecha: 27, equipo1: "Barracas Central", equipo2: "Lanus" },
    { fecha: 27, equipo1: "Estudiantes (LP)", equipo2: "Argentinos" },
    { fecha: 27, equipo1: "Banfield", equipo2: "Sarmiento (J)" },
    { fecha: 27, equipo1: "San Lorenzo", equipo2: "Tigre" },
    { fecha: 27, equipo1: "Instituto", equipo2: "Godoy Cruz" },
    { fecha: 27, equipo1: "Rosario Central", equipo2: "Belgrano" },
    { fecha: 27, equipo1: "Boca Juniors", equipo2: "Independiente" },
    { fecha: 27, equipo1: "Racing Club", equipo2: "River Plate" },
    { fecha: 27, equipo1: "Def y Justicia", equipo2: "Union" },
    { fecha: 27, equipo1: "Platense", equipo2: "Gimnasia (LP)" },
    { fecha: 27, equipo1: "Talleres (C)", equipo2: "Newells" },
    { fecha: 27, equipo1: "Velez", equipo2: "Huracan" },
    { fecha: 27, equipo1: "Atl Tucuman", equipo2: "Central Cba (SdE)" },
    { fecha: 27, equipo1: "Ind Rivadavia", equipo2: "Riestra" },
];

function manejarError(mensaje, error) {
    console.error(`${mensaje}`, error);    
    showNotification(mensaje, 'error')
}

async function fetchDatos(url) {
    try {
        const response = await fetch(url)
        if (response.status === 201) {
            partidoEnJuego = true
        } else if (response.status === 202) {
            partidoInvalido = true
        }
        
        return response.json()
        
    } catch (error) {
        manejarError(`Error al obtener los datos de ${url}`, error)
    }
}

async function obtenerDatosTablas() {
    try {
        if(cache.tablaActual && cache.tablaAnual && cache.tablaPromedios){
            tablaActual = JSON.parse(JSON.stringify(cache.tablaActual));
            tablaAnual = JSON.parse(JSON.stringify(cache.tablaAnual));
            tablaPromedios = JSON.parse(JSON.stringify(cache.tablaPromedios));

        } else {
            const data = await fetchDatos(urlAPI+'/posiciones')   
            // Asignar las tablas recibidas a las variables locales
            tablaActual = data.tablaPuntosPrimera;
            tablaAnual = data.tablaAnual;
            tablaPromedios = data.tablaPromedios
        
            cache.tablaActual = JSON.parse(JSON.stringify(tablaActual));
            cache.tablaAnual = JSON.parse(JSON.stringify(tablaAnual));
            cache.tablaPromedios = JSON.parse(JSON.stringify(tablaPromedios));

        }
        actualizarTablas()
    } catch (error) {
        manejarError('Error al obtener las tablas ', error);
    } finally {
        hideLoading()
    }
}


async function obtenerPartidos() {
    try {
        const data = await fetchDatos(urlAPI+'/partido')        
        if (partidoEnJuego) {
            data.forEach(partido => {
                partidosEnJuego.push(partido)
            });
        }

        
        filtrarPartidos(data)
    } catch (error) {
        manejarError('Error al obtener los partidos ', error);        
    }
}


function actualizarTablas() {
    actualizarPuntos(tablaActual)
    actualizarPuntos(tablaAnual)
    actualizarPuntos(tablaPromedios)
    renderTabla(tbody, tablaActual)
    renderTabla(tbodyAnual, tablaAnual)
    renderTablaPromedios()
}


function filtrarPartidos(proxPartido) {    
    let indice = partidos.findIndex((p) => {
        if (partidoEnJuego) {            
           return p.equipo1 === partidosEnJuego[0].equipo1 && p.equipo2 === partidosEnJuego[0].equipo2
        } else {
            return p.equipo1 === proxPartido.equipo1 && p.equipo2 === proxPartido.equipo2
        }
    });
    if (indice === -1){
        manejarError('Error filtrando los partidos', proxPartido)
        return
    }

    if (partidoInvalido) indice++
    // Retorna los elementos desde el índice encontrado
    partidosRestantes =  partidos.slice(indice);
    renderizarPartidos()
}

function revisarCupos() {
    clasificados = [
        tablaAnual.find((e => e.equipo === "Estudiantes (LP)")),
        tablaAnual.find((e => e.equipo === "Racing Club")),
        tablaAnual.find((e => e.equipo === "Central Cba (SdE)"))
    ]
    cuposLibertadores = 3
    cuposSudamericana = 6
    ordenarTabla(clasificados)
    clasificados.forEach((clasificado) => {
        const posicion = tablaAnual.findIndex(e => e.equipo === clasificado.equipo)        
        if (posicion < cuposLibertadores) {
            cuposLibertadores++
        } else if (posicion < (cuposSudamericana+cuposLibertadores)) {
            cuposSudamericana++
        }
    })
}

function renderTabla(container, tabla) {
    container.innerHTML = ""; // Limpiar la tabla antes de actualizar.
    // Ordenar la tabla por puntos y diferencia de goles.
    ordenarTabla(tabla)
    
    tabla.forEach((equipo, index) => {
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

            if (cellIndex === 1) {
                const imagen = document.createElement("img")
                imagen.src = `https://promiedos.com.ar/${equipo.escudo}`
                cell.prepend(imagen)
            }
            
            // Aplicar colores según la clasificación.
            if (tabla === tablaAnual) {
                revisarCupos()                
                if (cellIndex === 0) {
                    if (clasificados.includes(equipo)) {
                        cell.classList.add("clasificado");
                    } else if (
                        index < cuposLibertadores
                    ) {
                        cell.classList.add("libertadores");
                    } else if (
                        index < (cuposLibertadores+cuposSudamericana)
                    ) {
                        cell.classList.add("sudamericana");
                    }
                }
            } else {
                index === 0 ? row.classList.add('libertadores') : null
            }
        });
        container.appendChild(row);
    });
}

function ordenarTabla(tabla) {
    tabla.sort((a, b) => b.pts - a.pts || b.dif - a.dif || b.gf - a.gf)
}

function renderTablaPromedios() {
    tbodyPromedios.innerHTML = ""; // Limpiar la tabla antes de actualizar.
    // Ordenar la tabla por puntos y diferencia de goles.
    ordenarTabla(tablaPromedios)
    
    tablaPromedios.forEach((equipo, index) => {
        const row = document.createElement("tr");
        const cells = [
            index + 1,
            equipo.equipo,
            equipo.temporada22,
            equipo.temporada23,
            equipo.temporada24,
            equipo.pts,
            equipo.pj,
            equipo.prom.toFixed(3),
        ];
        
        cells.forEach((cellData, cellIndex) => {
            const cell = document.createElement("td");
            cell.textContent = cellData;
            row.appendChild(cell);

            if (cellIndex === 1) {
                const imagen = document.createElement("img")
                imagen.src = `https://promiedos.com.ar/${equipo.escudo}`
                cell.prepend(imagen)
            }

        });

        tbodyPromedios.appendChild(row);
    });

}

function actualizarPuntos(tabla) {
    partidosRestantes.forEach((partido, index) => {
        if (partidoEnJuego && index === 0 ) {
            return
        }
        const score1 = parseInt(document.getElementById(`score-${index}-team1`).value)
        const score2 = parseInt(document.getElementById(`score-${index}-team2`).value)
        
        if (!isNaN(score1) && !isNaN(score2)) {
            const equipo1 = tabla.find(e => e.equipo === partido.equipo1);
            const equipo2 = tabla.find(e => e.equipo === partido.equipo2); 

            calcularPuntos(equipo1, score1, score2)
            calcularPuntos(equipo2, score2, score1)
        }
    });
}

function calcularPuntos(equipo, golesFavor, golesContra) {
    equipo.pj ++
    equipo.gf += golesFavor
    equipo.gc += golesContra

    if (golesFavor > golesContra) {
        equipo.pts += 3
        equipo.temporada24 +=3
        equipo.pg ++
    } else if (golesFavor < golesContra) {
        equipo.pp ++
    } else {
        equipo.pts ++
        equipo.temporada24++
        equipo.pe ++
    }

    equipo.prom = equipo.pts / equipo.pj
    equipo.dif = equipo.gf - equipo.gc
}

// Generar los inputs para los partidosRestantes y dividir por fecha.
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
        <div class="match-team">
            <img src="https://promiedos.com.ar/${tablaActual.find((e) => e.equipo === partido.equipo1).escudo}" class="team-logo">
            <span>${partido.equipo1}</span>
        </div>
        <div class="match-score">
            <input type="number" id="score-${index}-team1" min=0 ${index < partidosEnJuego.length ? (partidoEnJuego === true ? 'disabled' : '') : ''} value=${index < partidosEnJuego.length ? (partidoEnJuego === true ? partidosEnJuego[index].resultado1 : '') : ''}>
            <span> - </span>
            <input type="number" id="score-${index}-team2" min="0" ${index < partidosEnJuego.length ? (partidoEnJuego === true ? 'disabled' : '') : ''} value=${index < partidosEnJuego.length ? (partidoEnJuego === true ? partidosEnJuego[index].resultado2 : '') : ''} >
        </div>
        <div class="match-team">
            <span>${partido.equipo2}</span>
            <img src="https://promiedos.com.ar/${tablaActual.find((e) => e.equipo === partido.equipo2).escudo}" class="team-logo">
        </div>
        `;
        matchesContainer.appendChild(matchDiv);
    });
}

// Función para generar resultados aleatorios entre 0 y 3 para cada input
function resultadosRandom() {
    partidosRestantes.forEach((_, index) => {
        if (partidoEnJuego && index < partidosEnJuego.length) {
            return
        }
        const score1Input = document.getElementById(`score-${index}-team1`);
        const score2Input = document.getElementById(`score-${index}-team2`);
        
        score1Input.value = Math.floor(Math.random() * 4);
        score2Input.value = Math.floor(Math.random() * 4);
    });
    obtenerDatosTablas()
}


function hideLoading() {
    loadingScreen.style.display = "none";
}


matchesContainer.addEventListener("input", obtenerDatosTablas)

async function inicializar() {
    try {
        cuentaAtras()
        // Espera que se completen las tablas antes de proceder con los partidos
        await obtenerDatosTablas();
        await obtenerPartidos();
    } catch (error) {
        manejarError('Error al inicializar los datos:', error);
    }
}

function cuentaAtras() {
    let tiempoRestante = 30
    const intervalo = setInterval(() => {
        loadingP.innerHTML = "Tiempo restante " + tiempoRestante + " segundos"
        tiempoRestante--

        if (tiempoRestante < 0) {
            loadingP.innerHTML = "Ya casi..."
            clearInterval(intervalo)
        }

    }, 1000)
}

// Mostrar una notificación
function showNotification(message, type = 'error') {
    const notification = document.getElementById('notification');
    const messageContainer = document.getElementById('notification-message');

    // Establecer el mensaje
    messageContainer.textContent = message;

    // Cambiar el color según el tipo (error, éxito, etc.)
    notification.style.backgroundColor = type === 'error' ? '#f44336' : '#4CAF50';

    // Mostrar la notificación
    notification.classList.remove('hidden');

    // Ocultar automáticamente después de 5 segundos
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 5000);
}


// Ejecutar la inicialización
inicializar();
