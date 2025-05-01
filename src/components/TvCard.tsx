"use client";

import { TvItem } from "./types";
import styles from "./InputDesign.module.css";

interface TvCardProps {
  tv: TvItem;
  index: number;
}

export const TvCard: React.FC<TvCardProps> = ({ tv, index }) => {
  return (
    <article
      className={`${styles.div3} ${styles.builderC9eac4ce42fa4f519b00f7f838d7d78d}`}
      key={index}
      style={{
        backgroundColor: tv.color,
        transform: `rotate(${tv.rotation}deg) scale(${tv.scale})`,
      }}
    >
      <div className={styles.div4} aria-hidden="true" />
      <img src={tv.gifUrl} alt={tv.title} className={styles.tvImage} />
    </article>
  );
};
