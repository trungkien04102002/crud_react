export default function Match({ matchProps, isResult }) {
  return (
    <>
      <div className="flex justify-between px-5 py-[10px] border-b-[#e5e5e5] border-b-[1px]">
        <div>
          <div className="flex gap-4 ">
            <div className="flex gap-1 items-center justify-end  min-w-[200px]">
              <div>{matchProps?.homeName}</div>

              <div className="w-[30px] h-[30px]">
                {" "}
                <img src={matchProps?.homeLogo} />
              </div>
            </div>
            {!isResult ? (
              <div className="rounded-[8px] w-[59px] max-w-[60px] border-[1px] px-[8px] py-[0px] flex justify-center">
                {matchProps?.time}{" "}
              </div>
            ) : (
              <div className=" rounded-[4px] w-[50px] max-w-[60px] border-[1px] px-[8px] py-[0px] bg-[#37003c] flex justify-center">
                <span className="text-amber-50 font-bold py[10px]">
                  <div className="pt-[1px]">
                    <span>{Math.floor(Math.random() * 5) + 1}</span>
                    <span>-</span>
                    <span>{Math.floor(Math.random() * 5) + 1}</span>
                  </div>
                </span>
              </div>
            )}
            <div className="flex gap-1 items-center">
              <div className="w-[30px] h-[30px]">
                {" "}
                <img src={matchProps?.awayLogo} />
              </div>
              <div>{matchProps?.awayName}</div>
            </div>
          </div>
        </div>
        <div>{matchProps?.stadium}</div>
      </div>
    </>
  );
}
