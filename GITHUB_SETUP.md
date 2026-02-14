# Push LifeLine Track to GitHub

Your project is committed locally. Follow these steps to create the repo on GitHub and push.

## 1. Create the repository on GitHub

1. Open: **https://github.com/new**
2. **Repository name:** `LifeLine-Track` (or `lifeline-track`)
3. **Description (optional):** Medical SaaS landing page
4. Choose **Public**
5. **Do not** check "Add a README" (you already have one)
6. Click **Create repository**

## 2. Connect and push

If your GitHub **username** is different from `deepanashipudi`, fix the remote URL (replace `YOUR_USERNAME` with your actual username):

```powershell
cd "c:\Users\lenovo\OneDrive\Desktop\deepa"
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/LifeLine-Track.git
git push -u origin main
```

If your username **is** `deepanashipudi`, just run:

```powershell
cd "c:\Users\lenovo\OneDrive\Desktop\deepa"
git push -u origin main
```

When prompted for credentials, use your GitHub username and a **Personal Access Token** (not your email password).  
To create a token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token.

Done. Your code will be at: `https://github.com/YOUR_USERNAME/LifeLine-Track`
