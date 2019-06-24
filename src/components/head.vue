<template>
    <div>
        <mt-header :title="title">
            <div slot="left" v-show="show">
                <mt-button icon="back" @click="goback">返回</mt-button>
            </div>
            <mt-button icon="search" slot="right" @click="gotosearch" v-show="shows"></mt-button>

        </mt-header>
        <!-- <van-nav-bar title="标题" left-text="返回" left-arrow>
            <van-icon name="search" slot="right" />
        </van-nav-bar> -->

    </div>
</template>
<script>
    export default {
        data() {
            return {
                shows: true,
            }
        },
        props: ['title', 'show'],
        methods: {
            goback() {
                // history.back(-1)
                // window.history.back();
                this.$router.go(-1)
            },
            gotosearch() {
                // this.$router.push({ name: 'search' })
            }
        },
        mounted() {
            if (this.$route.name == 'search') {
                this.shows = false;
            }
        }
    }
</script>

<style lang="css" scoped>
    .mint-search-list {
        position: relative;
        display: none;
    }
</style>