import miniCartIcon from "../assets/mini-cart.svg"; 

const BuyBox = ({ itemCount }) => {
  return (
    <div className="relative inline-block">
      <img src={miniCartIcon} alt="Carrinho de compras" className="w-8 h-8" />
      
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default BuyBox;
