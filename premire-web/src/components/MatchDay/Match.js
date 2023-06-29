export default function Match({ matchProps }) {
  return (
    <div className="flex justify-between px-5 py-[10px] border-b-[#e5e5e5] border-b-[1px]">
      <div>
        <div className="flex gap-4 ">
          <div className="flex gap-1 items-center justify-end  min-w-[200px]">
            <div>{matchProps?.home}</div>

            <div className="w-[30px]">
              {" "}
              <img src={matchProps.homeLogo} />
            </div>
          </div>
          <div className="rounded-[4px] max-w-[60px] border-[1px] px-[8px] py-[0px]">
            {matchProps?.time}
          </div>{" "}
          <div className="flex gap-1 items-center">
            

            <div className="w-[30px]">
              {" "}
              <img src={matchProps.awayLogo} />
            </div>
            <div>{matchProps?.away}</div>
          </div>
        </div>
      </div>

      <div>{matchProps?.stadium}</div>
    </div>
  );
}
