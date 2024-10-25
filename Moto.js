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
exports.Moto = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(color, marca, modelo, patenteMoto, paisOrigin) {
        var _this = _super.call(this, color, marca, modelo) || this;
        _this.color = color;
        _this.marca = marca;
        _this.modelo = modelo;
        _this.patente = patenteMoto;
        _this.pais = paisOrigin;
        return _this;
    }
    Moto.prototype.getInfo = function () {
        return "La moto ".concat(this.getMarca(), " ").concat(this.getModelo(), " de ").concat(this.getPais(), " tiene esta patente ").concat(this.getpatente());
    };
    Moto.prototype.getColor = function () {
        return this.color;
    };
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.getpatente = function () {
        return this.patente;
    };
    Moto.prototype.getPais = function () {
        return this.pais;
    };
    Moto.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Moto.prototype.setMarca = function (newMarca) {
        this.marca = newMarca;
    };
    Moto.prototype.setModelo = function (newModelo) {
        this.modelo = newModelo;
    };
    Moto.prototype.setpatente = function (newpatente) {
        this.patente = newpatente;
    };
    Moto.prototype.setPais = function (newPais) {
        this.pais = newPais;
    };
    return Moto;
}(Vehiculo_1.Vehiculo));
exports.Moto = Moto;
