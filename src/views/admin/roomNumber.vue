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

                            <li class="nav-item"><router-link class="nav-link" to="/admin">Manage User</router-link>
                            </li>
                            <li class="nav-item"><router-link class="nav-link" to="/room">Manage Room</router-link>
                            </li>
                            <li class="nav-item active"><router-link class="nav-link" to="/roomnumber">Room
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
                    <h2 class="page-cover-tittle">Room Number</h2>
                    <ol class="breadcrumb" style="display: flex; justify-content: center;">
                        <li><a href="/admin">Home</a></li>
                        <li class="active">Room</li>
                    </ol>
                </div>
            </div>
        </section>
        <!--================Breadcrumb Area =================-->

        <!--================Manage Area =================-->
        <div class="mt-5 mb-5">
            <div class="row mb-4" style="margin-left: 62px;">
                <div class="col-auto">
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addNumber"><i
                            class="bi bi-file-plus"></i></button>
                </div>
                <div class="col-5">
                    <input type="number" class="form-control" v-model="searchNumber" placeholder="Search room...">
                </div>
                <div class="col-5">
                    <select class="form-control" v-model="searchLantai">
                        <option value="" selected>Semua Lantai</option>
                        <option value="1">Lantai 1</option>
                        <option value="2">Lantai 2</option>
                    </select>
                </div>
            </div>
            <div class="container">
                <!-- Table -->
                <button @click="selectNumber(i)" data-bs-toggle="modal" data-bs-target="#openSelectNumber" class="btn"
                    style="margin:10px;"
                    :class="{ 'btn-success': i.status === 'kosong', 'btn-danger': i.status === 'dipakai' }"
                    v-for="i in filterRoom" :key="i.id_no_kamar">
                    Nomor {{ i.no_kamar }}
                </button>
                <!-- Table End -->
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

        <!-- MODAL ADD NOMOR -->
        <div class="modal fade" id="addNumber" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Room Number</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="submitNumber">
                        <div class="modal-body">

                            <label for="nokamar" class="form-label">Nomor Kamar:</label>
                            <input type="number" class="form-control" v-model="data.no_kamar" required
                                placeholder="Masukkan nomor kamar...">

                            <label for="lantai" class="form-label">Lantai:</label>
                            <input type="number" class="form-control" v-model="data.lantai" required
                                placeholder="Masukkan lantai kamar...">

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- MODAL ADD NOMOR END -->

        <!-- MODAL ADD NOMOR -->
        <div class="modal fade" id="openSelectNumber" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Room Number</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="saveNumber">
                        <div class="modal-body">

                            <label for="nokamar" class="form-label">Nomor Kamar:</label>
                            <input type="number" class="form-control" v-model="detail.no_kamar" required
                                placeholder="Masukkan nomor kamar...">

                            <label for="lantai" class="form-label">Lantai:</label>
                            <input type="number" class="form-control" v-model="detail.lantai" required
                                placeholder="Masukkan lantai kamar...">

                            <label for="status" class="form-label">Status:</label>
                            <select class="form-control" v-model="detail.status">
                                <option value="kosong">Kosong</option>
                                <option value="dipakai">Di Pakai</option>
                            </select>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click="deleteRoom"
                                data-bs-dismiss="modal">Delete</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- MODAL ADD NOMOR END -->

    </div>
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios';

export default {
    data() {
        return {
            searchLantai: '',
            searchNumber: '',

            numberData: {},
            data: {},
            detail: {}
        }
    },
    computed: {
        filterRoom() {
            let numberData = this.numberData
            if (this.searchNumber) {
                numberData = numberData.filter(i => i.no_kamar.toString().includes(this.searchNumber.toString()))
            }

            if (this.searchLantai) {
                numberData = numberData.filter(i => i.lantai.toString().toLowerCase().includes(this.searchLantai.toString().toLowerCase()))
            }

            return numberData
        }
    },
    mounted() {
        this.getNumber()
    },
    methods: {
        getNumber() {
            axios.get('http://localhost:8000/api/getAllNoKamar')
                .then(
                    (response) => {
                        console.log(response)
                        this.numberData = response.data
                    }
                )
        },
        selectNumber(i) {
            axios.get(`http://localhost:8000/api/selectKamar/${i.id_no_kamar}`)
                .then(
                    (response) => {
                        console.log(response)
                        this.detail = response.data[0]
                    }
                )
        },
        submitNumber() {
            swal({
                icon: 'warning',
                title: 'Are You Sure?',
                buttons: ['No', 'Yes']
            }).then(
                (go) => {
                    if (go) {
                        axios.post('http://localhost:8000/api/addNumber', this.data)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Berhasil Menambah nomor kamar',
                                        timer: 1200
                                    })
                                    this.numberData.push(response.data.result)
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    swal({
                                        icon: 'error',
                                        title: 'Nomor kamar sudah ada!',
                                        timer: 1000,
                                        button: false
                                    })
                                }
                            )
                    }
                }
            )
        },
        saveNumber() {
            swal({
                icon: 'warning',
                title: 'Are You Sure?',
                dangerMode: true,
                buttons: ['No', 'Yes']
            }).then(
                (i) => {
                    if (i) {
                        axios.put(`http://localhost:8000/api/updateKamar/${this.detail.id_no_kamar}`, this.detail)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Berhasil udah kamar',
                                        button: false,
                                        timer: 1200
                                    })
                                    const index = this.numberData.findIndex(s => s.id_no_kamar === this.detail.id_no_kamar)
                                    this.numberData.splice(index, 1, this.detail)
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                }
                            )
                    }
                }
            )
        },
        deleteRoom() {
            swal({
                icon: 'warning',
                title: 'Are You Sure?',
                dangerMode: true,
                buttons: ['No', 'Yes']
            }).then(
                (hapus) => {
                    if (hapus) {
                        axios.delete(`http://localhost:8000/api/deleteRoom/${this.detail.id_no_kamar}`)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Berhasil hapus nomor kamar',
                                        timer: 1200,
                                        button: false
                                    })
                                    this.numberData = this.numberData.filter(i => i.id_no_kamar != this.detail.id_no_kamar)
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
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