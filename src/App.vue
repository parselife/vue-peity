<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <v-line :values="arr" size="xl" fill-color="#ffff00" stroke-color="#008888"></v-line>
        <button @click="click">change</button>
    </div>
</template>

<script>
    import SvgUnsupported from './lib/support/SvgUnsupported'

    export default {
        name: "app",
        components: {SvgUnsupported},
        data() {
            return {
                msg: "Vue-peity",
                arr: [10, 3, 6, 2, 7, 8, 12, 17, 9]
            };
        },
        methods:{
            click(){
                this.arr = this.arr.concat(Math.random()*15)
            }
        }
    };
</script>

<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
