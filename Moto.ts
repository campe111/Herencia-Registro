import {Vehiculo} from "./Vehiculo";

class Moto extends Vehiculo {
    protected color:string;
    protected marca:string;
    protected modelo:number;
    protected patente:number;
    protected pais:string;

    constructor(color:string, marca:string, modelo:number, patenteMoto:number, paisOrigin:string) {
        super(color, marca, modelo);
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patenteMoto;
        this.pais = paisOrigin;
    }

    public getInfo():string {
        return `La moto ${this.getMarca()} ${this.getModelo()} de ${this.getPais()} tiene esta patente ${this.getpatente()}`;
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

    public getpatente():number {
        return this.patente;
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
    public setpatente(newpatente:number):void {
        this.patente = newpatente;
    }
    public setPais(newPais:string):void {
        this.pais = newPais;
    }
}
export {Moto};