export const buildDistanceQuery = (lat, lng, maxDistanceKm) => ({
  $nearSphere: {
    $geometry: { type: "Point", coordinates: [lng, lat] },
    $maxDistance: maxDistanceKm * 1000
  }
});
