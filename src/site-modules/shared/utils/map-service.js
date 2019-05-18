import { OpenStreetMapProvider } from 'leaflet-geosearch'

const provider = new OpenStreetMapProvider();
let map;

export function setLocation(lat, long) {
  if (lat && long) {
    map.setView([lat, long], 18)
  }
}

export async function searchAddress(addr) {
  const result = await provider.search({ query: addr });
  if(result.length) {
    setLocation(result[0].y, result[0].x)
  }
}

export function registerMap(_map) {
  map = _map;
}
