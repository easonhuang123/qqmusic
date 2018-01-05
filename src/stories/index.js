import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Header from './header.vue'
import barrage from './barrage.vue'
import rank from './rank.vue'

storiesOf('Header', module)
    .add('story as a component', () => ({
        components: { Header },
        template: "<Header @click='alert(1)'></Header>"
    }))

storiesOf('barrage', module)
    .add('story as a component', () => ({
        components: { barrage },
        template: "<barrage></barrage>"
    }))

storiesOf('rank', module)
    .add('story as a component', () => ({
        components: { rank },
        template: "<rank></rank>"
    }))