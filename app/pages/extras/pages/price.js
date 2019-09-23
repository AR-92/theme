var appPrice = {
    html: `
    <div class="">
    <div class="page-hero page-container hide" id="page-hero">
        <div class="padding d-flex">
            <div class="page-title">
                <h2 class="text-md text-highlight">Price</h2><small class="text-muted">Service pricing table</small></div>
            <div class="flex"></div>
            <div><a href="https://themeforest.net/item/basik-responsive-bootstrap-web-admin-template/23365964" class="btn btn-md text-muted"><span class="d-none d-sm-inline mx-1">Buy this Item</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div>
        </div>
    </div>
    <div class="page-content page-container" id="page-content">
        <div class="padding">
            <div class="text-center p-5">
                <h2 class="text-highlight">Simple price for your great product.</h2>
            </div>
            <div class="text-center">
                <div class="block d-inline-flex">
                    <div class="p-4 p-sm-5 b-r"><sup class="text-sm" style="top: -0.5em">$</sup><span class="h1">30</span>
                        <div class="text-muted">Regular license</div>
                        <div class="py-4"><a href="#" class="btn btn-sm btn-rounded btn-primary">Purchase</a></div><small class="text-muted">End-product <strong>not</strong> for sale</small></div>
                    <div class="p-4 p-sm-5"><sup class="text-sm" style="top: -0.5em">$</sup><span class="h1">900</span>
                        <div class="text-muted">Extended license</div>
                        <div class="py-4"><a href="#" class="btn btn-sm btn-rounded btn-primary">Purchase</a></div><small class="text-muted">Unlimited End-product for sale</small></div>
                </div>
            </div>
            <div class="p-5 text-center">Everything you need to build your web application.</div>
        </div>
    </div>
</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}