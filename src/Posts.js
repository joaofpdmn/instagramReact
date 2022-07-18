import React from 'react';
export default function Posts(props) {
    const [valor, setValor] = React.useState("heart-outline");
    
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.img} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo" name={valor} onDoubleClick={() => {
                            if(valor==="heart-outline"){
                                setValor("heart");
                            }
                            else{
                                setValor("heart-outline");
                            }
                        }}>
                <img src="assets/img/gato-telefone.svg" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={valor} onClick={() => {
                            if(valor==="heart-outline"){
                                setValor("heart");
                            }
                            else{
                                setValor("heart-outline");
                            }
                        }} ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}