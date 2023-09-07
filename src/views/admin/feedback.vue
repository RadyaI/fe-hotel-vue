<template>
    <div>
        <!--================Header Area =================-->
        <header class="header_area">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="index.html"><img src="/image/Logo.png" alt=""></a>
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
                            <li class="nav-item"><router-link class="nav-link" to="/roomnumber">Room Number</router-link>
                            </li>
                            <li class="nav-item active"><router-link class="nav-link"
                                    to="/admin/feedback">FeedBack</router-link>
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
                    <h2 class="page-cover-tittle">Feedback</h2>
                    <ol class="breadcrumb" style="display: flex; justify-content: center;">
                        <li><a href="/admin">Home</a></li>
                        <li class="active">Feedback</li>
                    </ol>
                </div>
            </div>
        </section>
        <!--================Breadcrumb Area =================-->

        <!--================Manage Area =================-->
        <div class="mt-5 mb-5">
            <div class="row mb-4" style="margin-left: 62px;">
                <div class="col-5">
                    <input type="email" class="form-control" v-model="searchUser" placeholder="Search email...">
                </div>
            </div>
            <div class="container">

                <div class="card">
                    <div class="card-header">
                        {{ this.totalFeedback }} Feedback
                    </div>
                    <div class="card-body">
                        <!-- ISI -->
                        <div class="card mb-4" v-for="i in filterData" :key="i.id_feedback">
                            <div class="card-header">
                                From <span style="color: blue; cursor: pointer;" @click="getDetailFeedback(i)"
                                    data-bs-toggle="modal" data-bs-target="#sendFeedback">{{ i.email }} <span
                                        style="color: black;">/
                                        {{ i.tgl }}</span></span>
                            </div>
                            <div class="card-body">
                                <p style="color: black;" class="card-text">{{ i.isi }} <br> <br>
                                    <span style="font-weight:bold;" class="badge badge-success">{{ i.review }} / 5</span>
                                </p>

                            </div>
                        </div>
                        <!-- ISI -->
                    </div>
                </div>

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

        <!-- Send Feedback Modal -->
        <div class="modal fade" id="sendFeedback" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Send Feedback</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent=sendFeedbackToUser>
                        <div class="modal-body">

                            <label for="email">Email: </label>
                            <input type="email" class="form-control" readonly v-model="feedbackDetail.email">

                            <label for="feedback">Feedback: </label>
                            <textarea class="form-control" readonly v-model="feedbackDetail.isi" cols="10"
                                rows="3"></textarea>

                            <label for="balasan">Balasan: </label>
                            <textarea class="form-control" v-model="sendFeedback.balasan" required cols="10"
                                rows="3"></textarea>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Send Feedback Modal End -->

    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';


export default {
    name: 'app',
    data() {
        return {
            sendFeedback: {},
            feedbackData: {},
            feedbackDetail: {},
            totalFeedback: '',
            searchUser: '',
        }
    },
    computed: {
        filterData() {
            let filterData = this.feedbackData
            if (this.searchUser) {
                filterData = filterData.filter(i => i.email.toLowerCase().toString().includes(this.searchUser.toLowerCase))
            }
            return filterData
        }
    },
    mounted() {
        this.getFeedback()
    },
    methods: {
        auth() {
            // axios.defaults.headers.common['Accept'] = ''
        },
        sendFeedbackToUser() {
            let data = {
                'id_transaksi': this.feedbackDetail.id_transaksi,
                'email': this.feedbackDetail.email,
                'balasan': this.sendFeedback.balasan
            }
            axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                buttons: ['No', 'Yes'],
                dangerMode: true
            })
                .then(
                    (send) => {
                        if (send) {
                            swal({
                                title: 'Wait',
                                button: false
                            })
                            axios.post('http://localhost:8000/api/sendFeedbackToUser', data)
                                .then(
                                    (response) => {
                                        console.log(response)
                                        swal({
                                            icon: 'success',
                                            title: 'Berhasil mengirim email',
                                            button: 'Ok'
                                        })
                                    }
                                )
                                .catch(
                                    (error) => {
                                        console.log(error)
                                        swal({
                                            icon: 'error'
                                        })
                                    }
                                )
                        }
                    }
                )
        },
        getDetailFeedback(i) {
            axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
            axios.get(`http://localhost:8000/api/selectFeedback/${i.id_feedback}`)
                .then(
                    (response) => {
                        console.log(response)
                        this.feedbackDetail = response.data[0]
                    }
                )
        },
        getFeedback() {
            axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
            axios.get('http://localhost:8000/api/getFeedback')
                .then(
                    (response) => {
                        console.log(response)
                        this.feedbackData = response.data
                    }
                )
            axios.get('http://localhost:8000/api/countFeedback')
                .then(
                    (response) => {
                        console.log(response)
                        this.totalFeedback = response.data
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
                        localStorage.removeItem('token')
                        localStorage.removeItem('id')
                        localStorage.removeItem('role')
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