import Image from 'next/image'

async function obtenerProductos() {
  const response = await fetch('https://fakestoreapi.com/products')
  if(!response.ok) throw new Error('No se pudieron obetener los productos')
  return response.json()
}

const HomePage = async () => {
  const data = await obtenerProductos();
  console.log(data);
  return (
    <div className="card">
      {data.map((producto) => {
        return (
          <div>
            <Image
            className="image"
              src={producto.image}
              alt="imagen del producto"
              width={200}
              height={200}
              style={{ with: 200, height: 200 }}
            />
            <p className="title">{producto.title}</p>
            <p className="price">{producto.price}</p>
           
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
