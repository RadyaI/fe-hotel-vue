<style scoped>
@media screen and (min-width: 768px) {
    .desktop-only {
        margin-left: 400px;
    }
}

th{
    background-color: black;
    color: white;
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
                    <a class="navbar-brand logo_h" href="/"><img src="./Logo.png" alt=""></a>
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
                            <li class="nav-item"><router-link to="/check" class="nav-link">Check Booking</router-link></li>
                            <li class="nav-item"><router-link to="/feedback" class="nav-link">Feedback</router-link>
                            </li>
                            <li class="nav-item" @click="keluar" v-if="role === 'tamu'"><router-link to=""
                                    class="nav-link">LogOut</router-link></li>
                            <li class="nav-item" v-else><router-link to="/login" class="nav-link">Login</router-link></li>
                            <li class="nav-item active" @click="checkHistory"><router-link to=""
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
                    <h2 class="page-cover-tittle">History</h2>
                    <ol class="breadcrumb" style="display: flex; justify-content: center;">
                        <li><a href="/">Home</a></li>
                        <li class="active">History</li>
                    </ol>
                </div>
            </div>
        </section>
        <!--================Breadcrumb Area =================-->

        <!--================Contact Area =================-->
        <div class="container mt-3" style="margin-bottom: 100px;">
            <table class="table table-hover table-striped">

                <thead>
                    <tr>
                        <th>No</th>
                        <th>Id Transaksi</th>
                        <th>Tgl Pesan</th>
                        <th>Tgl Check In</th>
                        <th>Tgl Check Out</th>
                        <th>Jumlah Kamar</th>
                        <th>Total Harga</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(i, no) in historyData" :key="no">
                        <td>{{ no + 1 }}</td>
                        <td>{{ i.id_transaksi }}</td>
                        <td>{{ i.tgl_pesan }}</td>
                        <td>{{ i.check_in }}</td>
                        <td>{{ i.check_out }}</td>
                        <td>{{ i.jumlah_kamar }}</td>
                        <td>{{ i.total_harga }}</td>
                        <td>{{ i.status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
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
            role: localStorage.getItem('role'),
            feedback: {},
            historyData: {},
        }
    },
    mounted() {
        this.getUserHistory()
    },
    computed: {

    },
    methods: {
        getUserHistory() {
            axios.get(`http://localhost:8000/api/user/history/${localStorage.getItem('email')}`)
                .then(
                    (response) => {
                        console.log(response)
                        this.historyData = response.data
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        },
        checkHistory() {
            if (this.role == 'tamu') {
                console.log('ya ini halaman history')
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