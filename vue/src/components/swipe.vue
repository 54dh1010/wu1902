<template>
    <div class="swiper-container" :id="id">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'swipe',
        props: ["id", "options"],
        // mounted() {
        //     // var mySwiper=new Swiper("#"+this.id,this.options)
        //     var mySwiper = new Swiper("#"+this.id, this.options
               
        //     )
        //     console.log("#" + this.id)
        // },
        updated(){
            var mySwiper = new Swiper("#"+this.id, this.options
               
            )
        }
    }


</script>