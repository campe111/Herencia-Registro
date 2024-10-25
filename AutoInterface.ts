interface AutoInterface {
    acelerar():void;
    getVelocidadActual():number;

}
class AutoCarrera implements AutoInterface{
    private velocidadActual:number;
    constructor(){
        this.velocidadActual=0;
    }
    acelerar(){
        this.velocidadActual+=10;
    }
    getVelocidadActual(){
        return this.velocidadActual;
    }

}