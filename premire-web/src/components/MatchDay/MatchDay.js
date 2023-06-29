import Match from "./Match";
import axios from "axios";
import { useState, useEffect } from "react";
export default function MatchDay() {
    const [dataMatch, setDataMatch] = useState([
        {
            home:'Burnley',
            away:'Man City',
            stadium: 'Turf Moor, Burnley',
            homeLogo:'https://resources.premierleague.com/premierleague/badges/rb/t90.svg',
            awayLogo:'https://resources.premierleague.com/premierleague/badges/rb/t43.svg',
            time:'02:00'
        },
        {
            home:'Burnley1112321321',
            away:'Man City123213',
            stadium: 'Turf Moor, Burnley',
            homeLogo:'https://resources.premierleague.com/premierleague/badges/rb/t90.svg',
            awayLogo:'https://resources.premierleague.com/premierleague/badges/rb/t43.svg',
            time:'59:59'
        },
        {
            home:'Burnley12321',
            away:'Man C12123213123213213ity',
            stadium: 'Turf Moor,11 Burnley',
            homeLogo:'https://resources.premierleague.com/premierleague/badges/rb/t90.svg',
            awayLogo:'https://resources.premierleague.com/premierleague/badges/rb/t43.svg',
            time:'02:00'
        }
    ])
    // const fetchDataMatch = async () => {
    //     const response = await axios.get('http://localhost:5000/matches')
    //     setDataMatch(response.data.matches)
    // }
    // useEffect(()=>{
    //  fetchDataMatch()
    // },[])
  return (
    <div className=" my-[40px] m-auto max-w-[1400px] ">
      <div className="flex justify-between">
        <div className="text-[25px] font-bold text-[#37003c]">
          {"Saturday"}
        </div>
        <div>
          <img
            alt="Premier League"
            class="fixtures__competition-logo u-hide-tablet js-competition-logo"
            src="https://resources.premierleague.com/premierleague/competitions/competition_1.png"
            className="w-[160px]"
          />
        </div>
      </div>
      <div>
        {dataMatch?.map((matchProps) => (
          <Match matchProps= {matchProps}/>
        ))}
      </div>
    </div>
  );
}
