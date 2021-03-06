// add any global decorators in this config
// https://github.com/storybookjs/storybook/tree/master/addons/centered

import { configure, addDecorator } from '@storybook/svelte'
import Centered from '@storybook/addon-centered/svelte'
import './tailwind.css'

addDecorator(Centered)

configure(() => {}, module)
