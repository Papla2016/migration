import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export interface TariffProps {
    name: string,
    description: string,
    icon: string,
    buttonText: string,
    buttonUrl: string
}

const Tariff: FC<TariffProps> = ({
    name,
    description,
    icon,
    buttonText,
    buttonUrl
}) => {
    return (
        <div className="flex flex-col items-center gap-y-8 rounded-md border-gray-200 border p-4 max-w-sm">
            <div className="flex flex-col gap-y-4 items-center">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div className="flex flex-col gap-y-8 items-center justify-end h-full">
                <img className="invert h-20 w-20" src={icon} alt="Image" />
                <Button><Link to={buttonUrl}>{buttonText}</Link></Button>
            </div>
        </div>
    );
}

export default Tariff;