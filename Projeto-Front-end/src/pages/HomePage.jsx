import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import { Carrossel, ColecoesDestaque, OfertaEspecial, ProdutosEmAlta } from "../components/Section";

const HomePage = () => {
    return ( 
        <>
        <Header />
        <Carrossel/>
        <ColecoesDestaque/>
        <ProdutosEmAlta/>
        <OfertaEspecial/>
        <Footer/>
        </>
     );
}
 
export default HomePage;