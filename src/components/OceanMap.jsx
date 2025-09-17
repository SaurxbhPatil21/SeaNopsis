import React, { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

const hotspots = [
  { id: 1, position: [19.0, 72.8], label: 'Mumbai Coast', sal: '35 PSU', species: 'Sardinella' },
  { id: 2, position: [13.0, 80.27], label: 'Chennai Coast', sal: '34 PSU', species: 'Mackerel' },
  { id: 3, position: [9.97, 76.28], label: 'Kochi', sal: '33 PSU', species: 'Anchovy' },
  { id: 4, position: [21.0, 88.3], label: 'Sundarbans', sal: '28 PSU', species: 'Hilsa' },
];

const OceanMap = () => {
  useEffect(() => {
    // Ensure leaflet styles are present
    const linkId = 'leaflet-css';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white/90">Indian Oceanography Map</h2>
          <p className="text-cyan-100/80">India’s EEZ and coastal hotspots</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-hidden rounded-2xl border border-white/15 shadow-xl backdrop-blur-xl"
      >
        <div className="h-[420px] w-full">
          <MapContainer center={[15.5, 78.9]} zoom={4.5} className="h-full w-full" scrollWheelZoom>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {hotspots.map((h) => (
              <CircleMarker
                key={h.id}
                center={h.position}
                radius={10}
                pathOptions={{ color: '#22d3ee', fillColor: '#22d3ee', fillOpacity: 0.5 }}
              >
                <Tooltip direction="top" offset={[0, -6]} opacity={1} permanent={false} className="!bg-cyan-900 !text-white">
                  <div className="text-xs">
                    <div className="font-semibold">{h.label}</div>
                    <div>Salinity: {h.sal}</div>
                    <div>Species: {h.species}</div>
                  </div>
                </Tooltip>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      </motion.div>
    </section>
  );
};

export default OceanMap;


