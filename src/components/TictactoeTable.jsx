import React from "react";

function TictactoeTable() {
  const Square = (props) => {
    return (
      <div
        className="shadow-md h-24 w-24 rounded-lg bg-white text-7xl text-center cursor-default font-light flex items center justify-center x-player"
      >
        
      </div>
    );
  };
  
  return (
    <>
      <div className="text-center py-2 shadow-sm text-gray-400 z-50 sticky">
        Your Turn
      </div>
      <section className="game-board py-10">
        <div className="max-w-md mx-auto">
          <div className="max-w-lg flex flex-col gap-5 mx-auto">
            <div className="flex gap-5 mx-auto">
              <Square squareIndex={0} />
              <Square squareIndex={1} />
              <Square squareIndex={2} />
            </div>
            <div className="flex gap-5 mx-auto">
              <Square squareIndex={3} />
              <Square squareIndex={4} />
              <Square squareIndex={5} />
            </div>
            <div className="flex gap-5 mx-auto">
              <Square squareIndex={6} />
              <Square squareIndex={7} />
              <Square squareIndex={8} />
            </div>
          </div>
  
          <div className="text-center">
            <button className="bg-rose-400 text-white w-full py-2 font-semibold mt-10 rounded-md shadow-lg">
              Reset
            </button>
          </div>
        </div>
      </section>
    </>
  );
  
}

export default TictactoeTable;
