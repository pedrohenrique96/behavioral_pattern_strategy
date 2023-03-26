
export class ConcreteStrategySubtract implements Strategy {
  public execute(a: number, b: number): number {
    return a - b;
  }
}