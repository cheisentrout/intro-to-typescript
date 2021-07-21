import { Person } from './person'

export class Player implements Person {
    name: string;
    age: number; // this was set to optional on the interface
    highScore: number;

    formatName() {
        return this.name.toUpperCase()
    }
}