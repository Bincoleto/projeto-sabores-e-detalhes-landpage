import { useState } from "react";

function Galeria() {
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);

  const imagens = [
    "public/galeria/1.png",
    "public/galeria/2.png",
    "public/galeria/3.png",
    "public/galeria/4.png",
    "public/galeria/5.png",
    "public/galeria/6.png",
    "public/galeria/7.png",
    "public/galeria/8.png",
    "public/galeria/9.png",
    "public/galeria/10.png",
    "public/galeria/15.jpg",
    "public/galeria/11.jpg",
    "public/galeria/12.jpg",
    "public/galeria/13.jpg",
    "public/galeria/16.jpg",
    "public/galeria/14.jpg",
    "public/galeria/17.jpg",
    "public/galeria/18.jpg",
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
