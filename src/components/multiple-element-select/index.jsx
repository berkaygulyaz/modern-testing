function Test({ products }) {
    return (
      <ul>
        {products.map((products, index) => (
          <li>{products}</li>
        ))}
      </ul>
    );
  }
  
export default Test;