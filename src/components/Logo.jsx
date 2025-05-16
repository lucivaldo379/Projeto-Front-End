
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
      <img
        src="src/assets/logo-header.svg"
        alt="Logo do Site"
        className="w-5 h-10"
      />
    </Link>
  );
};

export default Logo;
