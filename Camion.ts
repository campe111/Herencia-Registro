import {Vehiculo} from "./Vehiculo";

class Camion extends Vehiculo {
    protected color:string;
    protected marca:string;
    protected modelo:number;
    protected matricula:number;
    protected pais:string;

    constructor(color:string, marca:string, modelo:number, matriculaCamion:number, paisOrigin:string) {
        super(color, marca, modelo);
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.matricula = matriculaCamion;
        this.pais = paisOrigin;
    }
    public getInfo():string {
        return `El camion ${this.getMarca()} ${this.getModelo()} de ${this.getPais()} tiene esta patente ${this.getMatricula()}`;
    }

    public getColor():string {
        return this.color;
    }

    public getMarca():string {
        return this.marca;
    }

    public getModelo():number {
        return this.modelo;
    }

    public getMatricula():number {
        return this.matricula;
    }

    public getPais():string {
        return this.pais;
    }

    public setColor(newColor:string):void {
        this.color = newColor;
    }
    public setMarca(newMarca:string):void {
        this.marca = newMarca;
    }
    public setModelo(newModelo:number):void {
        this.modelo = newModelo;
    }
    public setMatricula(newMatricula:number):void {
        this.matricula = newMatricula;
    }
    public setPais(newPais:string):void {
        this.pais = newPais;
    }
}
export {Camion};