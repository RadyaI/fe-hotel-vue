<template>
    <div>
        <div class="container">
            <button class="btn btn-info mt-4" data-bs-toggle="modal" data-bs-target="#formTambahData">Tambah User</button>
            <table class="table table-hover table-striped mt-4">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i, no) in dataUser" :key="no">
                        <td>{{ no + 1 }}</td>
                        <td>{{ i.nama }}</td>
                        <td>{{ i.email }}</td>
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-primary">Update</button>
                                <button class="btn btn-danger" @click="deleteData(i)">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="modal fade" id="formTambahData" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Data</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="tambahUser">
                        <div class="modal-body">

                            <label for="nama">Nama:</label>
                            <input type="text" class="form-control" v-model="dataTambahUser.nama" required
                                placeholder="Masukkan nama...">

                            <label for="email">Email:</label>
                            <input type="email" class="form-control" v-model="dataTambahUser.email" required
                                placeholder="Masukkan email...">

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'

export default {
    name: 'App',
    data() {
        return {
            dataUser: {},
            dataTambahUser: {}
        }
    },
    mounted() {
        this.getDataApi()
    },
    methods: {
        getDataApi() {
            axios.get('http://localhost:8000/api/getTesData')
                .then(
                    (response) => {
                        console.log(response)
                        this.dataUser = response.data
                    }
                )
        },
        tambahUser() {
            axios.post('http://localhost:8000/api/TambahData', this.dataTambahUser)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            icon: 'success',
                            title: 'Berhasil',
                            dangerMode: true,
                            button: 'Close'
                        }).then(
                            (close) => {
                                if (close) {
                                    this.dataUser.push(response.data)
                                }
                            }
                        )

                    }
                )
        },
        deleteData(i) {
            let idUser = i.no
            swal({
                icon: 'warning',
                title: 'Hapus?',
                dangerMode: true,
                buttons: ['Tidak', 'Iya']
            }).then(
                (hapus) => {
                    if (hapus) {
                        axios.delete(`http://localhost:8000/api/deleteDataTes/${i.no}`)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Berhasil',
                                    })
                                    this.dataUser = this.dataUser.filter(i => i.no != idUser)
                                }
                            )
                    }
                }
            )
        }

    }
}
</script>
