import React, { FC } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Controller } from "react-hook-form";
import { Control, UseFormGetValues } from "react-hook-form/dist/types";
import { BACKGROUND_COLOR } from "@/Home";

const transfer = [
  { title: "без пересадок", stops: 0 },
  { title: "1 пересадка", stops: 1 },
  { title: "2 пересадки", stops: 2 },
  { title: "3 пересадки", stops: 3 },
];

interface FilterProps {
  control: Control<any>;
  getValues: UseFormGetValues<any>;
}
// Так как функционала на кнопках нет не заморачивался над ними

const Filter: FC<FilterProps> = ({ getValues, control }) => {
  const handleCheck = (item: number) => {
    const { selectedTransfer } = getValues();
    return selectedTransfer?.includes(item)
      ? selectedTransfer?.filter((id: number) => id !== item)
      : [...(selectedTransfer ?? []), item];
  };
  return (
    <Stack
      padding="5px"
      height="min-content"
      backgroundColor={BACKGROUND_COLOR}
    >
      <Typography>Валюта</Typography>
      <ButtonGroup>
        <Button variant="contained">RUB</Button>
        <Button>USD</Button>
        <Button>EUR</Button>
      </ButtonGroup>
      <Typography>Валюта</Typography>
      <Controller
        name="selectedTransfer"
        control={control}
        render={(props) => (
          <Stack>
            {transfer.map(({ title, stops }) => {
              return (
                <FormControlLabel
                  key={title}
                  label={title}
                  control={
                    <Checkbox
                      onChange={() => props.field.onChange(handleCheck(stops))}
                    />
                  }
                />
              );
            })}
          </Stack>
        )}
      />
    </Stack>
  );
};

export default Filter;
