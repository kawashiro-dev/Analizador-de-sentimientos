<script>
document.addEventListener('DOMContentLoaded', () => {
    const botonRegresar = document.getElementById('botonRegresar');
    const textoEntrada = document.getElementById('textoEntrada');
    const botonAnalizar = document.getElementById('botonAnalizar');
    const resultadosDiv = document.getElementById('resultados');
    const sentimientoResultadoElemento = document.getElementById('sentimientoResultado');
    const puntajeCompuestoElemento = document.getElementById('puntajeCompuesto');
    const puntajePositivoElemento = document.getElementById('puntajePositivo');
    const puntajeNegativoElemento = document.getElementById('puntajeNegativo');
    const puntajeNeutroElemento = document.getElementById('puntajeNeutro');
    const mensajeErrorElemento = document.getElementById('mensajeError');

    // Listas simplificadas de palabras positivas y negativas
    const palabrasPositivas = [    "bueno", "feliz", "alegre", "genial", "maravilloso", "fantastico",
    "exitoso", "agradable", "increíble", "estupendo", "excelente",
    "positivo", "optimista", "radiante", "vibrante", "encantador",
    "amable", "cariñoso", "dulce", "comprensivo", "atento",
    "servicial", "valioso", "útil", "eficaz", "eficiente",
    "creativo", "innovador", "inspirador", "motivador",
    "sobresaliente", "espléndido", "formidable", "magnífico",
    "notable", "prometedor", "reconfortante", "sereno",
    "tranquilo", "armonioso", "apacible", "afortunado",
    "dichoso", "pleno", "satisfecho", "gozoso", "animado",
    "entusiasta", "eufórico", "triunfante", "victorioso",
    "merecido", "especial", "único", "auténtico", "genuino",
    "sincero", "honesto", "íntegro", "confiable", "seguro",
    "firme", "estable", "sólido", "poderoso", "fuerte",
    "resistente", "ágil", "hábil", "talentoso", "brillante",
    "luminoso", "claro", "nítido", "preciso", "exacto",
    "oportuno", "adecuado", "conveniente", "favorable",
    "provechoso", "rentable", "enriquecedor", "edificante",
    "alentador", "original", "ingenioso", "astuto", "sabio",
    "prudente", "perspicaz", "elocuente", "expresivo",
    "convincente", "persuasivo", "influyente", "carismático",
    "simpático", "amigable", "sociable", "cooperativo",
    "colaborativo", "pacífico", "relajado", "equilibrado",
    "justo", "equitativo", "generoso", "bondadoso",
    "magnánimo", "altruista", "filantrópico", "humano",
    "compasivo", "empático", "tolerante", "respetuoso",
    "considerado", "cortés", "educado", "refinado",
    "elegante", "atractivo", "hermoso", "precioso",
    "delicado", "exquisito", "sublime", "majestuoso",
    "imponente", "grandioso", "espectacular", "fascinante",
    "cautivador", "atrayente", "seductor", "asombroso",
    "sorprendente", "impresionante", "extraordinario",
    "excepcional", "singular", "novedoso", "vanguardista",
    "moderno", "actual", "contemporáneo", "revolucionario",
    "transformador", "progresista", "avanzado", "pionero",
    "líder", "ejemplar", "modelo", "duradero", "eterno",
    "inmortal", "trascendente", "universal", "cósmico",
    "infinito", "sempiterno", "perpetuo", "constante",
    "inmutable", "verdadero", "real", "legítimo", "válido",
    "correcto", "certero", "fidedigno", "creíble"];

    const palabrasNegativas = ["malo", "triste", "deprimido", "horrible", "terrible",
    "desastroso", "frustrante", "desagradable", "pésimo",
    "nefasto", "lamentable", "deplorable", "funesto",
    "aciago", "miserable", "infeliz", "desconsolado",
    "apenado", "doloroso", "amargo", "desolador",
    "sombrío", "oscuro", "tenebroso", "malvado",
    "cruel", "inhumano", "atroz", "violento",
    "dañino", "perjudicial", "nocivo", "tóxico",
    "repugnante", "asqueroso", "detestable", "odioso",
    "aborrecible", "irritante", "molesto", "fastidioso",
    "pesado", "aburrido", "tedioso", "soso", "vacío",
    "inútil", "vano", "fútil", "improductivo",
    "ineficaz", "ineficiente", "defectuoso", "fallido",
    "erróneo", "equivocado", "imperfecto", "inferior",
    "decepcionante", "desalentador", "angustiante",
    "preocupante", "inquietante", "temible", "espantoso",
    "horrendo", "repulsivo", "escandaloso", "indignante",
    "vergonzoso", "desgraciado", "desafortunado",
    "adverso", "perverso", "siniestro", "malicioso",
    "envidioso", "celoso", "egoísta", "avaricioso",
    "codicioso", "mezquino", "ruin", "vil", "abyecto",
    "corrupto", "deshonesto", "engañoso", "fraudulento",
    "traicionero", "infiel", "desleal", "negligente",
    "irresponsable", "descuidado", "torpe", "patético",
    "ridículo", "absurdo", "ilógico", "irracional",
    "caótico", "confuso", "complicado", "difícil",
    "arduo", "penoso", "fatigoso", "agotador",
    "extenuante", "opresivo", "agobiante", "deprimente",
    "desesperanzador", "pesimista", "negativo", "contrario",
    "desfavorable", "problemático", "conflictivo",
    "tumultuoso", "turbulento", "agitado", "destructivo",
    "devastador", "catastrófico", "apocalíptico",
    "terminal", "mortal", "letal", "peligroso",
    "riesgoso", "amenazante", "pernicioso", "virulento",
    "maligno", "cancerígeno", "contagioso", "infeccioso",
    "epidémico", "pandémico", "endémico", "grave",
    "serio", "crítico", "urgente", "apremiante",
    "inevitable", "irreversible", "fatídico"];

    function analizarSentimientoSimplificado(texto) {
        const palabras = texto.toLowerCase().split(/\s+/).filter(word => word !== '');
        let puntaje = 0;

        palabras.forEach(palabra => {
            if (palabrasPositivas.includes(palabra)) {
                puntaje++;
            } else if (palabrasNegativas.includes(palabra)) {
                puntaje--;
            }
        });

        let sentimiento = "neutro";
        if (puntaje > 0) {
            sentimiento = "positivo";
        } else if (puntaje < 0) {
            sentimiento = "negativo";
        }

        const puntuaciones = {
            compound: puntaje / palabras.length || 0, // Simple normalización
            pos: puntaje > 0 ? puntaje / palabras.length : 0,
            neg: puntaje < 0 ? Math.abs(puntaje) / palabras.length : 0,
            neu: puntaje === 0 ? 1 : 1 - (Math.abs(puntaje) / palabras.length)
        };

        return { sentimiento, puntuaciones };
    }

    botonAnalizar.addEventListener('click', () => {
        const texto = textoEntrada.value.trim();
        if (texto === '') {
            mensajeErrorElemento.textContent = 'Por favor, ingrese algún texto para analizar el sentimiento.';
            mensajeErrorElemento.style.display = 'block';
            resultadosDiv.style.display = 'none';
            return;
        }
        mensajeErrorElemento.style.display = 'none';

        const resultadoAnalisis = analizarSentimientoSimplificado(texto);
        const sentimiento = resultadoAnalisis.sentimiento;
        const puntuaciones = resultadoAnalisis.puntuaciones;

        sentimientoResultadoElemento.textContent = sentimiento;
        sentimientoResultadoElemento.className = sentimiento;

        puntajeCompuestoElemento.textContent = puntuaciones.compound.toFixed(4);
        puntajePositivoElemento.textContent = puntuaciones.pos.toFixed(4);
        puntajeNegativoElemento.textContent = puntuaciones.neg.toFixed(4);
        puntajeNeutroElemento.textContent = puntuaciones.neu.toFixed(4);

        resultadosDiv.style.display = 'block';
    });
});
    </script>