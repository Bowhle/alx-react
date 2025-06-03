# ALX React: 0x05 - React State

This project, part of the ALX React curriculum, focuses on implementing state management in a React dashboard application. It covers component state, lifecycle methods, controlled components, forms, context, React Hooks, and testing with Enzyme.

## Learning Objectives
- Understand component state and lifecycle
- Modify state and execute code in order
- Use controlled components and forms
- Reuse components and lift state
- Implement React Hooks
- Test state changes with Enzyme

## Requirements
- **Environment**: Ubuntu 18.04 LTS, Node 14.x.x, npm 6.x.x
- **Editors**: vi, vim, emacs, Visual Studio Code
- **Files**: Must end with a new line; `README.md` mandatory
- **Linting**: No console errors
- **Testing**: Use Enzyme for state and interaction tests

## Tasks
1. **Local State for Notifications** (`task_0`)
   - Add `displayDrawer` state to `App`
   - Implement `handleDisplayDrawer`/`handleHideDrawer`
   - Update `Notifications` and tests
   - Files: `App.js`, `App.test.js`, `Notifications.js`, `Notifications.test.js`

2. **Controlled Components & State Callback** (`task_1`)
   - Create form in `Login` with `isLoggedIn`, `email`, `password`, `enableSubmit`
   - Handle form submission and input changes
   - Enable submit button when inputs are non-empty
   - Files: `Login.js`, `Login.test.js`

3. **Context** (`task_2`)
   - Create `AppContext` with user and logout function
   - Refactor `App`, `Login`, `Header` to use context
   - Add logout section in `Header`
   - Update tests
   - Files: `AppContext.js`, `App.js`, `Login.js`, `Header.js`, `Header.test.js`, `App.test.js`

4. **Context Consumer & Advanced State** (`task_3`)
   - Make `Footer` a context consumer
   - Manage `listNotifications` in `App` state
   - Add `markNotificationAsRead` function
   - Update `Notifications` and tests
   - Files: `Footer.js`, `Footer.test.js`, `App.js`, `App.test.js`, `Notifications.js`, `Notifications.test.js`

5. **React Hooks** (`task_4`)
   - Add checkbox to `CourseListRow` with `rowChecked` style
   - Use React Hook for state management
   - File: `CourseListRow.js`

## Setup
1. Clone: `git clone https://github.com/venopyx/alx-react.git`
2. Navigate: `cd alx-react/0x05-react_state`
3. Install: `npm install`
4. Run: `npm start`
5. Test: `npm test`

## Resources
- [React State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Forms](https://reactjs.org/docs/forms.html)
- [Context](https://reactjs.org/docs/context.html)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Enzyme](https://enzymejs.github.io/enzyme/)

## Repository
- **GitHub**: [alx-react](https://github.com/venopyx/alx-react)
- **Directory**: `0x05-react_state`

## Author
Gemechis Chala - [venopyx](https://github.com/venopyx)
