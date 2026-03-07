const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/report-issue", (req, res) => {

    const phone = req.body.phone;
    const issue = req.body.issue;

    console.log("---- NEW OUTAGE REPORT ----");
    console.log("Phone:", phone);
    console.log("Issue:", issue);
    console.log("---------------------------");

    res.redirect("/success.html");

});

app.post("/pay-bill", (req, res) => {

    const phone = req.body.phone;
    const amount = req.body.amount;

    console.log("---- BILL PAYMENT ----");
    console.log("Phone:", phone);
    console.log("Amount:", amount);
    console.log("----------------------");

    res.redirect("/success.html");

});

app.listen(3000, () => {
    console.log("Water Corporation demo running at:");
    console.log("http://localhost:3000");
});
