import React, { useState } from "react";
import { Stack, Button, Typography, Fab, Snackbar, Alert } from "@mui/material";
import Star from "../assets/star.svg";

const RatingCard = ({ inputSharing, setInputSharing }) => {
  const InputBtns = ["1", "2", "3", "4", "5"];
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const handleInput = (e) => {
    setInput(e.currentTarget.innerText);
  };
  const handleSwitching = () => {
    if (input === "") {
      setOpen(true);
    } else {
      setInputSharing(input);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Stack gap={3}>
        <Fab
          size="medium"
          sx={{ bgcolor: "hsl(213, 19%, 25%)", boxShadow: "none" }}
        >
          <img src={Star} alt={Star + "icon"} />
        </Fab>
        <Typography
          variant="h5"
          color="hsl(0, 0%, 100%)"
          lineHeight={1.5}
          fontFamily="Overpass"
          mb={-1}
          fontWeight="600"
        >
          How did we do?
        </Typography>
        <Typography
          fontSize="14px"
          lineHeight={1.5}
          fontFamily="Overpass"
          color="hsl(216, 12%, 54%)"
          fontWeight="500"
        >
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Typography>
        <Stack flexDirection="row" gap={2} justifyContent="center">
          {InputBtns.map((item, index) => (
            <Fab
              key={index}
              size="medium"
              sx={{
                bgcolor: "hsl(213, 19%, 25%)",
                boxShadow: "none",
                fontFamily: "Overpass",
                color: "hsl(217, 12%, 63%)",
                ":hover": {
                  bgcolor: "hsl(25, 97%, 53%)",
                  color: "hsl(0, 0%, 100%)",
                },
                ":focus": {
                  bgcolor: "hsl(217, 12%, 63%)",
                  color: "hsl(0, 0%, 100%)",
                },
              }}
              onClick={handleInput}
            >
              {item}
            </Fab>
          ))}
        </Stack>
        <Button
          size="large"
          sx={{
            bgcolor: "hsl(25, 97%, 53%)",
            color: "white",
            fontFamily: "Overpass",
            borderRadius: "30px",
            letterSpacing: "2px",
            ":hover": {
              color: "hsl(25, 97%, 53%)",
              bgcolor: "white",
            },
          }}
          onClick={handleSwitching}
        >
          Submit
        </Button>
      </Stack>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: "100%", fontFamily: "Overpass" }}
        >
          Please Give Rating To Proceed Forward
        </Alert>
      </Snackbar>
    </>
  );
};

export default RatingCard;
