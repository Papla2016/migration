import { YMaps, Map, Polygon, FullscreenControl } from "@pbe/react-yandex-maps";
import axios from 'axios'
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IGeometry } from "yandex-maps";
const MapPage = () => {

    const [geometry, setGeometry] = useState<IGeometry | null>();
    const onClick = () => {
        axios.post("http://localhost:8080/circles", {geometry})
    }
    return (

        <div className="flex flex-col justify-center items-center bg-black text-white h-screen">
            <h1 className="text-4xl mb-4 font-bold">Карта</h1>
            <YMaps>
                <div className='flex flex-col gap-y-4 justify-center items-center'>
                    <h4 className="text-xl">Это наша карта, посмотрите на нее</h4>
                    <Map defaultState={{ center: [55.75, 37.82], zoom: 9, controls: [] }} width={800} height={380} >
                        <Polygon
                            instanceRef={e => setGeometry(e.geoObjects.get(0).geometry)}
                            geometry={[
                                [
                                    [55.75, 37.8],
                                    [55.8, 37.9],
                                    [55.75, 38.0],
                                    [55.7, 38.0],
                                    [55.7, 37.8]
                                ],
                                [[55.75, 37.82], [55.75, 37.98], [55.65, 37.9]],
                            ]}
                            options={{
                                draggable: true,
                                fillColor: "#00FF00",
                                strokeColor: "#0000FF",
                                opacity: 0.5,
                                strokeWidth: 5,
                                strokeStyle: "shortdash",
                                interactiveZIndex: true,
                            }}
                        />
                        <FullscreenControl />
                    </Map>
                </div>
            </YMaps>
            <Button onClick={onClick}>asd</Button>
        </div>
    );
};

export default MapPage;