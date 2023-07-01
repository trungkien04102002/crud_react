import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ClubFilter from "../../Modal/ClubFilter";
import GameweekFilter from "../../Modal/GameweekFilter";
import PageHeader from "../../PageHeader/PageHeader";

export default function FixturesPage() {
  return (
    <>
      <Header />
      <PageHeader headerPage={"FIXURES PAGE"} />
      <ClubFilter isResult={false} />
      <Footer />
    </>
  );
}
