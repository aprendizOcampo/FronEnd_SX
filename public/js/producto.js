// Obtén una referencia al elemento de la tabla en tu HTML
const tablaProductos = document.querySelector('table tbody');

// Realiza la solicitud HTTP a la API
fetch('http://localhost:7000/api/sinvex/productos')
  .then(response => response.json())
  .then(data => {
    // Itera sobre los productos y crea filas en la tabla
    data.forEach(producto => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${producto.cantidad}</td>
        <td>${producto.descripcion}</td>
        <td>${producto.precio}</td>
      `;
      tablaProductos.appendChild(fila);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
