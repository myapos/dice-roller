<template>
    <section class="dice">
        <section class="dot" v-for="(, index) in createRange(1, roll)" :class="classes(roll, index)"></section>
    </section>
</template>

<script setup lang="ts">
import createRange from '../utils/createRange';

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

defineProps<{ roll: number }>()
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
        "third-start third-middle third-end"
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