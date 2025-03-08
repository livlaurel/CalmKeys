import Header from '../components/header';
import Footer from '../components/footer';
import { RiPlantFill } from "react-icons/ri";
import { FaQuoteLeft } from "react-icons/fa6";
import { RiLetterSpacing2 } from "react-icons/ri";

const Home = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header/>
            <main className="bg-[#fff9f0] flex-grow p-7">
                <section className="container mx-auto">
                    <div className="box box-content rounded-sm text-base p-4 h-110 bg-[#9caf88]">
                        <div className=" box box-content flex justify-between rounded-sm items-center p-4 bg-[#fff9f0]"> 
                            <button className="flex items-center mr-2"> <RiPlantFill /> Zen </button>
                            <button className="flex items-center mr-2"> <FaQuoteLeft /> Quote</button>
                            <button className="flex items-center mr-2"> <RiLetterSpacing2 /> Words </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;