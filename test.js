// const body = document.querySelector( "body" )
// const button = document.querySelector( "button" )

// const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
// };

// function error ( err ) {
//     console.warn( `ERROR(${err.code}): ${err.message}` );
// }

// const returnLocation = async ( position ) => {
//     console.log( "two" )
//     const crd = position.coords;
//     let lat = crd.latitude
//     let lon = crd.longitude
//     let information = await axios.get( baseUrl, config )
// }
// function test () {
//     console.log( "one" )
//     navigator.geolocation.getCurrentPosition( returnLocation, error, options );
// }

// button.addEventListener( "click", function ( e ) {
//     e.preventDefault()
//     let names = test()
//     console.log( names[0], names[1] )

// } )