import { Strategy } from "./Strategy.ts";

export class Calculator {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    function setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    function calculate(a: number, b: number) {
        this.strategy.execute(a, b);
    }
}