/**
 * CLASE PRODUCTO FINAL
 * Representa la computadora terminada. Ya no posee constructor masivo, 
 * solo sus propiedades inicializadas con valores por defecto y su comportamiento.
 */
export class Computadora {
    // Componentes obligatorios base
    public cpu: string = "";
    public ram: number = 0;        
    public disco: number = 0;      

    // Componentes opcionales
    public tarjetaGrafica: string = "Ninguna";
    public refrigeracionLiquida: boolean = false;
    public lucesRgb: boolean = false;
    public sistemaOperativo: string = "No asignado";

    /**
     * Muestra de forma limpia el hardware final en la terminal
     */
    public mostrarEspecificaciones(): void {
        console.log(`🟢 SOLUCIÓN (Builder) -> Computadora Ensamblada:`);
        console.log(`• Procesador: ${this.cpu}`);
        console.log(`• Memoria RAM: ${this.ram} GB`);
        console.log(`• Almacenamiento: ${this.disco} GB`);
        console.log(`• Tarjeta Gráfica: ${this.tarjetaGrafica}`);
        console.log(`• Refrigeración Líquida: ${this.refrigeracionLiquida ? "Sí" : "No"}`);
        console.log(`• Iluminación RGB: ${this.lucesRgb ? "Sí" : "No"}`);
        console.log(`• Sistema Operativo: ${this.sistemaOperativo}`);
        console.log(`------------------------------------------------------------------`);
    }
}