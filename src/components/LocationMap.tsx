
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const COMPANY_LOCATION = {
  lng: 15.0790, // Krásný Les coordinates
  lat: 50.9320,
};

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHR3NnZnYmQwMnhqMmtuc3E0emI0bzh1In0.7UMI4yMjQsBg0P-bWa_Xfw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [COMPANY_LOCATION.lng, COMPANY_LOCATION.lat],
      zoom: 13,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add marker
    marker.current = new mapboxgl.Marker({ color: '#36435c' })
      .setLngLat([COMPANY_LOCATION.lng, COMPANY_LOCATION.lat])
      .addTo(map.current);

    // Add popup
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<div class="p-2">
          <strong>LibTrans Express s.r.o.</strong><br/>
          Krásný Les 254<br/>
          46401 Frýdlant
        </div>`
      );

    marker.current.setPopup(popup);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[300px] mt-8 rounded-xl overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default LocationMap;
