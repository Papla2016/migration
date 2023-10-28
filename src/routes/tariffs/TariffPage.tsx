import Tariff, { TariffProps } from "@/components/Tariff";

const TariffPage = () => {
    const tariffs :TariffProps[] = [
        {
            name: "Стандарт",
            description: `Доступ к фотографиям низкой четкости, сделанным за последние 48 часов.
            Получают возможность просмотра “горячей точки” в режиме реального времени.
            Реклама на портале`,
            icon: "https://cdn-icons-png.flaticon.com/128/1830/1830749.png",
            buttonText: "Перейти",
            buttonUrl: "#",
        },
        {
            name: "VIP",
            description: `Ограниченное количество снимков в сутки, дополнительные снимки за определённую плату.
            Возможность получения снимков конкретной области в  высоком разрешении.
            Отключение рекламы`,
            icon: "https://cdn-icons-png.flaticon.com/128/1570/1570905.png",
            buttonText: "Купить / 650₽",
            buttonUrl: "#",
        },
        {
            name: "Бизнес",
            description: `Предоставление возможности непрерывного мониторинга определённой области.
            Количество снимков обсуждается напрямую с заказчиком.
            Стоимость обсуждается с заказчиком.`,
            icon: "https://cdn-icons-png.flaticon.com/128/2667/2667414.png",
            buttonText: "Контакты",
            buttonUrl: "#",
        }
    ]
    return (
        <div className="flex flex-col h-full pb-4 px-4 gap-y-8 items-center bg-black text-white">
            <h1 className="text-3xl font-semibold">Тарифы</h1>
            <div className="flex md:flex-row flex-col gap-y-4 md:gap-y-0 justify-between gap-x-4">
                {tariffs.map(tariff => <Tariff key={tariff.name} {...tariff}/>)}
            </div>
        </div>
    );
};

export default TariffPage;