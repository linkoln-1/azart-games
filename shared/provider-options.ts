import { useMemo } from "react";
import { TypeGameObject } from "@/types/typeGameObject";

export function ProviderOptions(gameList: TypeGameObject) {
  return useMemo(
    () =>
      Array.from(
        new Set(
          Object.values(gameList)
            .map((elem) => elem?.provider)
            .filter((provider) => provider),
        ),
      ),
    [gameList],
  );
}
