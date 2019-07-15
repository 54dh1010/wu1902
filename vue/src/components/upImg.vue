<template>
    <div>
        <div id="photo">
            <img :src="imgs" alt="" class="imgs"   @click.stop="upload">
            <!-- <van-uploader >
                <van-button icon="photo" type="primary" ref="one"   >上传图片</van-button>
            </van-uploader> -->
            <input type="file" accept="images/*" ref="one" @change="upImg" style="display: none">
        </div>
    </div>
</template>
<style scoped>
    .imgs{
        width: 2rem;
        height: 2rem;
        border-radius:50%; 

    }

</style>


<script>
    export default {
        name: 'photo',
        data() {
            return {
                imgs: '',
            }
        },
        methods: {
            upload() {
                this.$refs.one.click()
            },
            upImg() {
                console.log(111)
                let file = this.$refs.one.files[0]
                let data = new FormData();
                data.append("avatar", file)

                this.$axios({
                    url: "/vue/uploadAvatar",
                    method: "POST",
                    contentType: false,
                    processDate: false,
                    data: data
// processData: false,//默认情况下，通过data选项传递进来的数据，如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
// contentType: false,//数据编码格式不使用jquery的方式 为了避免 JQuery 对其操作，从而失去分界符，而使服务器不能正常解析文件。data:formData,
                }).then(res => {
                    console.log(res.data)
                    // this.imgs=res.data.avatarurl.replace(/public/,'http://localhost:1902/')
                    this.imgs = res.data.avatarurl.replace(/public/, 'http://localhost:1902/');

                    localStorage.imgs = this.imgs
                })
            }
        },
        mounted() {
            if (localStorage.imgs) {
                this.imgs = localStorage.imgs
            } else {
                this.imgs = require('@/assets/images/photo.png')
            }
        }
    }
</script>