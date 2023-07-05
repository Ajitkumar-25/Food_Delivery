const express=require('express');
const cors = require("cors");
const app=express();
const port=5000;
app.use(express.json());
app.use(cors());
require('./Database/db')
app.get('/',(req,res)=>{
    res.send('Hello World');
}
);
app.use('/api',require('./Routes/CreateUser'))
app.use('/api',require('./Routes/DisplayData'))
// Start the server on specified PORT number
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
}
);