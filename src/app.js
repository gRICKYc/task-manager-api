const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('El API funciona');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

const taskRoutes = require('./routes/taskRoutes');

app.use('/api', taskRoutes);