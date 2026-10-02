import "../styles/Cargando.css";

export default function Cargando({ texto = "Cargando" }) {
  return (
    <div className="cargando-container">
      <div className="cargando-content">

        {/* Cubo isométrico */}
        <div className="cargando-logo">
          <svg viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E0EAFF" />
              </linearGradient>
              <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C7D8F5" />
                <stop offset="100%" stopColor="#8FA8D4" />
              </linearGradient>
              <linearGradient id="cubeRight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#B8CCEC" />
              </linearGradient>
            </defs>

            <polygon points="50,20 80,36 50,52 20,36" fill="url(#cubeTop)" />
            <polygon points="20,36 50,52 50,84 20,68" fill="url(#cubeLeft)" />
            <polygon points="80,36 50,52 50,84 80,68" fill="url(#cubeRight)" />
            <polygon points="50,10 60,16 50,22 40,16" fill="#FFFFFF" opacity="0.85" />
          </svg>
        </div>

        {/* Texto + puntos */}
        <div className="cargando-info">
          <span className="cargando-texto">{texto}</span>
          <span className="cargando-puntos">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        {/* Barra de progreso */}
        <div className="cargando-barra">
          <div className="cargando-barra-progreso"></div>
        </div>

        {/* Marca */}
        <div className="cargando-marca">
          <span className="cargando-marca-line"></span>
          SISTEMA DISPATCH
          <span className="cargando-marca-line"></span>
        </div>

      </div>
    </div>
  );
}