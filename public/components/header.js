class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
   <header class="page-head" data-preset='{"title":"Header","category":"header","reload":true,"id":"header"}'>
            <!-- RD Navbar Transparent-->
            <div class="rd-navbar-wrap">
                <nav class="rd-navbar rd-navbar-logo-center novi-background rd-navbar-light" data-md-device-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-static" data-lg-stick-up-offset="110px" data-lg-auto-height="true" data-md-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-stick-up="true">
                    <div class="rd-navbar-inner">
                        <div class="container">
                            <div class="rd-navbar-top-block row justify-content-xl-center align-items-xl-center">

                                <div class="col-xl-12 text-center">
                                    <!--Navbar Brand-->
                                    <div class="rd-navbar-brand"><a href="/index.html"><img class="frozenbacon-logo" src='../images/logo/frozenbacon_logo_2.png' alt='' /></a></div>
                                </div>
                            </div>
                            <div class="rd-navbar-panel">
                                <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar, .rd-navbar-nav-wrap"><span></span></button>
                            </div>
                        </div>
                        <div class="rd-navbar-menu-wrap">
                            <div class="container">
                                <div class="rd-navbar-nav-wrap">
                                    <div class="rd-navbar-mobile-scroll">
                                        <!--Navbar Brand Mobile-->
                                        <div class="rd-navbar-mobile-brand"><a href="../index.html"><img class="frozenbacon-logo" src='../images/logo/frozenbacon_logo_2.png' alt='' /></a></div>
                                        <!-- RD Navbar Nav-->
                                        <ul class="rd-navbar-nav">
                                            <li>
                                                <a href="/index.html"><span>Home</span></a>
                                            </li>
                                            <li>
                                                <a href="#"><span>New</span></a>
                                            </li>
                                            <li class="active">
                                                <a href="/gallery.html"><span>Art Galleries</span></a>
                                            </li>
                                            <li>
                                                <a href="#"><span>Landscape</span></a>
                                                <ul class="rd-navbar-dropdown">
                                                    <li>
                                                        <a href="#"><span class="text-middle">Ocean</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="text-middle">Mountains</span></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#"><span>Serverless Functions</span></a>
                                                <ul class="rd-navbar-dropdown">
                                                    <li>
                                                        <a href="/test1.html"><span class="text-middle">Test 1</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="/test2.html"><span class="text-middle">Test 2</span></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <section>
            <!-- Modern Breadcrumbs-->
            <div class="parallax-container breadcrumb-modern bg-gray-darkest context-dark" data-parallax-img="images/home04.png">
                <div class="parallax-content">
                    <div class="bg-overlay-gray-darkest">
                        <div class="container section-34 section-md-50 section-lg-110">
                            <div class="text-extra-big font-accent d-none d-lg-block"><span class="big">Art Galleries</span></div>
                            <ul class="list-inline list-inline-dashed p offset-top-0">
                                <li class="list-inline-item"><a class="small" href="index.html">Home</a></li>
                                <li class="list-inline-item">
                                    Art Galleries
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;
  }
}

customElements.define("header-component", Header);
