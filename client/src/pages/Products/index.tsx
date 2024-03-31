import Grid from "@mui/material/Grid";
import AllCategories from "../../components/AllCategories";
import "./index.css";
const Products = () => {
  return (
    <div className="products-container">
      <Grid container rowSpacing={1} columnSpacing={4}>
        <Grid item xs={2}>
          <AllCategories />
        </Grid>
        <Grid item xs={7}>
          <div>2</div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Products;
