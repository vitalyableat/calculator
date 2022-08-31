# Innowise Lab Internship: Level 0 - Calculator
## Task
### **→** [Requirements](https://docs.google.com/document/d/1j8DnTnRSNoRBdYtKu3Rgk1STLso4X5Rev2-oEyxMsK8/edit)
### **→** [Deployment](https://calculator-olivertears.vercel.app/)
## How to run the app
1. Clone the repository to your local machine
2. Run "cd calculator" command to move into the project directory
3. Run "npm i" command to install all the dependencies
4. Switch to the dev branch if you're planning to change app
5. Run "npm start" command to run the app in your browser
## Additional scripts
- **Test:** npm test (starts unit-testing)
- **Test:** npm run build (building the project)
## Folder structure
- **src** (contains all logic of the project)
  - **styles** (css-files setting styles of the project)
  - **utils**
    - **commands** (math operation classes and unit-test for each of them)
    - **commandSelectors** (functions that help to choose the right command)
    - **validations** (validations to prevent app errors)
  - Calculator.js - file with the instance of main class through which all math commands are performed
  - const.js - file containing all the constants using in the app
  - index.js - file adding event listeners to all the moves
  - template.html - HTML file containing all DOM-elements of the app
