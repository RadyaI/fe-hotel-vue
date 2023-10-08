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
                            <li class="nav-item active"><router-link class="nav-link" to="/room">Manage Room</router-link>
                            </li>
                            <li class="nav-item"><router-link class="nav-link" to="/roomnumber">Room Number</router-link>
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
                    <h2 class="page-cover-tittle">Manage Room</h2>
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
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addRoom"><i
                            class="bi bi-plus-square-fill"></i></button>
                </div>
                <div class="col-5">
                    <input type="text" class="form-control" v-model="searchRoom" placeholder="Search room type...">
                </div>
            </div>
            <div class="container">
                <!-- Room -->
                <div class="row mb_30">
                    <div class="col-lg-3 col-sm-6" v-for="room in roomFilter" :key="room.id_kamar">
                        <div class="accomodation_item text-center">
                            <div class="hotel_img">
                                <img :src="'http://localhost/UKL-Hotel/HotelLaravel_9/public/images/' + room.foto"
                                    alt="Belum ada foto" height="300" weight="450">
                            </div>
                            <a href="#" style="text-decoration:none;">
                                <h4 class="sec_h4">{{ room.type_kamar }} Room</h4>
                            </a>
                            <h5>Rp.{{ room.harga }}<small>/night</small></h5>
                            <a href="#" class="btn btn-warning text-light"
                                style="text-transform: uppercase; font-weight: bold;" data-bs-toggle="modal"
                                data-bs-target="#BookModal" @click="getDetailRoom(room)">Manage</a>
                        </div>
                    </div>
                </div>
                <!-- Room -->
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

        <!-- Modal Add Room -->

        <!-- Modal Add Room End -->


        <!-- Modal manage room -->
        <div class="modal fade" id="BookModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Book Now</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="Save">
                        <div class="modal-body">
                            <div class="row">
                                <div class="col">
                                    <div class="hotel_img">
                                        <img :src="'http://localhost/UKL-Hotel/HotelLaravel_9/public/images/' + roomDetail.foto"
                                            alt="" height="300" weight="450">
                                    </div>
                                </div>
                                <div class="col">

                                    <h3>
                                        <div class="row">
                                            <div class="col">
                                                <input type="number" class="form-control" v-model="roomDetail.harga">
                                            </div>
                                            <div class="col">
                                                / Night /
                                            </div>
                                            <div class="col" style="margin-right: 60px;">
                                                <select class="form-control" v-model="roomDetail.type_kamar">
                                                    <option value="Regular">Regular</option>
                                                    <option value="Premium">Premium</option>
                                                    <option value="Superion">Superior</option>
                                                    <option value="Duluxe">Duluxe</option>
                                                    <option value="Executive">Executive</option>
                                                    <option value="Family">Family</option>
                                                    <option value="Single">Single</option>
                                                </select>
                                            </div>
                                        </div>
                                    </h3>

                                    <label for="email">Deskripsi: </label>
                                    <textarea class="form-control" v-model="roomDetail.deskripsi" id="" cols="10"
                                        rows="10"></textarea>


                                    <label for="name">Status kamar: </label>
                                    <select class="form-control" v-model="roomDetail.status_kamar" id="name">
                                        <option value="kosong">Kosong</option>
                                        <option value="dipesan">Dipesan</option>
                                        <option value="dibersihkan">Dibersihkan</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click="deleteRoom"
                                data-bs-dismiss="modal">Delete</button>
                            <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                                data-bs-target="#uploadFoto">Update Image</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal manage room End -->

        <!-- Add Room -->
        <div class="modal fade" id="addRoom" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Room</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="saveRoom">
                        <div class="modal-body">

                            <label for="type">Room Type: </label>
                            <select class="form-control" required v-model="addRoom.type_kamar" id="type">
                                <option value="Regular">Regular</option>
                                <option value="Premium">Premium</option>
                                <option value="Superion">Superior</option>
                                <option value="Duluxe">Duluxe</option>
                                <option value="Executive">Executive</option>
                                <option value="Family">Family</option>
                                <option value="Single">Single</option>
                            </select>

                            <label for="max">Person: </label>
                            <select v-model="addRoom.max" class="form-control" required id="max">
                                <option value="1-2">1-2</option>
                                <option value="2-4">2-4</option>
                            </select>

                            <label for="desc">Deskripsi: </label>
                            <textarea class="form-control" v-model="addRoom.deskripsi" id="" cols="5" rows="5"
                                required></textarea>

                            <label for="harga">Harga: </label>
                            <input type="number" class="form-control" v-model="addRoom.harga" required id="harga">

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Add Room End -->

        <!-- Add Foto -->
        <div class="modal fade" id="uploadFoto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Image</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="uploadFoto">
                        <div class="modal-body">

                            <input type="file" class="form-control" @change="addFoto($event)" required id="foto">

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Add Foto End -->


    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
// import swal from 'sweetalert';


export default {
    name: 'app',
    data() {
        return {
            searchRoom: '',
            editData: {},
            roomData: {},
            roomDetail: {},
            addRoom: {},
            foto: ''
        }
    },
    computed: {
        roomFilter() {
            let dataFilter = this.roomData
            if (this.searchRoom) {
                dataFilter = dataFilter.filter(room => room.type_kamar.toString().toLowerCase().includes(this.searchRoom.toLowerCase()))
            }
            return dataFilter
        }
    },
    mounted() {
        this.getRoom()
    },
    methods: {
        getRoom() {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
                axios.get('http://localhost:8000/api/getkamar')
                    .then(
                        (response) => {
                            console.log(response)
                            this.roomData = response.data
                        }
                    )
                    .catch(
                        (error) => {
                            console.log(error)
                        }
                    )
            }
            catch {
                (error) => {
                    console.log(error)
                }
            }
        },
        getDetailRoom(room) {
            axios.get(`http://localhost:8000/api/getkamar/${room.id_kamar}`)
                .then(
                    (response) => {
                        console.log(response)
                        this.roomDetail = response.data[0]
                    }
                )
        },
        Save() {
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                dangerMode: true,
                buttons: ['no', 'yes']
            }).then(
                (edit) => {
                    if (edit) {
                        axios.put(`http://localhost:8000/api/updatekamar/${this.roomDetail.id_kamar}`, this.roomDetail)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success Update Room',
                                        dangerMode: true,
                                        button: 'close'
                                    }).then(
                                        (close) => {
                                            if (close) {
                                                location.reload()
                                            }
                                        }
                                    )
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    if (error.response.status === 401) {
                                        alert(`Belum login nih`)
                                    }
                                }
                            )
                    }
                }
            )
        },
        saveRoom() {
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                dangerMode: true,
                buttons: ['no', 'yes']
            }).then(
                (add) => {
                    if (add) {
                        axios.post('http://localhost:8000/api/createkamar', this.addRoom)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success Create Room',
                                        dangerMode: true,
                                        button: 'close'
                                    }).then(
                                        (reload) => {
                                            if (reload) {
                                                location.reload()
                                            }
                                        }
                                    )
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
        addFoto(e) {
            this.foto = e.target.files[0]
        },
        uploadFoto() {
            let form = new FormData()
            form.append("foto", this.foto)
            axios.post(`http://localhost:8000/api/uploadFoto/${this.roomDetail.id_kamar}`, form)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            icon: 'success',
                            title: 'Success Add Image',
                            dangerMode: true,
                            button: 'Close'
                        }).then(
                            (close) => {
                                if (close) {
                                    location.reload()
                                }
                            }
                        )
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        },
        deleteRoom() {
            swal({
                icon: 'warning',
                title: 'Delete This Room',
                dangerMode: true,
                buttons: ['No', 'Yes']
            }).then(
                (hapus) => {
                    if (hapus) {
                        axios.delete(`http://localhost:8000/api/deletekamar/${this.roomDetail.id_kamar}`)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: false,
                                        text: false,
                                        button: false,
                                        timer: 700
                                    })
                                    let filter = this.roomData.filter(room => room.id_kamar != this.roomDetail.id_kamar)
                                    this.roomData = filter
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