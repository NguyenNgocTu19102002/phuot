"use client";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { destinations, difficultyConfig, regions } from "@/data/destinations";

// Fix default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

function createCustomIcon(color: string, difficulty: string) {
  const size = difficulty === "extreme" ? 16 : difficulty === "hard" ? 14 : 12;
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${color};
        border: 2px solid rgba(12,13,9,0.8);
        box-shadow: 0 0 ${size}px ${color}80;
        position: relative;
      ">
        <div style="
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid ${color}40;
          animation: ping 2s ease-out infinite;
        "></div>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export default function DestinationMap() {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Init map centered on Vietnam
    const map = L.map(containerRef.current, {
      center: [16.0, 106.0],
      zoom: 6,
      zoomControl: false,
    });

    mapRef.current = map;

    // Dark tile layer
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);

    // Add zoom control to bottom-right
    L.control.zoom({ position: "bottomright" }).addTo(map);

    // Add markers
    destinations.forEach((dest) => {
      const regionColor = regions.find((r) => r.id === dest.region)?.color || "#CAFF00";
      const icon = createCustomIcon(regionColor, dest.difficulty);

      const marker = L.marker(dest.coordinates, { icon }).addTo(map);

      const diffConfig = difficultyConfig[dest.difficulty];
      const popupContent = `
        <div style="
          font-family: 'DM Sans', sans-serif;
          min-width: 220px;
        ">
          <img 
            src="${dest.image}" 
            alt="${dest.name}"
            style="width: 100%; height: 120px; object-fit: cover; border-radius: 4px; margin-bottom: 12px;"
          />
          <div style="display: flex; gap: 6px; margin-bottom: 8px; flex-wrap: wrap;">
            <span style="
              background: ${regionColor}20; 
              color: ${regionColor}; 
              border: 1px solid ${regionColor}40;
              padding: 2px 8px; 
              font-size: 0.65rem; 
              border-radius: 2px;
              font-family: 'JetBrains Mono', monospace;
              letter-spacing: 0.06em;
              text-transform: uppercase;
            ">${dest.regionLabel}</span>
            <span style="
              background: ${diffConfig.color}20; 
              color: ${diffConfig.color}; 
              border: 1px solid ${diffConfig.color}40;
              padding: 2px 8px; 
              font-size: 0.65rem; 
              border-radius: 2px;
              font-family: 'JetBrains Mono', monospace;
              letter-spacing: 0.06em;
              text-transform: uppercase;
            ">${diffConfig.label}</span>
          </div>
          <h3 style="
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1rem;
            font-weight: 700;
            color: #F0EDE6;
            letter-spacing: -0.02em;
            margin-bottom: 6px;
          ">${dest.name}</h3>
          <p style="
            font-size: 0.8rem; 
            color: #8A9080;
            line-height: 1.5;
            margin-bottom: 10px;
          ">${dest.shortDesc}</p>
          <div style="
            display: flex; 
            gap: 12px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.65rem;
            color: #4A4F40;
          ">
            <span>${dest.distance}km từ HN</span>
            ${dest.elevation ? `<span>↑ ${dest.elevation.toLocaleString()}m</span>` : ""}
          </div>
          <div style="
            margin-top: 10px;
            font-size: 0.72rem;
            color: #8A9080;
          ">🗓 ${dest.bestSeason}</div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 260,
        className: "phuot-popup",
      });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
