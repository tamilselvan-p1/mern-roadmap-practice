//class , class extends,
class Vechicle{
    constructor(brand,speed){
        this.brand = brand;
        this.speed = speed;
    }
    drive(){
        console.log(this.brand +" Driving at "+ this.speed)
    }

}

class car extends Vechicle{
    constructor(brand,speed,doors){
        super(brand,speed)
        this.doors = doors
    }
    openTrunk(){
        console.log("Trunk is open")
    }
}

const car1 =new car("honda",80,4)
console.log(car1.brand)
console.log(car1.speed)
console.log(car1.doors)
car1.drive()
car1.openTrunk()