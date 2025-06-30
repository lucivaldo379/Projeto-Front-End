// src/pages/Produtos.jsx
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Produtos = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const termo = params.get("search") || "";
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`/api/produtos?search=${encodeURIComponent(termo)}`)
      .then(res => res.json())
      .then(setProdutos)
      .catch(console.error);
  }, [termo]);

  return (
    <div>
      <h1>Resultados para "{termo}"</h1>
      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado</p>
      ) : (
        <ul>
          {produtos.map(p => <li key={p.id}>{p.name}</li>)}
        </ul>
      )}
    </div>
  );
};

export default Produtos;
