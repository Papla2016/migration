import Sidebar from "@/components/Sidebar.tsx";

const Header = () => {
    return (
        <div className="absolute top-0 left-0 flex justify-between w-full font-['Sans-Serif'] text-white text-2xl h-10 z-20">
            <h1>Cosmic View</h1>
            <Sidebar/>
        </div>
    );
};

export default Header;