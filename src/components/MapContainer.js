import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// googlemap it allows us to rener google map on any react app
// LoadScript  - Leads the google maps API script

// marker identifies a location on a map
const MapContainer = () => {
    const item = {
        name: "gomycodeNG",
        location: {
            lat: 6.501096184257317, 
            lng: 3.37828753495483
        }
    }

    const mapStyles = {
        height: "400px",
        width: "100%"
    }

    const defaultCenter = {
        lat: 6.501096184257317, 
        lng: 3.37828753495483
    }



    return(
        <LoadScript googleMapApikey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">  
        <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
            <Marker key={item.name} position={item.location} />
        </GoogleMap>
        </LoadScript>

    )
}


export default MapContainer;