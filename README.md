# Lab: Password Input Event Handling in React

## Overview

This project demonstrates how to work with event handling in React by building a secure password input interface. The application tracks user interactions such as typing behavior and mouse movements, which can later be integrated into anti-bot security systems.

The goal of this lab is to practice creating React components, attaching event listeners, and testing component behavior using React Testing Library and Vitest/Jest.

---

# Project Objective

Create a password input system that:

* Detects when a user types inside a password field
* Detects when a mouse enters the submit button
* Detects when a mouse leaves the submit button
* Logs these interactions using event handler functions

This simulates the foundation of behavior tracking systems used in modern authentication security.

---

# Component Structure

```text
└── App
    ├── PasswordInput
    └── SubmitButton
```

---

# Features

## PasswordInput Component

The `PasswordInput` component:

* Renders an `<input>` element
* Uses `type="password"`
* Tracks typing activity using the `onChange` event
* Calls a `handleChange()` function
* Logs:

```javascript
"Entering password..."
```

---

## SubmitButton Component

The `SubmitButton` component:

* Renders a `<button>`
* Displays the text:

```text
Submit Password
```

* Tracks mouse hover activity using:

  * `onMouseEnter`
  * `onMouseLeave`

### Mouse Enter Event

Logs:

```javascript
"Mouse Entering"
```

### Mouse Leave Event

Logs:

```javascript
"Mouse Exiting"
```

---

# Technologies Used

* React
* Vite
* JavaScript (ES6)
* React Testing Library
* Vitest / Jest
* HTML5
* CSS3

---

# Project Setup Instructions

## 1. Clone the Repository

```bash
git clone <repository-url>
```

---

## 2. Navigate into the Project Folder

```bash
cd react-event-handling-vite-lab
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start the Development Server

```bash
npm run dev
```

The project will run locally on:

```text
http://localhost:5173
```

---

# Running Tests

To ensure all components and event handlers work correctly, run:

```bash
npm test
```

or

```bash
npx vitest
```

---

# Testing Objectives

The tests verify that:

* The password input renders correctly
* The password input has the correct type
* Typing triggers the correct console output
* The submit button renders correctly
* Mouse enter events trigger console output
* Mouse leave events trigger console output

---

# Example Event Handlers

## PasswordInput

```javascript
function handleChange() {
  console.log("Entering password...");
}
```

## SubmitButton

```javascript
function handleEnter() {
  console.log("Mouse Entering");
}

function handleLeave() {
  console.log("Mouse Exiting");
}
```

---

# Code Documentation

Comments were added throughout the components to explain:

* Component responsibilities
* Event handling logic
* Connections between components
* Purpose of each handler function

This improves readability and maintainability for future developers and security engineers.

---

# Screenshots

## Application Interface

*Add screenshot here*

---

## Successful Test Results

*Add screenshot here*

---

# Future Improvements

Possible future enhancements include:

* Password strength validation
* Real anti-bot analytics
* Typing speed detection
* Mouse movement tracking
* API integration
* Secure authentication workflows

---

# Learning Outcomes

By completing this lab, you will understand how to:

* Create reusable React components
* Handle events in React
* Use event listeners effectively
* Write clean and maintainable code
* Test React components using testing libraries
* Structure React applications properly

---

# Resources

* React Event Handling Documentation:
  https://react.dev/learn/responding-to-events#adding-event-handlers

* React Testing Library:
  https://testing-library.com/docs/react-testing-library/intro/

* Vitest Documentation:
  https://vitest.dev/

* Vite Documentation:
  https://vitejs.dev/

---

# Author

Developed as part of a React Event Handling Lab assignment.
