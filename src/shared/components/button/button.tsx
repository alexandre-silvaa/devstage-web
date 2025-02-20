import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';

interface ButtonProps extends MUIButtonProps {}

export default function Button({ ...rest }: ButtonProps) {
  return (
    <MUIButton
      variant="contained"
      sx={{
        paddingX: 5,
        height: 48,
        fontWeight: '600',
        borderRadius: '0.75rem',
        width: '100%',
        bgcolor: 'var(--color-gray-500)',
        color: 'var(--color-blue)',
        transition: 'background-color 0.3s ease',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:hover': {
          bgcolor: 'var(--color-blue)',
          color: 'var(--color-gray-500)',
        },
      }}
      {...rest}
    />
  );
}
