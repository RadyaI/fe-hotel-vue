<style scoped>
@media screen and (min-width: 768px) {
    .desktop-only {
        margin-left: 400px;
    }
}

a,
p {
    color: white;
    text-decoration: none;
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
</style>


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
                            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
                            <li class="nav-item active"><router-link to="/check" class="nav-link">Check Booking</router-link></li>
                            <li class="nav-item"><router-link to="/feedback" class="nav-link">Feedback</router-link></li>
                            <li class="nav-item" @click="keluar" v-if="role === 'tamu'"><router-link
                                   to="" class="nav-link">LogOut</router-link></li>
                            <li class="nav-item" v-else><router-link to="/login" class="nav-link">Login</router-link></li>
                            <li class="nav-item" @click="checkHistory"><router-link to=""
                                    class="nav-link">History</router-link></li>
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
                    <h2 class="page-cover-tittle">Check your booking here</h2>
                    <ol class="breadcrumb" style="display: flex; justify-content: center;">
                        <li><a href="/">Home</a></li>
                        <li class="active">Check</li>
                    </ol>
                </div>
            </div>
        </section>
        <!--================Breadcrumb Area =================-->

        <!--==========> Search Area <==========-->
        <div class="kotak mt-3">
            <input type="text" autocomplete="off" v-model="id_transaksi" name="text" class="input"
                placeholder="Search your ID...">
            <button class="search__btn" @click="checkBooking">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                    <path
                        d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                        fill="#efeff1"></path>
                </svg>
            </button>
        </div>
        <!--==========> Search Area <==========-->

        <!--==========> Card Area <==========-->
        <div class="container mt-5 mb-5">
            <div class="card" v-for="data in bookingData" :key="data.id_transaksi">
                <h5 class="card-header">Tanggal pesan / {{ data.tgl_pesan }}</h5>
                <div class="card-body">
                    <h5 class="card-title">Atas nama <b>{{ data.nama_tamu }}</b> / ID Booking <b>{{ data.id_transaksi }}</b>
                    </h5>
                    <!-- <p class="card-text" style="color:black;">With supporting text below as a natural lead-in to additional content.</p> -->
                    <a :href="'/print/' + data.nama_tamu" class="text-primary"
                        style="text-decoration: underline;">Print Bukti</a>
                </div>
            </div>
        </div>
        <!--==========> Card Area <==========-->

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

    </div>
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'

export default {
    name: 'App',
    data() {
        return {
            role: localStorage.getItem('role'),
            id_transaksi: '',
            bookingData: {}
        }
    },
    methods: {
        checkBooking() {
            if (this.id_transaksi === '') {
                swal({
                    icon: 'warning',
                    title: 'Form nya di isi dulu dong'
                })
            } else {
                axios.get('http://localhost:8000/api/cekbooking/' + this.id_transaksi)
                    .then(
                        (response) => {
                            console.log(response)
                            this.bookingData = response.data
                        }
                    )
                    .catch(
                        (error) => {
                            console.log(error)
                            if (error.response.status === 404) {
                                swal({
                                    icon: 'error',
                                    title: 'Data Not Found!'
                                })
                            } else if (error.response.status === 410) {
                                swal({
                                    icon: 'error',
                                    title: 'Your booking has not been confirmed'
                                })
                            } else if (error.response.status === 500) {
                                swal({
                                    icon: 'error',
                                    title: 'Your id is no longer usable here'
                                })
                            }
                        }
                    )
            }

        },
        checkHistory() {
            if (this.role == 'tamu') {
                this.$router.push('/history/user')
            } else {
                swal({
                    icon: 'error',
                    title: 'Login Dulu',
                    buttons: ['close', 'login']
                }).then(
                    (next) => {
                        if (next) {
                           location.href = '/login'
                        }
                    }
                )
            }
        },
        keluar() {
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                dangerMode: true,
                buttons: ['No', 'Yes']
            }).then(
                (yes) => {
                    if (yes) {
                        localStorage.clear()
                        swal({
                            icon: 'success',
                            title: 'LogOut successfully',
                            dangerMode: true,
                            buttons: ['Close', 'Login']
                        }).then(
                            (login) => {
                                if (login) {
                                    location.href = '/login'
                                } else {
                                    location.reload()
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