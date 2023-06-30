import React from "react";
import { Stack, Button, Typography, Fab } from "@mui/material";
import ThankIcon from "../assets/thank-you.svg";
const ThankYouCard = ({ inputSharing }) => {
  return (
    <Stack justifyContent="center" alignItems="center" gap={3}>
      <img src={ThankIcon} alt={ThankIcon} />
      <Button
        size="small"
        sx={{
          bgcolor: "hsl(213, 19%, 25%)",
          color: "hsl(25, 97%, 53%)",
          borderRadius: "15px",
          fontFamily: "Overpass",
          textTransform: "none",
          paddingInline: "15px",
        }}
      >
        You selected {inputSharing} out of 5
      </Button>
      <Typography
        variant="h5"
        color="hsl(0, 0%, 100%)"
        fontFamily="Overpass"
        fontWeight="600"
        mb={-2}
      >
        Thank you!
      </Typography>
      <Typography
        fontSize="14px"
        color="hsl(216, 12%, 54%)"
        fontFamily="Overpass"
        fontWeight="500"
        lineHeight={1.5}
        textAlign="center"
      >
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Typography>
    </Stack>
  );
};

export default ThankYouCard;
