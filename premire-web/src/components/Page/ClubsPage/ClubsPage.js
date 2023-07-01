import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import PageHeader from "../../PageHeader/PageHeader";
import Team from "../../Team/Team";

export default function ClubsPage(){
    return(
        <>
        <Header/>
        <PageHeader headerPage={"CLUB PAGE"} />
        <Team/>
        <Footer/>
        </>
    )
}