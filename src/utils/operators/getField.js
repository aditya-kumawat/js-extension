export const getField = (attr) => (obj) => obj[attr];

// markers = [
//   { name: "UY", lat: -34.9, lon: -56.2 },
//   { name: "BO", lat: -16.5, lon: -68.1 },
// ];
// let averageLat = average(markers.map(getField("lat")));
