import { useTheme } from '@mui/material';
import Select, { SingleValue } from 'react-select';
interface Options {
  value: string;
  label: string;
}

interface SelectProps {
  options: Options[];
  defaultValue: Options;
  onChangeHandler: (option: SingleValue<Options>) => void;
  name: string;
  isDisabled?: boolean;
}
const CustomSelect = ({
  options,
  defaultValue,
  onChangeHandler,
  name,
  isDisabled
}: SelectProps) => {
  const MuiTheme = useTheme();
  return (
    <Select
      options={options}
      isDisabled={isDisabled}
      theme={reactSelecttheme => ({
        ...reactSelecttheme,
        borderRadius: 0,
        colors: {
          ...reactSelecttheme.colors,
          primary25: MuiTheme.palette.primary.light,
          primary: MuiTheme.palette.primary.light,
          neutral80: MuiTheme.palette.text.primary
        }
      })}
      styles={{
        control: base => ({
          ...base,
          fontSize: MuiTheme.typography.fontSize,
          fontFamily: MuiTheme.typography.fontFamily,
          color: MuiTheme.palette.text.primary,
          fontWeightLight: MuiTheme.typography.fontWeightLight,
          fontWeightBold: MuiTheme.typography.fontWeightBold,
          fontWeightMedium: MuiTheme.typography.fontWeightMedium
        })
      }}
      name={name}
      defaultValue={defaultValue}
      isSearchable={false}
      onChange={onChangeHandler}
    />
  );
};

export default CustomSelect;
