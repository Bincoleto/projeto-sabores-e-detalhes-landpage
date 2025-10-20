import { useState, type ReactNode } from 'react';
import {Modal,ModalBody} from 'reactstrap';
import DescricaoBF from '../lojaInfo/bolosfestainfo';
import DocesFesta from '../lojaInfo/docesfestainfo';
import BolosCaseiros from '../lojaInfo/boloscaseirosinfo';
import BiscoitosDecorados from '../lojaInfo/biscoitosdecoradosinfo';
import DocesPersonalizados from '../lojaInfo/docespersonalizadosinfo';
import TopperDecorativos from '../lojaInfo/topperdecorativosinfo';

function Confeitaria() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<({

    body: ReactNode;
  })>({
    body: ''
  })

  const toggle = () => setModal(!modal);

  const openModal = (body: ReactNode) => {
    setModalContent({ body });
    setModal(true);
  };

  return (
    <div className="loja" id="loja">
      <h1>Confeitaria</h1>

      <div className="lojaDiv">
        <div className="lojaDivItem lojaDivi-Item-img1">
          <button onClick={() => openModal( <DescricaoBF/>)}>
            Bolos para Festa
          </button>
        </div>

        <div className="lojaDivItem lojaDivi-Item-img2">
          <button onClick={() => openModal(<DocesFesta/>)}>
            Doces para Festa
          </button>
        </div>

        <div className="lojaDivItem lojaDivi-Item-img3">
          <button onClick={() => openModal(<BolosCaseiros/>)}>
            Bolos Caseiros
          </button>
        </div>

        <div className="lojaDivItem lojaDivi-Item-img4">
          <button onClick={() => openModal(<BiscoitosDecorados/>)}>
            Biscoitos Decorados
          </button>
        </div>

        <div className="lojaDivItem lojaDivi-Item-img5">
          <button onClick={() => openModal(<DocesPersonalizados/>)}>
            Doces Personalizados
          </button>
        </div>

        <div className="lojaDivItem lojaDivi-Item-img6">
          <button onClick={() => openModal(<TopperDecorativos/>)}>
            Toppers Decorativos
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={modal} toggle={toggle} size='lg'>
        {/* <ModalHeader toggle={toggle}>{modalContent.title}</ModalHeader> */}
        <ModalBody>{modalContent.body}</ModalBody>
      </Modal>
    </div>
  );
}

export default Confeitaria;

