
const music_dh = require( './music-datahandler' );


const title = process.argv[ 2 ];

function displayArtist( err , results ) {
	console.log( 'Artist:' , results.rows[ 0 ].name );
}

function displayTracks( err , results ) {
	console.log( 'Tracks --- ' );
	results.rows.forEach( function ( row ) {
		console.log( row.number , row.title );
	});
}


function displayAlbumByTitle( title ) { 
		music_dh.getAlbumByTitle( title , function( err , results ) { 
			console.log( 'Album : ' , results.rows[ 0 ].title );
		music_dh.getArtistById( results.rows[ 0 ].artist_id , displayArtist );

		music_dh.getTracksByAlbumId( results.rows[ 0 ].id , displayTracks );
	});
}	

displayAlbumByTitle( title );