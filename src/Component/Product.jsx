const Products = ({ name, description, price,prodimage,onAdd }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <img src={prodimage} className="image"></img>
            <span>$ {price}</span>
            <button className="btn" onClick={()=>onAdd({name})}>Buy Now</button>
        </div>
    );
}

export default Products;