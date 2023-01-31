// save reference to important DOM elements
let currentDay = $('#currentDay');
let dailyPlanContainer = $('.container');
// let divEl = $('<div>');

// use moment.js to show the current date/time in the hero banner once the document is ready
$( document ).ready(function() {
    setInterval(currentTime, 1000)
    function currentTime() {
        let now = moment().format('DD MMMM YYYY [at] HH:mm:ss');
        currentDay.text(now);
    }
    
});

// Created an array that contains workday hours
let workHours = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]; 


function printHourlyDivs(array) {
    array.forEach(element => {
        let divRowEl = $('<div>').addClass('row');
        let divTimeBlock= $('<div>').addClass('col-1 time-block').text(element);
        let addTask = $('<textarea>')
        .attr('id', element)
        .addClass('col-8 input');
        let saveBtn = $('<button>').addClass('col-1 save-btn');
        let saveIcon = $('<i>').addClass('fa fa-check');
        saveBtn.append(saveIcon);
        let removeBtn = $('<button>').addClass('col-1 remove-btn');
        let removeIcon = $('<i>').addClass('fa fa-close');
        removeBtn.append(removeIcon);
        divRowEl.append(divTimeBlock, addTask, saveBtn, removeBtn); 
        dailyPlanContainer.append(divRowEl);    
    });
    
}

printHourlyDivs(workHours);