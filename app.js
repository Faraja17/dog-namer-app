//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const client = require("@mailchimp/mailchimp_marketing"); //you need to add dependency first in terminal. run npm i @mailchimp.marketing in terminal. Make sure you are inside the folder of your project. Check your package.json file, make sure @mailchimp/marketing has bbeen added in your dependencies.
const { response } = require("express");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

client.setConfig({
    apiKey: "1ba358f0237b05f41cf5fd60eea5bbad-us17", 
    server: "us17"
});

app.post("/", function(req, res) {
    const firstName = "Prudence" //req.body.fName;
    const lastName = "McVankab" //req.body.lName;
    const email = "prudence.mcvankab@example.com" //req.body.email;
    console.log(firstName, lastName, email)
    const subscribingUser = {
        firstName: firstName, 
        lastName: lastName, 
        email: email
    };

    const run = async () => {
        try {    
            const response = await mailchimp.lists.addListMember("7f0aa8ef30", {
                    
                email_address: subscribingUser.email,
                status: "subscribed",
                merge_fields: {
                    FNAME: subscribingUser.firstName,
                    LNAME: subscribingUser.lastName
                }                    
            });
            console.log(response);
            res.sendFile(__dirname + "/success.html");
        } catch (err) {
            console.log(err.status);
            res.sendFile(__dirname + "/failure.html");
        }
    };
            
    run();
});
    
    // const jsonData = JSON.stringify(data);

    // const url = "https://us17.api.mailchimp.com/3.0/lists/7f0aa8ef30";
    
    // const options = {
    //     method: "Post",
    //     auth: "faraja17:1ba358f0237b05f41cf5fd60eea5bbad-us17"
    // }

    // const request = https.request(url, options, function(response) {
    //     response.on("data", function(data) {
    //         console.log(JSON.parse(data))
    //     });

    // });

    // request.write(jsonData);
    // request.end;
    

app.post("/failure", function(req, res) {
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000.");
});

// API Key
// 1ba358f0237b05f41cf5fd60eea5bbad-us17

// List Id
// 7f0aa8ef30