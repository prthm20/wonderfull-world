import axios from 'axios';

const apiKey ='5ae2e3f221c38a28845f05b692ee9de4bcc20611cb8e811b1ffb66f8'; // Ensure to set this in your environment variables // Ensure to set this in your environment variables
var country="India"
if (country=="India"){
  country="New Delhi"
}

export default async function getTouristDestinations() {
        const response = await axios.get(`https://api.opentripmap.com/0.1/en/places/geoname`, {
            params: {
                name:country,
                apikey: apiKey
            }
        })
        console.log(response.data)
const { lon, lat } = response.data;
//const lat=28.63576000     
//const lon= 77.22445000
  const placesResponse:any= await axios.get(`https://api.opentripmap.com/0.1/en/places/radius`, {
    params: {
      radius: 50000,
      lon,
      lat,
      kinds: 'interesting_places',
      apikey: apiKey
    }
  });
 console.log(placesResponse.data.features)
  return
}