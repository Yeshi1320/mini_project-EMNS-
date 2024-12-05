$(document).ready(function () {
    $('#profileButton').on('click', function () {
        $('#profileDropdown').toggle();
        $('#menuDropdown').hide(); // Hide menu if open
    });

    $('#menuButton').on('click', function () {
        $('#menuDropdown').toggle();
        $('#profileDropdown').hide(); // Hide profile if open
    });

    // Close dropdowns when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#profileDropdown, #profileButton').length) {
            $('#profileDropdown').hide();
        }
        if (!$(e.target).closest('#menuDropdown, #menuButton').length) {
            $('#menuDropdown').hide();
        }
    });
});
