import "./Menu.css";


export default  function Menu(){
     return(
          <header className="menu">
               <img src="../../../public/logo-menu.svg" alt="" /> 
               <ul>
                    <li>Como fazer</li> /
                    <li>Ofertas</li> /
                    <li>Depoimentos</li> /
                    <li>Videos</li> /
                    <li>Meu carrinho</li>
               </ul>                  
          </header>
     );
}

