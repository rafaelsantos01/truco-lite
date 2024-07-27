interface Team {
  name: string;
  score: number;
}

interface TeamProps {
  teamOne: Team;
  teamTwo: Team;
}

export default function Scoreboard({ teamOne, teamTwo }: TeamProps) {
  return (
    <section className="mb-2 py-4 px-1  rounded-lg shadow-lg">
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
