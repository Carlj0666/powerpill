const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/'));

// app.use('*', (req,res) =>{
//     res.sendFile(path.join(__dirname + '/../dist/index.html'));
// });
  
const port = 3000;

app.listen(port, () => {
    console.log(`App listening to port ${port}`)
});
