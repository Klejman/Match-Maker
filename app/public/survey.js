// Chosen CSS
// picked up from documentation for Chosen
var config = {
    '.chosen-select': {},
    '.chosen-select-deselect': {
        allow_single_deselect: true
    },
    '.chosen-select-no-single': {
        disable_search_threshold: 10
    },
    '.chosen-select-no-results': {
        no_results_text: 'No results returned!'
    },
    '.chosen-select-width': {
        width: "95%"
    }
};

for (var selector in config) {
    $(selector).chosen(config[selector]);
}

$("#submit").on("click", function() {
    function formValidCheck() {
        var valid = true;
        $('.form-control').each(function() {
            if ($(this).val() === '')
                valid = false;
        });

        $('.user-selects').each(function() {
            if ($(this).val() === "")
                valid= false
        });
        return valid;
    }
    // If all required fields are filled
    if (formValidCheck() == true) {
        // Create an object for the user's data and add to Friends List
        var addUserToFriends = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(),]
        }
        // Grab the Current URL of the website
        var currentURL = window.location.origin;
        // AJAX post the data to the friends API.
        $.post(currentURL + "/api/friends", addUserToFriends, function(data) {
            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#matchName").text(data.name);
            $('#theRevealImg').attr("src", data.photo);
            // Show the modal with the best match
            $("#resultsModal").modal('toggle');
        })
    } else {
        swal("Oops", "Please be sure to fill out all the required items before submitting your questionnaire. Thank you", "error");
    }
    return false;
    });