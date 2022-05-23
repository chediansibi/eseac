<!DOCTYPE html>
<html lang="fr">
   <head>
      <meta charset="UTF-8" />
      <title>IHE Sousse</title>
      <link rel="shortcut icon" href="../assets/images/favicon.ico" />
      <meta name="description" content="Altitude" />
      <!-- Mobile Specific Meta -->
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <!-- Styles -->
      <link href="../assets/stylesheets/styles.css" rel="stylesheet" />
      <!--[if IE]>
      <link href="../assets/stylesheets/ie.css" type="text/css" media="screen, projection" rel="stylesheet" />
      <![endif]-->
   </head>
   <body class="path-frontpage">
      <header>
         <?php include 'header.php'?>
      </header>
      <main>
         <div class="top-banner">
            <div class="bg-banner">
               <img src="../assets/images/top-admision.jpg" alt="">
            </div>
            <div class="banner justify-content-center">
               <div class="banner-cont">
                  <div class="container">
                     <h1>ACTUALITÉS</h1>
                  </div>
               </div>
            </div>
         </div>
        <!--  Floating menu -->
      <section class="floating-section">
        <div class="container">
          <div class="row">
                <?php include 'floating-menu.php'?>
          </div>
        </div>
      </section>
      <!-- End floating menu -->

         <section class="menu-tabulation">
            <div class="container">
               <ul class="menu-tab">
                  <li>
                     <a href="#" class="is-active">ACTUALITÉS</a>
                  </li>
                  <li>
                     <a href="#">WEBINARS</a>
                  </li>
                  <li>
                     <a href="#">ÉVÈNEMENTS</a>
                  </li>
                  <li>
                     <a href="#">PHOTOTHÈQUE</a>
                  </li>
                  <li>
                     <a href="#">VIDÉOTHÈQUE</a>
                  </li>
               </ul>
            </div>
         </section>
         <section class="news">
            <div class="container">
               <div class="row post-news">
                  <a href="" class="all-href">
                  </a>
                  <div class="col-lg-3 col-md-12 post-news__img">
                     <img class="img-fluid" src="../assets/images/img-list-actualites-min.jpg" alt="">
                  </div>
                  <div class="col-lg-9 col-md-12 post-news__centent">
                     <div class="post-news__text">
                        <span>18.05.2021</span>
                        <h3>Formation Risk Management ISO 31000</h3>
                        <p>Visite entreprise organisée par l’IHE Sousse au profit de ses étudiants …</p>
                     </div>
                     <div class="post-news__btn">
                        <a href="#" class="btn btn-plus">
                        <i class="ri-add-line"></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div class="row post-news">
                  <a href="" class="all-href">
                  </a>
                  <div class="col-lg-3 col-md-12 post-news__img">
                     <img class="img-fluid" src="../assets/images/img-list-actualites-min.jpg" alt="">
                  </div>
                  <div class="col-lg-9 col-md-12 post-news__centent">
                     <div class="post-news__text">
                        <span>18.05.2021</span>
                        <h3>Formation Risk Management ISO 31000</h3>
                        <p>Visite entreprise organisée par l’IHE Sousse au profit de ses étudiants …</p>
                     </div>
                     <div class="post-news__btn">
                        <a href="#" class="btn btn-plus">
                        <i class="ri-add-line"></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div class="row post-news">
                  <a href="" class="all-href">
                  </a>
                  <div class="col-lg-3 col-md-12 post-news__img">
                     <img class="img-fluid" src="../assets/images/img-list-actualites-min.jpg" alt="">
                  </div>
                  <div class="col-lg-9 col-md-12 post-news__centent">
                     <div class="post-news__text">
                        <span>18.05.2021</span>
                        <h3>Formation Risk Management ISO 31000</h3>
                        <p>Visite entreprise organisée par l’IHE Sousse au profit de ses étudiants …</p>
                     </div>
                     <div class="post-news__btn">
                        <a href="#" class="btn btn-plus">
                        <i class="ri-add-line"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div class="block-pagination">
            <div class="container">
               <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                     <nav class="pager">
                        <ul class="pager__items">
                           <li class="pager__item">
                              <a href="#">
                                 <!--                                        <i class="fa fa-backward" aria-hidden="true"></i>-->
                              </a>
                           </li>
                           <li class="pager__item">
                              <a href="#">
                              <span>Précédent </span>                                        
                              </a>
                           </li>
                           <li class="pager__item">
                              <a href="#">1</a>
                           </li>
                           <li class="pager__item is-active">
                              <a href="#">2</a>
                           </li>
                           <li class="pager__item">
                              <a href="#">3</a>
                           </li>
                           <li class="pager__item">
                              <a href="#">
                              <span>Suivant</span>                                        </a>
                           </li>
                           <li class="pager__item">
                              <a href="#">
                                 <!--                                        <i class="fa fa-forward" aria-hidden="true"></i>-->
                              </a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </main>
      <footer class="footer bg-ihe">
         <?php include 'footer.php'?>
      </footer>
      <!--    <a class="go-top" href="#" title=""><span><i class="fa fa-angle-up" aria-hidden="true"></i></span></a>-->
      <!-- <a class="go-top" href="#"></a> -->
      <script src="../assets/js/drupal.js"></script>
      <script src="../assets/js/jquery.min.js"></script>
      <script src="../assets/js/popper.js"></script>
      <script src="../assets/js/bootstrap.min.js"></script>
      <script src="../assets/js/navbar.js"></script>
      <script src="../assets/js/owl.carousel.min.js"></script>
      <script src="../assets/js/slick.min.js"></script>
      <script src="../assets/js/main.js"></script>
      <script src="../assets/js/main-owl.js"></script>
   </body>
</html>