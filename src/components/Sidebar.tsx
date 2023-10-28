import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent
} from "@/components/ui/navigation-menu"
const Sidebar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger >Меню</NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col gap-y-4">
                        <NavigationMenuLink className="px-2" href={"/"}>Главная</NavigationMenuLink>
                        <NavigationMenuLink className="px-2" href={"/map"}>Карта</NavigationMenuLink>
                        <NavigationMenuLink className="px-2" href={"/tariffs"}>Тарифы</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Sidebar;