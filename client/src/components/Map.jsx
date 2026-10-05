import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

//leaflet handels Basic map but it cannot Create path following the road for that OSRM is used.

const routePoints = [
  { name: "Birtamode", coordinates: [87.991, 26.644] },
  { name: "Charali", coordinates: [87.97, 26.67] },
  { name: "Damak", coordinates: [87.7, 26.66] },
];

//the cords are lognitude and latitude. instade of latitude and lognitude this is bacause OSRM needs lognitude and latitude.
//Leaflet requires latitude and lognitude so later it has been converted.

function Map() {
  const [roadRoute, setRoadRoute] = useState([]);

  useEffect(() => {
    const getRoute = async () => {
      const coordinates = routePoints
        .map((point) => point.coordinates.join(",")) // takes the cordinates and makes it in this formate [lng,lat;lng,lat]
        .join(";");

      const url = `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.routes && data.routes.length > 0) {
          setRoadRoute(data.routes[0].geometry.coordinates);
        }
      } catch (error) {
        console.error("Error getting route:", error);
      }
    };

    getRoute();
  }, []);

  return (
    <div className="w-full h-150">
      <MapContainer
        center={[routePoints[0].coordinates[1], routePoints[0].coordinates[0]]} //in this latitude and lognitude formate has been used
        zoom={11}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Planned route points */}
        {routePoints.map((point) => (
          <Marker
            key={point.name}
            position={[point.coordinates[1], point.coordinates[0]]}
          />
        ))}

        {/* Actual road-following route */}
        {roadRoute.length > 0 && (
          <Polyline
            positions={roadRoute.map(([lng, lat]) => [lat, lng])}
            pathOptions={{
              color: "#2563eb",
              weight: 4,
            }}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
