import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Info from "../../components/Info";
import InfoCard from "../../components/InfoCard";
import Loading from "../../components/Loading";
import About  from "../../components/About";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import Wpp from "../../components/Wpp";


export default function Homes(){
    return(
        <>
            <Loading />
            <Header />
            <Info />
            <InfoCard />
            <About />
            <Wpp />
            <Form />
            <Footer />
        </>
    )
}