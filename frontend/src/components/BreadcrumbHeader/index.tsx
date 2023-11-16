import { Box } from "@mui/material";
import { styles } from "./styles";

interface BreadcrumbHeaderProps {
  children: string;
}

export const BreadcrumbHeader = ({ children }: BreadcrumbHeaderProps) => {
  return <Box sx={styles.root}>{children}</Box>;
};
