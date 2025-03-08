import { FaGithub } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <main className="bg-[#fff9f0]">
            <div className="flex justify-left ml-15">
                <a href="https://github.com/livlaurel" className="mr-4">
                    <FaGithub className="w-6 h-6"/>
                </a>
                <a href="https://www.instagram.com/liviaa.png/" className="mr-4">
                    <TiSocialInstagram className="w-6 h-6"/>
                </a>    
                <a href="https://www.linkedin.com/in/olivialaurel/" className="mr-4">
                    <FaLinkedin className="w-6 h-6"/>
                </a>    
            </div>
            <div className="flex justify-center mb-2">
                <a href="https://www.olaurel.dev/" className="text-sm font-bold underline font-mono">Created By:@livlaurel</a> 
            </div>     
        </main>
    )
}

export default Footer;