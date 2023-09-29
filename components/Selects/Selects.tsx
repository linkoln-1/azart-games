import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FC } from "react";
import { TypeGameObject } from "@/types/typeGameObject";
import { ProviderOptions } from "@/shared/provider-options";
import { CurrencyOptions } from "@/shared/currency-options";

interface SelectsProps {
  gameList: TypeGameObject;
  selectedProvider: string;
  selectedCurrency: string;
  setSelectedProvider: (provider: string) => void;
  setSelectedCurrency: (currency: string) => void;
}

export const Selects: FC<SelectsProps> = ({
  gameList,
  selectedProvider,
  selectedCurrency,
  setSelectedProvider,
  setSelectedCurrency,
}) => {
  const providerOptions = ProviderOptions(gameList);
  const currencyOptions = CurrencyOptions(gameList);

  const handleCurrencyChange = (e: SelectChangeEvent<string>) => {
    setSelectedCurrency(e.target.value);
  };

  const handleProviderChange = (e: SelectChangeEvent<string>) => {
    setSelectedProvider(e.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <InputLabel id="currency-label">Валюта</InputLabel>
        <Select
          labelId="currency-label"
          id="currency-label"
          value={selectedCurrency}
          label="Валюта"
          onChange={handleCurrencyChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {currencyOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <InputLabel id="provider-label">Провайдер</InputLabel>
        <Select
          labelId="provider-label"
          id="provider-label"
          value={selectedProvider}
          label="Провайдер"
          onChange={handleProviderChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {providerOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
