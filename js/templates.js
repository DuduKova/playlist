//variables

const btnAddNewPlaylist = $('#addNewPlaylist'); // opens modal to add playlist name and URL
const btnNext = $('#btnNext'); // continue to next step in creating the playlist
const btnResetFields = $('#btnResetFields'); // as it sounds lol
const btnAddSongToPlaylist = $('#btnAddSongToPlaylist'); //adds song to the PL in the final stage
const btnFinish = $('#btnFinish'); // saves all the data and create a new playlist
const albumList = $('#albumList'); // the row that contains the albums

//media player vars

const btnPlay = $('#btnPlay');
const btnPause = $('#btnPause');
const btnMute = $('#btnMute');
const btnDelete = $('#btnDelete');
const btnEdit = $('#btnEdit');

//templates

const addPlaylistModal =
    `<div class="col-sm-6 puff-in-center" id="addNewPlaylistModal">
    <div class="modal-body">
        <h5>Add new playlist</h5>
        <hr>
        <div class="row">
            <div class="col-sm-6">
                <label for="playlistName">Playlist Name</label><br>
                <input type="text" name="playlistName" id="playlistName" placeholder="PL example"><br>
                <label for="platlistURL">Playlist URL</label><br>
                <input type="text" name="platlistURL" id="platlistURL" placeholder="http://">
                <div class="row pt-5 mt-5">
                    <div class="col-sm-6">
                        <button class="btn btn-outline-success">Next</button>
                    </div>
                    <div class="col-sm-6">
                        <button class="btn btn-outline-danger">Reset fields</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <img src="Docs/student%20copy.png">
            </div>
        </div>
    </div>
</div>`;

const album = `
    <div class="col-sm-3">
            <div class="card d-flex justify-content-center align-items-center">
                <div class="card-header">
                    Playlist
                </div>
                <div class="card-header-pills">
                    <button class="btn btn-danger btn-sm rounded-circle"><i class="fa fa-times"></i></button>
                    <button class="btn btn-info btn-sm rounded-circle"><i class="fa fa-pencil-alt"></i></button>
                </div>
                <div class="card-body d-flex justify-content-center align-items-center">
                    <img src="Docs/student%20copy.png" class="rotate-center">
                    <button class="btn btn-success btn-sm rounded-circle position-absolute"><i class="fa fa-play"></i></button>
                </div>
            </div>
        </div>
`;

const songListItem = `<li><b>${Name}</b></li>`;