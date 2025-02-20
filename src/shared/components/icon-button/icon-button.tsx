import { IconButtonProps as MUIIconButtonProps, IconButton as MUIIconButton } from '@mui/material';

interface IconButtonProps extends MUIIconButtonProps {}

export default function IconButton({ ...rest }: IconButtonProps) {
  return (
    <MUIIconButton
      sx={{
        padding: 1.5,
        borderRadius: '0.65rem',
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
