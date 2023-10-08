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
                            <li class="nav-item active"><router-link class="nav-link" to="/admin">Manage User</router-link>
                            </li>
                            <li class="nav-item"><router-link class="nav-link" to="/room">Manage Room</router-link>
                            </li>
                            <li class="nav-item"><router-link class="nav-link" to="/roomnumber">Room
                                    Number</router-link>
                            </li>
                            <li class="nav-item"><router-link class="nav-link" to="/admin/feedback">FeedBack</router-link>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="#" @click="logout">LogOut</a></li>
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
                    <input type="text" class="form-control" v-model="searchUser" placeholder="Search user...">
                </div>
            </div>
            <div class="container">
                <table class="table table-hover table-striped">
                    <thead style="background-color: black;">
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i, no) in filterUser" :key="i.id">
                            <td>{{ no + 1 }}</td>
                            <td>{{ i.name }}</td>
                            <td>{{ i.email }}</td>
                            <td>{{ i.level }}</td>
                            <td class="btn-group">
                                <button class="btn btn-info" @click="getDetail(i)" data-bs-target="#detailUser"
                                    data-bs-toggle="modal"><i class="bi bi-zoom-in"></i></button>
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


        <!-- Modal Edit User -->
        <div class="modal fade" id="editUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="edit">
                        <div class="modal-body">

                            <label for="name">Name:</label>
                            <input type="text" v-model="editData.name" class="form-control" required
                                placeholder="Masukkan nama..." autocomplete="off">

                            <label for="email">Email:</label>
                            <input type="email" v-model="editData.email" class="form-control" required
                                placeholder="Masukkan email..." autocomplete="off">

                            <label for="role">Role:</label>
                            <select class="form-control" required v-model="editData.level" id="role">
                                <option value="admin">Admin</option>
                                <option value="resepsionis">Resepsionis</option>
                            </select>

                            <!-- <label for="password">Password: </label>
                            <input type="password" class="form-control" v-model="editData.password" required> -->

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal Edit User End -->


        <!-- Modal Detail User -->
        <div class="modal fade" id="detailUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Detail User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="table table-striped table-hover">
                            <tr>
                                <th>Nama: </th>
                                <td>{{ editData.name }}</td>
                            </tr>
                            <tr>
                                <th>Email: </th>
                                <td>{{ editData.email }}</td>
                            </tr>
                            <tr>
                                <th>Role: </th>
                                <td>{{ editData.level }}</td>
                            </tr>
                            <tr>
                                <th>Created: </th>
                                <td>{{ editData.created_at }}</td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Detail User End -->

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
            editData: {},
            searchUser: ''
        }
    },
    computed: {
        filterUser() {
            let filtered = this.userData
            if (this.searchUser) {
                filtered = filtered.filter(i => i.name.toString().toLowerCase().includes(this.searchUser.toLowerCase()))
            }
            return filtered
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        auth() {
            axios.defaults.headers.common['Authorization'] = 'bearer' + localStorage.getItem('token')
        },
        getUser() {
            this.auth()
            axios.get('http://localhost:8000/api/getUser')
                .then(
                    (response) => {
                        console.log(response)
                        this.userData = response.data
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                        if (error.response.status == 401) {
                            swal({
                                icon: 'warning',
                                title: `Token is Expired`,
                                button: 'Login',
                                dangerMode: true,
                            }).then(
                                (login) => {
                                    if (login) {
                                        location.href = '/login'
                                    }
                                }
                            )
                        }
                    }
                )
        },
        getDetail(i) {
            axios.get(`http://localhost:8000/api/getUser/${i.id}`)
                .then(
                    (response) => {
                        console.log(response)
                        this.editData = response.data[0]
                    }
                )
        },
        addUserData() {
            try {
                axios.post('http://localhost:8000/api/createUser', this.addUser)
                    .then(
                        (response) => {
                            console.log(response)
                            this.userData.push(response.data)
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
        edit() {
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                dangerMode: true,
                buttons: ['No', 'Yes']
            }).then(
                (save) => {
                    if (save) {
                        axios.post(`http://localhost:8000/api/updateUser/${this.editData.id}`, this.editData)
                            .then(
                                (response) => {
                                    const index = this.userData.findIndex(i => i.id === this.editData.id)
                                    this.userData.splice(index, 1, this.editData)
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success Update User',
                                        button: 'close'
                                    })
                                }
                            )
                    }
                }
            )
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
                        axios.delete(`http://localhost:8000/api/deleteUser/${id}`)
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
        },
        logout() {
            swal({
                icon: 'warning',
                title: 'LogOut?',
                dangerMode: true,
                buttons: ['No', 'Yes']
            }).then(
                (logout) => {
                    if (logout) {
                        localStorage.clear()
                        swal({
                            icon: 'success',
                            title: 'Logout success',
                            dangerMode: true,
                            button: 'Login'
                        }).then(
                            (login) => {
                                if (login) {
                                    location.href = '/login'
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

/* th {
    background-color: black;
    color: white;
} */

a,
p {
    color: white;
    text-decoration: none;
}
</style>