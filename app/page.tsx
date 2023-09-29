"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { Selects } from "@/components/Selects";
import { useTypedDispatch } from "@/hooks/useTypedDispatch";
import { fetchGameList } from "@/store/features/gameListSlice";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { SuspenseGames } from "@/components/Games/SuspenseGames";
import { filterUniqueIds } from "@/shared/filterUnique";

export default function Home(): JSX.Element {
  const dispatch = useTypedDispatch();
  const gameList = useTypedSelector((state) => state.gameList.gameList);

  const [selectedProvider, setSelectedProvider] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const totalGames = Object.keys(gameList).length;
  const gamesPerPage = 12;
  const [visibleGames, setVisibleGames] = useState(gamesPerPage);

  const filteredIds = React.useMemo(
    () => filterUniqueIds(gameList),
    [gameList],
  );
  const MemoizedSuspenseGames = React.memo(SuspenseGames);

  const filteredSorted = filteredIds
    .filter((gameId) => {
      const game = gameList[gameId];
      return (
        (selectedProvider === "" || game.provider === selectedProvider) &&
        (selectedCurrency === "" || selectedCurrency in game.real)
      );
    })
    .sort((gameIdA, gameIdB) => {
      const gameA = gameList[gameIdA];
      const gameB = gameList[gameIdB];
      const popularityA = gameA.collections.popularity || 0;
      const popularityB = gameB.collections.popularity || 0;

      if (popularityA === popularityB) {
        return 0;
      } else {
        return popularityA - popularityB;
      }
    });

  const visibleGamesList = filteredSorted.slice(0, visibleGames);

  useEffect(() => {
    dispatch(fetchGameList());
  }, []);

  const handleLoadMoreGames = () => {
    setVisibleGames((prevVisibleGames) => prevVisibleGames + gamesPerPage);
  };

  return (
    <>
      <Selects
        gameList={gameList}
        selectedProvider={selectedProvider}
        setSelectedProvider={setSelectedProvider}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      <div className="container">
        {visibleGamesList.map((gameId) => (
          <MemoizedSuspenseGames
            game={gameList[gameId]}
            uniqueId={gameId}
            key={gameId}
          />
        ))}
      </div>
      <div className="button">
        {visibleGames < totalGames && (
          <button onClick={handleLoadMoreGames} className="button_see_more">
            Показать еще
          </button>
        )}
      </div>
    </>
  );
}
