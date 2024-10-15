import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="h-screen flex flex-column align-items-center justify-content-center bg-dark text-white">
        <span className="pi pi-exclamation-triangle pb-3" style={{ fontSize: "10rem", color: "#EE4266" }}></span>
        <h2>404 Página não encontrada</h2>
        <Link to={"/"} className="text-800 hover:text-500 no-underline flex justify-content-center align-items-center mt-2">
          <span className="pi pi-angle-left pr-1 cursor-pointer pt-1" style={{ fontSize: "17px" }}></span>
          Voltar para Home
        </Link>
      </div>
    </>
  );
};

export default Notfound;
