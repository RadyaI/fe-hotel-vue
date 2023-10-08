
<template>
    <div>
        <header class="header_area" style="position: fixed;">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="/"><img src="image/Logo.png" alt=""></a>
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

                            <li class="nav-item active"><router-link to="/resepsionis"
                                    class="nav-link">Confirm</router-link></li>
                            <li class="nav-item"><router-link to="/checkin" class="nav-link">CheckIn</router-link></li>
                            <li class="nav-item"><router-link to="/checkout" class="nav-link">Checkout</router-link></li>
                            <li class="nav-item"><router-link to="/history" class="nav-link">History</router-link></li>
                            <li class="nav-item"><a class="nav-link" href="#" @click="logout">LogOut</a></li>

                        </ul>
                    </div>
                </nav>
            </div>
        </header>

        <!--================Breadcrumb Area =================-->
        <section class="breadcrumb_area">
            <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background="">
            </div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">Payment Confirmation</h2>
                    <ol class="breadcrumb" style="display: flex; justify-content: center;">
                        <li><a href="index.html">Home</a></li>
                        <li class="active" style="cursor: pointer;">Confirmation</li>
                        <li class="active" style="cursor: pointer;">{{ getNama }}</li>
                    </ol>
                </div>
            </div>
        </section>
        <!--================Breadcrumb Area =================-->

        <!--==========> Search Area <==========-->
        <div class="kotak mt-3 ">
            <input type="date" autocomplete="off" v-model="searchDate" name="text" class="input"
                placeholder="Search guest name...">
            <!-- <button class="search__btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                    <path
                        d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                        fill="#efeff1"></path>
                </svg>
            </button> -->
        </div>
        <!--==========> Search Area <==========-->

        <!--===============> Not Confirm data area <===============-->
        <!-- <input type="date" class="form-control mt-3"> -->
        <section class="about_history_area section_gap" style="margin-top: -5pc;">
            <div class="container">
                <div class="card mb-4" v-for="i in filterDate" :key="i.id_transaksi">
                    <div class="card-header">
                        Tanggal pesan / {{ i.tgl_pesan }}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Atas nama <b style="color: blue;">{{ i.nama_tamu }}</b></h5>
                        <button class="button" @click="getDetailBooking(i)" data-bs-toggle="modal"
                            data-bs-target="#confirmDetail"> Detail
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!--===============> Not Confirm data area <===============-->

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

        <!--==========> Modal Detail Confirm <==========-->
        <div class="modal fade" ref="confirmDetail" id="confirmDetail" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Booking Detail</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col">
                                <label for="id">ID Booking:</label>
                                <input type="text" class="form-control" readonly v-model="detailData.id_transaksi">
                            </div>
                            <div class="col">
                                <label for="nama">Nama Tamu:</label>
                                <input type="text" class="form-control" readonly v-model="detailData.nama_tamu">
                            </div>
                            <div class="col">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" readonly v-model="detailData.email">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label for="tgl_pesan">Tanggal Pesan:</label>
                                <input type="date" class="form-control" readonly v-model="detailData.tgl_pesan">
                            </div>
                            <div class="col">
                                <label for="tgl_checkin">Tanggal Check-In:</label>
                                <input type="date" class="form-control" readonly v-model="detailData.check_in">
                            </div>
                            <div class="col">
                                <label for="tgl_checkout">Tanggal Check-Out:</label>
                                <input type="date" class="form-control" readonly v-model="detailData.check_out">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label for="type">Type Kamar:</label>
                                <input type="text" class="form-control" readonly v-model="detailData.type_kamar">
                            </div>
                            <div class="col">
                                <label for="harga">Harga / Malam:</label>
                                <input type="number" class="form-control" readonly v-model="detailData.harga">
                            </div>
                            <div class="col">
                                <label for="total">Total Harga - {{ detailData.jumlah_kamar }} Malam:</label>
                                <input type="number" class="form-control" readonly v-model="detailData.total_harga">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="button" @click="confirm" data-bs-dismiss="modal">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
        <!--==========> Modal Detail Confirm End <==========-->

    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
// import boots from 'bootstrap'
// import $ from 'jquery'

export default {
    name: 'App',
    data() {
        return {
            confirmData: {},
            detailData: {},
            searchDate: '',
            getNama: localStorage.getItem('nama')
        }
    },
    mounted() {
        this.getConfirm()
    },
    computed: {
        filterDate() {
            let filterData = this.confirmData
            if (this.searchDate) {
                filterData = filterData.filter(i => i.tgl_pesan === this.searchDate)
            }
            return filterData
        }
    },
    methods: {
        logout() {
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                buttons: ['Nooo', 'Yes Yes'],
                dangerMode: true
            }).then(
                (logout) => {
                    if (logout) {
                        localStorage.clear()
                        swal({
                            icon: 'success',
                            title: 'Logout successful',
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
        },
        auth() {
            axios.defaults.headers.common["Authorization"] = 'bearer' + localStorage.getItem('token')
            // Ini buat set header nya pake token biar bisa ngambil data nya
        },
        getConfirm() {
            this.auth()
            axios.get('http://localhost:8000/api/notconfirmed')
                .then(
                    (res) => {
                        console.log(res.data)
                        this.confirmData = res.data
                        let alert = 'Token is Expired'
                        if (res.data.status == alert) {
                            swal({
                                icon: 'warning',
                                title: `${alert}`,
                                button: 'login',
                                dangerMode: true
                            }).then(
                                (logout) => {
                                    if (logout) {
                                        location.href = '/login'
                                    }
                                }
                            )
                        }
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                        if (error.response.status === 401) {
                            let title = error.response.statusText
                            let text = error.response.data.status
                            swal({
                                icon: 'error',
                                title: `${title}`,
                                text: `${text}`,
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
        },
        getDetailBooking(i) {
            axios.get('http://localhost:8000/api/gettransaksibyid/' + i.id_transaksi)
                .then(
                    (res) => {
                        console.log(res)
                        this.detailData = res.data
                    }
                )
        },
        confirm() {
            let send = {
                id_transaksi: this.detailData.id_transaksi,
                nama_tamu: this.detailData.nama_tamu,
                email: this.detailData.email
            }
            swal({
                title: 'Want to confirm payment?',
                icon: 'warning',
                dangerMode: true,
                buttons: ['No', 'Yes']
            }).then(
                (konfirmasi) => {
                    if (konfirmasi) {
                        setTimeout(() => {
                            swal({
                                button: false,
                                text: 'Wait a second'
                            })
                        }, 900);
                        axios.put('http://localhost:8000/api/konfirmasi/' + this.detailData.id_transaksi, send)
                            .then(
                                (response) => {
                                    console.log(response.status)
                                    swal({
                                        title: 'Successful confirmation of payment',
                                        icon: 'success',
                                        button: 'Tutup',
                                        dangerMode: true
                                    }).then(
                                        (tutup) => {
                                            if (tutup) {
                                                this.confirmData = this.confirmData.filter(i => i.id_transaksi != this.detailData.id_transaksi)
                                            }
                                        }
                                    )
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    if (error.response.status === 412) {
                                        swal({
                                            icon: 'error',
                                            title: 'Failed send email!'
                                        })
                                    } else if (error.response.status === 500) {
                                        swal({
                                            title: 'Internal server error',
                                            icon: 'error'
                                        })
                                    }
                                }
                            )
                    }
                }
            )
        },

    }
}
</script>
<!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> -->


<style scoped>
@media screen and (min-width: 768px) {
    .desktop-only {
        margin-left: 400px;
    }

    a,
    p {
        text-decoration: none;
        color: white;
    }

    .button {
        background: #FBCA1F;
        font-family: inherit;
        padding: 0.1em 1.3em;
        font-weight: 900;
        font-size: 18px;
        border: 3px solid black;
        border-radius: 0.4em;
        box-shadow: 0.1em 0.1em;
    }

    .button:hover {
        transform: translate(-0.05em, -0.05em);
        box-shadow: 0.15em 0.15em;
    }

    .button:active {
        transform: translate(0.05em, 0.05em);
        box-shadow: 0.05em 0.05em;
    }

    .kotak {
        display: flex;
        margin-left: 100px;
        align-items: center;
        height: 35px;
    }

    .input {
        max-width: 190px;
        height: 100%;
        outline: none;
        font-size: 14px;
        font-weight: 500;
        background-color: #53535f;
        caret-color: #f7f7f8;
        color: #fff;
        padding: 7px 10px;
        border: 2px solid transparent;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
        border-bottom-left-radius: 7px;
        margin-right: 1px;
        transition: all .2s ease;
    }

    .input:hover {
        border: 2px solid rgba(255, 255, 255, 0.16);
    }

    .input:focus {
        border: 2px solid #a970ff;
        background-color: #0e0e10;
    }

    .search__btn {
        border: none;
        cursor: pointer;
        background-color: rgba(42, 42, 45, 1);
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
        height: 100%;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .search__btn:hover {
        background-color: rgba(54, 54, 56, 1);
    }

}
</style>