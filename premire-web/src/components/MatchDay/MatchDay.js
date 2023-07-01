import Match from "./Match";
import axios from "axios";
import { da } from "date-fns/locale";
import { useState, useEffect } from "react";
export default function MatchDay() {
  const [dataMatch, setDataMatch] = useState();
  const fetchDataMatch = async () => {
    const response = await axios.get(
      "http://localhost:5000/matchdays?filter=%7B%0A%20%20%22include%22%3A%20%5B%7B%22relation%22%3A%20%22matches%22%7D%5D%0A%7D"
    );
    setDataMatch(response.data);
  };
  useEffect(() => {
    fetchDataMatch();
  }, []);

  return (
    <> {console.log('test',dataMatch)}
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
              <Match matchProps={match} />
            ))}
          </div>
        </div>
      ))}
    </>
    // <div className=" my-[40px] m-auto max-w-[1400px] ">
    //   <div className="flex justify-between">
    //     <div className="text-[25px] font-bold text-[#37003c]">
    //       {"Saturday"}
    //     </div>
    //     <div>
    //       <img
    //         alt="Premier League"
    //         class="fixtures__competition-logo u-hide-tablet js-competition-logo"
    //         src="https://resources.premierleague.com/premierleague/competitions/competition_1.png"
    //         className="w-[160px]"
    //       />
    //     </div>
    //   </div>
    //   <div>
    //     {dataMatch?.map((matchProps) => (
    //       <Match matchProps= {matchProps}/>
    //     ))}
    //   </div>
    // </div>
  );
}
