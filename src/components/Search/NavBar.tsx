import React, { ReactElement, useState } from "react";
import { TABS } from "../../utils/constants";

export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

interface Props {
  setActiveTab: (value: number) => void;
}

// interface Props {
//     onSubmit: (value: string) => void;
//   }

export default function NavBar({ setActiveTab }: Props): ReactElement {
  return (
    <nav>
      <button
        onClick={() => {
          setActiveTab(TABS.MOVIES);
        }}
      >
        Movies
      </button>
      <button onClick={() => setActiveTab(TABS.SHOWS)}>TV Shows</button>
    </nav>
  );
}
