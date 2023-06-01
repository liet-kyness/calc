const express = require('express')
const app = express();

const { findMean, findMode, findMedian, makeArray } = require('./math');
const ExpressError = require('./expressError');


app.get('/mean', (req, res, next) => {
    if(!req.query.nums) {
        throw new ExpressError('Enter numbers', 400);
    } 
    let queryNums = req.query.nums.split(',');
    let nums = makeArray(queryNums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.msg);
    }

    let result = {
        operation: 'mean',
        result: findMean(nums)
    }
    return res.send(result);
});

app.get('/median', (req, res, next) => {
    if(!req.query.nums) {
        throw new ExpressError('Enter numbers', 400);
    } 
    let queryNums = req.query.nums.split(',');
    let nums = makeArray(queryNums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.msg);
    }

    let result = {
        operation: 'median',
        result: findMedian(nums)
    }
    return res.send(result);
});

// app.get('/median', (req, res, next) => {
//     if(!req.query.nums) {
//         throw new ExpressError('Enter numbers', 400);
//     }
//     let queryNums = req.query.nums.split(',');
//     let nums = makeArray(queryNums);
//     if (nums instanceof Error) {
//         throw new ExpressError(nums.msg);
//     }

//     let result = {
//         operation: 'median',
//         result: findMedian(nums)
//     };
//     return result;
// });

app.get('/mode', (req, res, next) => {
    if(!req.query.nums) {
        throw new ExpressError('Enter numbers', 400);
    }
    let queryNums = req.query.nums.split(',');
    let nums = makeArray(queryNums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.msg);
    }

    let result = {
        operation: 'mode',
        result: findMode(nums)
    };
    return res.send(result);
});


app.use((req, res, next) => {
    const err = new ExpressError('Not Found', 404);
    return next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.msg
    });
});

app.listen(5555, function() {
    console.log('SlingShot.. Engaged.  (listening on port: 5555)');
});

