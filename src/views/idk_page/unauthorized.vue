<template>
    <div>
        <div class="cookieCard" style="position: fixed; top: 40%; left: 50%; transform: translate(-50%, -50px);">
            <p class="cookieHeading">401.</p>
            <p class="cookieDescription">Mau ngepain coba? <a
                    href="#" style="text-decoration: none;">-_-</a></p>
            <button class="acceptButton" @click="balik">Iya Balik</button>
        </div>

    </div>
</template>

<script>

export default {
    name: 'App',
    methods: {
        balik(){
            if(localStorage.getItem('role') === 'resepsionis'){
                location.href = '/resepsionis'
            } else if(localStorage.getItem('role') === 'admin'){
                location.href = '/admin'
            }
        }
    }
}
</script>

<style scoped>
.cookieCard {
    width: 300px;
    height: 200px;
    background: linear-gradient(to right, rgb(137, 104, 255), rgb(175, 152, 255));
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    position: relative;
    overflow: hidden;
}

.cookieCard::before {
    width: 150px;
    height: 150px;
    content: "";
    background: linear-gradient(to right, rgb(142, 110, 255), rgb(208, 195, 255));
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    right: -25%;
    top: -25%;
}

.cookieHeading {
    font-size: 1.5em;
    font-weight: 600;
    color: rgb(241, 241, 241);
    z-index: 2;
}

.cookieDescription {
    font-size: 0.9em;
    color: rgb(241, 241, 241);
    z-index: 2;
}

.cookieDescription a {
    color: rgb(241, 241, 241);
}

.acceptButton {
    padding: 11px 20px;
    background-color: #7b57ff;
    transition-duration: .2s;
    border: none;
    color: rgb(241, 241, 241);
    cursor: pointer;
    font-weight: 600;
    z-index: 2;
}

.acceptButton:hover {
    background-color: #714aff;
    transition-duration: .2s;
}
</style>