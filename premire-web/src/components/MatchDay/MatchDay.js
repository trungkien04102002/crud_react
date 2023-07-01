import Match from "./Match";
export default function MatchDay({ dataMatch, isResult }) {
  return (
    <>
      {dataMatch?.map((data) => (
        <div className=" my-[40px] m-auto max-w-[1400px] ">
          <div className="flex justify-between">
            <div className="text-[25px] font-bold text-[#37003c]">
              {data.day}
            </div>
            <div>
              <img
                alt="Premier League"
                class="fixtures__competition-logo u-hide-tablet js-competition-logo"
                src="https://resources.premierleague.com/premierleague/competitions/competition_1.png"
                className="w-[160px] mr-5"
              />
            </div>
          </div>
          <div>
            {data.matches?.map((match) => (
              <Match matchProps={match} isResult = {isResult} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
