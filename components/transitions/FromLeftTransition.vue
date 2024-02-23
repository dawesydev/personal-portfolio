<!-- MyTransition.vue -->
<script>
import gsap from 'gsap'
</script>

<template>
    <!-- wrap the built-in Transition component -->
    <Transition name="from-left-transition" @enter="onEnter" @leave="onLeave">
        <slot></slot>
        <!-- pass down slot content -->
    </Transition>
</template>
