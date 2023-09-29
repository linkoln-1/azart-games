import { TypeGameObject } from "@/types/typeGameObject";

export const filterUniqueIds = (gameList: TypeGameObject) => {
  const filteredIds = Object.keys(gameList).filter((gameId) => {
    return (
      gameId !== "title" &&
      gameId !== "provider" &&
      gameId !== "collections" &&
      gameId !== "real" &&
      gameId !== "demo" &&
      gameId !== "key"
    );
  });

  return filteredIds;
};
