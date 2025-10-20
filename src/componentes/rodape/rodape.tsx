function RodaPe() {
  return (
    <>
      <div className="rodape">
        <div className="rodape-infos">
          <div className="rodape-item">
            <h3>Sabores & Detalhes</h3>
            <div className="infos">
              <div>
                <p>Criamos momentos especiais com sabores únicos.</p>
              </div>
              <div id="redesociais" className="infos-icones">
                <a href="">
                  <img src="public/footerimg/facebook.png" alt="Faceook" />
                </a>
                <a
                  href="https://www.instagram.com/saboresedetalhes/"
                  target="_blank"
                >
                  <img src="public/footerimg/instagram.png" alt="Instagram" />
                </a>
                <a href="">
                  <img src="public/footerimg/message.png" alt="Mensamge" />
                </a>
              </div>
            </div>
          </div>

          <div className="rodape-item">
            <h3>Links Rapidos</h3>
            <div className="linksrapidos">
              <a href="#loja">Confeitaria</a>
              <a href="#sobrenos">Sobre Nós</a>
              <a href="#galeria">Galeria</a>
            </div>
          </div>

          <div className="rodape-item">
            <h3 id="contato">Contato</h3>
            <div className="contato">
              <div className="contato-item">
                <img
                  src="public/footerimg/smartphone.png"
                  alt="Imagem telefone"
                />
                <p>(14) 99864-4438</p>
              </div>

              <div className="contato-item">
                <img src="public/footerimg/map-pinned.png" alt="Imagem Mapa" />
                <p>Bauru-SP</p>
              </div>
            </div>
          </div>
        </div>

        <p className="rodape-direitos">
          2025 Sabores & Detalhes. Todos os diretos resenvados.
        </p>
      </div>
    </>
  );
}

export default RodaPe;
