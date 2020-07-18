const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3050);

//Mittlewares
app.use(express.json());

//Routes
app.use(require('./routes/bolsa'));

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('Servidor en el puerto', app.get('port'));
});