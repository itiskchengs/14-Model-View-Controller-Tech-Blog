//Express app
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

//Handlebars
const hbs = exphbs.create({});
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');

//Initiate express
const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
  app.use(session(sess));

//Hnadlebars setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Set up middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Using routes
app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}. Visit http://localhost:${PORT}`);
    });
});
