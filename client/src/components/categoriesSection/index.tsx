import "./index.css";
const CategoriesSection = () => {
  return (
    <div className="categories-section-container">
      <div className="categories-header">
        <h1>View Our Range Of Categories</h1>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
      <div className="categories-cards-container">
        <div id="cat-1" className="cat">
          <h1>Cat num 1</h1>
          <img src="https://www.archiproducts.com/images/category-b/1394@1x.jpg" />
        </div>
        <div id="cat-2" className="cat">
          <h1>Cat num 1</h1>
          <img src="https://www.archiproducts.com/images/category-b/1394@1x.jpg" />
        </div>
        <div id="cat-3" className="cat">
          <h1>Cat num 1</h1>

          <img src="https://www.archiproducts.com/images/category-b/1394@1x.jpg" />
        </div>
        <div id="cat-4" className="cat">
          <h1>Cat num 1</h1>
          <img src="https://www.archiproducts.com/images/category-b/1394@1x.jpg" />
        </div>
      </div>
    </div>
  );
};
export default CategoriesSection;
