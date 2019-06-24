<template>

    <div>
          
        
        <router-view></router-view>
       
        <Footer ></Footer>
        <!-- <Mfoot></Mfoot> -->
    </div>

</template>




<script>
    import Mfoot from "@/components/Mfoot.vue"
    export default {
        name: "index",
        components:{
            Mfoot
        },

    }

</script>