const mongoose = require('mongoose')
mongoose.connect(
    "mongodb://localhost:27017/recycleapp_db",
    {useNewUrlParser: true}
);
const db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully connected to Mongodb using Mongoose");
});
mongoose.Promise = global.Promise;

const express = require('express');
const routes = require('./routes/index');
const recycleRoutes = require('./routes/easyRecycle');
const path = require('path');
const layouts = require('express-ejs-layouts');
const app = express();
const bodyparser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');


/* COOKIE SESSION */
app.use(cookieSession({
    name: 'session',
    keys: [0],
    maxAge: 24 * 60 * 60 * 1000
}))
/* BODY PARSER */
app.use(bodyparser.urlencoded({ extended: true }));
/* PASSPORT SETUP */
app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) => {
    res.send("Welcome " + req.query.username + "!");
});
app.get('/error', (req, res) => {
    res.send("Error logging in!");
});

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
/* STATIC FILES, ENGINGE AND ROUTES*/
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use(express.static(path.join(__dirname,'/public')));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(layouts);
app.use('/', routes, recycleRoutes);

module.exports = app;