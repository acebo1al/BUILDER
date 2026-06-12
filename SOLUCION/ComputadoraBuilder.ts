import { Computadora } from "./Computadora";

/**
 * INTERFAZ BUILDER
 * Define las firmas de los métodos lógicos para fabricar el objeto por etapas.
 */
export interface ComputadoraBuilder {
    reiniciar(): void;
    definirCPU(cpu: string): this;
    definirRAM(ram: number): this;
    definirDisco(disco: number): this;
    definirTarjetaGrafica(tarjetaGrafica: string): this;
    definirRefrigeracionLiquida(activa: boolean): this;
    definirLucesRgb(activa: boolean): this;
    definirSistemaOperativo(so: string): this;
    obtenerComputadora(): Computadora;
}