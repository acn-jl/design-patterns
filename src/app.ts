// src/app.ts

import { Singleton } from "./creational-patterns/singleton";
import { CarFactory } from "./creational-patterns/factory";


const run = (pattern: string) => {
    switch(pattern) {
        case "singleton":
            const instance1 = Singleton.getInstance();
            const instance2 = Singleton.getInstance();
            console.log("Are both instances the same?", instance1 === instance2); // true
            break;

        case "factory":
            const car1 = CarFactory.createCar("Sedan");
            car1.drive();  // Driving a sedan.

            const car2 = CarFactory.createCar("SUV");
            car2.drive();  // Driving an SUV.
            break;

        default:
            console.log(`Unknown pattern: ${pattern}`);
            break;
    }
};

run("singleton");
run("factory");
