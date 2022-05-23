<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <title>IHE Sousse || Contact</title>
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
    <div class="se-pre-con" ></div>
        <header>
            <?php include 'header.php'?>
        </header>
        <main>
        <div class="top-banner">
                <div class="bg-banner">
                    <img src="../assets/images/top.jpg" alt="">
                </div>
                <div class="banner justify-content-center">
                    <div class="banner-cont">
                        <div class="container">
                            <h1>CONTACT</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section class="info-contact">
                <div class="info container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 bloc-img">
                            <img src="../assets/images/prototyping.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 bloc-info">
                            <div class="titre-ihe">
                                <h3> <span>IHE </span>Sousse</h3>
                            </div>
                            <div class="info-ihe">
                                <div class="info-adr">
                                    <p> <span>Adresse :</span>
                                    Campus Universitaire Riadh Boukhzar Route Ceinture, Sousse 4000, Tunisie </p>
                                </div>
                                <div class="info-tel">
                                    <p><span>Tél :</span>
                                    (+216) 73 23 52 91 / 92 98 97 93</p>
                                </div>
                                <div class="info-fax">
                                    <p><span>Fax :</span>
                                    (+216)73235292</p>
                                </div>
                                <div class="info-email">
                                    <p><span>Email :</span>
                                    contact@ihes.ens.tn</p>
                                </div>     
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 bloc-map">
                            <iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=ihe%20sousse%20Campus%20Universitaire%20Riadh%20Boukhzar%20Route%20Ceinture,%20Sousse%204000,%20Tunisie&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section class="bloc-form">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-8 text-center title style1">
                            <h2> LE LOREM IPSUM EST <span>SIMPLEMENT DU FAUX TEXTE EMPLOYÉ </span></h2>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-10">
                            <form>
                                <div class="row align-items-center">
                                    <div class="col-md-6 form-group">
                                        <label class="form-required" >Nom</label>
                                        <input type="text" name="nom" value="" size="60" maxlength="255"
                                            class="form-text form-control">
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label  class="form-required" >Prénom</label>
                                        <input type="text" name="prenom" value="" size="60" maxlength="255"
                                            class="form-text form-control">
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label class="form-required"  >Télephone </label>
                                        <input  name="tel"  type="number" value="" size="60" maxlength="255"
                                            class="form-text form-control">
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label class="form-required" >Email </label>
                                        <input type="email" name="email" value="" size="60" maxlength="254"
                                            class="form-email form-control">
                                    </div>
                                    
                                    
                                    <div class="col-12 form-group">
                                        <label  class="form-required" >Votre Message</label>
                                        <textarea name="demande" rows="5" cols="40"
                                            class="form-control form-textarea"></textarea>
                                    </div>
    
                                    <!--DIV RECAPTACH-->
                                    <div class="col-12">
                                        <div id="rc-anchor-container" class="rc-anchor rc-anchor-normal rc-anchor-light">
                                        </div>
                                    </div>
                                    
                                    <div class="col-12 rg">
                                        <p><span>*</span><strong>champ(s) obligatoire(s)</strong> </p>
                                        <p>   Les informations recueillies lors de votre visite sur ce site sont protégées par le Règlement RGPD. Ces informations sont également confidentielles, et ne sont en aucun cas destinées à être diffusées à des tiers, notamment à des fins de prospection commerciale. Pour plus d’informations, 
                                            nous vous invitons à consulter notre  <a href="" class="link">Déclaration de confidentialité.</a> </p>
                                    </div>
                                    <div class="col-12 text-center">
                                        <div class="send-btn-contact">
                                            <input class="btn btn-envoyer" type="submit" name="sent" value="ENVOYER">
                                            <i class="ri-arrow-drop-right-fill"></i> 
                                        </div>
                                    </div>
                                </div>
                                
    
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
         
        </main>
        <footer>
        <?php include 'footer.php'?>
        </footer>

        <!--    <a class="go-top" href="#" title=""><span><i class="fa fa-angle-up" aria-hidden="true"></i></span></a>-->
        <!-- <a class="go-top" href="#"></a> -->
        <script src="../assets/js/drupal.js"></script>
        <script src="../assets/js/jquery.min.js"></script>
        <script src="../assets/js/popper.js"></script>
        <script src="../assets/js/bootstrap.min.js"></script>
        <script src="../assets/js/wow.min.js"></script>
        <script src="../assets/js/owl.carousel.min.js"></script>
        <script src="../assets/js/metisMenu.min.js"></script>
        <script src="../assets/js/jquery.nice-select.min.js"></script>
        <script src="../assets/js/jquery.waypoints.min.js"></script>
        <script src="../assets/js/jquery.countTo.js"></script>
        <script src="../assets/js/gsap.min.js"></script>
        <script src="../assets/js/ScrollTrigger.min.js"></script>


        <script src="../assets/js/main.js"></script>

        <!-- this js is Only for this page -->
        <script src="../assets/js/navbar.js"></script>
       
       <script src="../assets/js/owl.carousel.min.js"></script>
       <script src="../assets/js/slick.min.js"></script>
        <!--    <script src="../assets/js/owl-ceta.js"></script>-->
        <script src="../assets/js/main-owl.js"></script>
    </body>
</html>
