$(document).ready(function() {
    // event handler
    $('.saveBtn').on('click', function() {
        var userInput = $(this).siblings(".description").val();
        var hour = $(this).parent().attr('id');
        
        // stores hour as the key and userInput as the value in localstorage
        localStorage.setItem(hour, userInput);
    });

    // hourChecker function compares current hour to the html time blocks
    function hourChecker() {
        var currentHour = moment().hours();
        console.log(currentHour)

        $('.time-block').each(function() {
            var timeBlock = parseInt($(this).attr('id').split('-')[1]);

            if (currentHour > timeBlock) {
                $(this).addClass('past');
            } else if (currentHour === timeBlock) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            };
        });
    };

    hourChecker();

    // grabs the value based on the key from the local storage and inputs them to its correct timeblock based upon its id
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
});
