import { useState } from "react";

function Galeria() {
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(
    null,
  );

  const imagens = [
    "/galeria/1.png",
    "/galeria/2.png",
    "/galeria/3.png",
    "/galeria/4.png",
    "/galeria/5.png",
    "/galeria/6.png",
    "/galeria/7.png",
    "/galeria/8.png",
    "/galeria/9.png",
    "/galeria/10.png",
    "/galeria/15.jpg",
    "/galeria/11.jpg",
    "/galeria/12.jpg",
    "/galeria/13.jpg",
    "/galeria/16.jpg",
    "/galeria/14.jpg",
    "/galeria/17.jpg",
    "/galeria/18.jpg",
  ];

  return (
    <div id="galeria">
      <div className="galeria">
        <h1>Galeria de Fotos</h1>
        <div className="galeriaImagem">
          {imagens.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt=""
              width={200}
              height={200}
              style={{ cursor: "pointer" }}
              onClick={() => setImagemSelecionada(src)}
            />
          ))}
        </div>
        {imagemSelecionada && (
          <div
            className="modal-fullscreen"
            onClick={() => setImagemSelecionada(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
          >
            <img
              src={imagemSelecionada}
              alt=""
              style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: 8 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Galeria;
