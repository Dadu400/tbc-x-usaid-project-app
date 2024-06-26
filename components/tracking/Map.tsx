'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-rotatedmarker';
import L, { LatLngExpression } from 'leaflet';
import homeMarker from '../../public/homeMarker.png';
import carMarker from '../../public/carMarker.png';
import { useEffect, useRef } from 'react';
import { orderDelivered } from '../../actions';
import { useRouter } from 'next/navigation';

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

function Map({ orderId, orderStatus }: { orderId: string, orderStatus: string }) {
    const route = useRouter();

    const courierMarkerRef = useRef<L.Marker | null>(null);
    const isOrderBeingDelivered = orderStatus === 'გზაშია';

    useEffect(() => {
        if (!isOrderBeingDelivered) {
            return;
        }

        const courierMovePositions = [
            [41.69971206970308, 44.800171927001, 51],
            [41.69973513144958, 44.80020746627045, 51],
            [41.69975619054058, 44.800244346644405, 51],
            [41.69977324433136, 44.800289273645404, 51],
            [41.69979530473291, 44.800323471810344, 51],
            [41.6998163638042, 44.80036973991585, 51],
            [41.69984042683562, 44.800411984707836, 51],
            [41.69985948324813, 44.800462276126865, 51],
            [41.69987753833327, 44.80050049760533, 51],
            [41.699899598699034, 44.80053737797928, 51],
            [41.69992266037828, 44.80057828166676, 51],
            [41.69994472072858, 44.80062186756325, 51],
            [41.69997278899311, 44.800664112355236, 51],
            [41.6999918453664, 44.800698310520175, 51],
            [41.70001090173404, 44.80073384978962, 51],
            [41.700035966011946, 44.80077341237259, 51],
            [41.700057025004426, 44.80081029274655, 51],
            [41.700082089264356, 44.80085521974755, 51],
            [41.7000991429687, 44.80088941791249, 51],
            [41.70012120325846, 44.800924957181934, 51],
            [41.70014326354063, 44.80097122528744, 51],
            [41.700173334352804, 44.80102554001999, 51],
            [41.700191389349825, 44.80105973818493, 51],
            [41.700207441708606, 44.80110198297692, 70],
            [41.70021657872194, 44.801155627157215, 70],
            [41.70022261791155, 44.801209941889766, 70],
            [41.700231661049344, 44.80126693883133, 70],
            [41.700235697605244, 44.80132930019093, 141],
            [41.70022171046859, 44.80139568486405, 141],
            [41.70018369172606, 44.80143792965603, 141],
            [41.70014867691369, 44.80146810450745, 141],
            [41.70013569107583, 44.80148084500027, 141],
            [41.70011169073728, 44.801512360956195, 141],
            [41.7000906943451, 44.80153448918057, 141],
            [41.70007170058352, 44.80155661740494, 141]
        ]

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < courierMovePositions.length) {
                const data = courierMovePositions[currentIndex];
                const newPosition: LatLngExpression = [data[0], data[1]];
                const newAngle = data[2];
                if (courierMarkerRef.current) {
                    courierMarkerRef.current.setLatLng(newPosition);
                    courierMarkerRef.current.setRotationAngle(newAngle);
                }
                currentIndex++;
            } else {
                orderDelivered(orderId).then(() => {
                    route.refresh();
                });
                clearInterval(interval);
            }
        }, 250);
        return () => clearInterval(interval);
    }, [isOrderBeingDelivered, orderId, route]);

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
                <Popup>
                    <div className="flex-col">
                        <div><span className='font-bold'>მისამართი: </span>გიორგი ათონელის N31</div>
                        <div><span className='font-bold'>მიმღები: </span>დალი ხუხუნაშვილი</div>
                    </div>
                </Popup>
            </Marker>

            <Marker position={isOrderBeingDelivered ? [41.699683, 44.800127] : [41.70007170058352, 44.80155661740494]} icon={courierIcon}
                rotationAngle={isOrderBeingDelivered ? 51 : 141} ref={courierMarkerRef}>
            </Marker>
        </MapContainer>
    );
}

export default Map;