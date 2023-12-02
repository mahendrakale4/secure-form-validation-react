# Secure Form Validation with React

This project demonstrates a secure form with email and password validation implemented using React. The form includes the following validations:

## Email:

*   Required (Cannot be blank)

*   Must end in @webdevsimplified.com

## Password:

* Required (Cannot be blank)

*  Must be 10 characters or longer

*  Must include a lowercase letter

*  Must include an uppercase letter

*  Must include a number


## Getting Started
To get started with the project, follow these instructions:

1. Clone the repository:
    ```
    git clone https://github.com/mahendrakale4/secure-form-validation-react.git
    ```
    ```
    cd secure-form-validation-react
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Run the development server:
    ```
    npm run dev
    ```
4. Visit localhost in your browser to view and interact with the secure form.


___



## State Implementation
The project includes an implementation using state is also provided. State is used to manage the form input values and track validation errors. Error messages are displayed on form submission and dynamically updated as inputs change after the initial submission.

## Ref Implementation
 An alternative  implementation using refs for form validation. The refs are used to access the form input values and perform validations. Error messages are displayed upon form submission and automatically updated as inputs change.