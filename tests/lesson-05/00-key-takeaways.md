# DOM
- DOM = Document Object Model

## Common HTML Tags

In practice, there are many different types of tags:

- Standard tags: defined by trusted organizations such as Mozilla
- Custom tags: defined by programmers / websites

### Common Standard Tags

#### 1. Page Structure Tags

- `<html>`: Root tag of the page
- `<head>`: Contains metadata: website title, display on Google
- `<body>`: All visible content of the website

#### 2. Layout & Semantic Tags

- `<div>`: General block/container
- `<header>`, `<footer>`, `<nav>`, `<section>`: Semantic tags

#### 3. Content Tags

- `<h1>` to `<h6>`: Headings
- `<paragraph>`: Paragraph
- `<ul>`, `<ol>`, `<li>`: Lists

#### 4. Interaction & Media Tags

- `<a>`: Link
- `<img>`: Image

#### 5. Form Tags (Important for Testing)

- `<form>`: Form
- `<input>`: Input field (`text`, `password`, `checkbox`, `radio`, etc.)
- `<button>`: Button
- `<select>` and `<option>`: Dropdown
- `<textarea>`: Multi-line text area

---

# Selector

## Common Types of Selectors

There are 3 commonly used selectors:

- XPath
- CSS selector
- Playwright selector

### XPath

- Can be used in most cases (99.99%)
- Diverse, able to find difficult elements
- A bit long

Example:

```xpath
//button[normalize-space() = 'Add to cart']
```

### CSS Selector

- Short and high performance
- Used for easy-to-find cases
- Not as flexible as XPath

Example:

```css
.add-to-cart
```

### Playwright Selector

- Only used specifically for Playwright
- Short syntax, does not depend on DOM structure
- Oriented toward “what the user sees”

Example:

```javascript
page.getByText("Add to cart");
```

## Which One to Use?

Playwright selector > CSS Selector > XPath

- Still need to understand all three types to handle all kinds of projects
- Some projects prefer CSS, some prefer XPath, so we must follow them

---

# XPath Selector

## XPath Selector

- XPath = XML Path
- There are 2 types:

### Absolute XPath

- Goes along the DOM tree
- Starts with one `/`

### Relative XPath

- Finds based on characteristics
- Starts with two `//`

Pattern:

```xpath
//tagname[@attribute="value"]
```

Recommended: **Use relative XPath**

## Absolute XPath Example

```html
<html>
  <body>
    <div class="login">
      <input id="user" type="text">
    </div>
  </body>
</html>
```

Starts from the root, using `/`

```xpath
/html/body/div/input
```

Characteristics:

- Starts with `/`
- Must write the full path from the root
- Easily breaks when the HTML structure changes
- Less flexible

## Relative XPath Example

```html
<html>
  <body>
    <div class="login">
      <input id="user" type="text">
    </div>
  </body>
</html>
```

Starts from anywhere in the DOM, using `//`

```xpath
//input[@id='user']
```

Characteristics:

- Starts with `//`
- Finds the element at any position
- Flexible, less affected when HTML changes
- Recommended in practice

## When to Use Which?

- Use relative (`//`) in 99% of cases
- Avoid absolute (`/`): only when you are sure the structure will not change

Tip:

- Always combine with attributes such as `@id`, `@class`, `@name` to make XPath more accurate

---

# Playwright Basic Syntax

## Basic Concepts

Automation = interaction + verify

In this lesson, learn how to interact with elements:

- Write a test
- Organize into steps
- Basic interactions
  - Navigation
  - Click
  - Fill

## test

`test` is the basic unit to declare a test.

```javascript
import { test } from '@playwright/test';

test('<test name>', async ({ page }) => {
  // Test code
});
```

## step

`step` is smaller than `test`, used to declare each step of the test case.

```javascript
await test.step('Step name', async () => {
  // Code here
});
```

Example:

```javascript
test('<test name>', async ({ page }) => {
  await test.step('Step name', async () => {
    // Code here
  });
});
```

Note:

- A step should map 1-1 with a test case to make maintenance easier

## Navigation

```javascript
await page.goto('https://pw-practice.playwrightvn.com/');
```

## Locate

Use `page.locator("<selector>")` to select an element on the page.

Example:

```javascript
page.locator("//input[@id='email']")
```

## Click

### Single click

```javascript
await page.locator("//button").click();
```

### Double click

```javascript
await page.locator("//button").dblclick();
```

### Right click

```javascript
page.locator("//button").click({
  button: 'right'
})
```

### Click with keyboard modifier

```javascript
page.locator("").click({
  modifiers: ['Shift'],
})
```

## Input

### Fill

Like pasting content into an input field

```javascript
page.locator("//input").fill('Playwright Viet Nam');
```

### pressSequentially

Like typing each character into an input field

```javascript
page.locator("//input").pressSequentially('Playwright Viet Nam', {
  delay: 100,
});
```

## Radio / Checkbox

Get current checked state:

```javascript
const isChecked = page.locator("//input").isChecked();
```

Check / uncheck:

```javascript
page.locator("//input").check();
page.locator("//input").setChecked(false);
```

## Select

```javascript
await page.locator('//select[@id="country"]')
  .selectOption({ label: 'USA' })
```

## Upload File

```javascript
await page.locator("//input[@id='profile']")
  .setInputFiles("<file-path>");
```

