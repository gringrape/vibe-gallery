"use client";

import * as React from "react";
import { useState } from "react";
import { TvCard } from "./TvCard";
import { TV_ITEMS } from "./tvData";
import { TvItem } from "./types";
import styles from "./InputDesign.module.css";

function InputDesign() {
  const [selectedTv, setSelectedTv] = useState<TvItem | null>(null);
  const [tvs, setTvs] = useState<TvItem[]>(() => TV_ITEMS);

  return (
    <main className={styles.div}>
      <h1 className={styles.h1}>📺 Coding Gallery</h1>
      <section className={styles.div2}>
        {tvs?.map((tv, index) => <TvCard key={tv.id} tv={tv} index={index} />)}
      </section>
    </main>
  );
}

export default InputDesign;
