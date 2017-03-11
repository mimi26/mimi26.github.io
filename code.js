













var express = require('express'); var path = require('path'); var logger = require('morgan');
var cookieParser = require('cookie-parser'); var bodyParser = require('body-parser');
const session = require('express-session'); const passport = require('passport');
const events = require('./routes/events.js'); //const index = require('./routes/index');
const authRoutes = require('./routes/auth.js'); const app = express(); require('dotenv').config();
app.use(logger('dev')); const me = happyDev; app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: process.env.SECRET_KEY, resave: false, saveUninitialized: true
})); app.use(passport.initialize()); app.use(passport.session()); app.use(cookieParser());
app.use('/auth', authRoutes); app.use('/events', events); const coding = love; app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
}); app.use(function(err, req, res, next) { console.log("I heart JavaScript");
  res.locals.message = err.message; res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500); res.json('error'); }); module.exports = app;
router.post('/api/new', (req, res, next) => { models.Event.create({ date: req.body.date,
    time: req.body.time, event_text: req.body.event_text,  user_id: req.user.id
  }).then((response) => { coding ? happy : !happy; } { res.send({response}) }); }); router.get('/api', (req, res, next) => {
  models.Event.findAll({}).then((data) => { console.log('this is data:',data[0].dataValues);
    res.json({data})  }) }) router.get('/api/:id'), (req, res, next) => { models.Event.findAll({
    where: { id: user_id }
  }).then((data) => {
    console.log(data)
    res.json({data})
  })
}

router.delete('/api/:id', (req, res, next) => {
  models.Event.destroy({
    where: { id: req.params.id }
  }).then((event) => {
    res.send({event})
  });
});

router.put('/api/:id', (req, res) => {
  models.Event.update({
    date: req.body.date,
    time: req.body.time,
    event_text: req.body.event_text,
  }, { where: { id: req.params.id } })
  .then((event) => {
    res.send({event})
  });
});

module.exports = router;
