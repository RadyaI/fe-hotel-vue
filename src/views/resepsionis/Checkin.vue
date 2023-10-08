
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
                            <li class="nav-item"><router-link to="/resepsionis" class="nav-link">Confirm</router-link></li>
                            <li class="nav-item active"><router-link to="/checkin" class="nav-link">CheckIn</router-link>
                            </li>
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
                    <h2 class="page-cover-tittle">Check-In</h2>
                    <ol class="breadcrumb" style="display: flex; justify-content: center;">
                        <li><a href="/resepsionis">Home</a></li>
                        <li class="active">CheckIn</li>
                    </ol>
                </div>
            </div>
        </section>
        <!--================Breadcrumb Area =================-->

        <!--===============> Not Confirm data area <===============-->
        <section class="about_history_area section_gap" style="margin-top: -5pc;">
            <div class="container">
                <div class="card mb-4" v-for="i in checkinData" :key="i.id_transaksi">
                    <div class="card-header">
                        Tanggal pesan / {{ i.tgl_pesan }}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Atas nama <b style="color: blue;">{{ i.nama_tamu }}</b></h5>
                        <p class="card-text text-light badge-success badge">Payment has been confirmed</p> <br>
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
                                <label for="total">Total Harga - {{ detailData.jumlah_kamar }} Malam - {{
                                    detailData.jumlah_kamar }} Kamar :</label>
                                <input type="number" class="form-control" readonly v-model="detailData.total_harga">
                            </div>
                        </div>
                        <div class="row">
                            <!-- <div class="col">
                                <label for="kamar">No Kamar:</label>
                                <input type="number" class="form-control" v-model="nomorKamar" required
                                    placeholder="Masukkan nomor kamar..." autocomplete="off">
                            </div>
                            <div class="col">
                                <input type="hidden" class="form-control">
                            </div>
                            <div class="col">
                                <input type="hidden" class="form-control">
                            </div> -->
                            <label for="kamar">No Kamar:</label>
                            <div class="col">
                                <input type="button" class="btn btn-secondary" data-bs-toggle="modal"
                                    data-bs-target="#addNoKamar" value="Masukkan kamar">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="button" @click="checkIn" data-bs-dismiss="modal">Check-In</button>
                    </div>
                </div>
            </div>
        </div>
        <!--==========> Modal Detail Confirm End <==========-->

        <!-- Modal Buat Nomor Kamar -->
        <div class="modal fade" id="addNoKamar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Choose a {{ detailData.jumlah_kamar }} room</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <div class="col">
                                <select class="form-control" v-model="searchLantai">
                                    <option value="">Pilih Lantai</option>
                                    <option value="1">Lantai 1</option>
                                    <option value="2">Lantai 2</option>
                                    <option value="3">Lantai 3</option>
                                </select>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Search Number" v-model="searchNumber">
                            </div>
                        </div>

                        <button class="btn btn-success"
                            :class="{ 'btn-success': i.status === 'kosong', 'btn-danger': i.status === 'dipakai' }"
                            style="margin-left: 7px; margin-top:7px;" value="success" v-for="i in filterNomor"
                            :key="i.id_no_kamar" @click="submitKamar(i)">
                            {{ i.no_kamar }}
                        </button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                            data-bs-target="#confirmDetail">Back</button>

                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Buat Nomor Kamar End -->

    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
// import swal from 'sweetalert'

export default {
    name: 'app',
    data() {
        return {
            checkinData: {},
            detailData: {},
            nomorKamar: '',

            searchNumber: '',
            searchLantai: '',

            noKamarData: {}
        }
    },
    computed: {
        filterNomor() {
            let filtered = this.noKamarData
            if (this.searchLantai) {
                filtered = filtered.filter(i => i.lantai.toString().toLowerCase().includes(this.searchLantai.toString().toLowerCase()))
            }
            if (this.searchNumber) {
                filtered = filtered.filter(i => i.no_kamar.toString().includes(this.searchNumber.toString()))
            }

            return filtered
        }
    },
    mounted() {
        this.getCheckin()
    },
    methods: {
        getCheckin() {
            axios.get('http://localhost:8000/api/confirmed')
                .then(
                    (res) => {
                        console.log(res)
                        this.checkinData = res.data[0]
                    }
                )
            axios.get('http://localhost:8000/api/getNoKamar')
                .then(
                    (response) => {
                        console.log(response)
                        this.noKamarData = response.data
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
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
        checkIn() {
            let data = {
                no_kamar: this.nomorKamar
            }
            console.log(data)
            swal({
                icon: 'warning',
                title: 'Want to check in?',
                buttons: ["No", "yes"],
                dangerMode: true
            }).then(
                (checkin) => {
                    if (checkin) {
                        axios.put('http://localhost:8000/api/checkin/' + this.detailData.id_transaksi, data)
                            .then(
                                (res) => {
                                    console.log(res.status)
                                    swal({
                                        icon: 'success',
                                        title: 'Check-In Successful',
                                        button: 'Close',
                                        dangerMode: true
                                    }).then(
                                        (close) => {
                                            if (close) {
                                                this.checkinData = this.checkinData.filter(i => i.id_transaksi != this.detailData.id_transaksi)
                                            }
                                        }
                                    )
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error.response)
                                    if (error.response.status === 422) {
                                        swal({
                                            icon: 'error',
                                            title: 'The room is already in use!'
                                        })
                                    } else if (error.response.status === 500) {
                                        let status = error.response.status
                                        swal({
                                            icon: 'error',
                                            title: `Error Code ${status}`
                                        })
                                    }
                                }
                            )
                    }
                }
            )
        },
        submitKamar(i) {
            let noKamar = i.id_no_kamar
            console.log(noKamar)
            let data = {
                id_transaksi: this.detailData.id_transaksi,
                jumlah_kamar: this.detailData.jumlah_kamar,
                no_kamar: this.noKamarData.no_kamar,
                status: 'kosong'
            }
            swal({
                icon: 'warning',
                title: 'Choose this room?',
                buttons: ['No', 'Yes'],
                dangerMode: true
            }).then(
                (next) => {
                    if (next) {
                        axios.put(`http://localhost:8000/api/chooseRoom/${i.no_kamar}`, data)
                            .then(
                                (response) => {
                                    console.log(response)
                                    const index = this.noKamarData.find(i => i.id_no_kamar === noKamar)
                                    if (index) {
                                        index.status = 'dipakai'
                                    }
                                    swal({
                                        icon: 'success',
                                        title: 'Berhasil memilih kamar',
                                        button: 'Ok'
                                    })
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