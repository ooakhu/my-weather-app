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

const getWeather =  () => {
    navigator.geolocation.getCurrentPosition (async ( success ) => {
        console.log( success.coords.latitude )
        console.log( success.coords.longitude )
        let lat = success.coords.latitude
        let lon = success.coords.longitude
        let data = await axios.get( `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid={}` )
        console.log(data.data)

    } )
}

.window.addEventListener( "load", function ( e ) {
    e.preventDefault()
    getWeather()

} )
