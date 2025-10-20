import { useEffect } from "react";

declare global {
  interface Window {
    WhWidgetSendButton: any;
  }
}

const WhatsApp = () => {
  useEffect(() => {
    // Definindo as opções do botão
    const options = {
      whatsapp: "+5514996635846", // Número de WhatsApp
      call_to_action: "Fale com a gente.", // Texto do botão
      position: "right", // Posição: 'right' ou 'left'
    };

    const proto = document.location.protocol;
    const host = "getbutton.io";
    const url = `${proto}//static.${host}/widget-send-button/js/init.js`;

    // Criar script dinamicamente
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;

    // Quando o script for carregado, inicializa o botão
    script.onload = () => {
      // Verifica se a função global foi carregada corretamente
      if (window.WhWidgetSendButton) {
        window.WhWidgetSendButton.init(host, proto, options);
      }
    };

    // Adiciona o script ao DOM
    document.body.appendChild(script);

    // Limpeza: remove o script quando o componente for desmontado
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Este componente não precisa renderizar nada visível
};

export default WhatsApp;