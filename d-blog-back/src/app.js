import express, { json } from 'express';
import morgan from 'morgan';

// importing routes
import articleRoutes from './routes/articles';
// import taskRoutes from './routes/tasks';

const cors = require('cors');
const app = express();

app.use(cors());
app.options('*', cors());

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes (after middlewares)
app.use('/api/articles', articleRoutes);
// app.use('/api/tasks', taskRoutes);

export default app;