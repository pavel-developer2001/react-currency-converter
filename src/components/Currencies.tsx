import { FC } from "react";
import rates from "../rates.json";

interface CurrenciesProps {
  currency: string;
  onChangeCurrency: (cur: string) => void;
}
export const Currencies: FC<CurrenciesProps> = ({
  currency,
  onChangeCurrency,
}) => {
  return (
    <ul className='currencies'>
      {Object.keys(rates).map((cur) => (
        <li
          onClick={() => onChangeCurrency(cur)}
          className={currency === cur ? "active" : ""}
          key={cur}
        >
          {cur}
        </li>
      ))}
    </ul>
  );
};
