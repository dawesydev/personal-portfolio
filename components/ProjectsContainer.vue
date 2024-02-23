<script setup>
// import { onMounted, onUnmounted, ref } from 'vue'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const section = ref()
// const title = ref()
// let ctx

// onMounted(() => {
//     ctx = gsap.context(() => {
//         gsap.from(title.value, {
//             x: -300,
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

//         // })
//     }, section.value) // <- Scope!
// })

// onUnmounted(() => {
//     ctx.revert() // <- Easy Cleanup!
// })
</script>

<template>
    <section class="flex flex-col h-full pl-2" ref="section">
        <div ref="title">
            <!-- <div> -->
            <SectionTitle topText="recent" bottomText="projects" />
        </div>
        <div ref="scroll">
            <HorizontalScroll />
        </div>
    </section>
</template>
