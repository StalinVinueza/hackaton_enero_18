import React, { useEffect, useState } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);  // Estado para almacenar las categorías
  const [loading, setLoading] = useState(true);  // Estado para manejar la carga
  const [selectedCategory, setSelectedCategory] = useState(null);  // Estado para la categoría seleccionada

  useEffect(() => {
    // Hacer la solicitud a la API de categorías
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())  // Convertir la respuesta en formato JSON
      .then(data => {
        setCategories(data.categories);  // Almacenar las categorías en el estado
        setLoading(false);  // Cambiar el estado de carga
      })
      .catch(error => {
        console.error('Error al cargar las categorías:', error);  // Manejo de errores
        setLoading(false);  // Asegurarse de que el estado de carga se cambie incluso si hay error
      });
  }, []);  // El array vacío asegura que la solicitud solo se haga una vez cuando el componente se monta

  const handleMoreInfo = (category) => {
    setSelectedCategory(category);  // Establecer la categoría seleccionada
  };

  const closeModal = () => {
    setSelectedCategory(null);  // Cerrar el modal
  };

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <h1>Categorías de Comidas</h1>
      {categories.length > 0 ? (
        <div className="categories-container">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="category-image"
              />
              <h3>{category.strCategory}</h3>
              <button onClick={() => handleMoreInfo(category)}>Más Información</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay categorías disponibles</p>
      )}

      {/* Modal para mostrar más información de la categoría seleccionada */}
      {selectedCategory && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>{selectedCategory.strCategory}</h2>
            <img
              src={selectedCategory.strCategoryThumb}
              alt={selectedCategory.strCategory}
              className="category-image-large"
            />
            <p>{selectedCategory.strCategoryDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;
