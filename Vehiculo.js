"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
