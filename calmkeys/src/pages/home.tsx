import Header from '../components/header';
import Footer from '../components/footer';
import TypingTest from '../components/typing';

const Home = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header/>
            <main className="bg-[#fff9f0] flex-grow p-7">
                <section className="container mx-auto">
                    <div className="box box-content rounded-sm text-base p-4 h-110 bg-[#9caf88]">
                        <TypingTest/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;