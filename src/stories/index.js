import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Header from './header.vue'

storiesOf('Header', module)
    .add('story as a component', () => ({
        components: { Header },
        template: "<Header @click='alert(1)'></Header>"
    }))