<script setup>
defineProps({
    class: String,
})
</script>

<template>
    <div :class="class">
        <slot />
    </div>
</template>
