//      src/app/course/index.js

exports.course = (function () {
    const startDate = new Date('May 7, 2018 00:00:00');
    return {
        getStartDate: function () {
            return startDate;
        }
    };
}());
