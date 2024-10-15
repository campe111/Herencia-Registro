"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }
    RegistroAutomotor.prototype.getInfoRegistro = function () {
        return "Informaci\u00F3n del Registro:\nAutos:\n".concat(this.getAutosInfo(), " \nMotos:\n").concat(this.getMotosInfo(), " \nCamiones:\n").concat(this.getCamionesInfo());
    };
    // Métodos para agregar vehículos
    RegistroAutomotor.prototype.agregarAuto = function (auto) {
        this.autos.push(auto);
    };
    RegistroAutomotor.prototype.agregarMoto = function (moto) {
        this.motos.push(moto);
    };
    RegistroAutomotor.prototype.agregarCamion = function (camion) {
        this.camiones.push(camion);
    };
    // Métodos para dar de baja vehículos
    RegistroAutomotor.prototype.darDeBajaAuto = function (auto) {
        var index = this.autos.indexOf(auto);
        if (index !== -1) {
            this.autos.splice(index, 1);
        }
    };
    RegistroAutomotor.prototype.darDeBajaCamion = function (camion) {
        var index = this.camiones.indexOf(camion);
        if (index !== -1) {
            this.camiones.splice(index, 1);
        }
    };
    RegistroAutomotor.prototype.darDeBajaMoto = function (moto) {
        var index = this.motos.indexOf(moto);
        if (index !== -1) {
            this.motos.splice(index, 1);
        }
    };
    RegistroAutomotor.prototype.getAutosInfo = function () {
        if (this.autos.length === 0)
            return "No hay autos registrados.";
        var info = "";
        for (var i = 0; i < this.autos.length; i++) {
            info += this.autos[i].getAutoInfo();
            if (i < this.autos.length - 1)
                info += "\n"; // Añade un salto de línea excepto en la última iteración
        }
        return info;
    };
    RegistroAutomotor.prototype.getMotosInfo = function () {
        if (this.motos.length === 0)
            return "No hay motos registradas.";
        var info = "";
        for (var i = 0; i < this.motos.length; i++) {
            info += this.motos[i].getInfo();
            if (i < this.motos.length - 1)
                info += "\n";
        }
        return info;
    };
    RegistroAutomotor.prototype.getCamionesInfo = function () {
        if (this.camiones.length === 0)
            return "No hay camiones registrados.";
        var info = "";
        for (var i = 0; i < this.camiones.length; i++) {
            info += this.camiones[i].getInfo();
            if (i < this.camiones.length - 1)
                info += "\n";
        }
        return info;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
