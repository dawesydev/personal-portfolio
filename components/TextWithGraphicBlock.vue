<template>
    <div
        class="bg-parchment rounded-2xl col-start-1 col-span-2 row-start-1 row-span-4 grid grid-cols-3 overflow-hidden p-6 gap-4"
    >
        <div class="col-start-1 col-span-2 font-body">
            <h2 class="font-semibold text-2xl">Hi, I'm Dan</h2>
            <p class="font-normal text-base pt-8 pr-4">
                A creative front-end developer, I craft digital experiences
                through innovative design and intuitive user interfaces.
            </p>
            <p class="font-normal text-base pt-2 pr-4">
                With a passion for clean code and pixel-perfect precision, I
                specialize in turning visions into captivating apps that engage
                and inspire.
            </p>
            <div class="flex space-x-4 pt-12 text-sm">
                <ExternalLink to="https://github.com/dawesydev" text="GitHub" />
                <ExternalLink
                    to="https://www.linkedin.com/in/daniel-dawes/"
                    text="LinkedIn"
                />
            </div>
        </div>
        <div class="col-start-3 col-span-1 relative">
            <NuxtImg src="/MAN-05.svg" class="absolute h-80 right-4 top-4" />
        </div>
    </div>
</template>
