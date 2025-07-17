import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
const API_URL = 'http://localhost:3000/productos';

function App() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const obtenerProductos = () => {
    axios.get(API_URL)
      .then(res => setProductos(res.data))
      .catch(err => console.error('Error al cargar productos', err));
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const crearProducto = (e) => {
    e.preventDefault();

    axios.post(API_URL, {
      producto: {
        nombre: nombre,
        precio: parseFloat(precio)
      }
    })
    .then(() => {
      setNombre('');
      setPrecio('');
      obtenerProductos();
    })
    .catch(err => console.error('Error al crear producto', err));
  };

  return (
    <div style={{
  padding: '2rem',
  maxWidth: '600px',
  margin: '0 auto',
  fontFamily: 'sans-serif',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
}}>
  <h1 style={{ textAlign: 'center', color: '#333' }}>Productos</h1>

  <ul style={{ listStyle: 'none', padding: 0 }}>
    {productos.map(prod => (
      <li
        key={prod.id}
        style={{
          padding: '0.75rem 1rem',
          backgroundColor: '#fff',
          borderRadius: '6px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
          marginBottom: '0.75rem',
          display: 'flex',
          justifyContent: 'space-between', color: '#555',
        }}
      >
        <span>{prod.nombre}</span>
        <strong>${prod.precio}</strong>
      </li>
    ))}
  </ul>

  <h2 style={{ marginTop: '2rem', color: '#333' }}>Crear Producto</h2>

  <form onSubmit={crearProducto} style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '6px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
  }}>
    <input
      type="text"
      placeholder="Nombre"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      required
      style={{
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem'
      }}
    />
    <input
      type="number"
      placeholder="Precio"
      value={precio}
      onChange={(e) => setPrecio(e.target.value)}
      required
      style={{
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem'
      }}
    />
    <button type="submit" style={{
      padding: '0.6rem',
      border: 'none',
      backgroundColor: '#007BFF',
      color: '#fff',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer'
    }}>
      Guardar
    </button>
  </form>
</div>

  );
}

export default App;
