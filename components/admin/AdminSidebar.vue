 <template>
    <div class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="index3.html" class="brand-link">
            <img
                src="~/assets/images/AdminLTELogo.png"
                alt="AdminLTE Logo"
                class="brand-image img-circle elevation-3"
            />
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img
                        src="~/assets/images/user2-160x160.jpg"
                        class="img-circle elevation-2"
                        alt="User Image"
                    />
                </div>
                <div class="info">
                    <a href="#" class="d-block">Alexander Pierce</a>
                </div>
            </div>

            <!-- SidebarSearch Form -->
            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input
                        class="form-control form-control-sidebar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                            <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                >
                    <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                    <li class="nav-item menu-open">
                        <a href="#" class="nav-link active">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="bi bi-bar-chart-line-fill"></i>
                            <p>Profile</p>
                        </a>
                    </li>
                    <b-navbar toggleable type="dark" variant="dark">
                        <b-nav-text href="#">NavBar</b-nav-text>

                        <b-navbar-toggle
                            class="custom-navbar-toggle"
                            target="navbar-toggle-collapse"
                        >
                            <template #default="{ expanded }">
                                <b-icon
                                    v-if="expanded"
                                    icon="chevron-up"
                                ></b-icon>
                                <b-icon v-else icon="chevron-down"></b-icon>
                            </template>
                        </b-navbar-toggle>

                        <b-collapse id="navbar-toggle-collapse" is-nav>
                            <b-nav class="ml-auto">
                                <b-nav-item href="#">Link 1</b-nav-item>
                                <b-nav-item href="#">Link 2</b-nav-item>
                                <b-nav-item href="#" disabled
                                    >Disabled</b-nav-item
                                >
                            </b-nav>
                        </b-collapse>
                    </b-navbar>
                    <li class="nav-item">
                        <a v-b-toggle.my-collapse class="nav-link">
                            <i class="bi bi-book-fill"></i>
                            <p>
                                Books
                                <i class="fas fa-angle-left right"></i>
                                <span class="badge badge-info right">6</span>
                            </p>
                        </a>
                        <ul id="my-collapse" class="nav nav-treeview">
                            <li class="nav-item">
                                <a
                                    href="pages/layout/top-nav.html"
                                    class="nav-link"
                                >
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>List books</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    href="pages/layout/top-nav-sidebar.html"
                                    class="nav-link"
                                >
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Add book</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a v-b-toggle.my-collapse class="nav-link">
                            <i class="bi bi-universal-access"></i>
                            <p>
                                Authors
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <b-collapse id="my-collapse">
                            <li class="nav-item">
                                <a
                                    href="pages/charts/chartjs.html"
                                    class="nav-link"
                                >
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>List Authors</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    href="pages/charts/flot.html"
                                    class="nav-link"
                                >
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Add Author</p>
                                </a>
                            </li>
                        </b-collapse>
                    </li>
                    <li class="nav-item">
                        <a v-b-toggle.my-collapse1 class="nav-link">
                            <i class="bi bi-newspaper"></i>
                            <p>
                                News
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <b-collapse id="my-collapse1" class="nav nav-treeview">
                            <li class="nav-item">
                                <a
                                    href="pages/UI/general.html"
                                    class="nav-link"
                                >
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>List news</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="pages/UI/icons.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Add news</p>
                                </a>
                            </li>
                        </b-collapse>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-edit"></i>
                            <p>
                                Category
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a
                                    href="pages/forms/general.html"
                                    class="nav-link"
                                >
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>List category</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    href="pages/forms/advanced.html"
                                    class="nav-link"
                                >
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Create category</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="pages/calendar.html" class="nav-link">
                            <i class="nav-icon far fa-calendar-alt"></i>
                            <p>Roles</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="pages/calendar.html" class="nav-link">
                            <i class="nav-icon far fa-calendar-alt"></i>
                            <p>Permissions</p>
                        </a>
                    </li>
                    <li class="nav-header">PAGE ABOUT</li>
                    <li class="nav-item">
                        <a href="pages/calendar.html" class="nav-link">
                            <i class="nav-icon far fa-calendar-alt"></i>
                            <p>
                                Contact
                                <span class="badge badge-info right">2</span>
                            </p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="pages/gallery.html" class="nav-link">
                            <i class="nav-icon far fa-image"></i>
                            <p>About us</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="pages/kanban.html" class="nav-link">
                            <i class="nav-icon fas fa-columns"></i>
                            <p>Comming soon</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="pages/kanban.html" class="nav-link">
                            <i class="nav-icon fas fa-columns"></i>
                            <p>Logout</p>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </div>
</template>

<style scoped>
/* stylelint-disable */
.custom-navbar-toggle {
    border: none; /* Xóa đường viền */
}
/* stylelint-enable */
</style>