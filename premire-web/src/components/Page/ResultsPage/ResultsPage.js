import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import MatchDay from "../../MatchDay/MatchDay";
import GameweekFilter from "../../Modal/GameweekFilter";
import PageHeader from "../../PageHeader/PageHeader";

export default function ResultsPage() {
  return (
    <>
      <Header />
      <PageHeader headerPage={"RESULTS PAGE"} />
      <GameweekFilter isResult={true} />
      <Footer />
    </>
  );
}
