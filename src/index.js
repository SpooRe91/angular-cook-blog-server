require('dotenv').config();
const express = require('express');
const dbService = require('./config/mongoseConfig');
const { auth } = require('./middlewares/authMiddleware');
const { errorHandler } = require('./middlewares/errorHandlerMiddleware');
const cors = require('cors');
const corsOrigin = require('./middlewares/corsMiddleware');
const app = express();

dbService.connecter();
require('./config/cookieParserConfig')(app);//cookie parser
app.use(cors({ origin: "https://angular-cook-blog.web.app", credentials: true, allowedHeaders: ["Access-Control-Allow-Credentials, Allow-Control-Access-Policy, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"] }));
app.use(corsOrigin());
app.use(auth);//auth middleware
require('./config/expressConfig')(app);//express config
app.use(errorHandler)//error handler

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(error.message);
  }
  console.log(`"Cook-blog API" listening to port http://localhost:${process.env.PORT}`);
  console.log(`"Cook-blog" Angular APP and REST API documentation is available at: https://github.com/SpooRe91/angular-cook-blog/blob/main/README.md`);
});
