// SOLUCION/ComputadoraBuilderConcreto.ts
import { ComputadoraBuilder } from "./ComputadoraBuilder";
import { Computadora } from "./Computadora";

/**
 * CLASE CONSTRUCTORA CONCRETA
 * Mantenemos tu nombre de clase original pero con la lógica limpia.
 */
export class ComputadoraBuilderConcreto implements ComputadoraBuilder {
    private computadora!: Computadora;

    constructor() {
        this.reiniciar();
    }

    public reiniciar(): void {
        this.computadora = new Computadora();
    }

    public definirCPU(cpu: string): this {
        this.computadora.cpu = cpu;
        return this;
    }

    public definirRAM(ram: number): this {
        this.computadora.ram = ram;
        return this;
    }

    public definirDisco(disco: number): this {
        this.computadora.disco = disco;
        return this;
    }

    public definirTarjetaGrafica(tarjetaGrafica: string): this {
        this.computadora.tarjetaGrafica = tarjetaGrafica;
        return this;
    }

    public definirRefrigeracionLiquida(activa: boolean): this {
        this.computadora.refrigeracionLiquida = activa;
        return this;
    }

    public definirLucesRgb(activa: boolean): this {
        this.computadora.lucesRgb = activa;
        return this;
    }

    public definirSistemaOperativo(so: string): this {
        this.computadora.sistemaOperativo = so;
        return this;
    }

    public obtenerComputadora(): Computadora {
        const resultado = this.computadora;
        this.reiniciar(); 
        return resultado;
    }
}