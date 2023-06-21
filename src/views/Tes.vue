<template>
    <div>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
// import swal from 'sweetalert'

export default {
    name: 'App',
    data() {
        return {
            dataUser: {}
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            axios.get('http://localhost:3000/getUser')
                .then(
                    (response) => {
                        console.log(response)
                    }   
                )
        }
    }
}
</script>
