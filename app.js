var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http=require('http');
var indexRouter = require('./routes/index');
const categorieRouter= require('./routes/categorie');
const produitRouter = require('./routes/produit');
const DelivreyRouter = require('./routes/Delivrey');
const factureRouter = require('./routes/facture');
const userRouter = require('./routes/user');
const reclamationRouter= require('./routes/reclamation');
const publicationRouter= require('./routes/publication');
const pannierRouter= require('./routes/pannier');
const commandeRouter= require('./routes/commande');
const archiveRouter= require('./routes/archive');
const db=require('./models/index');
const commande = require('./models/commande');
db.sequelize.sync().then();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/categorie',categorieRouter);
app.use('/produit',produitRouter);
app.use('/Delivrey',DelivreyRouter);
app.use('/facture',factureRouter);
app.use('/reclamation',reclamationRouter);
app.use('/user',userRouter);
app.use('/archive',archiveRouter);
app.use('/publication',publicationRouter);
app.use('/pannier',pannierRouter);
app.use('/commande',commandeRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("listening on port 3000");
});


