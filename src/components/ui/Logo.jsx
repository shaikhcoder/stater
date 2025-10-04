import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="relative w-full">
      <img src="logo-dark.png"  alt="logo" width={'120'}/>
    </Link>
  );
};

export default Logo;
