import Banner from "components/Banner"; // Importação do componente Banner
import { Outlet } from "react-router-dom"; // Importação do componente Outlet do pacote 'react-router-dom'

export default function PageDefault() { // Declaração do componente PageDefault como uma função React
    return (
        <main>
            <Banner/> {/* Renderização do componente Banner */}
            <Outlet/> {/* Renderização do componente Outlet para renderizar o conteúdo da rota atual */}

            {/*  
                Para que possamos renderizar o JSX que passamos para PaginaPadrao, devemos utilizar o children do React.
            {children}
            
            */}
        </main>
    )   
}
