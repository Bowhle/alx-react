# React Component Project

This project is part of the ALX React curriculum and focuses on building and testing React components. The project involves converting functional components to class components, handling events, using lifecycle methods, and optimizing performance with pure components and higher-order components (HOCs).

## Project Overview

The project is divided into several tasks, each focusing on different aspects of React component development:

1. **Commence with Class Components**: Convert a functional component to a class component.
2. **Lifecycles**: Add lifecycle methods to a component.
3. **Handling Events**: Create and test event handlers in class components.
4. **Reusable Components & Specialization**: Create reusable components and specialize them.
5. **Use the New Components**: Integrate the new components into the main application.
6. **Test the New Components**: Write tests for the new components.
7. **Create WithLogging HOC**: Develop a higher-order component for logging.
8. **Write a Test for the HOC**: Test the higher-order component.
9. **Declare a Pure Component**: Convert a component to a pure component.
10. **Make Your Own Pure Component**: Optimize a component to update only when necessary.
11. **Add a Test**: Test the pure component's performance optimization.

## Learning Objectives

By the end of this project, you should be able to:

- Understand when to use a class or a function to create a component.
- Explain the lifecycle of a class component.
- Test a component and utilize a Jest spy to verify function calls.
- Understand what an HOC is and how to use it.
- Optimize performance and control which components to render.

## Requirements

- All files will be interpreted/compiled on Ubuntu 18.04 LTS using Node 12.x.x and npm 6.x.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A README.md file at the root of the project folder is mandatory.

## Project Structure

The project is structured as follows:

```
0x03-React_component/
├── task_0/
│   └── dashboard/
│       └── src/
│           └── App/
│               └── App.js
├── task_1/
│   └── dashboard/
│       └── src/
│           └── App/
│               ├── App.js
│               └── App.test.js
├── task_2/
│   └── dashboard/
│       └── src/
│           └── Notifications/
│               ├── NotificationItem.js
│               ├── NotificationItem.test.js
│               ├── Notifications.js
│               └── Notifications.test.js
├── task_3/
│   └── dashboard/
│       └── src/
│           └── BodySection/
│               ├── BodySection.js
│               ├── BodySection.test.js
│               ├── BodySectionWithMarginBottom.js
│               └── BodySectionWithMarginBottom.test.js
├── task_4/
│   └── dashboard/
│       └── src/
│           └── HOC/
│               ├── WithLogging.js
│               └── WithLogging.test.js
├── task_5/
│   └── dashboard/
│       └── src/
│           └── Notifications/
│               ├── NotificationItem.js
│               ├── Notifications.js
│               └── Notifications.test.js
└── README.md
```

## Getting Started

To get started with this project, clone the repository and navigate to the project directory:

```bash
git clone <repository-url>
cd 0x03-React_component
```

Install the necessary dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

## Testing

To run the tests, use the following command:

```bash
npm test
```

## Author

Gemechis Chala - [venopyx](https://github.com/venopyx)

## License

Copyright © 2025 ALX, All rights reserved.
