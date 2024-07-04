import "./index.v2.css";
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
          <div className="overlay">
            <h1>Cat num 1</h1>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
            </p>
          </div>
          <img src="https://www.archiproducts.com/images/category-b/1394@1x.jpg" />
        </div>
        <div id="cat-2" className="cat">
          <div className="overlay">
            <h1>Cat num 1</h1>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
            </p>
          </div>
          <img src="https://www.ikea.com/ext/ingkadam/m/23d41776febf815/original/PH195594.jpg?f=xs" />
        </div>
        <div id="cat-3" className="cat">
          <div className="overlay">
            <h1>Cat num 1</h1>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
            </p>
          </div>
          <img src="https://www.ikea.com/ma/fr/images/products/fejka-plante-artificielle-et-supp-mural-interieur-exterieur-vert-mauve__1207875_pe908211_s5.jpg?f=xxxs" />
        </div>
        <div id="cat-4" className="cat">
          <div className="overlay">
            <h1>Cat num 1</h1>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
            </p>
          </div>
          <img src="https://www.ikea.com/ma/fr/images/products/hovsta-cadre-motif-bouleau__0902228_pe652821_s5.jpg?f=xxs" />
        </div>
      </div>
    </div>
  );
};
export default CategoriesSection;
