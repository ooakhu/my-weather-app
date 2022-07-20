const baseUrl = "https://api.openweathermap.org/data/3.0/onecall?"
const body = document.querySelector( "body" )
const button = document.querySelector( "button" )

const options = {
    enableHighAccuracy: true,
    maximumAge: 0
};

function error ( err ) {
    console.warn( `ERROR(${err.code}): ${err.message}` );
}

const returnLocation = async ( position ) => {
    const crd = position.coords;
    let lat = crd.latitude
    let lon = crd.longitude
    const mykey = "a16f7598edb1c643690ff19c18310e0b"
    const config = {
        params: {
            lat: lat,
            lon: lon,
            appid: mykey
        }
    }
    let information = await axios.get( baseUrl, config )
    console.log( lat, lon )
}
function test () {
    navigator.geolocation.getCurrentPosition( returnLocation, error, options );
}

button.addEventListener( "click", function ( e ) {
    e.preventDefault()
    test()

} )


