<script setup>
defineProps({
    backgroundColor: String,
})
</script>

<template>
    <div class="h-screen z-50" :class="backgroundColor"><slot /></div>
</template>
