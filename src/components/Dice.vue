<template>
    <section class="dice" :class="{ rolling: isRolling }">
        <section class="dot" v-for="(, index) in createRange(1, activeRoll)" :class="classes(activeRoll, index)">
        </section>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import createRange from '../utils/createRange';
import getRandomIntInRange from '../utils/getRandomIntInRange';
const ANIMATION_DURATION = 1000; //ms

const isRolling = ref<boolean>(true);
const randomRoll = ref<number>(getRandomIntInRange(1, 6));
const MIN_ROLL_NUMBER = 1;
const MAX_ROLL_NUMBER = 6;

onMounted(() => {
    let intervalId: number;
    setTimeout(() => {
        isRolling.value = false;
    }, ANIMATION_DURATION)

    intervalId = setInterval(() => {
        randomRoll.value = getRandomIntInRange(MIN_ROLL_NUMBER, MAX_ROLL_NUMBER)
        if (!isRolling.value) {
            clearInterval(intervalId)
        }
    }, Math.floor(ANIMATION_DURATION / 20))

})

onUnmounted(() => {
    isRolling.value = true;
})

const classes = (roll: number, index: number) => {
    /* ones */
    if (roll === 1) {
        return 'position-center'
    }

    /* twos */
    if (roll === 2) {
        switch (index) {
            case 0:
                return 'position-first-end'
                break;
            case 1:
                return 'position-third-start'
                break;
            default:
                console.log('No match');
        }
    }
    /* threes */
    if (roll === 3) {
        switch (index) {
            case 0:
                return 'position-first-end';
                break;
            case 1:
                return 'position-center';
                break;
            case 2:
                return 'position-third-start'
                break;
            default:
                console.log('No match');
        }
    }

    /* fours */
    if (roll === 4) {
        switch (index) {
            case 0:
                return 'position-first-start';
                break;
            case 1:
                return 'position-first-end';
                break;
            case 2:
                return 'position-third-start'
                break;
            case 3:
                return 'position-third-end'
                break;
            default:
                console.log('No match');
        }
    }

    /* fives */
    if (roll === 5) {
        switch (index) {
            case 0:
                return 'position-first-start';
                break;
            case 1:
                return 'position-first-end';
                break;
            case 2:
                return 'position-center'
                break;
            case 3:
                return 'position-third-start'
                break;
            case 4:
                return 'position-third-end'
                break;
            default:
                console.log('No match');
        }
    }

    /* sixes */
    if (roll === 6) {
        switch (index) {
            case 0:
                return 'position-first-start';
                break;
            case 1:
                return 'position-first-end';
                break;
            case 2:
                return 'position-second-start'
                break;
            case 3:
                return 'position-second-end'
                break;
            case 4:
                return 'position-third-start'
                break;
            case 5:
                return 'position-third-end'
                break;
            default:
                console.log('No match');
        }
    }

    return ''
}

const props = defineProps<{ roll: number }>()

const activeRoll = computed(() => {
    if (isRolling.value) {
        return randomRoll.value
    }

    return props.roll
})

</script>

<style scoped>
.dice {
    border-radius: var(--borderRadius);
    background-color: white;
    width: 5rem;
    height: 5rem;
    border: .2px solid black;
    border-radius: 0.5rem;
    padding: 2px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: .5rem;
    grid-template-areas: "first-start first-middle first-end"
        "second-start second-middle second-end"
        "third-start third-middle third-end";
}

.rolling {
    animation: roll 0.8s ease-in-out infinite;
}

@keyframes roll {
    0% {
        transform: rotate(0deg) rotateY(0deg) scale(1);
    }

    25% {
        transform: rotate(90deg) rotateY(90deg) scale(1.2);
    }

    50% {
        transform: rotate(180deg) rotateY(180deg) scale(1);
    }

    75% {
        transform: rotate(270deg) rotateY(270deg) scale(1.2);
    }

    100% {
        transform: rotate(360deg) rotateY(360deg) scale(1);
    }
}

.dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: black;
}


.position-first-start {
    grid-area: first-start;
}

.position-first-middle {
    grid-area: first-start;
}

.position-first-end {
    grid-area: first-end;
}

.position-second-start {
    grid-area: second-start;
}

.position-center {
    grid-area: second-middle;
}

.position-second-end {
    grid-area: second-end;
}

.position-third-start {
    grid-area: third-start;
}

.position-third-middle {
    grid-area: third-middle;
}

.position-third-end {
    grid-area: third-end;
}

@media screen and (max-width:768px) {
    .dice {
        width: 3rem;
        height: 3rem
    }

    .dot {
        width: 0.5rem;
        height: 0.5rem
    }
}

@media screen and (max-width:576px) {
    .dice {
        width: 2rem;
        height: 2rem
    }

    .dot {
        width: 0.3rem;
        height: 0.3rem
    }
}
</style>