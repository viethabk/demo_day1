# Development Tools

## NVM (Node Version Manager)

NVM manages NodeJS versions.

NodeJS is required to run JavaScript code.

Options:

1. Install NodeJS directly
2. Install NodeJS via NVM

Recommended: **Use NVM** because it allows switching between Node versions.

---

# Git and GitHub

- Git → manage source code
- GitHub → share code and collaborate

## Basic Git Configuration

```bash
git config --global user.name "<your name>"
git config --global user.email "<your email>"
git config --global init.defaultBranch main
```

---

# Visual Studio Code

VS Code is an **IDE (Integrated Development Environment)** used to write code.

Download:

https://code.visualstudio.com/

---

# Init and push code to Gibhub

1. Generate a SSH key: ssh-keygen -t ed25519 -C "ha@gmail.com"  

2. Show the SSH key: cat ~/.ssh/id_rsa.pub   

3. Create a repository in Gibhub and go to settings > SSH key > Add a new key using the newly generate key from step 2

4. Create a folder (Ex: Test1) and open terminal right in this folder


5. Install playwright on this folder: npm init playwright@latest

6. Init the project: git init

7. Connect gibhub with the local repository: git remote and origin <URL>

8. Push code from local to the repository:
   - git add .
   - git commit -m "message"
   - git push origin main
