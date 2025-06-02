
export const Pedidos = ({ pedidos }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Meus Pedidos</h2>
      {pedidos.length === 0 ? (
        <p className="text-gray-600">Você ainda não realizou nenhum pedido.</p>
      ) : (
        <ul className="space-y-4">
          {pedidos.map((pedido, index) => (
            <li key={index} className="border rounded-lg p-4 shadow-sm bg-white">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">Pedido #{pedido.id}</span>
                <span className="text-sm text-gray-500">{pedido.data}</span>
              </div>
              <div className="mt-2">
                <p><strong>Status:</strong> {pedido.status}</p>
                <p><strong>Total:</strong> R$ {pedido.total.toFixed(2)}</p>
              </div>
              <div className="mt-2">
                <h4 className="font-semibold">Itens:</h4>
                <ul className="list-disc list-inside">
                  {pedido.itens.map((item, i) => (
                    <li key={i}>
                      {item.nome} — {item.quantidade}x (R$ {item.preco.toFixed(2)})
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export const pedidosFicticios = [
  {
    id: 101,
    data: "20/05/2025",
    status: "Entregue",
    total: 299.99,
    itens: [
      { nome: "Tênis Nike Air", quantidade: 1, preco: 299.99 },
    ],
  },
  {
    id: 102,
    data: "21/05/2025",
    status: "Em trânsito",
    total: 549.90,
    itens: [
      { nome: "Camiseta Adidas", quantidade: 2, preco: 149.95 },
      { nome: "Boné Puma", quantidade: 1, preco: 249.99 },
    ],
  },
];

function App() {
  return <Pedidos pedidos={pedidosFicticios} />;
}

export default App;
