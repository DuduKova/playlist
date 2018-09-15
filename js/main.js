//======== jQuery audio controls

//pause
$('#pause').click( function() {
    $('#player').get(0).pause();
});

//play
$('#play').click( function() {
    debugger;
    $('#player').get(0).play();
});

//stop
$('#stop').click( function() {
    $('#player').get(0).load();
});

//previous track
$('#prev').click( function() {
    //not implemented
});

//next track
$('#next').click( function() {
    //not implemented
});

$('#addNewPlaylistModal').on('show.bs.modal', function (event) {
     // Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-title').text('New message to ' + recipient);
    modal.find('.modal-body input').val(recipient)
});