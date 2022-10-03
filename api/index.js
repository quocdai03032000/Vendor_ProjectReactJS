const express = require('express');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

const vendorRoute = require("./routes/vendor");
const port = 3003;

dotenv.config();

//Connnet database
// mongoose.connect((process.env.MONGODB_URL), () => {
//     console.log("Connected to MongoDB");
// })


app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

//routes
app.use("/vendor", vendorRoute);


app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`)
})
