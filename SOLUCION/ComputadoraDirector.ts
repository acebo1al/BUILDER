import { ComputadoraBuilder } from "./ComputadoraBuilder";

/**
 * CLASE DIRECTOR
 * No sabe cómo se fabrica internamente cada pieza, pero conoce el orden ideal 
 * para automatizar configuraciones o recetas predefinidas comunes.
 */
export class ComputadoraDirector {
    
    /**
     * Receta automática para una máquina estándar de oficina
     */
    public armarComputadoraOficina(constructor: ComputadoraBuilder): void {
        constructor.reiniciar();
        constructor.definirCPU("Intel i3")
                   .definirRAM(8)
                   .definirDisco(256); // Omitimos lujos de forma segura
    }

    /**
     * Receta automática para una máquina potente de videojuegos
     */
    public armarComputadoraGamer(constructor: ComputadoraBuilder): void {
        constructor.reiniciar();
        constructor.definirCPU("AMD Ryzen 9")
                   .definirRAM(32)
                   .definirDisco(2048)
                   .definirTarjetaGrafica("RTX 4090")
                   .definirRefrigeracionLiquida(true)
                   .definirLucesRgb(true)
                   .definirSistemaOperativo("Windows 11");
    }
}