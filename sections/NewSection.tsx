export interface IProduct {
  img: string;
  link: string;
  name: string;
  price: string;
}

export interface ICategory {
  banner: string;
  title: string;
  products: IProduct[];
  fullCollectionLink: string;
}

function Category(categories: ICategory[]) {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <>
      {categories.map((category, index) => {
        <div key={index} class="flex flex-col">
          <img src={category.banner} alt={category.title} />
          <h2>{category.title}</h2>

          <div class="flex">
            {category.products.map((product) => {
              <div class="flex flex-col" key={product.name}>
                <img src={product.img} alt={product.name} />

                <h3>{product.name}</h3>

                <p>R$ {product.price}</p>
              </div>;
            })}
          </div>
        </div>;
      })}
    </>
  );
}

export default Category;
