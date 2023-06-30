import React, { useState } from "react";
import { Box } from "@mui/material";
import RatingCard from "./RatingCard";
import ThankYouCard from "./ThankYouCard";

const Card = () => {
  const [inputSharing, setInputSharing] = useState("");
  return (
    <Box
      sx={{
        width: { lg: "320px", sm: "285px", xs: "85%" },
        padding: {
          lg: "24px",
          xs: "18px",
        },
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
      bgcolor="hsl(213, 19%, 18%)"
      borderRadius="15px"
    >
      {inputSharing === "" ? (
        <RatingCard
          inputSharing={inputSharing}
          setInputSharing={setInputSharing}
        />
      ) : (
        <ThankYouCard inputSharing={inputSharing} />
      )}
    </Box>
  );
};

export default Card;
