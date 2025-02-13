# Matrix Social Labs Intern Assessment
Welcome to the Matrix Social Labs Intern Assessment repository! This document will guide you through the process of completing your technical assessment. Follow the instructions carefully to ensure your submission is evaluated correctly.

## Table of Contents
1. [Introduction](#-introduction)
2. [How to Get Started](#️-how-to-get-started)
3. [Task List](#-task-list)
4. [Submission Guidelines](#-submission-guidelines)
5. [Evaluation Criteria](#-evaluation-criteria)
6. [FAQs](#-faqs)

## 🚀 Introduction
This repository is designed to evaluate your **React Native development skills** and problem-solving abilities. You will be asked to choose **3 tasks** from a list of 10, implement the required features, and submit your work for evaluation.

Your submission will be **automatically tested**, and a **PDF report** will be generated with your results. Let’s get started!

## 🛠️ How to Get Started
### Step 1: Fork the Repository

1. Click the **Fork** button at the top-right of this repository to create your own copy.
2. Clone your forked repository to your local machine:
    ```bash
        git clone https://github.com/sagarkishore-7/matrix-intern-assessment.git
        cd matrix-intern-assessment
    ```
### Step 2: Choose Your Tasks

1. Open the ```tasks.json``` file in the root directory.
2. Replace the placeholder with **3 tasks** of your choice. For example:
    ```json
    {
        "tasks": ["task1-profile-builder", "task6-api-data", "task7-todo-redux"]
    }
    ```

### Step 3: Implement Your Solutions
1. Navigate to the ```src/tasks/``` folder.
2. Each task has its own folder (e.g., ```task1-profile-builder/```).
3. Open the template file (e.g., ```ProfileScreen.js```) and implement the required functionality.
4. Replace the ```{{VARIABLE}}``` placeholders with the code.

### Step 4: Test Your Code
1. Run unit tests for your selected tasks:
    ```bash
        npm test
    ```
2. Run end-to-end (E2E) tests:
    ```bash
        npm run build:e2e && npm run test:e2e
    ```

### Step 5: Submit Your Work
1. Commit your changes and push them to your forked repository:
    ```bash
        git add .
        git commit -m "Completed tasks 1, 6, and 7"
        git push origin main
    ```
2. Open a **pull request (PR)** to the original repository.

## 📋 Task List
Choose **3 tasks** from the list below:

|Task     |Description|
|---------|-----------|
|Task 1: Dynamic Profile Builder| Create a profile screen with name, bio, and image upload functionality.|
|Task 2: Swipeable List	| Build a list UI where items can be swiped left/right to reveal action buttons.|
|Task 3: Dark Mode	| Implement a light/dark mode feature with persistent user preferences.|
|Task 4: Simple Chat UI	| Develop a one-on-one chat interface with locally stored messages.|
|Task 5: Image Gallery	| Create an image gallery app where users can upload and view images.|
|Task 6: Fetch API Data	| Build a list UI fetching data from an API with search functionality.|
|Task 7: To-Do List with Redux	| Implement a to-do list app using Redux Toolkit for state management.|
|Task 8: Push Notifications	| Enable push notifications for dummy event alerts.|
|Task 9: Navigation & Tabs	| Develop a multi-screen app with a bottom tab bar for navigation.|
|Task 10: Splash Screen	| Implement a splash screen animation followed by a 3-step onboarding flow.|

## 📤 Submission Guidelines
1. **Code Quality**:
    - Write clean, modular, and well-documented code.
    - Follow React Native best practices.
2. **Test IDs**:
    - Use the ```testID``` attributes provided in the templates (e.g., ```testId="save-button"```).
3. **README File**:
    - Include a ```README.md``` in each task folder explaining how to run your solution (if possible).
4. **Deadline**:
    - Submit your pull requst before the deadline to be considered for evaluation.

## ✅ Evaluation Criteria
Your submission will be evaluated based on:

1. **Code Quality**: Clean, maintainable, and modular code.

2. **Functionality**: Correct implementation of the required features.

3. **Test Coverage**: At least 70% test coverage for unit tests.

4. **UI/UX**: Smooth user interactions and responsive design.

5. **Creativity**: Additional features or improvements beyond requirements.

## 📄 Report Generation
After you submit your pull request:

1. Github Actions will **automatically run tests** for your selected tasks.
2. A **PDF report** will be generated with:
    - Task status (Passed/Failed).
    - Test coverage percentages.
    - Detailed feedback.

## ❓ FAQs
### 1. Can I choose more than 3 tasks?
No, please select **excatly 3 tasks** from the list.

### 2. What if my tests fail?
You can push additional commits to your branch to fix issues. The tests will re-run automatically.

### 3. Can I use external libraries?
Yes, but only if necessary. Avoid overcomplicating your solution.

### 4. How do I know if my submission was successful?
Check the **GitHub Actions** tab in your forked repository for test results.

## 📧 Contact
If you have any questions, feel free to reach out:

- **Email**: [Recruiting Team](mailto:recruiting@blendn.app)
- **Subject**: "Matrix Intern Assessment - [Your Name]"



Good luck, and we look forward to your submission! 🚀

