const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const dbConfig = config.get('db_config');
const bodyParser = require('body-parser');

app.use(express.static('./client/public'));
// parse application/json
app.use(bodyParser.json());

app.get('/api/get/:name', require('./api/get-api'));
app.use('/post', require('./routes/post.route'));

app.use('/auth', require('./routes/auth.route.js'));

// console.log(require('./api/get-api'));

app.get('*', (req,res) => {
   res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

async function start() {
   try {
      await mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      });

      app.listen(config.get('port'), () => console.log(`server start port ${config.get('port')}`));
   } catch (err) {
      console.log('Server Error', err.message);
      pocess.exit(1);
   }
}

start();



