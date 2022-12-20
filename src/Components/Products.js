import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUSES } from "../store/ProductSlice";
// import axios from "axios";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   try {
    //     const res = await axios.get("https://fakestoreapi.com/products");
    //     //  const data = await res.json();
    //     setProducts(res.data);
    //     console.log(res);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchProducts();
  }, []);




  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if(status === STATUSES.LOADING){
    return <h3>Loading....</h3>
  }

  if(status === STATUSES.ERROR){
    return <h3>something is wrong!</h3>
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="productImage" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            {" "}
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
