<style scoped>
@media screen and (min-width: 768px) {
    .desktop-only {
        margin-left: 400px;
    }
}

.rating {
    display: flex;
    flex-direction: row-reverse;
    gap: 0.3rem;
    --stroke: #666;
    --fill: #ffc73a;
}

.rating input {
    appearance: unset;
}

.rating label {
    cursor: pointer;
}

.rating svg {
    width: 3rem;
    height: 3rem;
    overflow: visible;
    fill: transparent;
    stroke: var(--stroke);
    stroke-linejoin: bevel;
    stroke-dasharray: 12;
    animation: idle 4s linear infinite;
    transition: stroke 0.2s, fill 0.5s;
}

@keyframes idle {
    from {
        stroke-dashoffset: 24;
    }
}

.rating label:hover svg {
    stroke: var(--fill);
}

.rating input:checked~label svg {
    transition: 0s;
    animation: idle 4s linear infinite, yippee 0.75s backwards;
    fill: var(--fill);
    stroke: var(--fill);
    stroke-opacity: 0;
    stroke-dasharray: 0;
    stroke-linejoin: miter;
    stroke-width: 8px;
}

@keyframes yippee {
    0% {
        transform: scale(1);
        fill: var(--fill);
        fill-opacity: 0;
        stroke-opacity: 1;
        stroke: var(--stroke);
        stroke-dasharray: 10;
        stroke-width: 1px;
        stroke-linejoin: bevel;
    }

    30% {
        transform: scale(0);
        fill: var(--fill);
        fill-opacity: 0;
        stroke-opacity: 1;
        stroke: var(--stroke);
        stroke-dasharray: 10;
        stroke-width: 1px;
        stroke-linejoin: bevel;
    }

    30.1% {
        stroke: var(--fill);
        stroke-dasharray: 0;
        stroke-linejoin: miter;
        stroke-width: 8px;
    }

    60% {
        transform: scale(1.2);
        fill: var(--fill);
    }
}


a {
    text-decoration: none;
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
                            <li class="nav-item"><a class="nav-link" href="/check">Check Booking</a></li>
                            <li class="nav-item active"><a class="nav-link" href="/feedback">Feedback</a></li>
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
                    <h2 class="page-cover-tittle">Feedback</h2>
                    <ol class="breadcrumb" style="display: flex; justify-content: center;">
                        <li><a href="/">Home</a></li>
                        <li class="active">Feedback</li>
                    </ol>
                </div>
            </div>
        </section>
        <!--================Breadcrumb Area =================-->

        <!--================Contact Area =================-->
        <section class="contact_area section_gap">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="contact_info">
                            <div class="info_item">
                                <i class="lnr lnr-home"></i>
                                <h6>California, United States</h6>
                                <p>Santa monica bullevard</p>
                            </div>
                            <div class="info_item">
                                <i class="lnr lnr-phone-handset"></i>
                                <h6><a href="#">00 (440) 9865 562</a></h6>
                                <p>Mon to Fri 9am to 6 pm</p>
                            </div>
                            <div class="info_item">
                                <i class="lnr lnr-envelope"></i>
                                <h6><a href="#">support@colorlib.com</a></h6>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <form @submit.prevent="sendFeedback" class="row contact_form" id="contactForm">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" v-model="feedback.id_transaksi" class="form-control" id="name"
                                        name="name" placeholder="Enter your ID Transaksi" autocomplete="off" required>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="email" name="email"
                                        placeholder="Enter email address" autocomplete="off" required>
                                </div>
                                <!--=====> RATING <=====-->
                                <div class="rating mt-3" style="margin-right:100px;">
                                    <input value="5" v-model="feedback.review" name="star-radio" id="star-1" type="radio">
                                    <label for="star-1">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                                                pathLength="360"></path>
                                        </svg>
                                    </label>
                                    <input value="4" v-model="feedback.review" name="star-radio" id="star-2" type="radio">
                                    <label for="star-2">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                                                pathLength="360"></path>
                                        </svg>
                                    </label>
                                    <input value="3" v-model="feedback.review" name="star-radio" id="star-3" type="radio">
                                    <label for="star-3">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                                                pathLength="360"></path>
                                        </svg>
                                    </label>
                                    <input value="2" v-model="feedback.review" name="star-radio" id="star-4" type="radio">
                                    <label for="star-4">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                                                pathLength="360"></path>
                                        </svg>
                                    </label>
                                    <input value="1" v-model="feedback.review" name="star-radio" id="star-5" type="radio">
                                    <label for="star-5">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                                                pathLength="360"></path>
                                        </svg>
                                    </label>
                                </div>
                                <!--=====> RATING <=====-->

                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <textarea v-model="feedback.isi" class="form-control" name="message" id="message"
                                        rows="1" placeholder="Enter Message" required></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 text-right">
                                <button type="submit" value="submit" class="btn theme_btn btn-warning text-light">Send
                                    Feedback</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!--================Contact Area =================-->

    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    name: 'App',
    data() {
        return {
            feedback: {}
        }
    },
    methods: {
        sendFeedback() {
            swal({
                icon: 'warning',
                title: 'Send Feedback',
                buttons: true,
                dangerMode: true
            }).then(
                (send) => {
                    if (send) {
                        axios.post('http://localhost:8000/api/feedback', this.feedback)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        title: 'Success send feedback',
                                        icon: 'success',
                                        button: 'Close',
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
                                        swal({
                                            icon: 'error',
                                            title: 'Internal Server Error'
                                        })
                                    } else if (error.response.status === 400) {
                                        swal({
                                            icon: 'error',
                                            title: 'Complete your transaction first'
                                        })
                                    } else if (error.response.status === 404) {
                                        swal({
                                            icon: 'error',
                                            title: 'Your ID transaction is not found!'
                                        })
                                    } else if (error.response.status === 406) {
                                        swal({
                                            icon: 'error',
                                            title: 'You already send 2 feedback!'
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