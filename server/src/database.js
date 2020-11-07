const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/mean-employees', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB Conectada'))
    .catch((err) => console.error('Error al conectar MongoDB', err));
