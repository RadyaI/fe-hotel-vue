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
                            <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                            <li class="nav-item active"><a class="nav-link" href="/check">Check Booking</a></li>
                            <li class="nav-item"><a class="nav-link" href="/feedback">Feedback</a></li>
                            <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
                            <li class="nav-item submenu dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false">Blog</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                                    <li class="nav-item"><a class="nav-link" href="blog-single.html">Blog Details</a></li>
                                </ul>
                            </li>
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
                <div class="row">
                    <div class="col-lg-3  col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h6 class="footer_title">About Agency</h6>
                            <p>The world has become so fast paced that people don't want to stand by reading a page of
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

    </div>
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'

export default {
    name: 'App',
    data() {
        return {
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

        }
    }
}
</script>