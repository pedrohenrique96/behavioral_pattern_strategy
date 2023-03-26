# Implementing the Open/Closed Principle with the Strategy Design Pattern in TypeScript

This is a TypeScript project that demonstrates how to implement the Open/Closed Principle (OCP) using the Strategy Design Pattern. The OCP is one of the SOLID principles that helps developers create maintainable and scalable software systems by keeping software entities open for extension but closed for modification. The Strategy Design Pattern is a powerful behavioral pattern that allows developers to define a family of algorithms, encapsulate each one, and make them interchangeable.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository: `https://github.com/pedrohenrique96/behavioral_pattern_strategy`
2. Install the dependencies: `npm install`
3. Build the project: `npm run build`
4. Run the project: `npm run start`

## Overview

This project demonstrates how to use the Strategy Design Pattern to perform arithmetic operations on two numbers. We define an `Strategy` interface that defines the `execute` method. We then create two Concrete Strategies, `ConcreteStrategyAdd` and `ConcreteStrategySubtract`, that implement this interface and provide different implementations of the `execute` method. Finally, we create a `Calculator` class that uses the Strategy pattern to perform arithmetic operations on two numbers. This class has a `setStrategy` method that allows us to set the current strategy, and a `calculate` method that uses the current strategy to perform the arithmetic operation.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork this repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m "Your commit message"`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
