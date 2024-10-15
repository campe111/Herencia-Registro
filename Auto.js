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
exports.Auto = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(color, marca, modelo, matriculaAuto, paisOrigin) {
        var _this = _super.call(this, color, marca, modelo) || this;
        _this.color = color;
        _this.marca = marca;
        _this.modelo = modelo;
        _this.patente = matriculaAuto;
        _this.pais = paisOrigin;
        return _this;
    }
    Auto.prototype.getAutoInfo = function () {
        return "El auto ".concat(this.getMarca(), " ").concat(this.getModelo(), " de ").concat(this.getPais(), " tiene esta patente ").concat(this.getPatente());
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.getPais = function () {
        return this.pais;
    };
    Auto.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Auto.prototype.setMarca = function (newMarca) {
        this.marca = newMarca;
    };
    Auto.prototype.setModelo = function (newModelo) {
        this.modelo = newModelo;
    };
    Auto.prototype.setPatente = function (newPatente) {
        this.patente = newPatente;
    };
    Auto.prototype.setPais = function (newPais) {
        this.pais = newPais;
    };
    return Auto;
}(Vehiculo_1.Vehiculo));
exports.Auto = Auto;
