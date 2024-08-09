class Mate{
    static #pi = 3.14159;

    static get Pi() {
        return this.#pi;
    }

    static suma(a, b) {
        return a + b;
    }
}

console.log(Mate.Pi)

console.log(Mate.suma(5, 7))