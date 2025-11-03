function TopperDecorativos(){
    return(
        <>
        <div className="container-loja"> 
            <h3>Topper<br/>Personalizados</h3>

            <div className="container-biscoito-desc">
                <div className="item-horizontal">
                    <div className="div-imagem">
                        <img src="public/img-topper/topper camada simples.jpg" alt="Topper camada simples"/>
                    </div>

                    <div className="div-descricao">
                        <h4>Topper camada simples</h4>
                        <ul>
                            <li>Valor: <strong>15,00 por folha.</strong></li>
                            <li>Caso toda a arte caiva em <strong>uma única folha</strong>, o valor será <strong>único (R$ 15,00).</strong></li>
                        </ul>
                        <h5><strong>Adicional:</strong></h5>
                        <ul>
                            <li>Papel dourado + <strong>R$ 3,00 por folha</strong></li>
                        </ul>
                        <p className="italico">Exemplo:</p>
                        <ul>
                            <li>Arte que ocupa <strong>1 folha</strong> - R$ 15,00</li>
                            <li>Arte que ocupa <strong>2 folha</strong> - R$ 30,00</li>
                        </ul>
                       
                    </div>
                </div>

                <div className="item-horizontal">
                    <div className="div-imagem">
                        <img src="public/img-topper/topper em camadas.jpg" alt="Topper camada simples"/>
                    </div>

                    <div className="div-descricao">
                        <h4>Topper em camadas</h4>
                        <ul>
                            <li>Valor: <strong>18,00 por folha.</strong></li>
                            <li>Caso toda a arte caiva em <strong>uma única folha</strong>, o valor será <strong>único (R$ 18,00).</strong></li>
                            <li>Se for necessario utilizar <strong>mais de uma folha</strong>, o valor será <strong>cobrado por cada folha adicional.</strong></li>
                        </ul>
                        <h5><strong>Adicional:</strong></h5>
                        <ul>
                            <li>Papel dourado + <strong>R$ 3,00 por folha</strong></li>
                        </ul>
                        <p className="italico">Exemplo:</p>
                        <ul>
                            <li>Arte que ocupa <strong>1 folha</strong> - R$ 18,00</li>
                            <li>Arte que ocupa <strong>2 folha</strong> - R$ 36,00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TopperDecorativos