import { BsFillInfoCircleFill } from "react-icons/bs";
import logo from "../imgs/calmkeys.png";

const Header = () => {
    return (
        <main className="bg-[#fff9f0] top-0 z-50">
            <nav className="flex justify-between items-center p-4">
                <a href="/" className="text-black flex justify-left">
                    <img src={logo} alt="Calm Keys Logo" className="w-48 h-20" />
                </a>
                <div className="flex">
                    <a href="#/about" className="mr-4 flex">
                        <BsFillInfoCircleFill className="w-6 h-6" /> 
                    </a>
                </div>
            </nav>    
        </main>
    )
}

export default Header;