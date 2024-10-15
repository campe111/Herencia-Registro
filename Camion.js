"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(color, marca, modelo, matriculaCamion, paisOrigin) {
        var _this = _super.call(this, color, marca, modelo) || this;
        _this.color = color;
        _this.marca = marca;
        _this.modelo = modelo;
        _this.matricula = matriculaCamion;
        _this.pais = paisOrigin;
        return _this;
    }
    Camion.prototype.getInfo = function () {
        return "El camion ".concat(this.getMarca(), " ").concat(this.getModelo(), " de ").concat(this.getPais(), " tiene ").concat(this.getMatricula());
    };
    Camion.prototype.getColor = function () {
        return this.color;
    };
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.getModelo = function () {
        return this.modelo;
    };
    Camion.prototype.getMatricula = function () {
        return this.matricula;
    };
    Camion.prototype.getPais = function () {
        return this.pais;
    };
    Camion.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Camion.prototype.setMarca = function (newMarca) {
        this.marca = newMarca;
    };
    Camion.prototype.setModelo = function (newModelo) {
        this.modelo = newModelo;
    };
    Camion.prototype.setMatricula = function (newMatricula) {
        this.matricula = newMatricula;
    };
    Camion.prototype.setPais = function (newPais) {
        this.pais = newPais;
    };
    return Camion;
}(Vehiculo_1.Vehiculo));
exports.Camion = Camion;
