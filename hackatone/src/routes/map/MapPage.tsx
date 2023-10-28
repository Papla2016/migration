import { Map, YMaps } from '@pbe/react-yandex-maps';
const MapPage = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-black text-white h-screen">
            <h1 className="text-4xl mb-4 font-bold">Карта</h1>
            <YMaps>
                <div className='flex flex-col gap-y-4 justify-center items-center'>
                    <h4 className="text-xl">Это наша карта, посмотрите на нее</h4>
                    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                </div>
            </YMaps>
        </div>
    );
};

export default MapPage;