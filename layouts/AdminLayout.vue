<template>
    <div>
        <body class="hold-transition sidebar-mini">
            <div class="wrapper">
                <AdminHeader />
                <AdminSidebar />
                <div class="content-wrapper">
                    <div class="content">
                        <!-- Content Header (Page header) -->
                        <div class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <div class="col-sm-6">
                                        <h1 class="m-0"></h1>
                                    </div>
                                    <!-- /.col -->
                                    <div class="col-sm-6">
                                        <ol class="breadcrumb float-sm-right">
                                            <li class="breadcrumb-item">
                                                <a href="#">Home</a>
                                            </li>
                                            <li class="breadcrumb-item active">
                                                Dashboard v1
                                            </li>
                                        </ol>
                                    </div>
                                    <!-- /.col -->
                                </div>
                                <!-- /.row -->
                            </div>
                            <!-- /.container-fluid -->
                        </div>
                        <!-- /.content-header -->
                        <Nuxt />
                    </div>
                </div>
                <AdminFooter />
            </div>

            <!-- <script src="{{ asset('plugins/jquery/jquery.min.js') }}"></script> -->
            <!-- Bootstrap 4 -->
            <!-- <script src="{{ asset('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script> -->
            <!-- AdminLTE App -->
            <!-- <script src="{{ asset('js/admin/adminlte.min.js') }}"></script> -->
            <!-- AdminLTE for demo purposes -->
            <!-- <script src="{{ asset('js/admin/demo.js') }}"></script> -->
        </body>
    </div>
</template>

<script>
export default {
    mounted() {
        const script = document.createElement('script')
        script.src = 'assets/js/admin/adminlte.min.js' // Đường dẫn đến tệp tin JavaScript trong thư mục "static"
        script.async = true
        document.head.appendChild(script)
    },
}
</script>
