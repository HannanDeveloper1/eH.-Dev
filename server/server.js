require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 500;

app.listen(PORT, () => {
    console.log(`eH-Dev backend server started on port ${PORT}`);
})