import express from 'express';
import requestsMiddleware from './middlewares/requests.js';

import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(requestsMiddleware.printRequestCalls);
app.use(routes);

app.listen(process.env.APP_PORT);
