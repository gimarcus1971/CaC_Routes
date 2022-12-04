import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (

      <div className="App">

        <header class="section-header">

            <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
            <div class="container">

               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" id="navbarNav">

                  <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                  <Link class="nav-link" to='/'>Home</Link></li>
                  <li class="nav-item">
                  <Link class="nav-link" to='/products'>Productos</Link></li>
                  <li class="nav-item">
                  <Link class="nav-link" to='/about'>Sobre Nosotros</Link></li>
                  <li class="nav-item">
                  <Link class="nav-link" to='/contact'>Contáctenos</Link></li>
                  </ul>


               </div>
            </div>
            </nav>

            <section class="header-main border-bottom">
               <div class="title_h title-text row justify-content-center padding-y padding-x">
                  <div class="col-md">
                     <h1>AVENTURA SHOP</h1>
                  </div>
               </div>
            </section>

         </header>

      </div>

   );
}
