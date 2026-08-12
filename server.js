const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

let clicks = 0;

app.use(express.static(__dirname));

app.get("/api/count", (req, res) => {
    res.json({
        clicks: clicks
    });
});

app.post("/api/click", (req, res) => {
    clicks++;

    res.json({
        clicks: clicks
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
