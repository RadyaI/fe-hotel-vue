<template>
    <div>
        <nav>
            <h1 class="cihuy" style="font-family:'Times New Roman';">Royal <span class="hidden">Hotel</span></h1>
            <h5 class="alamat">Hotel royal by Radya</h5>
            <p class="alamat1">Malang, Indonesia</p>
            <p class="alamat2">08771624815, royal@gmail.com</p>
            <p class="alamat3">www.royalhotel.com</p>
        </nav>
        <h3 class="print" style="position: absolute; left: 42%; top: 23%;">Booking Detail</h3>
        <table class="table1">
            <tr>
                <td class="thtd" style="font-weight: bold;">ID Booking</td>
                <th class="thtd" style="font-weight:400; position: relative; left: 30px;">: {{ data_transaksi.id_transaksi
                }}
                </th>
            </tr>
            <tr>
                <td class="thtd" style="font-weight: bold;">Nama</td>
                <th class="thtd" style="font-weight:400; position: relative; left: 30px;">: {{ data_transaksi.nama_tamu }}
                </th>
            </tr>
            <tr>
                <td class="thtd" style="font-weight: bold;">Email</td>
                <th class="thtd" style="font-weight:400; position: relative; left: 30px;">: {{ data_transaksi.email }}</th>
            </tr>
            <tr>
                <td class="thtd" style="font-weight: bold;">Check-In</td>
                <th class="thtd" style="font-weight:400; position: relative; left: 30px;">: {{ data_transaksi.check_in }}
                </th>
            </tr>
            <tr>
                <td class="thtd" style="font-weight: bold;">Check-Out</td>
                <th class="thtd" style="font-weight:400; position: relative; left: 30px;">: {{ data_transaksi.check_out }}
                </th>
            </tr>
            <tr>
                <td class="thtd" style="font-weight: bold;">Booking Date</td>
                <th class="thtd" style="font-weight:400; position: relative; left: 30px;">: {{ data_transaksi.tgl_pesan }}
                </th>
            </tr>
        </table>
        <div class="container">
            <table class="table table-striped bg-dark text-light mt-3">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Type</th>
                        <th>Harga</th>
                        <th>Jumlah</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody style="color: white;">
                    <tr>
                        <td style="color: black;">1</td>
                        <td style="color: black;">{{ data_transaksi.type_kamar }}</td>
                        <td style="color: black;">{{ data_transaksi.harga }}</td>
                        <td style="color: black;">{{ data_transaksi.jumlah_kamar }}</td>
                        <td style="color: black;">{{ data_transaksi.total_harga }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="btn-group">
                <input type="submit" class="btn btn-outline-dark print" @click="print()" value="Print">
                <button @click="kembali()" class="btn btn-outline-danger print">Kembali</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
    data() {
        return {
            data_transaksi: {},
        }
    },
    mounted() {
        this.gettransaksi(this.$route.params.nama)
    },
    methods: {
        gettransaksi(nama) {
            axios.get('http://localhost:8000/api/gettransaksi/' + nama)
                .then(
                    (response) => {
                        console.log(response)
                        this.data_transaksi = response.data
                    }
                )
        },
        print() {
            window.print()
            setTimeout(() => {
                location.href = '/'
            }, 1100)
        }
    }
}
</script>


<style>
@media print {

    .print {
        display: none;
    }

    .hidden {
        display: none;
    }

    .table1{
        margin-top: 300px;
    }
}

.thtd {
    font-size: 20px;
}

.table1 {
    margin-left: 15%;
    margin-top: 200px;
}

.cihuy {
    position: absolute;
    top: 5%;
    left: 7%;
    font-size: 60px;
}

.alamat {
    position: absolute;
    right: 7%;
    top: 7%;
}

.alamat1 {
    position: absolute;
    right: 7%;
    top: 11%;
}

.alamat2 {
    position: absolute;
    right: 7%;
    top: 14%;
}

.alamat3 {
    position: absolute;
    right: 7%;
    top: 17%;
}
</style>