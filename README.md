# nchoy1.github.io
# Water Corporation Mock Citizen Portal (Twilio Demo)

This project is a **mock citizen portal** used to demonstrate how Twilio messaging can interact with a utility provider like Water Corporation.

The site simulates two key workflows:

1. Reporting a water outage
2. Paying a water bill

Citizens receive SMS messages that include a secure link which takes them to this portal.

The portal then logs the request and confirms the action.

---

# Architecture Overview

Citizen receives SMS →

Twilio Messaging API →

Secure link →

Citizen Portal →

Backend event logging

---

# Install Instructions

### 1. Install Node

Download Node.js if needed:

https://nodejs.org

---

### 2. Clone the repository

```
git clone YOUR_REPO_URL
cd watercorp-demo
```

---

### 3. Install dependencies

```
npm install
```

---

### 4. Start the server

```
node server.js
```

---

### 5. Open the portal

Open browser:

```
http://localhost:3000
```

---

# Twilio Demo Example

Example SMS:

```
Water outage detected in your area.

Reply REPORT or visit:
http://localhost:3000/report
```

Example Billing SMS:

```
Your Water Corporation bill is due tomorrow.

Pay securely here:
http://localhost:3000/pay
```

---

# Folder Structure

```
watercorp-demo
│
├── README.md
├── package.json
├── server.js
│
└── public
    ├── index.html
    ├── report.html
    ├── pay.html
    ├── success.html
    └── styles.css
```
