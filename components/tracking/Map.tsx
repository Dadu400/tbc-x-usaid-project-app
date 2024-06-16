'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-rotatedmarker';
import L from 'leaflet';
import homeMarker from '../../public/homeMarker.png';
import carMarker from '../../public/carMarker.png';

const deliveryAddressIcon = L.icon({
    iconUrl: homeMarker.src,
    iconSize: [38, 40],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
});

const courierIcon = L.icon({
    iconUrl: carMarker.src,
    iconSize: [30, 45],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
});

function Map() {

    return (
        <MapContainer
            className="w-full h-[500px]"
            center={[41.70006, 44.80153]}
            zoom={50}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={[41.700156, 44.8018]} icon={deliveryAddressIcon}>
                <Popup autoOpen>
                    <div className="flex-col">
                        <div><span className='font-bold'>მისამართი: </span>გიორგი ათონელის N31</div>
                        <div><span className='font-bold'>მიმღები: </span>დალი ხუხუნაშვილი</div>
                    </div>
                </Popup>
            </Marker>

            <Marker position={[41.699683, 44.800127]} icon={courierIcon} rotationAngle={51}>
            </Marker>
        </MapContainer>
    );
}

export default Map;