import { useMemo } from "react";
import { TypeGameObject } from "@/types/typeGameObject";

export function CurrencyOptions(gameList: TypeGameObject) {
  return useMemo(
    () =>
      Array.from(
        new Set(
          Object.values(gameList)
            .flatMap((elem) => Object.keys(elem?.real || {}))
            .filter((currency) => currency !== "provider"),
        ),
      ),
    [gameList],
  );
}
