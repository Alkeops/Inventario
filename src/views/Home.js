import { LastMovement, SectionLabel } from "components";
import React from "react";

const Home = () => {
  return (
    <div style={{ padding: 15 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          maxWidth: 450,
        }}
      >
        <SectionLabel title="Ultimos movimientos" />
        <LastMovement
          movement={{
            type: "add",
            quantity: 200,
            item: "Varilla 3/4",
            date: "20-12-2021 10:30",
          }}
        />
        <LastMovement
          movement={{
            type: "subtract",
            quantity: 120,
            item: "Varilla 3/4",
            date: "20-12-2021 10:30",
          }}
        />
        <LastMovement
          movement={{
            type: "add",
            quantity: 220,
            item: "Varilla 3/4",
            date: "20-12-2021 10:30",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
