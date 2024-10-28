require('dotenv').config({ path: `${process.cwd()}/.env` });
const express = require('express');

const authRouter = require('./route/authRoute');

const sessionrouter = require('./route/sessionRoute');
const session1router = require('./route/session1route');
const deviceidrouter = require('./route/deviceidroute');
const deviceupdatesrouter = require('./route/devviceroute');
const userRouter = require('./route/userRoute');
const catchAsync = require('./utils/catchAsync');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');

const app = express();

app.use(express.json());

// all routes will be here
app.use('/api/v1/auth', authRouter);

app.use('/api/v1/sessionUpdates', sessionrouter);
app.use('/api/v1/sessionUpdates1', session1router);
app.use('/api/v1/deviceId', deviceidrouter);
app.use('/api/v1/deviceUpdates', deviceupdatesrouter);
app.use('/api/v1/users', userRouter);

app.use(
    '*',
    catchAsync(async (req, res, next) => {
        throw new AppError(`Can't find ${req.originalUrl} on this server`, 404);
    })
);

app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log('Server up and running', PORT);
});
