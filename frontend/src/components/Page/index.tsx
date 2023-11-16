import { Box } from "@mui/material";
import { BreadcrumbHeader } from "../BreadcrumbHeader";
import { styles } from "./styles";

interface PageProps {
  children: React.ReactNode;
  title: string;
}

export const Page = ({ children, title }: PageProps) => {
  return (
    <>
      <BreadcrumbHeader>{title}</BreadcrumbHeader>
      <Box sx={styles.root}>
        <Box component="main" sx={styles.main}>
          {children}
        </Box>
      </Box>
    </>
  );
};
