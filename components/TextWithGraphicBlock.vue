<template>
    <div
        class="bg-parchment rounded-2xl col-start-1 col-span-2 row-start-1 row-span-4 grid grid-cols-3 overflow-hidden p-6 gap-4"
    >
        <div
            class="col-start-1 col-span-2 font-body grid grid-rows-[minmax(0, auto),_1fr,_1fr]"
        >
            <h2 class="font-semibold text-3xl">Hi, I'm Dan</h2>
            <div>
                <p class="font-normal text-base pr-4">
                    A creative front-end developer, I craft digital experiences
                    through innovative design and intuitive user interfaces.
                </p>
                <p class="font-normal text-base pt-2 pr-4">
                    With a passion for clean code and pixel-perfect precision, I
                    specialize in turning visions into captivating apps that
                    engage and inspire.
                </p>
            </div>
            <div class="flex space-x-4 text-base items-end">
                <ExternalLink to="https://github.com/dawesydev" text="GitHub" />
                <ExternalLink
                    to="https://www.linkedin.com/in/daniel-dawes/"
                    text="LinkedIn"
                />
            </div>
        </div>
        <div class="col-start-3 col-span-1 relative">
            <NuxtImg src="/MAN-05.svg" class="absolute h-96 right-4 top-4" />
        </div>
    </div>
</template>
