// SOLUCION/index.ts

// IMPORTACIONES ESTÁNDAR (Sin ninguna extensión)
import { ComputadoraBuilderConcreto } from "./ComputadoraBuilderConcreto";
import { ComputadoraDirector } from "./ComputadoraDirector";

// Instanciamos el constructor con el nombre de tu clase real
const constructor = new ComputadoraBuilderConcreto();
const director = new ComputadoraDirector();

// Caso A: Usando el Director para ejecutar una receta predefinida
director.armarComputadoraOficina(constructor);
const pcOficina = constructor.obtenerComputadora();
pcOficina.mostrarEspecificaciones();

// Caso B: Construcción Personalizada por el Cliente (Sin Director)
console.log("--- Creación Personalizada por el Cliente (Sin Director) ---");
const pcPersonalizada = constructor
    .definirCPU("Intel i7")
    .definirRAM(16)
    .definirDisco(1024)
    .definirTarjetaGrafica("RTX 4070")
    .obtenerComputadora();

pcPersonalizada.mostrarEspecificaciones();