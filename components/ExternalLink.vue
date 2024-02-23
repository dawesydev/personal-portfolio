<script setup>
defineProps({
    text: String,
})
</script>

<template>
    <NuxtLink>
        <span
            class="cursor-pointer flex items-center text-noir font-body font-medium hover:text-tangerine transform duration-300 ease-in-out"
        >
            <Icon
                class="mr-1"
                name="mingcute:external-link-line"
                size="1.4em"
            />
            {{ text }}
        </span>
    </NuxtLink>
</template>

<style scoped></style>
