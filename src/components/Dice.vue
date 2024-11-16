<template>
    <div class="dot" v-for="(, index) in createRange(1, roll)" :class="classes(roll, index)"></div>
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
</style>