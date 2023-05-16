import React from 'react'; // Importação do módulo React
import ReactDOM from 'react-dom/client'; // Importação do módulo ReactDOM
import './index.css'; // Importação do arquivo CSS
import AppRoutes from './routes'; // Importação do componente AppRoutes

const root = ReactDOM.createRoot(document.getElementById('root')); // Criação de uma raiz para a renderização do aplicativo
root.render(
  <React.StrictMode> {/* Modo estrito para o componente raiz */}
    <AppRoutes /> {/* Componente raiz do aplicativo */}
  </React.StrictMode>
);
