import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import MatchDay from "../../MatchDay/MatchDay";
import GameweekFilter from "../../Modal/GameweekFilter";
import PageHeader from "../../PageHeader/PageHeader";

export default function FixturesPage(){
    return(
        <>
        <Header/>
        <PageHeader headerPage = {'FIXURES PAGE'}/>
        <GameweekFilter/>
        <Footer/>
        </>
    )
}