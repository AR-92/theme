var appSideBar = {
    html: `
        <div class="sidenav h-100 modal-dialog bg-light">
            <div class="navbar">
            <a href="index.html" class="navbar-brand">
            <i data-feather="circle"></i>
            <span class="hidden-folded d-inline l-s-n-1x">Pearl</span>
            </a>
            </div>
            <div class="flex scrollable hover">
                <div class="nav-active-text-primary" data-nav>
                    <ul class="nav bg">
                        <li class="nav-header hidden-folded"><span class="text-muted">Main</span></li>
                        <li><a href="dashboard.html"><span class="nav-icon text-primary"><i data-feather="home"></i></span> <span class="nav-text">Dashboard</span></a></li>
                        <li class="nav-header hidden-folded"><span class="text-muted">Applications</span></li>
                        <li><a href="app.calendar.html"><span class="nav-icon text-info"><i data-feather="calendar"></i></span> <span class="nav-text">Calendar</span> <span class="nav-badge"><b class="badge-circle xs text-danger"></b></span></a></li>
                        <li><a href="app.user.html"><span class="nav-icon text-success"><i data-feather="users"></i></span> <span class="nav-text">Users</span></a></li>
                        <li><a href="app.message.html"><span class="nav-icon text-warning"><i data-feather="message-circle"></i></span> <span class="nav-text">Messages</span> <span class="nav-badge"><b class="badge-circle xs text-warning"></b></span></a></li>
                        <li><a href="app.mail.html"><span class="nav-icon text-danger"><i data-feather="mail"></i></span> <span class="nav-text">Email</span></a></li>
                    </ul>
                    <ul class="nav">
                        <li class="nav-header hidden-folded"><span class="text-muted">UI elements</span></li>
                        <li><a class=""><span class="nav-icon"><i data-feather="grid"></i></span> <span class="nav-text">Components</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a href="ui.alert.html" class=""><span class="nav-text">Alert</span></a></li>
                                <li><a href="ui.badge.html" class=""><span class="nav-text">Badge</span></a></li>
                                <li><a href="ui.button.html" class=""><span class="nav-text">Button</span></a></li>
                                <li><a href="ui.card.html" class=""><span class="nav-text">Card</span></a></li>
                                <li><a href="ui.carousel.html" class=""><span class="nav-text">Carousel</span></a></li>
                                <li><a href="ui.color.html" class=""><span class="nav-text">Color</span></a></li>
                                <li><a href="ui.dropdown.html" class=""><span class="nav-text">Dropdown</span></a></li>
                                <li><a href="ui.grid.html" class=""><span class="nav-text">Grid</span></a></li>
                                <li><a href="ui.icon.html" class=""><span class="nav-text">Icon</span></a></li>
                                <li><a href="ui.list.html" class=""><span class="nav-text">List</span></a></li>
                                <li><a href="ui.modal.html" class=""><span class="nav-text">Modal</span></a></li>
                                <li><a href="ui.navbar.html" class=""><span class="nav-text">Navbar</span></a></li>
                                <li><a href="ui.sidenav.html" class=""><span class="nav-text">Sidenav</span></a></li>
                                <li><a href="ui.timeline.html" class=""><span class="nav-text">Timeline</span></a></li>
                                <li><a href="ui.tab.html" class=""><span class="nav-text">Tab &amp; Collpase</span></a></li>
                                <li><a href="ui.tooltip.html" class=""><span class="nav-text">Tooltip &amp; Popover</span></a></li>
                            </ul>
                        </li>
                        <li><a class=""><span class="nav-icon"><i data-feather="box"></i></span> <span class="nav-text">Plugins</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a href="ui.scroll.html" class=""><span class="nav-text">Infinite Scroll</span></a></li>
                                <li><a href="ui.sortable.html" class=""><span class="nav-text">Sortable</span></a></li>
                                <li><a href="ui.map.html" class=""><span class="nav-text">Vector Map</span></a></li>
                            </ul>
                        </li>
                        <li><a class=""><span class="nav-icon"><i data-feather="disc"></i></span> <span class="nav-text">Form</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a href="form.element.html" class=""><span class="nav-text">Form Element</span></a></li>
                                <li><a href="form.layout.html" class=""><span class="nav-text">Form Layout</span></a></li>
                                <li><a href="form.validation.html" class=""><span class="nav-text">Form Validation</span></a></li>
                                <li><a href="form.editor.html" class=""><span class="nav-text">Editor</span></a></li>
                                <li><a href="form.datepicker.html" class=""><span class="nav-text">Datepicker</span></a></li>
                                <li><a href="form.select.html" class=""><span class="nav-text">Select</span></a></li>
                                <li><a href="form.wizard.html" class=""><span class="nav-text">Wizard</span></a></li>
                                <li><a href="form.dropzone.html" class=""><span class="nav-text">File Upload</span></a></li>
                            </ul>
                        </li>
                        <li><a class=""><span class="nav-icon"><i data-feather="list"></i></span> <span class="nav-text">Tables</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a href="table.style.html" class=""><span class="nav-text">Style</span></a></li>
                                <li><a href="table.bootstrap.html" class=""><span class="nav-text">Bootstrap Table</span></a></li>
                                <li><a href="table.datatables.html" class=""><span class="nav-text">Datatables</span></a></li>
                            </ul>
                        </li>
                        <li><a class=""><span class="nav-icon"><i data-feather="pie-chart"></i></span> <span class="nav-text">Charts</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a href="chart.chartist.html" class=""><span class="nav-text">Chartist</span></a></li>
                                <li><a href="chart.chartjs.html" class=""><span class="nav-text">Chartjs</span></a></li>
                            </ul>
                        </li>
                        <li class="nav-header hidden-folded"><span class="text-muted">Extra</span></li>
                        <li><a class=""><span class="nav-icon"><i data-feather="file"></i></span> <span class="nav-text">Pages</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a href="page.profile.html" class=""><span class="nav-text">Profile</span></a></li>
                                <li><a href="page.search.html" class=""><span class="nav-text">Search</span></a></li>
                                <li><a href="page.invoice.html" class=""><span class="nav-text">Invoice</span></a></li>
                                <li><a href="page.faq.html" class=""><span class="nav-text">FAQ</span></a></li>
                                <li><a href="page.price.html" class=""><span class="nav-text">Price</span></a></li>
                                <li><a href="page.setting.html" class=""><span class="nav-text">Setting</span></a></li>
                                <li><a href="page.blank.html" class=""><span class="nav-text">Blank</span></a></li>
                            </ul>
                        </li>
                        <li><a class=""><span class="nav-icon"><i data-feather="lock"></i></span> <span class="nav-text">Auth</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a href="signin.1.html" class=""><span class="nav-text">Signin</span></a></li>
                                <li><a href="signup.1.html" class=""><span class="nav-text">Signup</span></a></li>
                                <li><a href="forgot-password.html" class=""><span class="nav-text">Forgot Password</span></a></li>
                                <li><a href="lockme.html" class=""><span class="nav-text">Lockme Screen</span></a></li>
                                <li><a href="404.html" class=""><span class="nav-text">Error 404</span></a></li>
                                <li><a href="505.html" class=""><span class="nav-text">Error 505</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="no-shrink">
                <div class="p-3 d-flex align-items-center">
                    <div class="text-sm hidden-folded text-muted">Trial: 35%</div>
                    <div class="progress mx-2 flex" style="height:4px">
                        <div class="progress-bar gd-success" style="width: 35%"></div>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: function() {
        document.getElementById("aside").innerHTML = this.html;
        $('.nav > li ').on('click', moreDetails);

        function moreDetails(e) {
            if ($(this).hasClass('active')) {
                $(this).toggleClass("active");
            } else {
                $('.nav > li ').removeClass('active')
                $(this).toggleClass("active");
            }
        }
    }
}