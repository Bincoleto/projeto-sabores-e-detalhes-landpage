function BiscoitosDecorados() {
  return (
    <>
      <div className="container-loja">
        <h3>Biscoito Decorado</h3>

        <div className="carosseul"></div>

        {/* <div className="biscoito-decorados-desc">
                    <p>Biscoitos Decorados - Delicadeza em cada detalhe</p>

                    <p>
                       Nossos biscoitos decorados são verdadeiras 
                       pequenas obras de arte feitas para encantar tanto pelo 
                       sabor quanto pela beleza. A base é um biscoito amanteigado crocante e saboroso, preparado com ingredientes selecionados de alta qualidade, que garantem textura leve e sabor marcante. 
                    </p>

                    <p>
                        Cada peça é decorada artesanalmente com glacê real. 
                        Trabalhamos com formatos geométricos variados, mas se você 
                        deseja algo especial, consulte a disponibilidade.
                    </p>

                    <p>
                        Para completar, todos os biscoitos são cuidadosamente 
                        embalados em saquinhos transparentes individuais, finalizados com uma 
                        fita de cetim na cor da sua preferência, proporcionando não apenas 
                        proteção, mas também um toque elegante e delicado, perfeito para 
                        lembrancinhas, festas ou presentes.
                    </p>

                    <p>
                        Mais do que biscoitos, oferecemos um mimo feito à mão 
                        para transformar qualquer ocasião em um momento doce e inesquecível.
                    </p>
                </div> */}

        <div className="container-biscoito-desc">
          <div className="item-horizontal">
            <div className="div-imagem">
              <img src="/img-biscodecorados/biscoito individual.jpg" alt="" />
            </div>

            <div className="div-descricao">
              <h4>Biscoitos Individuais</h4>
              <p>
                Deliciosos biscoitos amanteigados, decorados à mão com glacê
                real, perfeitos para lembrancinhas ou para adoçar seu dia com
                charme e sabor.
              </p>
              <p className="italico">*Nome não incluso.</p>
              <strong>R$ 12,00 cada</strong>
            </div>
          </div>

          <div className="item-horizontal">
            <div className="div-imagem">
              <img src="/img-biscodecorados/biscoito no palito.jpg" alt="" />
            </div>

            <div className="">
              <h4>Biscoitos no Palito</h4>
              <p>
                Um mimo criativo e encantador! Nossos biscoitos no palito unem
                sabor e beleza, ideais para compor mesas temáticas,
                lembrancinhas e presentear de forma especial.
              </p>
              <strong>R$ 14,00 cada</strong>
            </div>
          </div>

          <div className="item-horizontal">
            <div className="div-imagem">
              <img src="/img-biscodecorados/biscoito 2d.jpg" alt="" />
            </div>

            <div className="">
              <h4>Biscoitos 2D</h4>
              <p>
                Arte em forma de doce! Biscoitos decorados em 2D, feitos com
                detalhes exclusivos em glacê real, trazendo um toque único e
                sofisticado para qualquer ocasião.
              </p>
              <strong>R$ 22,00 cada</strong>
            </div>
          </div>
        </div>

        <div className="facaPedido">
          <a href="https://wa.me/5514998644438" target="_blank">
            Faça seu pedido aqui
          </a>
        </div>
      </div>
    </>
  );
}

export default BiscoitosDecorados;
