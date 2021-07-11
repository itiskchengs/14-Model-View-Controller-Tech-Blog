//Express app
const express = require('express');
//Connection file 
const sequelize = require('./config/connection');
//Handlebars
const exphbs = require('express-handlebars');

//Initiate express
const app = express();
const PORT = process.env.PORT || 3001;

//Hnadlebars setup
//app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Set up middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World');
});

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}. Visit http://localhost:${PORT}`);
    });
});
