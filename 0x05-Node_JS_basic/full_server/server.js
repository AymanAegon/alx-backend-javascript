const express = require('express');
const getRoute = require('./routes/index');

const app = express();
const port = 1245;

getRoute(app);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

export default app;
module.exports = app;
