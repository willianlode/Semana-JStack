import express from "express";
const app = express();
app.listen(3001, () => {
    console.log('Express Server is running on http://localhost:3001');
});
