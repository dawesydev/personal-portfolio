<script setup></script>

<template>
    <footer
        class="grid grid-cols-5 grid-flow-row auto-rows-fr p-3 gap-5 h-full"
    >
        <TextWithGraphicBlock />
        <TextBlock
            class="border-2 border-parchment rounded-2xl col-start-3 col-span-3 row-start-1 row-span-2 grid grid-cols-8 grid-rows-3 py-4 px-6 text-parchment"
        >
            <div class="col-start-5 col-span-4 flex justify-end">
                <div class="text-right text-3xl">
                    <h3 class="italic text-2xl">coding from</h3>
                    <h3 class="uppercase">amsterdam, nl</h3>
                </div>
            </div>
            <div
                class="col-start-6 col-span-3 row-start-3 flex justify-end text-base font-body text-right"
            >
                <p>open to exciting remote <br />and/or local opportunities</p>
            </div>
            <div class="col-start-1 row-start-3 col-span-1 flex items-end">
                <NuxtImg src="/witw.webp" class="h-12" />
            </div>
        </TextBlock>
        <TextBlock
            class="bg-parchment rounded-2xl col-start-3 col-span-3 row-start-3 row-span-2 grid grid-cols-8 grid-rows-3 py-4 px-6 text-noir"
        >
            <div class="col-start-5 col-span-4 flex justify-end">
                <div class="text-right text-3xl">
                    <h3 class="italic text-2xl">sound interesting?</h3>
                    <h3 class="uppercase">let's talk</h3>
                </div>
            </div>
            <div
                class="col-start-6 col-span-3 row-start-3 flex justify-end text-base font-body text-right"
            >
                <p>+44 7823 543120 <br />danieldawes@protonmail.com</p>
            </div>
            <div class="col-start-1 row-start-3 col-span-1 flex items-end">
                <NuxtImg src="/EX.svg" class="h-10" />
            </div>
        </TextBlock>
        <!-- <div
            class="bg-parchment rounded-2xl col-start-3 col-span-3 row-start-3 row-span-2"
        ></div> -->
        <OversizedLogoBlock />
    </footer>
</template>
