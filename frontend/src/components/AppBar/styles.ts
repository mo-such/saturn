import { SxProps } from '@mui/material/styles';

export const styles: Record<string, SxProps> = {
  root: {
    height: 60,
    padding: 2,
    backgroundColor: 'primary.main',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  flexContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  divider: {
    height: '100%',
    width: '1px',
    backgroundColor: 'white',
  },
  link: {
    textDecoration: 'none',
    color: 'secondary.light',
    fontSize: 14,
    padding: 1,
    borderRadius: 1,
    transition: 'all 250ms',
    '&:hover': {
      backgroundColor: 'primary.light',
    },
  },
};
