import { Vehiculo } from "./Vehiculo";
import { RegistroAutomotor } from "./Registro";
import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";

const camion1 = new Camion("violeta", "Ford", 2002,123456,"España");
const camion2 = new Camion("blanco", "Scania", 2019,23453,"USA");

const moto1 = new Moto("azul", "Motomel", 2024,22233,"Argentina");
const moto2 = new Moto("rojo", "Motomel", 2024,32323,"Argentina");

const auto1 = new Auto("rojo", "Chevrolet", 2011, 121213,"Francia");
const auto2 = new Auto("gris", "Volkswagen", 2013,77766,"Alemania");
const auto3 = new Auto("blanco", "Ford", 2016,98765, "USA");

const registro = new RegistroAutomotor();
const vehiculo = new Vehiculo("rojo", "Chevrolet", 2011);

// registro.agregarAuto(auto1);
// registro.agregarAuto(auto2);
// registro.agregarAuto(auto3);
// // --------------------------------------
// registro.agregarMoto(moto1);
// registro.agregarMoto(moto2);
// // --------------------------------------
// registro.agregarCamion(camion1);
// registro.agregarCamion(camion2);
// // --------------------------------------
// console.log(registro.getInfoRegistro());

// registro.darDeBajaCamion(camion2);
// console.log(registro.getInfoRegistro());
// --------------------------------------
auto1.getAutoInfo();
console.log(auto1.getAutoInfo());

console.log(auto1.getPatente());
auto1.setPatente(123456);
console.log(auto1.getPatente());
console.log(auto1.getAutoInfo());