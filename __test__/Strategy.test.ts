import { Calculator } from "../strategy/Calculator";
import { ConcreteStrategyAdd } from '../strategy/ConcreteStrategyAdd';
import { ConcreteStrategySubtract } from '../strategy/ConcreteStrategySubtract';

describe('Strategy', () => {
  it('should add two numbers', () => {
    const context = new Calculator(new ConcreteStrategyAdd());
    expect(context.calculate(1, 2)).toBe(3);
  });

  it('should subtract two numbers', () => {
    const context = new Calculator(new ConcreteStrategySubtract());
    expect(context.calculate(5, 2)).toBe(3);
  });
})