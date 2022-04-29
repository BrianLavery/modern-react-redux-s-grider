class Car {
    // SOLUTION 1
    // Can bind the function - makes a new function that always has value of this equal to instance of car
    // constructor() {
    //     this.drive = this.drive.bind(this)
    // }
    
    setDriveSound(sound) {
        this.sound = sound
    }

    drive() {
        return this.sound
    }

    // SOLUTION 2
    // Make the function causing the issue an arrow function
    // drive = () => {
    //     return this.sound
    // }


}
  
const car = new Car()
car.setDriveSound('vroom')
const carNoise = car.drive()
console.log('carNoise:', carNoise)

const truck = {
    sound: 'putputput',
    driveMyTruck: car.drive
}

const truckNoise = truck.driveMyTruck()
console.log('truckNoise:', truckNoise)

// SOLUTION 3
// Pass an arrow function into the React Component (not )
const drive = () => car.drive()

const soloDriveCall = drive()
console.log(soloDriveCall)