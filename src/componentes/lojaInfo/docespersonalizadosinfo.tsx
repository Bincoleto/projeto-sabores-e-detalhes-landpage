import { Col, Container, Row } from "reactstrap";

function DocesPersonalizados(){
    return(
        <>
        <div className="container-loja">

            <h3>Doces de festa</h3>
                
            <div className="">
                <Container>
                    <Row xs={3}>
                        <Col>
                            <div className="div-imagem">
                                <img src="public/img-docespersonalizados/rosas de leite ninho.jpg" alt="" />
                            </div>

                            <div className="div-descricao">
                                <h4>Rosas de leite ninho</h4>
                                <p>Encantadoras decorações de 
                                rosas em leite Ninho, delicadas e artesanais, que 
                                dão charme e sofisticação a qualquer doce.</p>
                                <strong>R$ 70,00 <br/>20 unidades</strong>
                            </div>
                        </Col>

                        <Col>
                            <div className="div-imagem">
                                <img src="public/img-docespersonalizados/flores de leite ninho.jpg" alt="" />
                            </div>

                            <div className="div-descricao">
                                <h4>Flores de leite ninho</h4>
                                <p>Encantadoras decorações de flores em leite Ninho, delicadas e artesanais, que dão charme e sofisticação a qualquer doce.</p>
                                <strong>R$ 50,00 <br/>20 unidades</strong>
                            </div>
                        </Col>

                        <Col>
                            <div className="div-imagem">
                                <img src="public/img-docespersonalizados/modelagem de leite ninho.jpg" alt="Camefeo" />
                            </div>

                            <div className="div-descricao">
                                <h4>Modelagem de leite ninho</h4>
                                <p>Criamos pequenas esculturas doces, totalmente personalizadas, usando leite Ninho de alta qualidade.</p>
                                <strong>R$ 150,00 <br/> 50 unidades</strong>
                            </div>
                        </Col>

                        <Col>
                            <div className="div-imagem">
                                <img src="public/img-docespersonalizados/moldura de chocolate.jpg" alt="" />
                            </div>

                            <div className="div-descricao">
                                <h4>Moldura de chocolate</h4>
                                <p>Elegante e delicada, perfeita para complementar mesas de festa ou presentear com requinte.</p>
                                <p>Decoração feita em pasta de leite ninho.</p>
                                <p className="italico">(consultar disponibilidade da decoração)</p>
                                <p className="italico">Opções: Chocolate branco ou blend</p>
                                <strong>R$15,00 cada <br /> minimo 05 unidades.</strong>
                            </div>
                        </Col>

                        <Col>
                            <div className="div-imagem">
                                <img src="public/img-docespersonalizados/pirulito de suspiro.jpg" alt="" />
                            </div>

                            <div className="div-descricao">
                                <h4>Pirulito de suspiro</h4>
                                <p>Crocantes, leves e deliciosos, ideais para compor mesas ou presentear.</p>
                                <strong>R$6,00 cada <br /> minimo 10 unidades</strong>
                            </div>
                        </Col>

                        <Col>
                            <div className="div-imagem">
                                <img src="public/img-docespersonalizados/pirulito de chocolate.jpg" alt="" />
                            </div>

                            <div className="div-descricao">
                                <h4>Pirulito de chocolate</h4>
                                <p>Chocolate saboroso decorado artesanalmente, perfeito para encantar e adoçar momentos especiais.</p>
                                <p>A decoração fica por conta da pasta de leite ninho no tema escolhido.</p>
                                <p className="italico">(consultar disponibilidade da decoração)</p>
                                <p className="italico">Opções: Branco e Blend</p>
                                <strong> R$10,00 cada <br />minimo 10 unidade</strong>
                            </div>
                        </Col>

                        <Col>
                            <div className="div-imagem">
                                <img src="public/img-docespersonalizados/bolo bombom.jpg" alt="" />
                            </div>

                            <div className="div-descricao">
                                <h4>Bolo bombom</h4>
                                <p>Deliciosos bombons individuais, perfeitos para lembrancinhas ou para complementar sua mesa de doces.</p>
                                <ul>
                                    <li>Casquinha feita de chocolate branco ou blend (mistura de ao leite e meio amargo).</li>
                                    <li>Bolo: massa de chocolate ou baunilha. </li>
                                    <li>cheios: brigadeiro de chocolate, doce de leite ou brigadeiro de ninho. A montagem fica a sua escolha.</li>
                                </ul>
                                <p>A decoração faço em pasta de leite ninho.<br />(Consultar disponibilidade de decoração)</p>
                                <strong>R$15,00 cada <br />minimo 5 unidade</strong>
                            </div>
                        </Col>

                        <Col>
                            <div className="div-imagem">
                                <img src="public/img-docespersonalizados/caixa de docinho.jpg" alt="" />
                            </div>

                            <div className="div-descricao">
                                <h4>Caixinha de docinhos <br /><br /> (EU TE AMO)</h4>
                                <p>Um mimo romântico e delicioso, ideal para presentear alguém especial. A caixa contém:</p>
                                <ul>
                                    <li>8 brigadeiros de chocolate com confeitos</li>
                                    <li>7 brigadeiros de leite ninho</li>
                                    <li>7 letras de chocolate</li>
                                    <li>2 corações de chocolate</li>
                                </ul>
                                <strong>R$40,00 cada </strong>
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

export default DocesPersonalizados