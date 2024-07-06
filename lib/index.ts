import type { App, Plugin } from 'vue'

export const pluginRap: Plugin = (app: App, link: string) => {
  app.directive('rap', {
    mounted(el: HTMLElement) {
      while (el.firstChild) {
        el.removeChild(el.firstChild)
      }

      const video = document.createElement('video')
      video.src = link
      video.style.width = '100%'
      video.style.height = '100%'
      video.controls = true
      video.autoplay = true
      el.appendChild(video)
    },
  })
}
