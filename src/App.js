import Container from './components/Container';
import products from './products.json';

const Item = ({ item }) => {
  return (
    <li className='item' data-testid='product-item'>
      <img src={item.thumbnail}></img>
      <h4> {item.title} </h4>
      <p> {item.description} </p>
      <span> {item.brand} </span>
      <strong> {item.price} </strong>
    </li>
  )
}

function App() {
  const productList = products.filter(item => item.category === 'smartphones')

  return (
    
    <Container>
      <ul className='list' data-testid='product-list'>
        {productList.map(product => {
          return (
            <Item item={product}/>
          )
        })}
      </ul>
    </Container> 
  );
}

export default App;