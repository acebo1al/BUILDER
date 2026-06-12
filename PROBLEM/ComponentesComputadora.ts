/**
 * CLASE EN VERSIÓN "PROBLEMA" (CONSTRUCTOR TELESCÓPICO EXTREMO)
 * Aquí modelamos la computadora directamente a través de una acumulación 
 * masiva de componentes opcionales dentro de un único constructor.
 */
export class ComponentesComputadora {
    // Componentes obligatorios
    public cpu: string;
    public ram: number;
    public disco: number;

    // Componentes adicionales opcionales (¡La lista crece hacia la derecha ➡️!)
    public tarjetaGrafica: string;        
    public refrigeracionLiquida: boolean; 
    public lucesRgb: boolean;  
    public sistemaOperativo: string;

    /**
     * EL CONSTRUCTOR TELESCÓPICO HACIA LA DERECHA ➡️
     * Todos los parámetros opcionales se acumulan en una sola línea infinita.
     * En la exposición, mantén el ajuste de línea desactivado en VS Code para que se vea
     * cómo el código se desborda horizontalmente hacia la derecha de la pantalla.
     */
    constructor(cpu: string, ram: number, disco: number, tarjetaGrafica: string, refrigeracionLiquida: boolean, lucesRgb: boolean, sistemaOperativo: string) {
        this.cpu = cpu;
        this.ram = ram;
        this.disco = disco;
        this.tarjetaGrafica = tarjetaGrafica;
        this.refrigeracionLiquida = refrigeracionLiquida;
        this.lucesRgb = lucesRgb;
        this.sistemaOperativo = sistemaOperativo;
    }

    /**
     * Método de diagnóstico para imprimir en la terminal
     */
    public mostrarConfiguracion(): void {
        console.log(
            `❌ MUNDO PROBLEMA -> Instancia de ComponentesComputadora Rígida:\n` +
            `• CPU: ${this.cpu} | RAM: ${this.ram}GB | Disco: ${this.disco}GB\n` +
            `• Gráfica: ${this.tarjetaGrafica} | S.O: ${this.sistemaOperativo}\n` +
            `----------------------------------------------------------------------------------`
        );
    }
}

// === EJECUCIÓN AUTO-CONTENIDA DEL MUNDO PROBLEMA ===
console.log("=== 🔴 EJECUTANDO EL ESCENARIO PROBLEMA ===");
// El cliente sufre lidiando con parámetros rígidos y posiciones obligatorias en una sola línea
const pcProblema = new ComponentesComputadora("Intel i3", 8, 256, "Ninguna", false, false, "Ubuntu");
pcProblema.mostrarConfiguracion();