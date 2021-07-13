//Express app
const express = require('express');
const app = express();
//Path dependency
const path = require('path');
//Connection file 
const sequelize = require('./config/connection');
//Express session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//Routes
const routes = require('./controllers');

//Handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

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

//Initiate express
const PORT = process.env.PORT || 3001;

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
