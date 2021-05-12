const express = require('express');
const app = express();
const userRoutes = require('./routes/users');

app.use(express.json());

app.use('/users', userRoutes);

app.get('*', (req, res) => {
	res.json({message: 'Oops... something went wrong!'});
});

const PORT = 3005;
app.listen(process.env.PORT || 3005, (req, res) => {
	console.log(`CRUD App is Running on port ${PORT}`);
});

