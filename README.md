# Node.js Calculator App

This is a simple Node.js web application that performs basic arithmetic operations on two numbers using Express and EJS.

## Setup

1. Clone this repository to your local machine.

2. Install Node.js if you haven't already.

3. Open your terminal and navigate to the project directory.

4. Install the project dependencies by running:

   ```bash
   npm install
   ```

## Usage

1. Start the server by running:

   ```bash
   node app.js
   ```

   The server will be running at http://localhost:4000.

2. Open your web browser and go to http://localhost:4000.

3. Enter two numbers in the form and click "Calculate."

4. You will be redirected to a page displaying the results of addition, subtraction, multiplication, and division operations on the input numbers.

## File Structure

- `app.js`: The main Node.js application file.
- `views/index.ejs`: The EJS template for the input form.
- `views/result.ejs`: The EJS template to display calculation results.

## Dependencies

- Express
- EJS
- body-parser
