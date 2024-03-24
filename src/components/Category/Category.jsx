const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt={category_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {category_name} </h2>
          <p> {availability} </p>
        </div>
      </div>
    </>
  );
};
export default Category;
