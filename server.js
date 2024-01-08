/* eslint-disable */
// import statement for the express
const express = require('express');
const app = express();

// use the 5000 port because the 3000 is being used by the frontend runtime
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node server started at port ${port}`));
