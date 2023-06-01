import "./NewslatterSign.css";

export default function NewsLetterSign(){
     return (
          <div className="newslatter">
               <div className="wrapper-newslatter-left-elements">
                    <h4>Sua casa com as</h4>
                    <h1>melhores plantas</h1>
                    <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                    <div className="wrapper-email-input">
                         <img src="../../../public/AnyConv.com__arvore-image.svg" alt="" />
                         <input type="email" placeholder="insira seu e-mail"/>
                         <button>Assinar newslatter</button>
                    </div>
               </div>

               <img src="../../../public/arvore-image.png" alt="" />

          </div>
     );
}