Here’s a clean, simple **Markdown** version you can directly paste into your `README.md` file for GitHub 👇

---

#  Test-Driven Development (TDD) with Prisma & Node.js

This project follows the **Test-Driven Development (TDD)** methodology to ensure code reliability, maintainability, and correctness.

---

##  What is TDD?

**Test-Driven Development (TDD)** is a software development process where tests are written **before** the actual code.
It follows a short, repeatable cycle known as **Red → Green → Refactor**.

---

##  TDD Cycle: Red → Green → Refactor

| Phase           | Description                                                                                                                  |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| **🟥 Red**      | Write a failing test that describes a new feature or behavior. The test will fail because the feature isn’t implemented yet. |
| **🟩 Green**    | Write just enough code to make the test pass. Don’t worry about perfection — just make it work.                              |
| **🟦 Refactor** | Clean up the code and test logic while keeping all tests passing. Focus on readability and maintainability.                  |

---

##  Example Flow

1. Write a failing test for a function (🔴 Red).
2. Implement the function to make the test pass (🟢 Green).
3. Refactor your function and tests for better structure (🔵 Refactor).

---

##  Example Code (Prisma + Jest)

```ts
import { prisma } from '../src/lib/prisma';

test('should create a new todo', async () => {
  const todo = await prisma.todo.create({
    data: { title: 'Learn TDD', completed: false },
  });

  expect(todo.title).toBe('Learn TDD');
});
```

---

##  User Stories in TDD

User stories describe system behavior from the user’s perspective.
Each story drives one or more tests.

**Example User Story:**

> As a user, I want to add a new todo so that I can track my daily tasks.

From this story, you derive tests like:

*  Should create a new todo
*  Should not create a todo with an empty title
*  Should mark a todo as completed


