// SearchBar.js



// SearchBar.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import busqueda from '../assets/busqueda.svg'; // Importa la imagen de la lupa
// import './searchbar.css'; // Importa los estilos CSS correspondientes

// const SearchBar = () => {
//   const navigate = useNavigate();
//   const [valueSearch, setValueSearch] = useState('');
//   const [showSearch, setShowSearch] = useState(false);

//   const onSearchSubmit = (e) => {
//     e.preventDefault();
//     navigate('/search', { state: valueSearch });
//     setValueSearch('');
//     setShowSearch(false);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       onSearchSubmit(e);
//     }
//   };

//   const toggleSearch = () => {
//     setShowSearch(!showSearch);
//   };

//   return (
//     <div className="search-container">
//       {showSearch && (
//         <form onSubmit={onSearchSubmit} className="search-form">
//           <input
//             type="search"
//             name="valueSearch"
//             value={valueSearch}
//             onChange={(e) => setValueSearch(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Buscar nombre de Producto"
//             className="search-input"
//           />
//         </form>
//       )}

//       <Link to="#" onClick={toggleSearch} className="search-icon-container">
//         <img className="search-icon" src={busqueda} alt="Lupa de búsqueda" />
//       </Link>
//     </div>
//   );
// };

// export default SearchBar;


// SearchBar.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import busqueda from '../assets/busqueda.svg'; // Importa la imagen de la lupa
// import './searchbar.css'; // Importa los estilos CSS correspondientes

// const SearchBar = () => {
//   const navigate = useNavigate();
//   const [valueSearch, setValueSearch] = useState('');

//   const onSearchSubmit = (e) => {
//     e.preventDefault();
//     navigate('/search', { state: valueSearch });
//     setValueSearch('');
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       onSearchSubmit(e);
//     }
//   };

//   return (
//     <div className="search-container">
//       <form onSubmit={onSearchSubmit} className="search-form">
//         <input
//           type="search"
//           name="valueSearch"
//           value={valueSearch}
//           onChange={(e) => setValueSearch(e.target.value)}
//           onKeyPress={handleKeyPress}
//           placeholder="Buscar nombre de Producto"
//           className="search-input"
//         />
//       </form>
//       <Link to="#" className="search-icon-container">
//         <img className="search-icon" src={busqueda} alt="Lupa de búsqueda" />
//       </Link>
//     </div>
//   );
// };

// export default SearchBar;
// SearchBar.js


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import lupaIcon from '../assets/busqueda.svg'; // Ajusta la ruta según tu estructura de archivos
import './searchbar.css'; // Importa los estilos CSS correspondientes

const SearchBar = ({ onSearch }) => {
  const [valueSearch, setValueSearch] = useState('');

  const onSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(valueSearch); // Llama a la función onSearch del padre con el término de búsqueda
    setValueSearch('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearchSubmit(e);
    }
  };

  return (
    <form onSubmit={onSearchSubmit} className="search-container">
      <div className="search-input-container">
        <input
          type="search"
          name="valueSearch"
          value={valueSearch}
          onChange={(e) => setValueSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Buscar nombre de Producto"
          className="search-input"
          style={{
            backgroundImage: `url(${lupaIcon})`,
            backgroundPosition: '10px 50%',
            backgroundSize: '20px 20px',
            backgroundRepeat: 'no-repeat',
            paddingLeft: '40px', // Ajusta el padding izquierdo para dejar espacio al icono
          }}
        />
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
