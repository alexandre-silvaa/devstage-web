import { TextField, TextFieldProps as MUIIconButtonProps } from '@mui/material';

type InputProps = {} & MUIIconButtonProps;

export default function Input({ value, ...rest }: InputProps) {
  return (
    <TextField
      data-error={rest.error}
      value={value}
      sx={{
        height: 48,
        borderRadius: '0.65rem',
        bgcolor: 'var(--color-gray-800)',
        '& .MuiInputAdornment-root': {
          color: rest.error ? 'red' : value ? 'white' : 'gray',
        },
        '& .MuiInputBase-input': {
          color: rest.error ? 'red' : value ? 'white' : 'gray',
        },
      }}
      slotProps={{
        input: { style: { height: 48, width: '100%' } },
      }}
      {...rest}
    />
  );
}
