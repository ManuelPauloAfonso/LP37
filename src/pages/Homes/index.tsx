import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Info from "../../components/Info";
import InfoCard from "../../components/InfoCard";
import Loading from "../../components/Loading";


export default function Homes(){
    return(
        <>
            <Loading />
            <Header />
            <Info />
            <InfoCard />
        </>
    )
}