import { useState } from "react";
import { GiConcentricCrescents } from "react-icons/gi";
import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CiShoppingCart } from "react-icons/ci";
import { AuthButton } from "../buttons";
const Navbar = () => {
  const [categories, setCategories] = useState<stirng>("Men");
  const handleCategoriesChange = (event: SelectChangeEvent) => {
    setCategories(event.target.value);
  };
  return (
    <div className="navbarContainer">
      <a>
        <GiConcentricCrescents className="logo" />
      </a>
      <ul>
        <li>
          <p>Home</p>
        </li>
        <li>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            size="small"
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              onChange={handleCategoriesChange}
              inputProps={{ "aria-label": "Without label" }}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Placeholder</em>;
                }
              }}
            >
              <MenuItem value={"Men"}>Men</MenuItem>
              <MenuItem value={"Woman"}>Woman</MenuItem>
              <MenuItem value={"Kid"}>Kid</MenuItem>
            </Select>
          </FormControl>
        </li>
        <li>
          <p>Contact Us </p>
        </li>
        <li>
          <p>Blog</p>
        </li>
      </ul>
      <div className="profil">
        <CiShoppingCart className="shoppingCartIcon" />
        <AuthButton>Login</AuthButton>
      </div>
    </div>
  );
};
export default Navbar;
