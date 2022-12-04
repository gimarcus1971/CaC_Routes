
import React from 'react'

export const Footer = () => {
  return (

         <footer class="section-footer border-top bg">
         <div class="container col-auto text-center">
         <section class="footer-top  padding-y">
            <div class="row">
               <aside class="col-md col-6">
               <h6 class="title">Account</h6>
               <ul class="list-unstyled">
                  <li> <a href="#"> User Login </a></li>
                  <li> <a href="#"> User register </a></li>
                  <li> <a href="#"> Account Setting </a></li>
                  <li> <a href="#"> My Orders </a></li>
               </ul>
               </aside>
               <aside class="col-md">
               <h6 class="title">Social</h6>
               <ul class="list-unstyled">
                  <li><a href="#"> <i class="fab fa-facebook"></i> Facebook </a></li>
                  <li><a href="#"> <i class="fab fa-twitter"></i> Twitter </a></li>
                  <li><a href="#"> <i class="fab fa-instagram"></i> Instagram </a></li>
                  <li><a href="#"> <i class="fab fa-youtube"></i> Youtube </a></li>
               </ul>
               </aside>
            </div>
         </section>

         <section class="footer-bottom row">
            <div class="col-md-2">
               <p class="text-muted">   2022 Aventura Shop </p>
            </div>
            <div class="col-md-8 text-md-center">
               <span  class="px-2">info@aventura.com</span>
               <span  class="px-2">0800-AVENTURA</span>
               <span  class="px-2">Avenida Uritorco 123, Capilla del Monte - Cordoba</span>
            </div>
            <div class="col-md-2 text-md-end text-muted">
               <i class="fab fa-lg fa-cc-visa"></i>
               <i class="fab fa-lg fa-cc-paypal"></i>
               <i class="fab fa-lg fa-cc-mastercard"></i>
            </div>
         </section>
         </div>
         </footer>

    );
  }
