<script setup>
import ButtonPill from './ButtonPill'
import Man from './icons/Man.vue'
import GridContainer from './GridContainer.vue'
</script>

<template>
    <GridContainer>
        <div
            class="col-start-1 col-span-full px-12 py-8 flex justify-between row-start-1 row-span-1"
        >
            <Logo />
            <div class="fixed top-8 right-8 z-40">
                <ButtonCircle text="let's talk" />
            </div>
        </div>
        <div
            class="col-start-1 col-span-8 row-start-3 row-span-1 font-sans px-12 flex flex-col justify-end -space-y-2"
        >
            <h2 class="text-tangerine text-7xl italic">frontend</h2>
            <h2 class="text-7xl text-noir">developer</h2>
        </div>
        <div
            class="col-start-1 col-span-5 row-start-4 row-span-1 font-body font-medium px-12 pt-4"
        >
            <p>
                A creative coder with a keen-eye for design, finds joy in
                solving problems with the latest frontend technologies.
            </p>
        </div>
        <div
            class="col-start-1 col-span-8 row-start-5 row-span-1 font-sans px-12 flex space-x-6 items-center"
        >
            <ExternalLink to="https://github.com/dawesydev" text="GitHub" />
            <ExternalLink
                to="https://www.linkedin.com/in/daniel-dawes/"
                text="LinkedIn"
            />
            <ButtonPill to="#about" text="about" />
        </div>
        <div class="row-start-2 col-start-8 col-span-5">
            <Man />
        </div>
    </GridContainer>
</template>
