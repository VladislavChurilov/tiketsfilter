import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";

type PointProps = {
  time: string;
  name: string;
  date: string;
  origin: string;
};

const Point: FC<PointProps> = ({ time, date, name, origin }) => (
  <Stack>
    <Typography fontSize="24px">{time}</Typography>
    <Typography>
      {origin},{name}
    </Typography>
    <Typography color="gray" fontSize="12px">
      {date}
    </Typography>
  </Stack>
);

export default Point;
