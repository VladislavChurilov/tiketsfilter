import React, { useEffect, useState } from "react";
import { NextPageWithLayout } from "../pages/_app";
import { Box, Stack, Typography, Button } from "@mui/material";
import { tickets } from "./tickets.json";
import { useForm, useWatch } from "react-hook-form";
import Filter from "@/components/Filter";
import Point from "@/components/Point";

export const BACKGROUND_COLOR = "#f8f5f5";

type Ticket = {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
};

const Home: NextPageWithLayout = () => {
  const [data, setData] = useState<>(tickets);
  const { control, getValues } = useForm();
  const [selected] = useWatch({
    control: control,
    name: ["selectedTransfer"],
  });

  useEffect(() => {
    if (!!selected?.length) {
      setData(tickets.filter((item) => selected.includes(item.stops)));
    } else setData(tickets);
  }, [selected]);

  return (
    <Box display="flex" gap="20px">
      <Filter control={control} getValues={getValues} />
      <Stack width="100%" gap="20px">
        {data.map((ticket: Ticket) => (
          <Box padding="5px" backgroundColor={BACKGROUND_COLOR} display="flex">
            <div style={{ borderRight: "1px solid grey" }}>
              <Typography>TURKISH AIRLINES</Typography>
              <Button>Купить за {ticket.price}Р</Button>
            </div>
            <Box width="100%" display="flex" gap="10px" padding="10px">
              <Point
                name={ticket.origin_name}
                date={ticket.departure_date}
                origin={ticket.origin}
                time={ticket.departure_time}
              />

              <Stack
                height="min-content"
                width="100%"
                borderBottom="1px solid grey"
              >
                <Typography textAlign="center" color="gray" fontSize="12px">
                  {!!ticket.stops
                    ? `пересадок: ${ticket.stops}`
                    : "без пересадок"}
                </Typography>
              </Stack>
              <Point
                name={ticket.destination_name}
                date={ticket.arrival_date}
                origin={ticket.destination}
                time={ticket.arrival_time}
              />
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Home;
