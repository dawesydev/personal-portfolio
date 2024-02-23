<script setup>
// import { onMounted, onUnmounted, ref } from 'vue'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const div = ref()
// const title = ref()
// let ctx

// onMounted(() => {
//     ctx = gsap.context(() => {
//         gsap.from(title.value, {
//             x: -250,
//         })
//         gsap.to(title.value, {
//             x: 15,
//             scrollTrigger: {
//                 trigger: title.value,
//                 start: 'bottom bottom',
//                 end: 'top 20%',
//                 scrub: true,
//             },
//         })
//     }, section.value)
// })

// onUnmounted(() => {
//     ctx.revert()
// })
const props = defineProps({
    topText: String,
    bottomText: String,
})
</script>

<template>
    <div class="text-6xl flex flex-col -space-y-2 pt-8">
        <h2 class="text-tangerine italic">{{ props.topText }}</h2>
        <h2 class="text-parchment">{{ props.bottomText }}</h2>
    </div>
</template>
