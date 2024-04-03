import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Laoding() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
