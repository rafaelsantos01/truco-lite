interface Team {
  name: string;
  score: number;
}

interface TeamProps {
  teamOne: Team;
  teamTwo: Team;
}

export default function Scoreboard({ teamOne, teamTwo }: TeamProps) {
  function hasThreePointDifference(score1: number, score2: number): boolean {
    return Math.abs(score1 - score2) >= 3;
  }
  const isThreePointDifference = hasThreePointDifference(
    teamOne.score,
    teamTwo.score
  );

  return (
    <section className="mb-2 px-1 py-0   rounded-lg shadow-inner ">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <p className="text-xl font-bold text-blue-600">{teamOne.score}</p>
          <p className="text-md ">Vitórias do time</p>
          <p className="text-LG font-semibold ">{teamOne.name}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <p className="text-xl font-bold text-red-600">{teamTwo.score}</p>
          <p className="text-md ">Vitórias do time</p>
          <p className="text-LG font-semibold ">{teamTwo.name}</p>
        </div>
      </div>
    </section>
  );
}
