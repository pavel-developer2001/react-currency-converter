import { FC } from "react";
import { Currencies } from "./Currencies";

interface BlockProps {
  value: number;
  currency: string;
  onChangeValue?: any;
  onChangeCurrency?: any;
}
export const Block: FC<BlockProps> = ({
  value,
  currency,
  onChangeValue,
  onChangeCurrency,
}) => (
  <div className='block'>
    <Currencies currency={currency} onChangeCurrency={onChangeCurrency} />
    <input
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type='number'
      placeholder={String(0)}
    />
  </div>
);
