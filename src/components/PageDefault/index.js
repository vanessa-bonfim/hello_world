import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

export default function PageDefault() {
    return (
        <main>
            <Banner/>
            <Outlet/>

            {/*  
                Para que consigamos renderizar o JSX que passamos para PaginaPadrao, devemos utilizar o children do React.
            {children}
            
            */}
        </main>
    )   
}