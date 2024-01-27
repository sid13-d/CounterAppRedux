import ProductItem from './ProductItem';
import classes from './Products.module.css';



//it is just the data so I am not stressing to much on it coz my major focus was on learning the redux
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Test',
    description: 'This is a first product - amazing!'
  },
  {
    id: 'p2',
    price: 10,
    title: 'Test2',
    description: 'This is a second product - amazing!'
  }
];

const Products = (props) => {
 
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {DUMMY_PRODUCTS.map((product) => {
        return (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        )
       })}
      </ul>
    </section>
  );
};

export default Products;
