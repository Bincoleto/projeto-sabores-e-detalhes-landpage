import {useState } from "react";

function Pedido() {

    const [mostrarFaq, setMostrarFaq,] = useState(false);
    const [mostrarFormaPagamento, setMostraFormaPagamento] = useState(false);
    const [mostrarRetiradaEntrega, setMostraRetiradaEntrega] = useState(false);
    const [mostrarAlteracao, setMostraAlteracao] = useState(false);
    const [mostrarPersonalizacao, setMostraPersonalizacao] = useState(false);

    return (
        <>
        <div>
            <div className="container-pedido">
                <div className="pedido-texto">
                    <img src="./public/Imagem-carrinho-compra.png" alt="Carrinho" />
                    <h1>Como fazer seu pedido</h1>
                </div>

                <div className="container-faq">

                    <div className="faq-item">
                        <div className="faq-item-titulo"
                            onClick={() => setMostrarFaq(!mostrarFaq)}
                            style={{ cursor: "pointer" }}>
                            <img src="public/img-faq/caledario.png" alt="Calendario" />
                            <h3>Prazos e Pagamentos</h3>
                        </div>

                        <div className="faq-caixa">
                            {mostrarFaq && (
                                <>
                                    <div className="faq-caixa-item">
                                        <ul>
                                            <li>Bolos decorados: mínimo 7 dias úteis.</li>
                                            <li>Doces e biscoitos personalizados: mínimo 15 dias úteis.</li>
                                            <li>Bolos caseiros: pedidos até 2 dias antes.</li>
                                        </ul>
                                    </div>

                                    <div className="faq-caixa-item">
                                        <p>Entrada de 30% no ato do pedido e o restante na retirada ou entrega.</p>
                                        <p>Para pedidos urgentes, consultar a disponibilidade pelo WhatsApp.</p>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-item-titulo"
                            onClick={() => setMostraFormaPagamento(!mostrarFormaPagamento)}
                            style={{ cursor: "pointer" }}>
                            <img src="public/img-faq/cartao.png" alt="Calendario" />
                            <h3>Formas de pagamentos</h3>
                        </div>

                        <div className="faq-caixa">
                            {mostrarFormaPagamento && (
                                <>
                                    <div className="faq-caixa-item">
                                        <ul>
                                            <li>Pix chave: 14998644438.</li>
                                            <li>Cartão de Crédito à vista ou parcelado + taxa da maquina.</li>
                                            <li>Dinheiro.</li>
                                        </ul>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-item-titulo"
                            onClick={() => setMostraRetiradaEntrega(!mostrarRetiradaEntrega)}
                            style={{ cursor: "pointer" }}>
                            <img src="public/img-faq/retirada.png" alt="Retirada e Entrega" />
                            <h3>Retirada e Entrega</h3>
                        </div>

                        <div className="faq-caixa">
                            {mostrarRetiradaEntrega  && (
                                <>
                                    <div className="faq-caixa-item">
                                        <ul>
                                            <li>Retida gratuita em noso endereço com horário agendado.</li>
                                            <li>
                                                Entrega disponivel com taxa e horário 
                                                agendado (valor calculado confrome a distancia, 
                                                caso seja para entrega, informar com antedência)
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-item-titulo"
                            onClick={() => setMostraAlteracao(!mostrarAlteracao)}
                            style={{ cursor: "pointer" }}>
                            <img src="public/img-faq/Atualizar.png" alt="Retirada e Entrega" />
                            <h3>Alterações e Cancelamentos</h3>
                        </div>

                        <div className="faq-caixa">
                            {mostrarAlteracao  && (
                                <>
                                    <div className="faq-caixa-item">
                                        <ul>
                                            <li>Alterações de sabor, tamanho ou decoração:</li>
                                            <li>Cancelamento com devolução da entrada até 7 dias antes da data.</li>
                                        </ul>
                                    </div>

                                    <div className="faq-caixa-item">
                                        <p>Obs: Após esse prazo, a entrada não será devolvida, 
                                        pois os insumos já terão sido comprados. </p>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-item-titulo"
                            onClick={() => setMostraPersonalizacao(!mostrarPersonalizacao)}
                            style={{ cursor: "pointer" }}>
                            <img src="public/img-faq/personalizado.png" alt="Personalização" />
                            <h3>Personalização</h3>
                        </div>

                        <div className="faq-caixa">
                            {mostrarPersonalizacao  && (
                                <>
                                    <div className="faq-caixa-item">
                                        <ul>
                                            <li>Trabalhamos com sabores tradicionais e especias.</li>
                                            <li>Adicionais disponiveis: glitter, brigadeiro, frutas, nozes, granulados, ganache, brigadeiro cremoso, entre outros.</li>
                                                <ul className="ul-espaco">
                                                    <li>Consultar a disponibilidade e valores.</li>
                                                </ul>
                                            <li>Referencias para a personalizarção, enviar decoração/foto pelo WhatsApp para o orçamento detalhado.</li>
                                        </ul>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default Pedido;

