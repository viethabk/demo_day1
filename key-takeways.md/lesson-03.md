# Git

## Undo Commit Message

### Change the most recent commit message:

```bash
git commit --amend -m "feat: add feature"     //change the previous commit message to "feat: add feature"
```

---

## Un-stage (Staging → Working Directory)

### Un-stage a specific file

```bash
git restore --staged <file>
```

### Un-stage all files

```bash
git restore --staged .
```

---

## Un-commit

### Move the last commit to staging

```bash
git reset --soft HEAD~1
```

### Move the last commit to working directory

```bash
git reset HEAD~1
```

---

# Git Branching

## Purpose of Branches

A project can be imagined as a timeline.

Branches allow creating parallel timelines to:

- Develop new features without affecting stable code
- Allow multiple people to work independently
- Experiment safely and delete the branch if it fails

---

## Nature of Branching

Creating a branch does not copy files.

A branch is simply a pointer to a commit.

Example when creating a branch from main

main: A → B → C  
feature/login → commit C

When new commits are added

main: A → B → C  
feature/login: D → E

---

## Branch Commands

View branch list

```bash
git branch
```

Note: there must be at least one commit to display branches.

### Create branch (without switching)

```bash
git branch feature/login
```

### Switch branch

```bash
git checkout <branch_name>
```

### Create and switch branch

```bash
git checkout -b feature/login
```

### Delete branch

```bash
git branch -D <branch_name>
```

Note: switch to another branch before deleting.

### Push branch to remote

```bash
git push origin <branch_name>
```

### Delete remote branch

```bash
git push -D origin <branch_name>
```

# JavaScript

## Conditional Statements

### Syntax

```javascript
if (<condition>) {
  // code
}
```

### Multiple conditions

```javascript
if (hour >= 6 && hour <= 11) {
  console.log("Good morning");
}
```

### Nested condition

```javascript
if (hour >= 6) {
  if (hour <= 11) {
    console.log("Good morning");
  }
}
```

---

# JavaScript Loops

Loops repeat a block of logic.

Types

- for (i)
- for (of)
- for (each)
- for (in)
- while
- do...while

### for Loop Syntax

```javascript
for (<initialization>; <condition>; <update>) {
  // code
}
```

Example

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Xin chào!");
}
```

---

# JavaScript Convention

Convention = rules

Conventions help:

- Code follow a common format
- Other team members read code more easily

Types of conventions

- File naming
- Variable naming
- Commit naming

---

## Convention Used in Class

- snake_case: temporarily not used
- kebab-case: file and folder names
- camelCase: variables and functions
- PascalCase: class names

---

