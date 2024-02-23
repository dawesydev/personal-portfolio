<template>
    <NuxtLink
        class="flex items-center justify-center h-15 w-15 md:h-20 md:w-20 rounded-full bg-tangerine text-sm text-center text-parchment hover:bg-noir hover:border hover:border-parchment transition-all duration-100 ease-in-out cursor-pointer"
    >
        {{ text }}
    </NuxtLink>
</template>

<script setup>
defineProps({
    text: String,
})
</script>
