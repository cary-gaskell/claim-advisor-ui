angular.module("claimAdvisor").run(["$templateCache", function($templateCache) {$templateCache.put("app/about/about.html","");
$templateCache.put("app/business/business.html","");
$templateCache.put("app/contact/contact.html","<!-- Page Sub Menu\n============================================= --><div id=page-menu><div id=page-menu-wrap><div class=\"container clearfix\"><div class=menu-title>Contact <span>Us</span></div><!--<nav>--><!--<ul>--><!--<li class=\"current\"><a href=\"contact-6.html\"><div>Default</div></a></li>--><!--<li><a href=\"contact-6-recaptcha.html\"><div>With reCaptcha</div></a></li>--><!--<li><a href=\"contact-6-file.html\"><div>File Upload</div></a></li>--><!--<li><a href=\"contact-6-inline.html\"><div>Inline Notification</div></a></li>--><!--</ul>--><!--</nav>--><div id=page-submenu-trigger><i class=icon-reorder></i></div></div></div></div><!-- #page-menu end --><!-- Contact Form & Map Overlay Section\n============================================= --><section id=map-overlay><div class=\"container clearfix\"><!-- Contact Form Overlay\n        ============================================= --><div id=contact-form-overlay class=clearfix><div class=\"fancy-title title-dotted-border\"><h3>Send us an Email</h3></div><div class=contact-widget><div class=contact-form-result></div><!-- Contact Form\n                ============================================= --><form class=nobottommargin id=template-contactform name=template-contactform action=include/sendemail.php method=post><div class=col_half><label for=template-contactform-name>Name <small>*</small></label><input type=text id=template-contactform-name name=template-contactform-name class=\"sm-form-control required\"></div><div class=\"col_half col_last\"><label for=template-contactform-email>Email <small>*</small></label><input type=email id=template-contactform-email name=template-contactform-email class=\"required email sm-form-control\"></div><div class=clear></div><div class=col_half><label for=template-contactform-phone>Phone</label><input type=text id=template-contactform-phone name=template-contactform-phone class=sm-form-control></div><div class=\"col_half col_last\"><label for=template-contactform-service>Services</label><select id=template-contactform-service name=template-contactform-service class=sm-form-control><option value=\"\">-- Select One --</option><option value=Wordpress>Option 1</option><option value=\"PHP / MySQL\">Option 2</option><option value=\"HTML5 / CSS3\">Option 3</option><option value=\"Graphic Design\">Option 4</option></select></div><div class=clear></div><div class=col_full><label for=template-contactform-subject>Subject <small>*</small></label><input type=text id=template-contactform-subject name=template-contactform-subject class=\"required sm-form-control\"></div><div class=col_full><label for=template-contactform-message>Message <small>*</small></label><textarea class=\"required sm-form-control\" id=template-contactform-message name=template-contactform-message rows=6 cols=30></textarea></div><div class=\"col_full hidden\"><input type=text id=template-contactform-botcheck name=template-contactform-botcheck class=sm-form-control></div><div class=col_full><button class=\"button button-3d nomargin\" type=submit id=template-contactform-submit name=template-contactform-submit value=submit>Send Message</button></div></form></div><div class=line></div><!-- Contact Info\n            ============================================= --><div class=\"col_one_third nobottommargin\"><address><strong>Headquarters:</strong><br>123 Some Street, Suite 555<br>York, PA 55555<br></address><abbr title=\"Phone Number\"><strong>Phone:</strong></abbr> (800) 608-1280<br><abbr title=\"Email Address\"><strong>Email:</strong></abbr> Info@Claimadvisor.Net</div><!-- Contact Info End --><!--&lt;!&ndash; Testimonails--><!--============================================= &ndash;&gt;--><!--<div class=\"col_two_third col_last nobottommargin\">--><!--<div class=\"fslider customjs testimonial twitter-scroll twitter-feed\" data-username=\"envato\" data-count=\"4\" data-animation=\"slide\" data-arrows=\"false\">--><!--<i class=\"i-plain color icon-twitter nobottommargin\" style=\"margin-right: 15px;\"></i>--><!--<div class=\"flexslider\" style=\"width: auto;\">--><!--<div class=\"slider-wrap\">--><!--<div class=\"slide\"></div>--><!--</div>--><!--</div>--><!--</div>--><!--</div>&lt;!&ndash; Testimonials End &ndash;&gt;--></div><!-- Contact Form Overlay End --></div><!-- Google Map\n    ============================================= --><ng-map id=google-map class=gmap center={{vm.mapCenter}}></ng-map></section><!-- Contact Form & Map Overlay Section End -->");
$templateCache.put("app/faq/faq.html","");
$templateCache.put("app/how-it-works/works.html","#!/usr/bin/env bash");
$templateCache.put("app/main/main.html","<div class=container-fluid><!--<acme-navbar creation-date=\"main.creationDate\"></acme-navbar>--><div class=row><div class=\"jumbotron text-center claim-hero\" style=\"color:#fff; margin-bottom:0\"><img class=img-responsive src=\"https://github.com/cary-gaskell/claim-advisor-ui/blob/master/src/assets/images/flood_insurance2.jpg?raw=true\" style=\"opacity: 0.8\"><div class=claim-hero-title><h1 class=\"m-b-0 fs-50\">We believe in a<acme-malarkey extra-values=\"[\'better\',\'easier\',\'transparent\',\'accurate\',\'peaceful\']\"></acme-malarkey>claim experience</h1><br><span></span><p>Providing People &amp; Companies With The Best Way To Settle Claims</p></div><div class=\"od-place-autocomplete autocomplete with-button\"><input type=text ng-model=query placeholder=\"Enter your home address\" placeholder=\"Enter your home address...\" class=form-control places-auto-complete size=80 xxx-component-restrictions=\"{country:\'us\'}\" types={{types}} on-place-changed=vm.placeChanged(place)> <a href=# ng-click=fire() class=\"od-xhr-progress button submit white ng-binding\">← Get Peace of Mind Today</a></div></div></div><div class=row><div class=\"promo promo-light promo-full bottommargin-lg header-stick notopborder\" style=margin-bottom:48px!important><div class=\"container tc clearfix\"><h3 style=\"font-weight: 300\">Getting Insurance claims settled shouldn\'t be <span style=\"font-style: italic\" class=c-blue>this</span> hard</h3><span>When a disaster strikes, the insurance company has building engineers, adjusters, supervisors and claims managers, all representing their interests. Wouldn’t you like someone to represent yours?</span></div><div class=container><div class=house-img><label class=\"house-1 text-small\">months to settle</label><label class=\"house-2 text-small\">low-balled</label><label class=\"house-3 text-small\">nothing was documented</label><label class=\"house-4 text-small\">happy :)</label><label class=\"house-5 text-small text-blue\">no help</label></div></div></div></div><div class=row style=\"margin-bottom: 100px\"><div class=container><div class=col-xs-12><h3 class=tc style=\"font-weight: 300; margin-bottom: 53px\">With <strong>Claim Advisor</strong>, your claim is settled faster. Guaranteed!</h3></div><div class=col-md-4><div class=\"feature-box fbox-center fbox-light fbox-effect nobottomborder\"><div class=fbox-icon style=border-radius:0><a href=#><img style=border-radius:0 src=https://www.opendoor.com/assets/front/bubble-be723774def49626a99f3747b62f3e9e.svg></a></div><h3 style=\"font-weight: 300\">A fair offer on your claim<span class=subtitle>Tell us everything that makes your house special so we can make you the most competitive offer.</span></h3></div></div><div class=col-md-4><div class=\"feature-box fbox-center fbox-light fbox-effect nobottomborder\"><div class=fbox-icon style=border-radius:0><a href=#><img style=border-radius:0 src=https://www.opendoor.com/assets/front/data-house-fd9b15138f4a132b3de28851367fe5b9.svg></a></div><h3 style=\"font-weight: 300\">Certainty you can count on<span class=subtitle>With your offer in hand, confidently choose the next step in your journey as a homeowner, whatever that may be.</span></h3></div></div><div class=col-md-4><div class=\"feature-box fbox-center fbox-light fbox-effect nobottomborder\"><div class=fbox-icon><a href=#><img style=border-radius:0 src=https://www.opendoor.com/assets/front/truck-0b61deb78bd09d4289a30a1a6e532114.svg></a></div><h3 style=\"font-weight: 300\">Move with convenience<span class=subtitle>No listing, no showings. You pick your close date, receive funds and move into your new home the day you want.</span></h3></div></div><div class=col-xs-12><div class=\"tc m-t-45\"><a href=# class=\"button button-rounded button-reveal button-large button-border tright center\"><span>Learn More →</span></a></div></div></div></div><div class=row><div class=\"promo promo-light promo-full bottommargin-lg header-stick notopborder\"><div class=\"container tc clearfix\"><h3 style=\"font-weight: 300\">Thousands of claimants served</h3><span class=tc style=margin-bottom:30px>And they love Claim Advisor</span><div class=clearfix></div><div class=\"col-md-7 quote-square cursor\"><div class=\"ipost clearfix\"><section id=content><iframe width=560 height=315 src=http://www.youtube.com/embed/SZEflIVnhH8 frameborder=0 allowfullscreen></iframe></section><div class=entry-title><h3 style=\"font-weight:300; font-style: italic\">\"Claim Advisor’s Public Adjusters are specialists to say the least. They helped me understand what my policy covered and they fought for me. They are very knowledgeable and kept me in the loop when navigating through my policy and negotiating with the insurance company. I really believe that our final settlement was much better than it would have been had they not been involved. I would highly recommend them to anyone in need.”</h3><p style=\"text-align: left; color:#999; margin-top:10px; margin-bottom:0\">– Antonio Kelly</p></div></div></div><div class=col-md-5><div class=\"col-md-12 quote-square cursor\"><div class=entry-title><h3 style=\"font-weight:300; font-size:16px; font-style: italic\">\"Claim Advisor made it possible for us to sell our home quickly, transition our family from one state to another, and move on with the next stage of our life.\"</h3><p style=\"text-align: left; color:#999; margin-top:10px; margin-bottom:0\">– ERIN &amp; SODETH IM, HARRISBURG PA</p></div></div><div class=\"col-md-12 quote-square cursor\" style=margin-top:15px><div class=entry-image><a href=#><img class=image_fade src=\"https://imgdrop.imgix.net/a6edf4b57636423bac3378c7587eeee2.jpg?w=580\" alt=Image></a></div><div class=entry-title><h3 style=\"font-weight:300; font-size:16px; font-style: italic\">\"Claim Advisor made it possible for us to sell our home quickly, transition our family from one state to another, and move on with the next stage of our life.\"</h3><p style=\"text-align: left; color:#999; margin-top:10px; margin-bottom:0\">– ERIN &amp; SODETH IM, HARRISBURG PA</p></div></div></div></div></div></div><div class=row style=\"margin-top:50px; margin-bottom: 100px\"><h3 class=tc style=\"font-weight: 300\"><strong>Claim Advisor</strong> will process your claim, instantly!</h3><h4 class=tc>Take the next step to filing your claim</h4><div class=tc><a href=# class=\"button button-rounded button-reveal button-large button-border tright center\"><span>Learn More →</span></a></div></div><div class=row><div class=col-xs-12><!--<div class=\"col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 \">--> <img class=\"img-responsive center-block\" src=\"https://github.com/cary-gaskell/claim-advisor-ui/blob/master/src/assets/images/opendoor.jpg?raw=true\" style=\"opacity: 0.8; margin-bottom:20px\"></div></div><!--<button class=\"button\" type=\"button\" style=\" margin-top:50px; margin-left:620px; margin-bottom: 20px;\">Learn How →</button> --><!--<a href=\"#\" class=\"button button-border button-light button-circle\" style=\" margin-top:50px; margin-left:585px; margin-bottom: 20px;\">Learn More →</a>--><div class=row style=\"margin-top:25px; border-top:2px solid #fafafa\"><div class=\"col-xs-12 p-t-25\"><claim-footer></claim-footer></div></div></div><!--<div id=\"gotoTop\" class=\"icon-angle-up\"></div>--> <!--We will give you peace of mind that everything in your claim is being handled correctly, so you can set your focus on the actual rebuilding of your home or business.-->");
$templateCache.put("app/pricing/pricing.html","<div class=container-fluid style=\"padding-left:0; padding-right:0\"><div><acme-navbar creation-date=main.creationDate></acme-navbar></div></div>");
$templateCache.put("app/process/process.html","");
$templateCache.put("app/testimonial/testimonial.html","");
$templateCache.put("app/why/why.html","");
$templateCache.put("app/components/footer/footer.html","<div class=container><div class=row><!-- Footer Widgets\n        ============================================= --><div class=col-xs-12 style=padding:25px><div class=\"col-sm-12 col-md-8\"><div class=\"widget clearfix\"><h3 style=display:inline>Claim Advisor</h3><p>When a disaster strikes, the insurance company has building engineers, adjusters, supervisors and claims managers, all representing their interests. Wouldn’t <strong>you</strong> like someone to represent yours?</p><div class=line style=\"margin: 30px 0\"></div><div class=row><div class=\"col-md-3 col-xs-6 bottommargin-sm widget_links\"><ul><li><a href=#>Home</a></li><li><a href=#>Pricing</a></li><li><a href=#>Process</a></li><li><a href=#>Submit</a></li><li><a href=#>Contact</a></li></ul></div><div class=\"col-md-3 col-xs-6 bottommargin-sm widget_links\"><ul><li><a href=#>Residential</a></li><li><a href=#>Business</a></li><li><a href=#>Why us?</a></li><li><a href=#>Testimonials</a></li><li><a href=#>Blog</a></li></ul></div><div class=\"col-md-6 col-xs-12 bottommargin-sm widget_links\"><div class=\"widget subscribe-widget clearfix\"><h5><strong>Subscribe</strong> to Our Newsletter to get Important News, Amazing Offers &amp; Inside Scoops:</h5><div class=widget-subscribe-form-result></div><form id=widget-subscribe-form action=include/subscribe.php role=form method=post class=nobottommargin><div class=\"input-group divcenter\"><span class=input-group-addon><i class=ion-ios-email-outline></i></span> <input type=email id=widget-subscribe-form-email name=widget-subscribe-form-email class=\"form-control required email\" placeholder=\"Enter your Email\"> <span class=input-group-btn><button class=\"btn btn-success\" type=submit>Subscribe</button></span></div></form></div></div></div></div></div><div class=\"col-sm-2 col-md-4\"><div class=\"widget clearfix\"><a href=# class=\"button button-rounded button-large button-border\"><span>Schedule your claim</span></a></div></div></div><!-- .footer-widgets-wrap end --></div><!-- Copyrights\n    ============================================= --></div><div class=row><div class=col-xs-12 style=\"background-color:#f5f5f5; padding:25px\">Copyrights &copy; 2014 All Rights Reserved by Claim Advisor.</div></div><!-- #copyrights end -->");
$templateCache.put("app/components/navbar/navbar.html","<!-- Header\n    ============================================= --><header id=header class=\"full-header sticky-header\"><div id=header-wrap><div class=\"container clearfix\" style=\"margin-right: 0; margin-left:0; width:100%\"><div id=primary-menu-trigger><i class=ion-navicon></i></div><!-- Logo ============================================= --><div id=logo><h4 style=\"padding: 17px; margin:0\">Claim Advisor</h4><!--<img src=\"../../assets/images/logo.png\">--><!--<a href=\"index.html\" class=\"retina-logo\" data-dark-logo=\"images/logo-dark@2x.png\"><img src=\"images/logo@2x.png\" alt=\"Canvas Logo\"></a>--></div><!-- #logo end --><!-- Primary Navigation ============================================= --><nav id=primary-menu><ul><li ui-sref-active=current><a ui-sref=home><div>Peace of Mind</div></a></li><li class=mega-menu ui-sref-active=current><a ui-sref=pricing><div>Pricing</div></a></li><li class=mega-menu ui-sref-active=current><a ui-sref=process><div>Process</div></a></li><li class=mega-menu><a href ng-click=\"moreOpen = !moreOpen;\"><div>More<i class=ion-android-arrow-dropdown style=top:1px></i></div></a><ul style=\"{{moreOpen ? \'display:block\': \'\'}}\"><li><a ui-sref=business><div>Business Claims</div></a></li><li><a ui-sref=why><div>Why Us</div></a></li><li><a ui-sref=testimonial><div>Testimonials</div></a></li><li><a ui-sref=contact><div>Contact us</div></a></li><li><a ui-sref=faq><div>FAQ</div></a></li></ul></li></ul><!-- Top Search  ============================================= --><div id=top-search><a href=# id=top-search-trigger><i class=ion-ios-search style=\"font-size: 24px\"></i><i class=icon-line-cross></i></a><form action=search.html method=get><input type=text name=q class=form-control placeholder=\"Type &amp; Hit Enter..\"></form></div><!-- #top-search end --></nav><!-- #primary-menu end --></div></div></header><!-- #header end -->");}]);