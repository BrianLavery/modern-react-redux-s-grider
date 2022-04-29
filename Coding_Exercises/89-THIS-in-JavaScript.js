class Car {
    setDriveSound(sound) {
        this.sound = sound
    }

    drive() {
        return this.sound
    }
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

const drive = car.drive

const soloDriveCall = drive()
console.log(soloDriveCall)