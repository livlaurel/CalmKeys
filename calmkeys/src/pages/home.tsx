import Header from '../components/header';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header/>
            <main className="bg-[#fff9f0] flex-grow p-12">
                <section className="container mx-auto">
                    <h1 className="text-2xl text-black flex justify-center cursive">home</h1>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;