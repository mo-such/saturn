import { Box, Avatar, Link } from '@mui/material';
import { styles } from './styles';

export interface NavItem {
  name: string;
  path: string;
}

interface AppBarProps {
  navItems?: NavItem[];
}

export const AppBar = ({ navItems }: AppBarProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.flexContainer}>
        <img src="./jupiterone-wordmark.svg" alt="JupiterOne" />
        {!!navItems && <Box sx={styles.divider} />}
        {navItems?.map(({ name, path }, index) => (
          <Link key={index} sx={styles.link} href={path}>
            {name}
          </Link>
        ))}
      </Box>
      <Box sx={styles.flexContainer}>
        <Avatar>P</Avatar>
      </Box>
    </Box>
  );
};
