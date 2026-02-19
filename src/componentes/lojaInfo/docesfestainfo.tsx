import { Col, Container, Row } from "reactstrap";

function DocesFesta(){

    return(
        <>
            <div className="container-loja">

                <h3>Doces de festa</h3>
                
                <div className="">
                    <Container>
                        <Row xs={3}>
                            <Col>
                                <div className="div-imagem">
                                    <img src="/img-docesfesta/brigadeiro tradicional.jpg" alt="Brigadeiro Tradicional" />
                                </div>

                                <div className="div-descricao">
                                    <h4>Brigadeiro tradicional</h4>
                                    <p>O clássico brasileiro! Feito com chocolate de qualidade, cremoso e irresistível.</p>
                                    <strong>R$ 120,00 o cento</strong>
                                </div>
                            </Col>

                            <Col>
                                <div className="div-imagem">
                                    <img src="/img-docesfesta/beijinho.jpg" alt="Beijinho" />
                                </div>

                                <div className="div-descricao">
                                    <h4>Beijinho</h4>
                                    <p>Doce macio de leite condensado e coco, finalizado com açúcar ou coco ralado, puro encanto em cada mordida.</p>
                                    <strong>R$ 152,00 o cento</strong>
                                </div>
                            </Col>

                            <Col>
                                <div className="div-imagem">
                                    <img src="/img-docesfesta/camafeo.jpg" alt="Camefeo" />
                                </div>

                                <div className="div-descricao">
                                    <h4>Camafeo</h4>
                                    <p>Delicado doce de nozes, envolto em chocolate branco, perfeito para quem aprecia sabores finos e sofisticados.</p>
                                    <strong>R$ 210,00 o cento</strong>
                                </div>
                            </Col>

                            <Col>
                                <div className="div-imagem">
                                    <img src="/img-docesfesta/supresa de uva.jpg" alt="Supresa de Uva" />
                                </div>

                                <div className="div-descricao">
                                    <h4>Supresa de uva</h4>
                                    <p>Uma combinação irresistível de uva fresca envolta em doce cremoso e coberto com uma casquinha crocante, trazendo sabor e frescor a cada mordida</p>
                                    <strong>R$ 148,00 o cento</strong>
                                </div>
                            </Col>

                            <Col>
                                <div className="div-imagem">
                                    <img src="/img-docesfesta/brigadeiro gourme.jpg" alt="Brigadeiro Gourmet" />
                                </div>

                                <div className="div-descricao">
                                    <h4>Brigadeiro gourmet</h4>
                                    <p>Versão sofisticada do tradicional, feito com chocolate premium e texturas que encantam o paladar.</p>
                                    <strong>R$ 175,00 o cento</strong>
                                </div>
                            </Col>

                            <Col>
                                <div className="div-imagem">
                                    <img src="/img-docesfesta/brigadeiro de leite ninho.jpg" alt="Brigadeiro de Leite Ninho" />
                                </div>

                                <div className="div-descricao">
                                    <h4>Brigadeiro de leite ninho</h4>
                                    <p>Doce cremoso com sabor suave e marcante de leite Ninho, perfeito para quem ama delicadeza e carinho em cada detalhe.</p>
                                    <strong> R$ 138,50 o cento</strong>
                                </div>
                            </Col>

                            <Col>
                                <div className="div-imagem">
                                    <img src="/img-docesfesta/bicho de pe.jpg" alt="Bicho de Pé" />
                                </div>

                                <div className="div-descricao">
                                    <h4>Bicho de pé</h4>
                                    <p>Clássico doce de morango cremoso, com sabor intenso e textura que derrete na boca, conquistando todos os paladares.</p>
                                    <strong>R$ 112,00</strong>
                                </div>
                            </Col>

                            <Col>
                                <div className="div-imagem">
                                    <img src="/img-docesfesta/caixinha de docinhos.jpg" alt="Caixa de Docinhos" />
                                </div>

                                <div className="div-descricao">
                                    <h4>Caixinha de docinhos</h4>
                                    <p>Caixinha com 6 docinhos personalizada por você!</p>
                                    <strong>R$ 15,00 cada</strong>
                                </div>
                            </Col>

                            <Col>
                                <div className="div-imagem">
                                    <img src="/img-docesfesta/alfajor.jpg" alt="Alfajor" />
                                </div>

                                <div className="div-descricao">
                                    <h4>Alfajor</h4>
                                    <p>Alfajor artesanal recheado com doce de leite cremoso, coberto com chocolate macio e feito com todo carinho para derreter na boca.</p>
                                    <strong>Pequeno R$ 4,00 cada</strong>
                                    <strong>Grande R$ 7,50 cada</strong>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                

                <div className="facaPedido">
                    <a
                        href="https://wa.me/5514998644438"
                        target="_blank">
                        Faça seu pedido aqui
                    </a>
                </div>
                
                
            </div>

        </>
    )

}
export default DocesFesta;