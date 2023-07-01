import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ClubFilter from "../../Modal/ClubFilter";
import PageHeader from "../../PageHeader/PageHeader";

export default function PageTest(){
    return(<>
    <Header/>
    <PageHeader headerPage={"TEST"} />
    <ClubFilter isResult={true}/>
    <Footer/>
    </>)
}