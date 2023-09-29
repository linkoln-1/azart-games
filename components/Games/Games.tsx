"use client";
import * as React from "react";
import { TypeGameObject } from "@/types/typeGameObject";
import { FC } from "react";
import styles from "../../styles/gameCard/game-card.module.scss";
import Image from "next/image";
import Link from "next/link";

interface GamesProps {
  game: TypeGameObject;
  uniqueId: string;
}

function getImageUrl(uniqueId: string): string {
  return `https://cdn2.softswiss.net/i/s2/${uniqueId}.png`;
}

const Games: FC<GamesProps> = ({ game, uniqueId }) => {
  const imageUrl: string = getImageUrl(uniqueId);

  return (
    <div className={styles.gameCard_body}>
      <div className={styles.card}>
        <div className={styles.card_img}>
            <Link href={`/games${game.demo}`}>
                <Image
                    src={imageUrl}
                    alt={game.title}
                    width={200}
                    height={200}
                    className={styles.img}
                    style={{
                        width: "100%",
                        height: "auto"
                    }}
                    loading="lazy"
                />
            </Link>
        </div>
        <div className={styles.card_title}>{game.title}</div>
      </div>
    </div>
  );
};

export default Games;