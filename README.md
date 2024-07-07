# vue-plugin-v-rap
Why not check the [live demo](https://jsfiddle.net/LemonNekoFiddle/vs4mpq8e/7/) first?
## Usage
`main.ts`
```typescript
import { createApp } from 'vue'
import { pluginRap } from '@lemonneko/vue-plugin-v-rap'
import App from './App.vue'

createApp(App)
  .use(pluginRap, 'A link of a video about rap')
  .mount('#app')
```
`App.vue`
```
<template>
  <div v-rap>
    You can put anything here if you want.
  </div>
</template>
```
## ~~TODO LIST~~ ROAD MAP
Yes, I am serious, there are todo list of this project.
- [ ] Set value of `v-rap` to `false` to stop rap, back the elements to you.
- [ ] Set value of `v-rap` to `2024` to rap in VueConf China 2024.
- [ ] ~~Set value of `v-rap` to `2025` to rap in VueConf China 2025.~~
- [ ] ~~Set value of `v-rap` to `2026` to rap in VueConf China 2026.~~
