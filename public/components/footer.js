class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
     <footer class="section-relative section-34 page-footer bg-gray-base context-dark novi-background" data-preset='{"title":"Footer","category":"footer","reload":false,"id":"footer"}'>
            <div class="container">
                <div class="row justify-content-md-center text-xl-left">
                    <div class="col-md-12">
                        <div class="row justify-content-sm-center">
                            <p class="small text-darker offset-top-4">Copyright &copy; <span id="copyright-year"></span> Frozen Bacon</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
`;
    }
}

customElements.define("footer-component", Footer);
