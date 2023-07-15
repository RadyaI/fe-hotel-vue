
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
                            <li class="nav-item"><a class="nav-link" href="/resepsionis">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="/checkin">CheckIn</a></li>
                            <li class="nav-item active"><a class="nav-link" href="/checkout">Checkout</a></li>
                            <li class="nav-item"><a class="nav-link" href="/history">History</a></li>
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
                    <h2 class="page-cover-tittle">Check-Out</h2>
                    <ol class="breadcrumb" style="display: flex; justify-content: center;">
                        <li><a href="/resepsionis">Home</a></li>
                        <li class="active">CheckOut</li>
                    </ol>
                </div>
            </div>
        </section>
        <!--================Breadcrumb Area =================-->

        <!--===============> Ongoing data area <===============-->
        <section class="about_history_area section_gap" style="margin-top: -5pc;">
            <div class="container">
                <div class="card mb-4" v-for="i in ongoingData" :key="i.id_transaksi">
                    <div class="card-header">
                        Tanggal pesan / {{ i.tgl_pesan }}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Atas nama <b style="color: blue;">{{ i.nama_tamu }}</b></h5>
                        <p class="card-text text-light badge-danger badge">In use</p> <br>
                        <button class="button" @click="getDetailBooking(i)" data-bs-toggle="modal"
                            data-bs-target="#confirmDetail"> Detail
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!--===============> Ongoing data area <===============-->

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

        <!--==========> Modal Detail Confirm <==========-->
        <div class="modal fade" id="confirmDetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <button type="submit" class="button" @click="checkOut">Check-Out</button>
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

export default {
    name: 'App',
    data() {
        return {
            ongoingData: {},
            detailData: {},
            nomorKamar: ''
        }
    },
    mounted() {
        this.getOngoing()
    },
    methods: {
        getOngoing() {
            axios.get('http://localhost:8000/api/ongoing')
                .then(
                    (res) => {
                        console.log(res)
                        this.ongoingData = res.data
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
        checkOut() {
            let id = this.detailData.id_transaksi
            let id_kamar = this.detailData.id_kamar
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                dangerMode: true,
                buttons: ['No', 'Yes']
            }).then(
                (checkout) => {
                    if (checkout) {
                        axios.put(`http://localhost:8000/api/checkout/${id}/${id_kamar}`)
                            .then(
                                (res) => {
                                    console.log(res)
                                    swal({
                                        icon: 'success',
                                        title: 'Check-Out Successfull',
                                        button: 'close',
                                        dangerMode: true
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
                                    if (error.response.status === 500) {
                                        let title = error.response.data.message
                                        swal({
                                            title: `${title}`,
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

}
</style>