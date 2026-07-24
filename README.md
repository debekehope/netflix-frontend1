# 🎬 Netflix Frontend

**By DigitalWitch | Cloud • DevOps • Security**

---

## 📌 Overview

This project is the frontend application for the Netflix-style platform. It connects to the backend API and provides the user interface for interacting with the system.

The frontend should be deployed on a **separate Ubuntu server** from the backend.

---

## ⚙️ Prerequisites

Before running the frontend application, make sure the following are installed on your Ubuntu server:

* **Node.js**
* **npm**

---

## 🐧 Install Node.js and npm on Ubuntu

Update your package list and install Node.js and npm:

```bash
sudo apt update -y
sudo apt install nodejs -y
sudo apt install npm -y
```
<img width="1366" height="710" alt="image" src="https://github.com/user-attachments/assets/4a8c91c8-9e2a-4a75-9d4a-aa168bb0b438" />

### Verify the installation

```bash
node -v
npm -v
```
<img width="549" height="119" alt="image" src="https://github.com/user-attachments/assets/f48eeb58-a184-4b67-9627-6e481eb897b6" />

---

## 🚀 Getting Started

### 1. Clone the frontend repository

First, clone the digital witch reponon your local system

```bash
git clone https://github.com/digitalwitchdemo/netflix_frontend.git

```
### Remove Existing Git Configuration

Delete the default `.git` folder to reinitialize the repository under your own account.

```bash
rm -rf .git
```

<img width="640" height="66" alt="image" src="https://github.com/user-attachments/assets/281a5425-298d-4cfc-b9a5-fbb81b039795" />

### Open the Project

Open the `netflix_backend` folder in your preferred IDE (e.g., VS Code).

## 🔁 Reinitialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit"
git config user.name "your-github-username"
git config user.email "your-email@example.com"
```

<img width="1366" height="721" alt="image" src="https://github.com/user-attachments/assets/2667f087-05df-4cd0-9b02-2df7e4d1c415" />

In your Github account, create a new repo without a Readme file, so that it does not clash with the cloned repo's Readme file

<img width="1366" height="721" alt="image" src="https://github.com/user-attachments/assets/9608492a-abbc-4fd9-87b2-5002cd895e0c" />

```bash
git remote add origin https://github.com/debekehope/netflix-frontend1
git branch -M main
git push -u origin main
```
<img width="1366" height="721" alt="image" src="https://github.com/user-attachments/assets/8afdbb64-0969-4a7e-a8bd-7cc68bbc2ebd" />

**Delete the Docker file**

<img width="1366" height="721" alt="image" src="https://github.com/user-attachments/assets/bf982f5e-b4bb-45ba-bf9c-61195376ff81" />

**Clone the repo to your frontend server**

```bash
git clone https://github.com/{your-frontend-repository}.git
cd {your-frontend-folder}

```
<img width="1129" height="166" alt="image" src="https://github.com/user-attachments/assets/cedf6cf6-d7c2-496c-becd-7ee991ba7ce0" />


### 2. Install all project dependencies

Run the following command to install all required packages from `package.json`:

```bash
npm install
```

Or simply:

```bash
npm i
```
<img width="1318" height="388" alt="image" src="https://github.com/user-attachments/assets/1f71cad6-4543-4845-b65b-bf9215c5cf42" />


---

## 🔗 Configure the Backend API

Before starting the frontend, update the API configuration so it points to your backend server.

### File to edit

```bash
src/api/axiosConfig.js
```

### Update the file with your backend details

```javascript
import axios from 'axios';

export default axios.create({
    baseURL: 'http://{your-backend-url}',
    headers: {
        'Content-Type': 'application/json',
    },
});
```

### Example

Replace:

```javascript
http://{your-backend-url}:8080
```

With your actual backend URL, for example:

```javascript
http://192.168.1.10:8080
```

or

```javascript
http://your-domain.com
```
<img width="1263" height="282" alt="image" src="https://github.com/user-attachments/assets/c7def98f-e7dd-4538-bfb5-f0bd7973f685" />

Commit your changes and push to github

<img width="717" height="412" alt="image" src="https://github.com/user-attachments/assets/e073c548-3d4c-4ee8-bdd0-fe95614baeb3" />

Pull the changes to your server

<img width="832" height="259" alt="image" src="https://github.com/user-attachments/assets/e5d0f28c-98a9-435b-a6ec-04173f656f6a" />

Delete files and folders you do not need and commit the changes

<img width="1366" height="721" alt="image" src="https://github.com/user-attachments/assets/7c5a0060-70a5-4439-83c8-545f2bf378da" />

Pull the changes to your server

<img width="744" height="262" alt="image" src="https://github.com/user-attachments/assets/09e602ee-d3de-4da2-a2ea-90e1f4b584ce" />



---

## ▶️ Run the Frontend Application

After installing dependencies and updating the backend URL, start the frontend server:

```bash
npm start
```
<img width="1316" height="215" alt="image" src="https://github.com/user-attachments/assets/8f103940-d837-4161-8862-80f254b546c0" />

**Troubleshooting**

it actually did compile and start successfully — you can see Compiled successfully! and it was serving on http://localhost:3000 and http://172.31.64.34:3000. But then it crashed right after.

1. Confirm this is really an out of memory (OOM) issue

```bash
free -h
```
<img width="769" height="162" alt="image" src="https://github.com/user-attachments/assets/18abc061-cdd5-4af2-bda8-138759b5e19d" />

This confirms it: you have 908MB total RAM (a t2.micro or t3.micro-class instance) and zero swap space (Swap: 0B). Node's dev server + webpack compilation can easily spike memory usage well past what's available here, especially during the initial build — which is exactly why it compiled once successfully, then got killed shortly after.

Let's add swap space to give the system breathing room:

1. Create a 1GB swap file

bash
sudo fallocate -l 1G /swapfile

2. Secure it (only root should read/write it)

bash
sudo chmod 600 /swapfile

3. Format it as swap

bash
sudo mkswap /swapfile

4. Enable it

bash
sudo swapon /swapfile

5. Confirm it's active

bash
free -h

<img width="860" height="262" alt="image" src="https://github.com/user-attachments/assets/01e7a175-6989-446c-9d5f-7435cac4ae36" />

## ▶️ Run the Frontend Application again

After installing dependencies and updating the backend URL, start the frontend server:

```bash
npm start
```
<img width="910" height="356" alt="image" src="https://github.com/user-attachments/assets/c09e27da-790e-4567-a09a-51cab1da99ea" />

---

## 🌍 Access the Application

Once the application is running, it will usually be available at:

```bash
http://localhost:3000
```

If the frontend is hosted on a remote Ubuntu server, access it using the server IP address:

```bash
http://<server-ip>:3000
```
<img width="1366" height="721" alt="image" src="https://github.com/user-attachments/assets/b56ebd99-d42f-48db-beaf-53e0655e89e2" />

**Lets troubleshoot**
Open port 8080 and 3000 on your security group

<img width="1366" height="516" alt="image" src="https://github.com/user-attachments/assets/c8e1fe31-5975-465f-9fe1-a1bcbfd8e25d" />

Homepage is blank and the watch list says “the page could not be found”

<img width="1363" height="664" alt="image" src="https://github.com/user-attachments/assets/2e404381-7825-4a2a-98bf-9c70b402ea2f" />

Open your browser's Developer Tools and check for errors

Right-click on the blank home page → Inspect → click the Console tab
Look for any red error messages — especially anything mentioning:

This was the error message

<img width="773" height="262" alt="image" src="https://github.com/user-attachments/assets/686bbb8b-76ce-4ccd-b846-e94239fb852e" />

**Start the backend and in another terminal, make sure backend is running**

Start the backend

bash
java -jar target/movieist-0.0.1-SNAPSHOT.jar

<img width="1366" height="721" alt="image" src="https://github.com/user-attachments/assets/42234068-0a61-4c50-9517-949e3501295f" />

Then, separately, SSH into your backend server and make sure it is running on the database:

bash
curl http://localhost:8080/api/v1/movies

<img width="1353" height="496" alt="image" src="https://github.com/user-attachments/assets/4c53e643-6a11-4df0-93de-50a16d833f91" />

**Now our app is working right**

<img width="1366" height="721" alt="image" src="https://github.com/user-attachments/assets/a5530099-6789-48ea-b52f-225fdbe27e33" />


---

## ✅ Important Notes

* Make sure the backend server is already running and accessible.
* Confirm that the backend URL in `axiosConfig.js` is correct.
* Ensure port **3000** is open on the frontend server.
* If your backend uses a custom port such as `8080`, make sure that port is also open.
* Use **HTTPS** in production environments for better security.

---

## 💡 Optional Improvement

For better flexibility, you can use an environment variable instead of hardcoding the backend URL.

Example `.env` file:

```bash
REACT_APP_API_URL=https://your-backend-url/api
```

Then update `axiosConfig.js` like this:

```javascript
import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
```

---

## 📦 Summary

Frontend setup steps:

1. Install Node.js and npm on a separate Ubuntu server
2. Clone the frontend repository
3. Run `npm install` or `npm i`
4. Edit `src/api/axiosConfig.js` and add your backend URL
5. Run `npm start`

---

## 🎓 Final Words

Please Clone the Code for the FullStack app
1) Frontend 
https://github.com/digitalwitchdemo/netflix_frontend.git

2) Backend
https://github.com/digitalwitchdemo/netflix_backend.git

Make sure you deploy the database before starting the backend.

Finally. 
Note: Make sure you deploy the backend before starting the frontend.
