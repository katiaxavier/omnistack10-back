const express = require('express');

const app = express();

//Tipos de parametros

//Query Params: req.query(Filtros, ordenação, paginação...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body:

app.get('/', (request, response) => {
    return response.json({ message: 'Hello OmniStack' })
})

app.listen(3333)