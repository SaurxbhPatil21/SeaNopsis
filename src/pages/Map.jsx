import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const hotspots = [
  { id: 1, position: [19.0, 72.8], label: 'Mumbai Coast', sal: '35 PSU', species: 'Sardinella' },
  { id: 2, position: [13.0, 80.27], label: 'Chennai Coast', sal: '34 PSU', species: 'Mackerel' },
  { id: 3, position: [9.97, 76.28], label: 'Kochi', sal: '33 PSU', species: 'Anchovy' },
  { id: 4, position: [21.0, 88.3], label: 'Sundarbans', sal: '28 PSU', species: 'Hilsa' },
];

const MapPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-2xl font-bold text-white/90">Map</h1>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
        <motion.aside
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-xl backdrop-blur-xl lg:col-span-1"
        >
          <div className="text-white/90">Filters</div>
          <div className="mt-3 space-y-2 text-sm text-cyan-100/80">
            <label className="flex items-center justify-between"><span>Temperature</span><input type="checkbox" defaultChecked /></label>
            <label className="flex items-center justify-between"><span>Salinity</span><input type="checkbox" defaultChecked /></label>
            <label className="flex items-center justify-between"><span>Species</span><input type="checkbox" defaultChecked /></label>
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-2xl border border-white/15 shadow-xl backdrop-blur-xl lg:col-span-3"
        >
          <div className="h-[520px] w-full">
            <MapContainer center={[15.5, 78.9]} zoom={4.5} className="h-full w-full" scrollWheelZoom>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
              {hotspots.map((h) => (
                <CircleMarker key={h.id} center={h.position} radius={10} pathOptions={{ color: '#22d3ee', fillColor: '#22d3ee', fillOpacity: 0.5 }}>
                  <Tooltip direction="top" offset={[0, -6]} opacity={1}>
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
      </div>
    </motion.div>
  );
};

export default MapPage;


