# Git -- Three States
## 1. Working Directory

Files that are new or have been modified.

## 2. Staging Area

Files prepared for committing (creating versions).

## 3. Repository

Stored commits (versions).

------------------------------------------------------------------------

## Git Workflow Example

``` bash
git init
git status
git add test1.spec.ts
git commit -m "feat: add test 1"
git add .
git commit -m "chore: add other files"
```

------------------------------------------------------------------------

## Git Workflow Summary

``` bash
git init
git add .
git commit -m "<message>"
git remote add origin <url>
git push origin main
```

------------------------------------------------------------------------

## Git Configuration

To commit, Git needs to know **who you are**.

``` bash
git config --global user.name "Ha Trinh"
git config --global user.email "chloeee8420@gmail.com"
```

Configure for a specific repository:

``` bash
git config user.name "Ha Trinh"
git config user.email "ha@outpost24.com"
```

------------------------------------------------------------------------

## Some Git Commands

### Check file status

``` bash
git status
```

### Check commit history

``` bash
git log
```

------------------------------------------------------------------------

## Git Commit Convention

    <type>: <short_description>

### Types

-   **chore** -- small fixes
-   **feat** -- new feature or test case
-   **fix** -- bug fix


------------------------------------------------------------------------
# JavaScript


# Comments

### Single-line comment

``` javascript
// const name = "Better Bytes Academy"
```

### Multi-line comment

``` javascript
/*
const name = "Phong";
console.log(name);
*/
```

------------------------------------------------------------------------

# Variables and Constants
-   Use **const by default**
-   Use **let only when reassignment is needed**

------------------------------------------------------------------------

# Data Types

## Primitive Types

-   Number
-   String
-   Boolean
-   Undefined
-   Null
-   Symbol
-   BigInt

#### Check data type

``` javascript
typeof variable
```

------------------------------------------------------------------------

# Comparison Operators

    ==
    ===
    !=
    !==
    >
    <
    >=
    <=

### Recommendation

Always use **===**

------------------------------------------------------------------------

# Logical Operators

    &&  (AND)
    ||  (OR)

------------------------------------------------------------------------

# Unary Operators

``` javascript
x++
++x
x--
--x
```