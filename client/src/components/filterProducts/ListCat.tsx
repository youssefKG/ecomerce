import { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import {
  List,
  Collapse,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemButton,
} from "@mui/material";

interface Furniture {
  id: number;
  name: string;
}
interface ListCatProps {
  categoryName: string;
  items: Furniture[];
}
const ListCat = ({ categoryName, items }: ListCatProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <List component={"div"} dense={true}>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={categoryName} />
        {isOpen ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {items.map((item) => (
          <ListItemButton key={item.id}>
            <ListItemIcon>
              <Checkbox />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </Collapse>
    </List>
  );
};

export default ListCat;
