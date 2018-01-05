import { configure } from '@storybook/vue'

import Vue from 'vue'

import Header from '../src/stories/header.vue'
import barrage from '../src/stories/barrage.vue'

// Register custom components.
Vue.component('Header', Header)
Vue.component('barrage', barrage)

function loadStories() {
    // You can require as many stories as you need.
    require('../src/stories')
}

configure(loadStories, module)