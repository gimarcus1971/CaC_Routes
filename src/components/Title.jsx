import React from 'react';
import {Link} from 'react-router-dom'


export const Title = () => {


  return (

   <div class="container">

   <section class="titulo header-main border-bottom">
       <div class="container">


       <div class="row align-items-end">

       <div>
          <div class="widgets-wrap float-end">

                <div class="widget-header icontext">
                   <div class="text">
                      <div>
                      <ul >
                         <li><Link to='/'>Home</Link></li>
                         <li><Link to='/products'>Productos</Link></li>
                         <li><Link to='/about'>Sobre Nosotros</Link></li>
                         <li><Link to='/contact'>Contáctenos TITLE</Link></li>
                     </ul>
                      </div>

                   </div>
                </div>
          </div>
       </div>

       </div>

       </div>

   </section>

   </div>
  );
}

