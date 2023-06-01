// Build an array

function makeArray(nums) {
    let res = [];

    for (let i=0; i < nums.length; i++) {
        let value = Number(nums[i]);

        if (value == NaN) {
            throw new Error(`Value: ${nums[i]} is not a number`);
        }
        res.push(value);
    }
    return res;
};

//Mean function

function findMean(nums) {
    let res = 0;
    for(let i = 0; i < nums.length; i++) {
        res += nums[i];
    }
    let mean = res/nums.length;
    return mean;
}

//Median function

function findMedian(nums) {
    nums.sort((a,b) => a - b);
    //let i = nums.length/2;
    let i = Math.floor(nums.length/2);
    let median;
    
    if (nums.length % 2 === 0) {
        median = (nums[i] + nums[i - 1])/2;
    }
    else {
        median = nums[i];
    }
    return median;
}

//Mode function

function counter(nums) {
    return nums.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

function findMode(arr) {
    let freqCount = counter(arr);
    let count = 0;
    let mode;

    for (let i in freqCount) {
        if (freqCount[i] > count) {
            mode = i;
            count = freqCount[i];
        }
    }
    return mode;
}

module.exports = { 
    makeArray,
    counter,
    findMean,
    findMode,
    findMedian
}

