const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

app.use(express.json());

app.listen(port, () => {
    console.log("listening on " + port);
});

router.post("/bfhl", (req, res) => {

    const alpha = [];
    const nums = [];
    const data = req.body.data;

    for (let i = 0; i < data.length; i++)
    {
        if (!isNaN(data[i]))
            nums.push(data[i]);
        else if (typeof data[i] === "string")
            alpha.push(data[i]);
    }
    res.status(200).send({
        is_success: true,
        user_id: "Vinayak_Gupta_1910991122",
        email: "vinayak1122.cse19@chitkara.edu.in",
        roll_number: "1910991122",
        numbers: nums,
        alphabets:alpha
    });
})

app.use("/", router);