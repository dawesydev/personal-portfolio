<script setup>
defineProps({
    text: String,
})
</script>

<template>
    <NuxtLink
        class="cursor-pointer bg-noir text-parchment font-body font-medium px-4 py-2 rounded-full uppercase lg:text-md transition duration-150 ease-out hover:bg-tangerine w-fit"
    >
        {{ text }}
    </NuxtLink>
</template>

<style scoped></style>
