import Cabecalho from "../componentes/cabecalho/cabecalho";
import Banner from "../componentes/banner/banner";
import Confeitaria from "../componentes/loja/loja";
import SobreNos from "../componentes/sobre-nos/sobreNos";
import Galeria from "../componentes/galeria/galeria";
import RodaPe from "../componentes/rodape/rodape";
import Pedido from "../componentes/pedido/pedido";
import WhatsappWidget from "../componentes/whatsapp/whatsapp";

function Home() {
  return (
    <>
      <Cabecalho />
      <Banner />
      <Confeitaria />
      <SobreNos />
      <Galeria />
      <Pedido />
      <RodaPe />
      <WhatsappWidget />
    </>
  );
}

export default Home;
