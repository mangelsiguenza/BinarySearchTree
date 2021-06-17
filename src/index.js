const express = require('express');
const app = express ();

const morgan = require('morgan');

app.set('port', 3000);
app.set('json spaces', 2);
app.use(express.json);


//route
app.use(require('./routes/index'))


app.listen(app.get('port'), () => {
   console.log(`Server listen ${app.get('port')}`)
});
