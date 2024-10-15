import {Vehiculo} from "./Vehiculo";
class Auto extends Vehiculo {
    protected color:string;
    protected marca:string;
    protected modelo:number;
    protected patente:number;
    protected pais:string;

    constructor(color:string, marca:string, modelo:number, matriculaAuto:number, paisOrigin:string) {
        super(color, marca, modelo);
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = matriculaAuto;        
        this.pais = paisOrigin;
    }

    public getAutoInfo():string {
        return `El auto ${this.getMarca()} ${this.getModelo()} de ${this.getPais()} tiene esta patente ${this.getPatente()}`;
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

    public getPatente():number {
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
    public setPatente(newPatente:number):void {
        this.patente = newPatente;
    }
    public setPais(newPais:string):void {
        this.pais = newPais;
    }
}
export {Auto};