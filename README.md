# Introduction

This repository contains my submission for the assessment task for a front-end position, developed using Next.js 14. The task involved two main objectives:

1. Implementing a dynamic form UI.
2. Refactoring existing codebase to improve readability and maintainability.

## Dynamic Form UI

In the first part of the assessment, I utilized several technologies to implement a dynamic form user interface:

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed classes to rapidly build custom user interfaces. I leveraged Tailwind CSS to style the form components and ensure a consistent and visually appealing layout.

### React Hook Form

React Hook Form is a library for managing form state in React applications using hooks. It offers a simple and efficient way to handle form validation, submission, and error handling. I integrated React Hook Form to manage the state and validation logic of the dynamic form, enabling seamless user interactions and validation feedback.

### Zod Validator

Zod is a TypeScript-first schema declaration and validation library. It allows defining robust schemas for data validation and ensures type safety at compile time. I utilized Zod to define the schema for the form data and validate user inputs against the specified schema. This helped maintain data integrity and enforce validation rules, improving the reliability of the form submission process.

## Code Refactoring

In this code refactor, several improvements and changes have been made to enhance the functionality and logic:

1. **Type Annotations**:

   -  Type annotations have been added to the `useState` hooks for `products`, `inputValue`, and `filter`.
   -  This ensures better type safety and clarity within the code.

2. **Error Handling**:

   -  Error handling has been implemented within the `fetchProducts` function to handle cases where the API call fails.
   -  In case of failure, it falls back to using mock data and logs the error to the console.

3. **Function Naming**:

   -  Function names like `add`, `toggle`, and `remove` have been replaced with more descriptive names like `addProduct`, `toggleProductArchived`, and `removeProduct`, respectively.
   -  This enhances code readability and understanding of what each function does.

4. **Immutability**:

   -  When adding or modifying products, immutability has been ensured by creating new arrays or objects instead of mutating the existing state directly.
   -  This helps prevent unintended side effects and ensures the predictability of state changes.

5. **Switch Statement**:
   -  The `filteredProducts` function now uses a `switch` statement for better readability and maintainability.

Note:

-  Due to the faked API URL provided in the task, manual data has been set to state for testing purposes. Ensure proper integration with the actual backend API once available.

Additional Suggestions:

-  [ ] **Define Axios Client**:
   -  Create a centralized Axios client for handling API requests, promoting consistency and easier management of API calls throughout the application.
-  [ ] **Integrate React-Query**:
   -  Utilize React-Query to handle data fetching and caching, simplifying state management and improving performance by reducing unnecessary network requests.
      Overall, this refactor focuses on improving the functionality, logic, and maintainability of the codebase without significant changes to the UI.

## Installation

To get started with the assessment task, follow these steps:

1. **Clone Repository**:

   -  Clone the repository from GitHub to your local machine:
      ```
      git clone https://github.com/farhadimrf/asia-startup-task
      ```

2. **Install Dependencies**:

   -  Navigate to the project directory and install the necessary dependencies using npm:
      ```
      cd asia-startup-task
      npm install
      ```

3. **Run the Application**:
   -  Once the dependencies are installed, you can run the application locally. The UI task is accessible at the main route `/`, while the refactored section is available at the `/refactor` pathname:
      ```
      npm run dev
      ```
   -  The application will start running on port `3000` by default. Open your web browser and navigate to `http://localhost:3000` to view the UI task, or `http://localhost:3000/refactor` to access the refactored section.
