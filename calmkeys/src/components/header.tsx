import {Info} from "lucide-react";

const Header = () => {
    return (
        <main className="bg-[#fff9f0] top-0 z-50">
            <nav className="flex justify-between items-center p-4">
                <a href="/" className="text-3xl text-black flex justify-left cursive">CalmKeys</a>
                <div className="flex">
                    <a href="/about" className="mr-4 text-2xl text-black flex justify-left cursive">
                        <Info className="w-6 h-6" /> 
                    </a>
                </div>
            </nav>    
        </main>
    )
}

export default Header;