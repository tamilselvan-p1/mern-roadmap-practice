//static
class vechicle{
    constructor(brand){
        this.brand = brand
    }
    static category(){
        console.log("Vechicle is used for transportation")
    }
}

vechicle.category()//works
const vechicle1 =  new vechicle("BMW")
vechicle1.category()//not works