export interface Person {
    name: string;
    age?: number;
    formatName: () => string;
}

// objects implement interfaces