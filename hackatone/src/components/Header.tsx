import Sidebar from "@/components/Sidebar.tsx";

const Header = () => {
    return (
        <div className="bg-black h-20 p-4 flex justify-between w-full z-20">
            <h1 className="text-white text-2xl">Cosmic View</h1>
            <Sidebar/>
        </div>
    );
};

export default Header;