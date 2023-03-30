import useGame from "../hooks/useGame";

export default function Game() {
  const { games } = useGame();

  console.log(games);

  return <></>;
}
