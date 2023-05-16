import { useEffect } from "react"; // Importação do hook useEffect do pacote 'react'
import { useLocation } from "react-router-dom"; // Importação do hook useLocation do pacote 'react-router-dom'

export default function ScrollToTop() { // Declaração do componente ScrollToTop como uma função React
    const { pathname } = useLocation(); // Extração da propriedade 'pathname' do hook useLocation

    useEffect(() => { // Hook useEffect para executar a ação de scroll quando o pathname for atualizado
        window.scrollTo(0, 0); // Função para rolar a página para o topo
    }, [pathname]); // O efeito será executado toda vez que o pathname for atualizado

    return null; // O componente não renderiza nada, apenas executa o efeito
}
