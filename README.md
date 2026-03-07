# nchoy1.github.io
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Water Corporation | Customer Portal</title>

<style>

body{
font-family: Arial, Helvetica, sans-serif;
margin:0;
background:#f4f7fa;
color:#333;
}

header{
background:#0077c8;
color:white;
padding:20px 40px;
display:flex;
justify-content:space-between;
align-items:center;
}

header h1{
margin:0;
font-size:24px;
}

nav a{
color:white;
margin-left:25px;
text-decoration:none;
font-weight:500;
}

nav a:hover{
text-decoration:underline;
}

.hero{
background:url("https://images.unsplash.com/photo-1509395176047-4a66953fd231");
background-size:cover;
background-position:center;
height:350px;
display:flex;
align-items:center;
justify-content:center;
color:white;
text-align:center;
}

.hero h2{
font-size:42px;
background:rgba(0,0,0,0.4);
padding:20px 30px;
border-radius:8px;
}

.container{
max-width:1100px;
margin:auto;
padding:40px 20px;
}

.services{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
background:white;
padding:30px;
border-radius:8px;
box-shadow:0 3px 10px rgba(0,0,0,0.1);
}

.card h3{
margin-top:0;
color:#0077c8;
}

.card p{
font-size:14px;
}

.card a{
display:inline-block;
margin-top:15px;
padding:10px 15px;
background:#0077c8;
color:white;
border-radius:5px;
text-decoration:none;
}

.card a:hover{
background:#005fa3;
}

footer{
margin-top:60px;
background:#003b5c;
color:white;
text-align:center;
padding:25px;
font-size:14px;
}

</style>
</head>

<body>

<header>
<h1>Water Corporation</h1>

<nav>
<a href="index.html">Home</a>
<a href="outages.html">Service Outages</a>
<a href="report.html">Report a Problem</a>
<a href="alerts.html">SMS Alerts</a>
<a href="contact.html">Contact</a>
</nav>
</header>

<section class="hero">
<h2>Supporting our communities with safe, reliable water</h2>
</section>

<div class="container">

<h2>Customer Services</h2>

<div class="services">

<div class="card">
<h3>Check Service Outages</h3>
<p>
View current water service disruptions in your area and estimated restoration times.
</p>
<a href="outages.html">View Outages</a>
</div>

<div class="card">
<h3>SMS Service Alerts</h3>
<p>
Sign up to receive real-time SMS updates about outages, maintenance, and service restoration.
</p>
<a href="alerts.html">Get SMS Alerts</a>
</div>

<div class="card">
<h3>Report a Water Issue</h3>
<p>
Report leaks, pressure issues, or water quality concerns directly to our operations team.
</p>
<a href="report.html">Report Issue</a>
</div>

<div class="card">
<h3>Contact Support</h3>
<p>
Need help with your water service or account? Our support team is here to help.
</p>
<a href="contact.html">Contact Us</a>
</div>

</div>

</div>

<footer>
© 2026 Water Corporation | Mock Customer Portal Demo
</footer>

</body>
</html>
