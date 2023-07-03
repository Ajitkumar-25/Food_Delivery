const express=require('express');
const app=express();
const port=5000;
app.use(express.json());
require('./Database/db')
app.get('/',(req,res)=>{
    res.send('Hello World');
}
);
// Start the server on specified PORT number
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
}
);