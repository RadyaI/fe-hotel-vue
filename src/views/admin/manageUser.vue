<template>
    <div>
        <!--================Header Area =================-->
        <header class="header_area">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="index.html"><img src="image/Logo.png" alt=""></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav desktop-only">
                            <li class="nav-item"><a class="nav-link" href="/admin">Manage User</a></li>
                            <li class="nav-item"><a class="nav-link" href="/room">Manage Room</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <!--================Header Area =================-->

        <!--================Breadcrumb Area =================-->
        <section class="breadcrumb_area">
            <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background="">
            </div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">Manage User</h2>
                    <ol class="breadcrumb" style="display: flex; justify-content: center;">
                        <li><a href="/admin">Home</a></li>
                        <li class="active">User</li>
                    </ol>
                </div>
            </div>
        </section>
        <!--================Breadcrumb Area =================-->

        <!--================Manage Area =================-->
        <div class="mt-5 mb-5">
            <div class="row mb-4" style="margin-left: 62px;">
                <div class="col-auto">
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUser"><i
                            class="bi bi-person-fill-add"></i></button>
                </div>
                <div class="col-5">
                    <input type="text" class="form-control" placeholder="Search user...">
                </div>
            </div>
            <div class="container">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i, no) in userData" :key="i.id">
                            <td>{{ no + 1 }}</td>
                            <td>{{ i.name }}</td>
                            <td>{{ i.email }}</td>
                            <td>{{ i.level }}</td>
                            <td class="btn-group">
                                <button class="btn btn-info"><i class="bi bi-zoom-in"></i></button>
                                <button class="btn btn-warning" @click="getDetail(i)" data-bs-target="#editUser"
                                    data-bs-toggle="modal"><i class="bi bi-gear-fill"></i></button>
                                <button class="btn btn-danger" @click="deleteUser(i)"><i
                                        class="bi bi-trash-fill"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--================Manage Area =================-->

        <!--================ start footer Area  =================-->
        <footer class="footer-area section_gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3  col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h6 class="footer_title">About Agency</h6>
                            <p>The world has become so fast paced that people don’t want to stand by reading a page of
                                information, they would much rather look at a presentation and understand the message. It
                                has come to a point </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h6 class="footer_title">Navigation Links</h6>
                            <div class="row">
                                <div class="col-4">
                                    <ul class="list_style">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Feature</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <ul class="list_style">
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h6 class="footer_title">Newsletter</h6>
                            <p>For business professionals caught between high OEM price and mediocre print and graphic
                                output, </p>
                            <div id="mc_embed_signup">
                                <form target="_blank"
                                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                    method="get" class="subscribe_form relative">
                                    <div class="input-group d-flex flex-row">
                                        <input name="EMAIL" placeholder="Email Address" onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Email Address '" required="" type="email">
                                        <button class="btn sub-btn"><span class="lnr lnr-location"></span></button>
                                    </div>
                                    <div class="mt-10 info"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget instafeed">
                            <h6 class="footer_title">InstaFeed</h6>
                            <ul class="list_style instafeed d-flex flex-wrap">
                                <li><img src="image/instagram/Image-01.jpg" alt=""></li>
                                <li><img src="image/instagram/Image-02.jpg" alt=""></li>
                                <li><img src="image/instagram/Image-03.jpg" alt=""></li>
                                <li><img src="image/instagram/Image-04.jpg" alt=""></li>
                                <li><img src="image/instagram/Image-05.jpg" alt=""></li>
                                <li><img src="image/instagram/Image-06.jpg" alt=""></li>
                                <li><img src="image/instagram/Image-07.jpg" alt=""></li>
                                <li><img src="image/instagram/Image-08.jpg" alt=""></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="border_line"></div>
                <div class="row footer-bottom d-flex justify-content-between align-items-center">
                    <p class="col-lg-8 col-sm-12 footer-text m-0">
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        Copyright &copy;2023 All rights reserved | This template is made with <i class="fa fa-heart-o"
                            aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    </p>
                    <div class="col-lg-4 col-sm-12 footer-social">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-dribbble"></i></a>
                        <a href="#"><i class="fa fa-behance"></i></a>
                    </div>
                </div>
            </div>
        </footer>
        <!--================ End footer Area  =================-->

        <!-- Modal Add User -->
        <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="addUserData">
                        <div class="modal-body">

                            <label for="name">Name:</label>
                            <input type="text" v-model="addUser.name" class="form-control" required
                                placeholder="Masukkan nama..." autocomplete="off">

                            <label for="email">Email:</label>
                            <input type="email" v-model="addUser.email" class="form-control" required
                                placeholder="Masukkan email..." autocomplete="off">

                            <label for="role">Role:</label>
                            <select class="form-control" required v-model="addUser.level" id="role">
                                <option value="admin">Admin</option>
                                <option value="resepsionis">Resepsionis</option>
                            </select>

                            <label for="password">Password: </label>
                            <input type="password" class="form-control" v-model="addUser.password" required>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal Add User End -->

        <!-- Modal Edit User-->
        <div class="modal fade" id="editUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="saveUser">
                        <div class="modal-body">

                            <label for="name">Name:</label>
                            <input type="text" id="name" class="form-control" v-model="detailData.name" required>

                            <label for="email">Email:</label>
                            <input type="email" class="form-control" v-model="detailData.email" required>

                            <label for="password">Password:</label>
                            <input type="password" v-model="detailData.password" class="form-control">
                            <small style="color:red;">*Tidak harus di ganti</small><br>

                            <label for="level">Role:</label>
                            <select class="form-control" v-model="detailData.level" required id="">
                                <option value="resepsionis">Resepsionis</option>
                                <option value="admin">Admin</option>
                            </select>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- End Modal Edit User -->

    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';


export default {
    data() {
        return {
            userData: {},
            addUser: {},
            detailData: {}
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        // auth() {
        //     axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
        // },
        getUser() {
            // this.auth()
            axios.get('http://localhost:3000/getUser')
                .then(
                    (response) => {
                        console.log(response)
                        this.userData = response.data[0].payLoad.data
                    }
                )
        },
        getDetail(i) {
            try {
                axios.get(`http://localhost:3000/getUser/${i.id}`)
                    .then(
                        (response) => {
                            console.log(response)
                            this.detailData = response.data[0].payLoad.data[0]
                        }
                    )
            }
            catch (error) {
                console.log(error)
            }
        },
        addUserData() {
            try {
                axios.post('http://localhost:3000/createUser', this.addUser)
                    .then(
                        (response) => {
                            console.log(response)
                            this.userData.push(response.data[0].payLoad.data[0])
                            swal({
                                icon: 'success',
                                title: 'Success Add User',
                                timer: 1000
                            })
                        }
                    )
                    .catch(
                        (error) => {
                            console.log(error)
                            if (error.response.status === 422) {
                                let title = error.response.data
                                swal({
                                    icon: 'error',
                                    title: `${title}`
                                })
                            }
                        }
                    )
            } catch (error) {
                console.log(error)
            }
        },
        saveUser() {
            try {
                swal({
                    title: 'Edit User?',
                    icon: 'warning',
                    dangerMode: true,
                    buttons: ['No', 'Yes']
                }).then(
                    (update) => {
                        if (update) {
                            axios.put(`http://localhost:3000/updateUser/${this.detailData.id}`, this.detailData)
                                .then(
                                    (response) => {
                                        console.log(response)
                                        const index = this.userData.findIndex(i => i.id === this.detailData.id)
                                        this.userData.splice(index, 1, this.detailData)
                                        swal({
                                            icon: 'success',
                                            title: 'Success Update User',
                                            button: 'yey'
                                        })
                                    }
                                )
                                .catch(
                                    (error) => {
                                        console.log(error)
                                        if (error.response.status === 500) {
                                            swal({
                                                icon: 'error',
                                                title: 'Internal Server Error',
                                                button: 'Yaah'
                                            })
                                        }
                                    }
                                )
                        }
                    }
                )
            }
            catch (error) {
                console.log(error)
            }
        },
        deleteUser(i) {
            // this.auth()
            let id = i.id
            swal({
                icon: 'warning',
                title: 'Delete this user?',
                dangerMode: true,
                buttons: ['No', 'Yes']
            }).then(
                (deleteUser) => {
                    if (deleteUser) {
                        axios.delete(`http://localhost:3000/deleteUser/${id}`)
                            .then(
                                (response) => {
                                    console.log(response)
                                    this.userData = this.userData.filter(i => i.id != id)
                                    swal({
                                        title: 'Success delete user',
                                        icon: 'success'
                                    })
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    if (error.response.status === 500) {
                                        swal({
                                            title: 'Minimal Login',
                                            icon: 'error'
                                        })
                                    }
                                }
                            )
                    }
                }
            )
        }
    }
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
    .desktop-only {
        margin-left: 400px;
    }
}

th {
    background-color: black;
    color: white;
}

a,
p {
    color: white;
    text-decoration: none;
}
</style>