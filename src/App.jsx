import React from "react";
import { Stack } from "@mui/material";
import Card from "./components/Card";
import "./App.css";
const App = () => {
  return (
    <Stack
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      bgcolor="hsl(216, 12%, 8%)"
    >
      <Card />
    </Stack>
  );
};

export default App;
