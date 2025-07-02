// src/app.ts

import { Singleton } from "./creational-patterns/singleton";

const run = (pattern: string) => {
    switch(pattern) {
        case "singleton":
            const instance1 = Singleton.getInstance();
            const instance2 = Singleton.getInstance();
            console.log("Are both instances the same?", instance1 === instance2); // true
            break;
        case "factory":
            break;
        default:
            console.log(`Unknown pattern: ${pattern}`);
            break;
    }
};

run("singleton1");
