import { Link } from "react-router-dom";

const NotFound404 = () => {
  return ( 
    <>
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light">
    <h1 className="display-1 fw-bold text-danger">404</h1>
    <p className="fs-3"> <span className="text-danger">Ops!</span> Página não encontrada.</p>
      <p className="lead">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link to="/home" className="btn mt-3" style={{ backgroundColor: '#c73364', color: '#fff' }}>
  Voltar para a Home
</Link>

     </div>
    </>
   );
}
 
export default NotFound404;