import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const GameweekFilter = () => {
  const gameweekArr = Array.from({ length: 38 }, (_, i) => i + 1);
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <div className="w-72 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select gameweek"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        {/* <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div> */}
        {gameweekArr?.map((val) => (
          <li
            key={val}
            onClick={() => {
        
                setSelected(val);
                setOpen(false);
                setInputValue("");
            }}
          >
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameweekFilter;
