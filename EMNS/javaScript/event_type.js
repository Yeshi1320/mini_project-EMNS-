$(document).ready(function () {
    $('#profileButton').on('click', function () {
        $('#profileDropdown').toggle();
        $('#menuDropdown').hide(); // Hide menu dropdown if open
        $('#eventTypeInterface').show(); // Ensure event type interface is shown
    });

    $('#menuButton').on('click', function () {
        $('#menuDropdown').toggle();
        $('#profileDropdown').hide(); // Hide profile dropdown if open
        $('#eventTypeInterface').show(); // Ensure event type interface is shown
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

    // Search functionality
    $('#searchInput').on('input', function () {
        const filter = $(this).val().toLowerCase();
        $('.event-card').each(function () {
            const name = $(this).data('name').toLowerCase();
            $(this).toggle(name.includes(filter)); // Show or hide based on match
        });
    });
});