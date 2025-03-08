import Header from "../components/header";
import Footer from "../components/footer";

const About = () => {
    return (
        <div className='flex flex-col h-screen'>
        <Header/>
        <main className="bg-[#fff9f0] flex-grow p-12">
            <section className="container font-mono mx-auto">
                <div className="box box-content rounded-t-sm text-2xl font-bold border-3 p-4 bg-[#fff9f0]">
                    About CalmKeys:
                </div>
                <div className="box box-content rounded-b-sm text-base p-4 h-90 bg-[#9caf88]">
                    <p className="pb-7">CalmKeys is an endless typing game designed to help you practice your typing skills at your own pace. With no time limits or pressure to type quickly, CalmKeys allows you to focus on the rhythm and accuracy of your typing. Grab a cup of tea, get comfortable, and let CalmKeys guide you to a more mindful approach to typing.</p>
                    <p>Thank you for playing CalmKeys!</p>
                    <p>Feedback is always welcome!</p>
                    <img src="./imgs/pfp.png" alt="profile" className="ml-auto mr-5 w-50 h-55"/>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
    )
}

export default About;