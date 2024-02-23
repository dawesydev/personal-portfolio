<script setup>
const props = defineProps({
    title: String,
    description: String,
})
</script>

<template>
    <div
        class="text-parchment w-[350px] h-[450px] grid grid-cols-1 grid-rows-4 group"
    >
        <div class="row-start-1 row-span-3 rounded-t-2xl overflow-hidden">
            <NuxtImg
                src="/policy-page.png"
                loading="lazy"
                format="webp"
                class="grayscale group-hover:grayscale-0 transition-all duration-300 ease-linear"
            />
        </div>
        <div
            class="bg-parchment text-noir row-start-4 rounded-b-2xl px-4 py-2.5 flex flex-col space-y-1"
        >
            <h3
                class="text-xl group-hover:text-tangerine transition-all duration-200 ease-linear"
            >
                {{ props.title }}
            </h3>
            <p class="font-body text-sm leading-tight">
                {{ props.description }}
            </p>
        </div>
    </div>
</template>
