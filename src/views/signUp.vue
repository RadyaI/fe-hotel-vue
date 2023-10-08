<template>
    <div>
        <div class="background">
            <div class="form-container" style=" position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                <p class="title">Create Account</p>
                <form class="form" @submit.prevent="signUpNow">
                    <div class="input-group">
                        <label for="username">Name</label>
                        <input type="text" v-model="signUp.name" required autocomplete="off" name="username" id="username"
                            placeholder="">
                    </div>
                    <div class="input-group">
                        <label for="username">Email</label>
                        <input type="email" v-model="signUp.email" required autocomplete="off" name="username" id="username"
                            placeholder="">
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="signUp.password" required name="password" id="password"
                            placeholder="">
                        <div class="forgot">
                            <!-- <a rel="noopener noreferrer" href="#">Forgot Password ?</a> -->
                        </div>
                    </div>
                    <button type="submit" class="sign mt-3">Sign Up</button>
                </form>
                <br>
                <p class="signup">Already have an account?
                    <router-link to="/login">Login</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import swal from 'sweetalert'

export default {
    name: 'App',
    data() {
        return {
            signUp: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signUpNow() {
            swal({
                icon: 'warning',
                title: 'Data Sudah Benar?',
                dangerMode: true,
                buttons: ['Belum', 'Sudah']
            }).then(
                (lanjut) => {
                    if (lanjut) {
                        axios.post('http://localhost:8000/api/register', this.signUp)
                            .then(
                                (response) => {
                                    console.log(response)
                                    localStorage.setItem('token', response.data.token)
                                    localStorage.setItem('nama', response.data.user.name)
                                    localStorage.setItem('id', response.data.user.id)
                                    localStorage.setItem('role', response.data.user.level)
                                    localStorage.setItem('email', response.data.user.email)
                                    location.href = '/'
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    if (error.response.status === 400) {
                                        swal({
                                            icon: 'error',
                                            title: `${error.response.data}`
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

.background {
    /* Menetapkan gambar sebagai latar belakang */
    background-image: url('loginBG.jpg');
    /* Ganti dengan path gambar Anda */
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* Atur gaya lainnya sesuai kebutuhan Anda */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    /* Untuk menjadikan latar belakang berada di belakang konten */
    opacity: 1;
    /* Opsional: atur opasitas gambar latar belakang */
}
.form-container {
    width: 320px;
    border-radius: 0.75rem;
    background-color: rgba(17, 24, 39, 1);
    padding: 2rem;
    color: rgba(243, 244, 246, 1);
}

.title {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
}

.form {
    margin-top: 1.5rem;
}

.input-group {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.input-group label {
    display: block;
    color: rgba(156, 163, 175, 1);
    margin-bottom: 4px;
}

.input-group input {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgba(55, 65, 81, 1);
    outline: 0;
    background-color: rgba(17, 24, 39, 1);
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
}

.input-group input:focus {
    border-color: rgba(167, 139, 250);
}

.forgot {
    display: flex;
    justify-content: flex-end;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
    margin: 8px 0 14px 0;
}

.forgot a,
.signup a {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
    font-size: 14px;
}

.forgot a:hover,
.signup a:hover {
    text-decoration: underline rgba(167, 139, 250, 1);
}

.sign {
    display: block;
    width: 100%;
    background-color: rgba(167, 139, 250, 1);
    padding: 0.75rem;
    text-align: center;
    color: rgba(17, 24, 39, 1);
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
}

.social-message {
    display: flex;
    align-items: center;
    padding-top: 1rem;
}

.line {
    height: 1px;
    flex: 1 1 0%;
    background-color: rgba(55, 65, 81, 1);
}

.social-message .message {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(156, 163, 175, 1);
}

.social-icons {
    display: flex;
    justify-content: center;
}

.social-icons .icon {
    border-radius: 0.125rem;
    padding: 0.75rem;
    border: none;
    background-color: transparent;
    margin-left: 8px;
}

.social-icons .icon svg {
    height: 1.25rem;
    width: 1.25rem;
    fill: #fff;
}

.signup {
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
}
</style>