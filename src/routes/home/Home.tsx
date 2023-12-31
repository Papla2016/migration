
const Home = () => {
    return (
        <>
            <video autoPlay muted loop className="absolute w-full h-full object-cover">
                <source src="video.mp4" type="video/mp4" />
            </video>
            <p className="leading-normal font-semibold absolute z-10 left-0 bottom-0 text-gray-100 text-xl xs:text-2xl sm:text-2xl md:text-4xl pl-20 pb-20 w-3/5">
                Cosmic View - веб-сервер для ОСИНТ-разработчиков. Исследуйте Землю с помощью наших данных и
                снимков, предоставляемых спутниками
            </p>
            <hr/>
        </>
    );
};

export default Home;