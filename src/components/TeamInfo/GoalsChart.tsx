import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { useTeamResults } from "@/hooks/useTeamResults";
import { useEffect, useState } from "react";

interface IGoalsChart {
  season: number;
  teamId: number;
  leagueId: number;
}

export default function GoalsChart({ season, teamId, leagueId }: IGoalsChart) {
  const { results } = useTeamResults(teamId, season, leagueId);
  // const [goalsPerMinute, setGoalsPerMinute] = useState<any>();

  if (!results) {
    return null; // or render a loading state
  }

  const goalsPerMinute = [
    {
      minute: "0-15",
      goals: results?.goals?.minute?.["0-15"].total || 0,
    },
    {
      minute: "16-30",
      goals: results?.goals?.minute?.["16-30"].total || 0,
    },
    {
      minute: "31-45",
      goals: results?.goals?.minute?.["31-45"].total || 0,
    },
    {
      minute: "46-60",
      goals: results?.goals?.minute?.["46-60"].total || 0,
    },
    {
      minute: "61-75",
      goals: results?.goals?.minute?.["61-75"].total || 0,
    },
    {
      minute: "76-90",
      goals: results?.goals?.minute?.["76-90"].total || 0,
    },
    {
      minute: "91-105",
      goals: results?.goals?.minute?.["91-105"].total || 0,
    },
    {
      minute: "106-120",
      goals: results?.goals?.minute?.["106-120"].total || 0,
    },
  ];

  // useEffect(() => {
  //   if (results) {

  //     setGoalsPerMinute(goalsPerMinute);
  //   }
  // }, []);

  console.log(goalsPerMinute);

  return (
    <article>
      <h3>Quantidade de gols marcados por tempo de jogo</h3>

      <BarChart
        width={730}
        height={320}
        data={goalsPerMinute}
        margin={{ bottom: 24, left: 24 }}
      >
        <XAxis
          dataKey="minute"
          name="Tempo de jogo em minutos"
          label={{ value: "Tempo de jogo em minutos", position: "bottom" }}
        />
        <YAxis label={{ value: "Gols", angle: -90, position: "insideLeft" }} />
        <Tooltip itemStyle={{ color: "var(--blue900)" }} />
        <Bar
          dataKey="goals"
          name="Gols por tempo de jogo"
          fill="var(--blue300)"
          radius={4}
        />
      </BarChart>
    </article>
  );
}
