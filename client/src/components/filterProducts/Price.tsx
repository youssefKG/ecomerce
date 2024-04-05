import { List, ListItemText, Checkbox, ListItemButton } from "@mui/material";
const Price = () => {
  return (
    <div className="price-filter-container">
      <h1>Price</h1>
      <List dense={true}>
        <ListItemButton>
          <Checkbox />
          <ListItemText primary="$20 -100 " />
        </ListItemButton>
        <ListItemButton>
          <Checkbox />
          <ListItemText primary="$20 -100 " />
        </ListItemButton>
        <ListItemButton>
          <Checkbox />
          <ListItemText primary="$20 -100 " />
        </ListItemButton>
        <ListItemButton>
          <Checkbox />
          <ListItemText primary="$20 -100 " />
        </ListItemButton>
      </List>
    </div>
  );
};
export default Price;
