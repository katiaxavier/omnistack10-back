const express = require('express');

const app = express();

//Tipod fr parametros

//Query Params: req.query(Filtros, ordenação, paginação...)
//Route Params:
//Body:

app.get('/', (request, response) => {
    return response.json({ message: 'Hello OmniStack' })
})

app.listen(3333)