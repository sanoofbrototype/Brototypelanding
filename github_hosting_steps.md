# GitHub Pages Hosting Guide

Follow these 3 steps to get your landing page live and accessible on your phone!

### Step 1: Create the Repository
1. Log in to [GitHub](https://github.com/).
2. Click **New** (green button) or the **+** icon > **New repository**.
3. **Repository name**: `brototype-landing`
4. Set to **Public**.
5. Click **Create repository** (Keep the page open!).

### Step 2: Push your Code
Run these commands in your project folder (`d:\Antigravity`):

```powershell
# 1. Start git
git init

# 2. Add your files
git add .

# 3. Create a snapshot
git commit -m "Launch landing page"

# 4. Link to GitHub (COPY THIS from your GitHub page)
# Replace 'your-username' with your actual GitHub username
git remote add origin https://github.com/your-username/brototype-landing.git

# 5. Upload!
git push -u origin main
```

### Step 3: Turn on Hosting
1. On your GitHub repo page, click **Settings** (top menu).
2. Click **Pages** (left sidebar).
3. Under **Branch**, select `main` and then click **Save**.
4. Wait 60 seconds. A link will appear at the top: *"Your site is live at..."*

---

### 📱 How to check on your phone:
- Copy that link (e.g., `https://your-username.github.io/brototype-landing/`).
- Send it to your phone via WhatsApp, Email, or just type it in.
- **You're live!**
