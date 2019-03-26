
module.exports = function ( ) {
	const pg = require( 'pg' );

	const cfg = require( './config.js' );

	const config = {
		host : cfg.host,
		port : cfg.port, 
		database : cfg.database,
		user : cfg.user,
		password : cfg.password
	};

	let client = new pg.Client( config );
	client.connect( );

	const title = process.argv[ 2 ];

	function getArtists( ) {
		client.query( `SELECT * FROM artists` , [ ] , function ( err , results ) {
			console.log( results.rows );
		});
	}

	function getAlbums( ) {
		client.query( `SELECT * FROM albums` , [ ] , function( err , results ) {
			console.log( results.rows );
		})
	}


	function getTracks( ) {
		client.query( `SELECT * FROM tracks` , [ ] , function( err , results ) {
			console.log( results.rows );
		})
	}

	function close( ) {
		client.end( );
	}



	function getAlbumByTitle( title , callback ) {
		client.query( `SELECT * FROM albums WHERE title LIKE CONCAT( '%' , $1::text , '%')` , [ title ] , callback );
	}

	function getTracksByAlbumId( id , callback) {
		client.query( `SELECT * FROM tracks WHERE album_id = $1::int` , [ id ] , callback );
	}
	// 
	function getArtistById( id , callback ) {
		client.query( `SELECT * FROM artists WHERE id = $1::int` , [ id ] , callback );
	}
	// 

	return {
		getArtistById : getArtistById,
		getAlbumByTitle : getAlbumByTitle,
		getTracksByAlbumId : getTracksByAlbumId,
		close : close
	}

	// getAlbums( );
	// getTracks( );
	// getArtists( );

	// getAlbumByTitle( title );
	// getArtistById( 4 );
	// getTracksByAlbumId( 6 );
	// // 

}( );




