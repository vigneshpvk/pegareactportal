import { Box, Typography, useTheme } from "@mui/material";
import { useMode, tokens } from "../../themes";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h2" color={colors.grey[100]} fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Header;
