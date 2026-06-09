const Products = ({ name, description, price, prodimage, onAdd, show }) => {
    if (show) {
        return (
            <div className="card">
                <h2>{name}</h2>
                <p>{description}</p>
                <img src={prodimage} className="image"></img>
                <span>$ {price}</span>
                <button className="btn btn-primary" onClick={() => onAdd({ name })}>Buy Now</button>
            </div>
        );
    }else{
        return (
            <div className="card">
                <h2>{name}</h2>
                <p>{description}</p>
                <img src={prodimage} className="image"></img>
                <span>$ {price}</span>
                <button className="btn" onClick={() => onAdd({ name: "no stock" })}>No Stock</button>
            </div>
        );
    }
}

export default Products;