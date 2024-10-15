export class Vehiculo {
    protected color:string;
    protected marca:string;
    protected modelo:number;

    constructor(color:string, marca:string, modelo:number) {        
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
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
}

