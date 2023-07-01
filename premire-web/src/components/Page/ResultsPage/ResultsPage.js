import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import MatchDay from "../../MatchDay/MatchDay";
import ClubFilter from "../../Modal/ClubFilter";
import GameweekFilter from "../../Modal/GameweekFilter";
import PageHeader from "../../PageHeader/PageHeader";

export default function ResultsPage() {
  return (
    <>
      <Header />
      <PageHeader headerPage={"RESULTS PAGE"} />
      <ClubFilter isResult={true} />
      <Footer />
    </>
  );
}
