"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehiculo_1 = require("./Vehiculo");
var Registro_1 = require("./Registro");
var Auto_1 = require("./Auto");
var Camion_1 = require("./Camion");
var Moto_1 = require("./Moto");
var camion1 = new Camion_1.Camion("violeta", "Ford", 2002, 123456, "España");
var camion2 = new Camion_1.Camion("blanco", "Scania", 2019, 23453, "USA");
var moto1 = new Moto_1.Moto("azul", "Motomel", 2024, 22233, "Argentina");
var moto2 = new Moto_1.Moto("rojo", "Motomel", 2024, 32323, "Argentina");
var auto1 = new Auto_1.Auto("rojo", "Chevrolet", 2011, 121213, "Francia");
var auto2 = new Auto_1.Auto("gris", "Volkswagen", 2013, 77766, "Alemania");
var auto3 = new Auto_1.Auto("blanco", "Ford", 2016, 98765, "USA");
var registro = new Registro_1.RegistroAutomotor();
var vehiculo = new Vehiculo_1.Vehiculo("rojo", "Chevrolet", 2011);
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
