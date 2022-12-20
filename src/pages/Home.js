import Products from "../Components/Products";

const Home = () => {
    return (
        <div>
            <h1 className="heading" bg-yellow-100>Welcome to you, Our Platform! </h1>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    )

}
export default Home;