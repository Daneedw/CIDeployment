const express = require("express")
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'))
const PORT = process.env.PORT || 3000;




app.listen(PORT,() =>console.log(`server running on port ${PORT}!`))


