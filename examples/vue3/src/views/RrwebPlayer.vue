<template>
  <section>
    <div ref="rrwebPlayerRef"></div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";

const events: any[] = [
  {
    type: 4,
    data: {
      href: "http://localhost:5174/#/request",
      width: 622,
      height: 802,
    },
    timestamp: 1725125691946,
  },
  {
    type: 2,
    data: {
      node: {
        type: 0,
        childNodes: [
          {
            type: 1,
            name: "html",
            publicId: "",
            systemId: "",
            id: 2,
          },
          {
            type: 2,
            tagName: "html",
            attributes: {
              lang: "en",
            },
            childNodes: [
              {
                type: 2,
                tagName: "script",
                attributes: {
                  type: "text/javascript",
                  src:
                    "chrome-extension://kmphamhphplpcjcabjdjjklfjmgkmpba/scripts/overrideRequest.js",
                },
                childNodes: [],
                id: 4,
              },
              {
                type: 2,
                tagName: "head",
                attributes: {},
                childNodes: [
                  {
                    type: 3,
                    textContent: "\n    ",
                    id: 6,
                  },
                  {
                    type: 2,
                    tagName: "script",
                    attributes: {
                      type: "module",
                      src: "http://localhost:5174/@vite/client",
                    },
                    childNodes: [],
                    id: 7,
                  },
                  {
                    type: 3,
                    textContent: "\n\n    ",
                    id: 8,
                  },
                  {
                    type: 2,
                    tagName: "meta",
                    attributes: {
                      charset: "UTF-8",
                    },
                    childNodes: [],
                    id: 9,
                  },
                  {
                    type: 3,
                    textContent: "\n    ",
                    id: 10,
                  },
                  {
                    type: 2,
                    tagName: "link",
                    attributes: {
                      rel: "icon",
                      type: "image/svg+xml",
                      href: "http://localhost:5174/vite.svg",
                    },
                    childNodes: [],
                    id: 11,
                  },
                  {
                    type: 3,
                    textContent: "\n    ",
                    id: 12,
                  },
                  {
                    type: 2,
                    tagName: "meta",
                    attributes: {
                      name: "viewport",
                      content: "width=device-width, initial-scale=1.0",
                    },
                    childNodes: [],
                    id: 13,
                  },
                  {
                    type: 3,
                    textContent: "\n    ",
                    id: 14,
                  },
                  {
                    type: 2,
                    tagName: "title",
                    attributes: {},
                    childNodes: [
                      {
                        type: 3,
                        textContent: "Vite + Vue + TS",
                        id: 16,
                      },
                    ],
                    id: 15,
                  },
                  {
                    type: 3,
                    textContent: "\n  ",
                    id: 17,
                  },
                  {
                    type: 2,
                    tagName: "style",
                    attributes: {
                      type: "text/css",
                      "data-vite-dev-id":
                        "/Users/yu/Documents/Libs/track/easy-track/examples/vue3/src/tailwind.css",
                    },
                    childNodes: [
                      {
                        type: 3,
                        textContent:
                          '*, ::before, ::after { box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(229, 231, 235); }::before, ::after { --tw-content: \'\'; }html, :host { line-height: 1.5; text-size-adjust: 100%; tab-size: 4; font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent; }body { margin: 0px; line-height: inherit; }hr { height: 0px; color: inherit; border-top-width: 1px; }abbr:where([title]) { text-decoration: underline dotted; }h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }a { color: inherit; text-decoration: inherit; }b, strong { font-weight: bolder; }code, kbd, samp, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-feature-settings: normal; font-variation-settings: normal; font-size: 1em; }small { font-size: 80%; }sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }sub { bottom: -0.25em; }sup { top: -0.5em; }table { text-indent: 0px; border-color: inherit; border-collapse: collapse; }button, input, optgroup, select, textarea { font-family: inherit; font-feature-settings: inherit; font-variation-settings: inherit; font-size: 100%; font-weight: inherit; line-height: inherit; letter-spacing: inherit; color: inherit; margin: 0px; padding: 0px; }button, select { text-transform: none; }button, input:where([type="button"]), input:where([type="reset"]), input:where([type="submit"]) { appearance: button; background-color: transparent; background-image: none; }progress { vertical-align: baseline; }::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto; }[type="search"] { appearance: textfield; outline-offset: -2px; }::-webkit-search-decoration { appearance: none; }::-webkit-file-upload-button { appearance: button; font: inherit; }summary { display: list-item; }blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre { margin: 0px; }fieldset { margin: 0px; padding: 0px; }legend { padding: 0px; }ol, ul, menu { list-style: none; margin: 0px; padding: 0px; }dialog { padding: 0px; }textarea { resize: vertical; }input::placeholder, textarea::placeholder { opacity: 1; color: rgb(156, 163, 175); }button, [role="button"] { cursor: pointer; }:disabled { cursor: default; }img, svg, video, canvas, audio, iframe, embed, object { display: block; vertical-align: middle; }img, video { max-width: 100%; height: auto; }[hidden] { display: none; }*, ::before, ::after { --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; --tw-contain-size: ; --tw-contain-layout: ; --tw-contain-paint: ; --tw-contain-style: ; }::backdrop { --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; --tw-contain-size: ; --tw-contain-layout: ; --tw-contain-paint: ; --tw-contain-style: ; }.visible { visibility: visible; }.collapse { visibility: collapse; }.fixed { position: fixed; }.absolute { position: absolute; }.relative { position: relative; }.bottom-0 { bottom: 0px; }.bottom-4 { bottom: 1rem; }.left-0 { left: 0px; }.right-0 { right: 0px; }.right-4 { right: 1rem; }.top-0 { top: 0px; }.mb-2 { margin-bottom: 0.5rem; }.mb-6 { margin-bottom: 1.5rem; }.mt-4 { margin-top: 1rem; }.mt-2 { margin-top: 0.5rem; }.mt-3 { margin-top: 0.75rem; }.block { display: block; }.inline-block { display: inline-block; }.inline { display: inline; }.flex { display: flex; }.table { display: table; }.list-item { display: list-item; }.hidden { display: none; }.h-10 { height: 2.5rem; }.h-60 { height: 15rem; }.w-10 { width: 2.5rem; }.border-collapse { border-collapse: collapse; }.transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }.cursor-pointer { cursor: pointer; }.resize { resize: both; }.flex-wrap { flex-wrap: wrap; }.items-center { align-items: center; }.justify-center { justify-content: center; }.gap-2 { gap: 0.5rem; }.gap-4 { gap: 1rem; }.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.rounded-full { border-radius: 9999px; }.border { border-width: 1px; }.bg-slate-500 { --tw-bg-opacity: 1; background-color: rgb(100 116 139 / var(--tw-bg-opacity)); }.bg-slate-700 { --tw-bg-opacity: 1; background-color: rgb(51 65 85 / var(--tw-bg-opacity)); }.text-left { text-align: left; }.text-center { text-align: center; }.text-xs { font-size: 0.75rem; line-height: 1rem; }.uppercase { text-transform: uppercase; }.capitalize { text-transform: capitalize; }.underline { text-decoration-line: underline; }.antialiased { -webkit-font-smoothing: antialiased; }.outline { outline-style: solid; }.transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }.ease-out { transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }',
                        isStyle: true,
                        id: 19,
                      },
                    ],
                    id: 18,
                  },
                  {
                    type: 2,
                    tagName: "style",
                    attributes: {
                      type: "text/css",
                      "data-vite-dev-id":
                        "/Users/yu/Documents/Libs/track/easy-track/examples/vue3/src/style.css",
                    },
                    childNodes: [
                      {
                        type: 3,
                        textContent:
                          ":root { font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif; line-height: 1.5; font-weight: 400; color-scheme: light dark; color: rgba(255, 255, 255, 0.87); background-color: rgb(36, 36, 36); font-synthesis: none; text-rendering: optimizelegibility; -webkit-font-smoothing: antialiased; }a { font-weight: 500; color: rgb(100, 108, 255); text-decoration: inherit; }a:hover { color: rgb(83, 91, 242); }body { min-width: 320px; min-height: 100vh; }h1 { font-size: 2.4em; line-height: 1.1; }button { border-radius: 8px; border: 1px solid transparent; padding: 0.6em 1.2em; font-size: 1em; font-weight: 500; font-family: inherit; background-color: rgb(26, 26, 26); cursor: pointer; transition: border-color 0.25s; }button:hover { border-color: rgb(100, 108, 255); }button:focus, button:focus-visible { outline: -webkit-focus-ring-color auto 4px; }#app { max-width: 1280px; margin: 0px auto; padding: 2rem; text-align: center; }@media (prefers-color-scheme: light) {\n  :root { color: rgb(33, 53, 71); background-color: rgb(255, 255, 255); }\n  a:hover { color: rgb(116, 123, 255); }\n  button { background-color: rgb(249, 249, 249); }\n}",
                        isStyle: true,
                        id: 21,
                      },
                    ],
                    id: 20,
                  },
                  {
                    type: 2,
                    tagName: "style",
                    attributes: {
                      type: "text/css",
                      "data-vite-dev-id":
                        "/Users/yu/Documents/Libs/track/easy-track/examples/vue3/src/components/HelloWorld.vue?vue&type=style&index=0&scoped=e17ea971&lang.css",
                    },
                    childNodes: [
                      {
                        type: 3,
                        textContent:
                          ".read-the-docs[data-v-e17ea971] { color: rgb(136, 136, 136); }",
                        isStyle: true,
                        id: 23,
                      },
                    ],
                    id: 22,
                  },
                  {
                    type: 2,
                    tagName: "style",
                    attributes: {
                      type: "text/css",
                      "data-vite-dev-id":
                        "/Users/yu/Documents/Libs/track/easy-track/node_modules/.pnpm/rrweb-player@1.0.0-alpha.4/node_modules/rrweb-player/dist/style.css",
                    },
                    childNodes: [
                      {
                        type: 3,
                        textContent:
                          '.replayer-wrapper { position: relative; }.replayer-mouse { position: absolute; width: 20px; height: 20px; transition: left 0.05s linear, top 0.05s linear; background-size: contain; background-position: 50% center; background-repeat: no-repeat; background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMwMCIgd2lkdGg9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA1MCA1MCI+PHBhdGggZD0iTTQ4LjcxIDQyLjkxTDM0LjA4IDI4LjI5IDQ0LjMzIDE4YTEgMSAwIDAwLS4zMy0xLjYxTDIuMzUgMS4wNmExIDEgMCAwMC0xLjI5IDEuMjlMMTYuMzkgNDRhMSAxIDAgMDAxLjY1LjM2bDEwLjI1LTEwLjI4IDE0LjYyIDE0LjYzYTEgMSAwIDAwMS40MSAwbDQuMzgtNC4zOGExIDEgMCAwMC4wMS0xLjQyem0tNS4wOSAzLjY3TDI5IDMyYTEgMSAwIDAwLTEuNDEgMGwtOS44NSA5Ljg1TDMuNjkgMy42OWwzOC4xMiAxNEwzMiAyNy41OEExIDEgMCAwMDMyIDI5bDE0LjU5IDE0LjYyeiIvPjwvc3ZnPg=="); border-color: transparent; }.replayer-mouse::after { content: ""; display: inline-block; width: 20px; height: 20px; background: rgb(73, 80, 246); border-radius: 100%; transform: translate(-50%, -50%); opacity: 0.3; }.replayer-mouse.active::after { animation: 0.2s ease-in-out 0s 1 normal none running click; }.replayer-mouse.touch-device { background-image: none; width: 70px; height: 70px; border-radius: 100%; margin-left: -37px; margin-top: -37px; border: 4px solid rgba(73, 80, 246, 0); transition: left linear, top linear, border-color 0.2s ease-in-out; }.replayer-mouse.touch-device.touch-active { border-color: rgb(73, 80, 246); transition: left 0.25s linear, top 0.25s linear, border-color 0.2s ease-in-out; }.replayer-mouse.touch-device::after { opacity: 0; }.replayer-mouse.touch-device.active::after { animation: 0.2s ease-in-out 0s 1 normal none running touch-click; }.replayer-mouse-tail { position: absolute; pointer-events: none; }@keyframes click { \n  0% { opacity: 0.3; width: 20px; height: 20px; }\n  50% { opacity: 0.5; width: 10px; height: 10px; }\n}@keyframes touch-click { \n  0% { opacity: 0; width: 20px; height: 20px; }\n  50% { opacity: 0.5; width: 10px; height: 10px; }\n}.rr-player { position: relative; background: white; float: left; border-radius: 5px; box-shadow: rgba(17, 16, 62, 0.12) 0px 24px 48px; }.rr-player__frame { overflow: hidden; }.replayer-wrapper { float: left; clear: both; transform-origin: left top; left: 50%; top: 50%; }.replayer-wrapper > iframe { border: none; }.rr-controller.svelte-19ke1iv.svelte-19ke1iv { width: 100%; height: 80px; background: rgb(255, 255, 255); display: flex; flex-direction: column; justify-content: space-around; align-items: center; border-radius: 0px 0px 5px 5px; }.rr-timeline.svelte-19ke1iv.svelte-19ke1iv { width: 80%; display: flex; align-items: center; }.rr-timeline__time.svelte-19ke1iv.svelte-19ke1iv { display: inline-block; width: 100px; text-align: center; color: rgb(17, 16, 62); }.rr-progress.svelte-19ke1iv.svelte-19ke1iv { flex: 1 1 0%; height: 12px; background: rgb(238, 238, 238); position: relative; border-radius: 3px; cursor: pointer; box-sizing: border-box; border-top: 4px solid rgb(255, 255, 255); border-bottom: 4px solid rgb(255, 255, 255); }.rr-progress.disabled.svelte-19ke1iv.svelte-19ke1iv { cursor: not-allowed; }.rr-progress__step.svelte-19ke1iv.svelte-19ke1iv { height: 100%; position: absolute; left: 0px; top: 0px; background: rgb(224, 225, 254); }.rr-progress__handler.svelte-19ke1iv.svelte-19ke1iv { width: 20px; height: 20px; border-radius: 10px; position: absolute; top: 2px; transform: translate(-50%, -50%); background: rgb(73, 80, 246); }.rr-controller__btns.svelte-19ke1iv.svelte-19ke1iv { display: flex; align-items: center; justify-content: center; font-size: 13px; }.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv { width: 32px; height: 32px; display: flex; padding: 0px; align-items: center; justify-content: center; background: none; border: none; border-radius: 50%; cursor: pointer; }.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv:active { background: rgb(224, 225, 254); }.rr-controller__btns.svelte-19ke1iv button.active.svelte-19ke1iv { color: rgb(255, 255, 255); background: rgb(73, 80, 246); }.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv:disabled { cursor: not-allowed; }.switch.svelte-9brlez.svelte-9brlez.svelte-9brlez { height: 1em; display: flex; align-items: center; }.switch.disabled.svelte-9brlez.svelte-9brlez.svelte-9brlez { opacity: 0.5; }.label.svelte-9brlez.svelte-9brlez.svelte-9brlez { margin: 0px 8px; }.switch.svelte-9brlez input[type="checkbox"].svelte-9brlez.svelte-9brlez { position: absolute; opacity: 0; }.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez { width: 2em; height: 1em; position: relative; cursor: pointer; display: block; }.switch.disabled.svelte-9brlez label.svelte-9brlez.svelte-9brlez { cursor: not-allowed; }.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez::before { content: ""; position: absolute; width: 2em; height: 1em; left: 0.1em; transition: background 0.1s; background: rgba(73, 80, 246, 0.5); border-radius: 50px; }.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez::after { content: ""; position: absolute; width: 1em; height: 1em; border-radius: 50px; left: 0px; transition: 0.2s; box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 5px 0px; background: rgb(252, 255, 244); animation: 0.2s ease-out 0s 1 normal none running switch-off; z-index: 2; }.switch.svelte-9brlez input[type="checkbox"].svelte-9brlez:checked + label.svelte-9brlez::before { background: rgb(73, 80, 246); }.switch.svelte-9brlez input[type="checkbox"].svelte-9brlez:checked + label.svelte-9brlez::after { animation: 0.2s ease-out 0s 1 normal none running switch-on; left: 1.1em; }',
                        isStyle: true,
                        id: 25,
                      },
                    ],
                    id: 24,
                  },
                ],
                id: 5,
              },
              {
                type: 3,
                textContent: "\n  ",
                id: 26,
              },
              {
                type: 2,
                tagName: "body",
                attributes: {},
                childNodes: [
                  {
                    type: 3,
                    textContent: "\n    ",
                    id: 28,
                  },
                  {
                    type: 2,
                    tagName: "div",
                    attributes: {
                      id: "app",
                      "data-v-app": "",
                    },
                    childNodes: [
                      {
                        type: 5,
                        textContent: "",
                        id: 30,
                      },
                    ],
                    id: 29,
                  },
                  {
                    type: 3,
                    textContent: "\n    ",
                    id: 31,
                  },
                  {
                    type: 2,
                    tagName: "script",
                    attributes: {
                      type: "module",
                      src: "http://localhost:5174/src/main.ts?t=1725125683577",
                    },
                    childNodes: [],
                    id: 32,
                  },
                  {
                    type: 3,
                    textContent: "\n  \n\n",
                    id: 33,
                  },
                ],
                id: 27,
              },
            ],
            id: 3,
          },
        ],
        id: 1,
      },
      initialOffset: {
        left: 0,
        top: 0,
      },
    },
    timestamp: 1725125691949,
  },
  {
    type: 3,
    data: {
      source: 0,
      texts: [],
      attributes: [],
      removes: [
        {
          parentId: 29,
          id: 30,
        },
      ],
      adds: [
        {
          parentId: 29,
          nextId: null,
          node: {
            type: 3,
            textContent: "",
            id: 34,
          },
        },
        {
          parentId: 29,
          nextId: 34,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              class: "mt-4",
            },
            childNodes: [],
            id: 35,
          },
        },
        {
          parentId: 35,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              class: "flex flex-wrap gap-2",
            },
            childNodes: [],
            id: 36,
          },
        },
        {
          parentId: 36,
          nextId: null,
          node: {
            type: 2,
            tagName: "input",
            attributes: {
              type: "file",
              name: "",
              id: "file",
            },
            childNodes: [],
            id: 37,
          },
        },
        {
          parentId: 29,
          nextId: 35,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              class: "mt-4",
            },
            childNodes: [],
            id: 38,
          },
        },
        {
          parentId: 29,
          nextId: 38,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              class: "mt-4",
            },
            childNodes: [],
            id: 39,
          },
        },
        {
          parentId: 29,
          nextId: 39,
          node: {
            type: 2,
            tagName: "nav",
            attributes: {
              class: "mt-4",
            },
            childNodes: [],
            id: 40,
          },
        },
        {
          parentId: 29,
          nextId: 40,
          node: {
            type: 2,
            tagName: "h1",
            attributes: {},
            childNodes: [],
            id: 41,
          },
        },
        {
          parentId: 29,
          nextId: 41,
          node: {
            type: 3,
            textContent: "",
            id: 42,
          },
        },
        {
          parentId: 41,
          nextId: null,
          node: {
            type: 3,
            textContent: "网络请求",
            id: 43,
          },
        },
        {
          parentId: 40,
          nextId: null,
          node: {
            type: 2,
            tagName: "a",
            attributes: {
              href: "http://localhost:5174/#/",
              class: "",
            },
            childNodes: [],
            id: 44,
          },
        },
        {
          parentId: 40,
          nextId: 44,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              style: "display: inline-block; width: 16px;",
            },
            childNodes: [],
            id: 45,
          },
        },
        {
          parentId: 40,
          nextId: 45,
          node: {
            type: 2,
            tagName: "button",
            attributes: {},
            childNodes: [],
            id: 46,
          },
        },
        {
          parentId: 46,
          nextId: null,
          node: {
            type: 3,
            textContent: "Go Back",
            id: 47,
          },
        },
        {
          parentId: 44,
          nextId: null,
          node: {
            type: 3,
            textContent: "Go to Home",
            id: 48,
          },
        },
        {
          parentId: 39,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              class: "flex flex-wrap gap-2",
            },
            childNodes: [],
            id: 49,
          },
        },
        {
          parentId: 39,
          nextId: 49,
          node: {
            type: 2,
            tagName: "h3",
            attributes: {
              class: "text-left mb-2",
            },
            childNodes: [],
            id: 50,
          },
        },
        {
          parentId: 50,
          nextId: null,
          node: {
            type: 3,
            textContent: "Fetch",
            id: 51,
          },
        },
        {
          parentId: 49,
          nextId: null,
          node: {
            type: 2,
            tagName: "input",
            attributes: {
              type: "file",
              name: "",
              id: "file",
            },
            childNodes: [],
            id: 52,
          },
        },
        {
          parentId: 49,
          nextId: 52,
          node: {
            type: 2,
            tagName: "button",
            attributes: {},
            childNodes: [],
            id: 53,
          },
        },
        {
          parentId: 49,
          nextId: 53,
          node: {
            type: 2,
            tagName: "button",
            attributes: {},
            childNodes: [],
            id: 54,
          },
        },
        {
          parentId: 49,
          nextId: 54,
          node: {
            type: 2,
            tagName: "button",
            attributes: {},
            childNodes: [],
            id: 55,
          },
        },
        {
          parentId: 55,
          nextId: null,
          node: {
            type: 3,
            textContent: "GET-200",
            id: 56,
          },
        },
        {
          parentId: 54,
          nextId: null,
          node: {
            type: 3,
            textContent: "GET-404",
            id: 57,
          },
        },
        {
          parentId: 53,
          nextId: null,
          node: {
            type: 3,
            textContent: "POST",
            id: 58,
          },
        },
        {
          parentId: 38,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              class: "flex flex-wrap gap-2",
            },
            childNodes: [],
            id: 59,
          },
        },
        {
          parentId: 38,
          nextId: 59,
          node: {
            type: 2,
            tagName: "h3",
            attributes: {
              class: "text-left mb-2",
            },
            childNodes: [],
            id: 60,
          },
        },
        {
          parentId: 60,
          nextId: null,
          node: {
            type: 3,
            textContent: "XHR",
            id: 61,
          },
        },
        {
          parentId: 59,
          nextId: null,
          node: {
            type: 2,
            tagName: "input",
            attributes: {
              type: "file",
              name: "",
              id: "file",
            },
            childNodes: [],
            id: 62,
          },
        },
        {
          parentId: 59,
          nextId: 62,
          node: {
            type: 2,
            tagName: "button",
            attributes: {},
            childNodes: [],
            id: 63,
          },
        },
        {
          parentId: 59,
          nextId: 63,
          node: {
            type: 2,
            tagName: "button",
            attributes: {},
            childNodes: [],
            id: 64,
          },
        },
        {
          parentId: 59,
          nextId: 64,
          node: {
            type: 2,
            tagName: "button",
            attributes: {},
            childNodes: [],
            id: 65,
          },
        },
        {
          parentId: 65,
          nextId: null,
          node: {
            type: 3,
            textContent: "GET-200",
            id: 66,
          },
        },
        {
          parentId: 64,
          nextId: null,
          node: {
            type: 3,
            textContent: "GET-404",
            id: 67,
          },
        },
        {
          parentId: 63,
          nextId: null,
          node: {
            type: 3,
            textContent: "POST",
            id: 68,
          },
        },
        {
          parentId: 35,
          nextId: 36,
          node: {
            type: 2,
            tagName: "h3",
            attributes: {
              class: "text-left mb-2",
            },
            childNodes: [],
            id: 69,
          },
        },
        {
          parentId: 69,
          nextId: null,
          node: {
            type: 3,
            textContent: "Axios",
            id: 70,
          },
        },
        {
          parentId: 36,
          nextId: 37,
          node: {
            type: 2,
            tagName: "button",
            attributes: {},
            childNodes: [],
            id: 71,
          },
        },
        {
          parentId: 36,
          nextId: 71,
          node: {
            type: 2,
            tagName: "button",
            attributes: {},
            childNodes: [],
            id: 72,
          },
        },
        {
          parentId: 36,
          nextId: 72,
          node: {
            type: 2,
            tagName: "button",
            attributes: {},
            childNodes: [],
            id: 73,
          },
        },
        {
          parentId: 73,
          nextId: null,
          node: {
            type: 3,
            textContent: "GET-200",
            id: 74,
          },
        },
        {
          parentId: 72,
          nextId: null,
          node: {
            type: 3,
            textContent: "GET-404",
            id: 75,
          },
        },
        {
          parentId: 71,
          nextId: null,
          node: {
            type: 3,
            textContent: "POST",
            id: 76,
          },
        },
      ],
    },
    timestamp: 1725125691957,
  },
  {
    type: 0,
    data: {},
    timestamp: 1725125691957,
  },
  {
    type: 3,
    data: {
      source: 0,
      texts: [],
      attributes: [],
      removes: [],
      adds: [
        {
          parentId: 27,
          nextId: null,
          node: {
            type: 2,
            tagName: "button",
            attributes: {
              id: "paste-helper-id",
              style:
                "width: 0px; height: 0px; padding: 0px; margin: 0px; border: 0px; display: none;",
            },
            childNodes: [],
            id: 77,
          },
        },
      ],
    },
    timestamp: 1725125692103,
  },
  {
    type: 3,
    data: {
      source: 0,
      texts: [],
      attributes: [],
      removes: [],
      adds: [
        {
          parentId: 5,
          nextId: null,
          node: {
            type: 2,
            tagName: "style",
            attributes: {
              type: "text/css",
            },
            childNodes: [],
            id: 78,
          },
        },
        {
          parentId: 78,
          nextId: null,
          node: {
            type: 3,
            textContent:
              '.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow { margin-left: -8px; position: absolute; }.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before, .react-datepicker__month-read-view--down-arrow::before, .react-datepicker__month-year-read-view--down-arrow::before { box-sizing: content-box; position: absolute; border: 8px solid transparent; height: 0px; width: 1px; }.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before, .react-datepicker__month-read-view--down-arrow::before, .react-datepicker__month-year-read-view--down-arrow::before { content: ""; z-index: -1; border-width: 8px; left: -8px; border-bottom-color: rgb(174, 174, 174); }.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle { top: 0px; margin-top: -8px; }.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before { border-top: none; border-bottom-color: rgb(240, 240, 240); }.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before { top: -1px; border-bottom-color: rgb(174, 174, 174); }.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow { bottom: 0px; margin-bottom: -8px; }.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before, .react-datepicker__month-read-view--down-arrow::before, .react-datepicker__month-year-read-view--down-arrow::before { border-bottom: none; border-top-color: rgb(255, 255, 255); }.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before, .react-datepicker__month-read-view--down-arrow::before, .react-datepicker__month-year-read-view--down-arrow::before { bottom: -1px; border-top-color: rgb(174, 174, 174); }.react-datepicker-wrapper { display: inline-block; padding: 0px; border: 0px; }.react-datepicker { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 0.8rem; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); border: 1px solid rgb(174, 174, 174); border-radius: 0.3rem; display: inline-block; position: relative; }.react-datepicker--time-only .react-datepicker__triangle { left: 35px; }.react-datepicker--time-only .react-datepicker__time-container { border-left: 0px; }.react-datepicker--time-only .react-datepicker__time, .react-datepicker--time-only .react-datepicker__time-box { border-bottom-left-radius: 0.3rem; border-bottom-right-radius: 0.3rem; }.react-datepicker__triangle { position: absolute; left: 50px; }.react-datepicker-popper { z-index: 1; }.react-datepicker-popper[data-placement^="bottom"] { margin-top: 10px; }.react-datepicker-popper[data-placement="bottom-end"] .react-datepicker__triangle, .react-datepicker-popper[data-placement="top-end"] .react-datepicker__triangle { left: auto; right: 50px; }.react-datepicker-popper[data-placement^="top"] { margin-bottom: 10px; }.react-datepicker-popper[data-placement^="right"] { margin-left: 8px; }.react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle { left: auto; right: 42px; }.react-datepicker-popper[data-placement^="left"] { margin-right: 8px; }.react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle { left: 42px; right: auto; }.react-datepicker__header { text-align: center; background-color: rgb(240, 240, 240); border-bottom: 1px solid rgb(174, 174, 174); border-top-left-radius: 0.3rem; padding-top: 8px; position: relative; }.react-datepicker__header--time { padding-bottom: 8px; padding-left: 5px; padding-right: 5px; }.react-datepicker__header--time:not(.react-datepicker__header--time--only) { border-top-left-radius: 0px; }.react-datepicker__header:not(.react-datepicker__header--has-time-select) { border-top-right-radius: 0.3rem; }.react-datepicker__year-dropdown-container--select, .react-datepicker__month-dropdown-container--select, .react-datepicker__month-year-dropdown-container--select, .react-datepicker__year-dropdown-container--scroll, .react-datepicker__month-dropdown-container--scroll, .react-datepicker__month-year-dropdown-container--scroll { display: inline-block; margin: 0px 2px; }.react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header { margin-top: 0px; color: rgb(0, 0, 0); font-weight: bold; font-size: 0.944rem; }.react-datepicker-time__header { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }.react-datepicker__navigation { background: none; line-height: 1.7rem; text-align: center; cursor: pointer; position: absolute; top: 10px; padding: 0px; border: 0.45rem solid transparent; z-index: 1; height: 10px; width: 10px; text-indent: -999em; overflow: hidden; }.react-datepicker__navigation--previous { left: 10px; border-right-color: rgb(204, 204, 204); }.react-datepicker__navigation--previous:hover { border-right-color: rgb(179, 179, 179); }.react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover { border-right-color: rgb(230, 230, 230); cursor: default; }.react-datepicker__navigation--next { right: 10px; border-left-color: rgb(204, 204, 204); }.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) { right: 95px; }.react-datepicker__navigation--next:hover { border-left-color: rgb(179, 179, 179); }.react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover { border-left-color: rgb(230, 230, 230); cursor: default; }.react-datepicker__navigation--years { position: relative; top: 0px; display: block; margin-left: auto; margin-right: auto; }.react-datepicker__navigation--years-previous { top: 4px; border-top-color: rgb(204, 204, 204); }.react-datepicker__navigation--years-previous:hover { border-top-color: rgb(179, 179, 179); }.react-datepicker__navigation--years-upcoming { top: -4px; border-bottom-color: rgb(204, 204, 204); }.react-datepicker__navigation--years-upcoming:hover { border-bottom-color: rgb(179, 179, 179); }.react-datepicker__month-container { float: left; }.react-datepicker__year { margin: 0.4rem; text-align: center; }.react-datepicker__year-wrapper { display: flex; flex-wrap: wrap; max-width: 180px; }.react-datepicker__year .react-datepicker__year-text { display: inline-block; width: 4rem; margin: 2px; }.react-datepicker__month { margin: 0.4rem; text-align: center; }.react-datepicker__month .react-datepicker__month-text, .react-datepicker__month .react-datepicker__quarter-text { display: inline-block; width: 4rem; margin: 2px; }.react-datepicker__input-time-container { clear: both; width: 100%; float: left; margin: 5px 0px 10px 15px; text-align: left; }.react-datepicker__input-time-container .react-datepicker-time__caption { display: inline-block; }.react-datepicker__input-time-container .react-datepicker-time__input-container { display: inline-block; }.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input { display: inline-block; margin-left: 10px; }.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input { width: auto; }.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-inner-spin-button, .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-outer-spin-button { appearance: none; margin: 0px; }.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"] { }.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter { margin-left: 5px; display: inline-block; }.react-datepicker__time-container { float: right; border-left: 1px solid rgb(174, 174, 174); width: 85px; }.react-datepicker__time-container--with-today-button { display: inline; border: 1px solid rgb(174, 174, 174); border-radius: 0.3rem; position: absolute; right: -72px; top: 0px; }.react-datepicker__time-container .react-datepicker__time { position: relative; background: white; border-bottom-right-radius: 0.3rem; }.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box { width: 85px; overflow-x: hidden; margin: 0px auto; text-align: center; border-bottom-right-radius: 0.3rem; }.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list { list-style: none; margin: 0px; height: calc(195px + 0.85rem); overflow-y: scroll; padding-right: 0px; padding-left: 0px; width: 100%; box-sizing: content-box; }.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item { height: 30px; padding: 5px 10px; white-space: nowrap; }.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover { cursor: pointer; background-color: rgb(240, 240, 240); }.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected { background-color: rgb(33, 107, 165); color: white; font-weight: bold; }.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover { background-color: rgb(33, 107, 165); }.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled { color: rgb(204, 204, 204); }.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover { cursor: default; background-color: transparent; }.react-datepicker__week-number { color: rgb(204, 204, 204); display: inline-block; width: 1.7rem; line-height: 1.7rem; text-align: center; margin: 0.166rem; }.react-datepicker__week-number.react-datepicker__week-number--clickable { cursor: pointer; }.react-datepicker__week-number.react-datepicker__week-number--clickable:hover { border-radius: 0.3rem; background-color: rgb(240, 240, 240); }.react-datepicker__day-names, .react-datepicker__week { white-space: nowrap; }.react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name { color: rgb(0, 0, 0); display: inline-block; width: 1.7rem; line-height: 1.7rem; text-align: center; margin: 0.166rem; }.react-datepicker__month--selected, .react-datepicker__month--in-selecting-range, .react-datepicker__month--in-range, .react-datepicker__quarter--selected, .react-datepicker__quarter--in-selecting-range, .react-datepicker__quarter--in-range { border-radius: 0.3rem; background-color: rgb(33, 107, 165); color: rgb(255, 255, 255); }.react-datepicker__month--selected:hover, .react-datepicker__month--in-selecting-range:hover, .react-datepicker__month--in-range:hover, .react-datepicker__quarter--selected:hover, .react-datepicker__quarter--in-selecting-range:hover, .react-datepicker__quarter--in-range:hover { background-color: rgb(29, 93, 144); }.react-datepicker__month--disabled, .react-datepicker__quarter--disabled { color: rgb(204, 204, 204); pointer-events: none; }.react-datepicker__month--disabled:hover, .react-datepicker__quarter--disabled:hover { cursor: default; background-color: transparent; }.react-datepicker__day, .react-datepicker__month-text, .react-datepicker__quarter-text, .react-datepicker__year-text { cursor: pointer; }.react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover { border-radius: 0.3rem; background-color: rgb(240, 240, 240); }.react-datepicker__day--today, .react-datepicker__month-text--today, .react-datepicker__quarter-text--today, .react-datepicker__year-text--today { font-weight: bold; }.react-datepicker__day--highlighted, .react-datepicker__month-text--highlighted, .react-datepicker__quarter-text--highlighted, .react-datepicker__year-text--highlighted { border-radius: 0.3rem; background-color: rgb(61, 204, 74); color: rgb(255, 255, 255); }.react-datepicker__day--highlighted:hover, .react-datepicker__month-text--highlighted:hover, .react-datepicker__quarter-text--highlighted:hover, .react-datepicker__year-text--highlighted:hover { background-color: rgb(50, 190, 63); }.react-datepicker__day--highlighted-custom-1, .react-datepicker__month-text--highlighted-custom-1, .react-datepicker__quarter-text--highlighted-custom-1, .react-datepicker__year-text--highlighted-custom-1 { color: magenta; }.react-datepicker__day--highlighted-custom-2, .react-datepicker__month-text--highlighted-custom-2, .react-datepicker__quarter-text--highlighted-custom-2, .react-datepicker__year-text--highlighted-custom-2 { color: green; }.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range { border-radius: 0.3rem; background-color: rgb(33, 107, 165); color: rgb(255, 255, 255); }.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover, .react-datepicker__month-text--selected:hover, .react-datepicker__month-text--in-selecting-range:hover, .react-datepicker__month-text--in-range:hover, .react-datepicker__quarter-text--selected:hover, .react-datepicker__quarter-text--in-selecting-range:hover, .react-datepicker__quarter-text--in-range:hover, .react-datepicker__year-text--selected:hover, .react-datepicker__year-text--in-selecting-range:hover, .react-datepicker__year-text--in-range:hover { background-color: rgb(29, 93, 144); }.react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected { border-radius: 0.3rem; background-color: rgb(42, 135, 208); color: rgb(255, 255, 255); }.react-datepicker__day--keyboard-selected:hover, .react-datepicker__month-text--keyboard-selected:hover, .react-datepicker__quarter-text--keyboard-selected:hover, .react-datepicker__year-text--keyboard-selected:hover { background-color: rgb(29, 93, 144); }.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range { background-color: rgba(33, 107, 165, 0.5); }.react-datepicker__month--selecting-range .react-datepicker__day--in-range, .react-datepicker__month--selecting-range .react-datepicker__month-text--in-range, .react-datepicker__month--selecting-range .react-datepicker__quarter-text--in-range, .react-datepicker__month--selecting-range .react-datepicker__year-text--in-range { background-color: rgb(240, 240, 240); color: rgb(0, 0, 0); }.react-datepicker__day--disabled, .react-datepicker__month-text--disabled, .react-datepicker__quarter-text--disabled, .react-datepicker__year-text--disabled { cursor: default; color: rgb(204, 204, 204); }.react-datepicker__day--disabled:hover, .react-datepicker__month-text--disabled:hover, .react-datepicker__quarter-text--disabled:hover, .react-datepicker__year-text--disabled:hover { background-color: transparent; }.react-datepicker__month-text.react-datepicker__month--selected:hover, .react-datepicker__month-text.react-datepicker__month--in-range:hover, .react-datepicker__month-text.react-datepicker__quarter--selected:hover, .react-datepicker__month-text.react-datepicker__quarter--in-range:hover, .react-datepicker__quarter-text.react-datepicker__month--selected:hover, .react-datepicker__quarter-text.react-datepicker__month--in-range:hover, .react-datepicker__quarter-text.react-datepicker__quarter--selected:hover, .react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover { background-color: rgb(33, 107, 165); }.react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover { background-color: rgb(240, 240, 240); }.react-datepicker__input-container { position: relative; display: inline-block; width: 100%; }.react-datepicker__year-read-view, .react-datepicker__month-read-view, .react-datepicker__month-year-read-view { border: 1px solid transparent; border-radius: 0.3rem; }.react-datepicker__year-read-view:hover, .react-datepicker__month-read-view:hover, .react-datepicker__month-year-read-view:hover { cursor: pointer; }.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow, .react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow { border-top-color: rgb(179, 179, 179); }.react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow { border-top-color: rgb(204, 204, 204); float: right; margin-left: 20px; top: 8px; position: relative; border-width: 0.45rem; }.react-datepicker__year-dropdown, .react-datepicker__month-dropdown, .react-datepicker__month-year-dropdown { background-color: rgb(240, 240, 240); position: absolute; width: 50%; left: 25%; top: 30px; z-index: 1; text-align: center; border-radius: 0.3rem; border: 1px solid rgb(174, 174, 174); }.react-datepicker__year-dropdown:hover, .react-datepicker__month-dropdown:hover, .react-datepicker__month-year-dropdown:hover { cursor: pointer; }.react-datepicker__year-dropdown--scrollable, .react-datepicker__month-dropdown--scrollable, .react-datepicker__month-year-dropdown--scrollable { height: 150px; overflow-y: scroll; }.react-datepicker__year-option, .react-datepicker__month-option, .react-datepicker__month-year-option { line-height: 20px; width: 100%; display: block; margin-left: auto; margin-right: auto; }.react-datepicker__year-option:first-of-type, .react-datepicker__month-option:first-of-type, .react-datepicker__month-year-option:first-of-type { border-top-left-radius: 0.3rem; border-top-right-radius: 0.3rem; }.react-datepicker__year-option:last-of-type, .react-datepicker__month-option:last-of-type, .react-datepicker__month-year-option:last-of-type { user-select: none; border-bottom-left-radius: 0.3rem; border-bottom-right-radius: 0.3rem; }.react-datepicker__year-option:hover, .react-datepicker__month-option:hover, .react-datepicker__month-year-option:hover { background-color: rgb(204, 204, 204); }.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming, .react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming, .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming { border-bottom-color: rgb(179, 179, 179); }.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous, .react-datepicker__month-option:hover .react-datepicker__navigation--years-previous, .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous { border-top-color: rgb(179, 179, 179); }.react-datepicker__year-option--selected, .react-datepicker__month-option--selected, .react-datepicker__month-year-option--selected { position: absolute; left: 15px; }.react-datepicker__close-icon { cursor: pointer; background-color: transparent; border: 0px; outline: 0px; padding: 0px 6px 0px 0px; position: absolute; top: 0px; right: 0px; height: 100%; display: table-cell; vertical-align: middle; }.react-datepicker__close-icon::after { cursor: pointer; background-color: rgb(33, 107, 165); color: rgb(255, 255, 255); border-radius: 50%; height: 16px; width: 16px; padding: 2px; font-size: 12px; line-height: 1; text-align: center; display: table-cell; vertical-align: middle; content: "×"; }.react-datepicker__today-button { background: rgb(240, 240, 240); border-top: 1px solid rgb(174, 174, 174); cursor: pointer; text-align: center; font-weight: bold; padding: 5px 0px; clear: left; }.react-datepicker__portal { position: fixed; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.8); left: 0px; top: 0px; justify-content: center; align-items: center; display: flex; z-index: 2147483647; }.react-datepicker__portal .react-datepicker__day-name, .react-datepicker__portal .react-datepicker__day, .react-datepicker__portal .react-datepicker__time-name { width: 3rem; line-height: 3rem; }@media (max-width: 400px), (max-height: 550px) {\n  .react-datepicker__portal .react-datepicker__day-name, .react-datepicker__portal .react-datepicker__day, .react-datepicker__portal .react-datepicker__time-name { width: 2rem; line-height: 2rem; }\n}.react-datepicker__portal .react-datepicker__current-month, .react-datepicker__portal .react-datepicker-time__header { font-size: 1.44rem; }.react-datepicker__portal .react-datepicker__navigation { border: 0.81rem solid transparent; }.react-datepicker__portal .react-datepicker__navigation--previous { border-right-color: rgb(204, 204, 204); }.react-datepicker__portal .react-datepicker__navigation--previous:hover { border-right-color: rgb(179, 179, 179); }.react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover { border-right-color: rgb(230, 230, 230); cursor: default; }.react-datepicker__portal .react-datepicker__navigation--next { border-left-color: rgb(204, 204, 204); }.react-datepicker__portal .react-datepicker__navigation--next:hover { border-left-color: rgb(179, 179, 179); }.react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover { border-left-color: rgb(230, 230, 230); cursor: default; }',
            isStyle: true,
            id: 79,
          },
        },
        {
          parentId: 5,
          nextId: 78,
          node: {
            type: 2,
            tagName: "style",
            attributes: {
              type: "text/css",
            },
            childNodes: [],
            id: 80,
          },
        },
        {
          parentId: 5,
          nextId: 80,
          node: {
            type: 2,
            tagName: "style",
            attributes: {
              type: "text/css",
            },
            childNodes: [],
            id: 81,
          },
        },
        {
          parentId: 5,
          nextId: 81,
          node: {
            type: 2,
            tagName: "style",
            attributes: {
              type: "text/css",
            },
            childNodes: [],
            id: 82,
          },
        },
        {
          parentId: 82,
          nextId: null,
          node: {
            type: 3,
            textContent:
              '@import url("https://fonts.googleapis.com/css?family=Lato:300,400,700,900");',
            isStyle: true,
            id: 83,
          },
        },
        {
          parentId: 81,
          nextId: null,
          node: {
            type: 3,
            textContent:
              '.huntr-ext-add-job-container .add-job-container { padding: 25px 25px 100px; max-height: 550px; }.huntr-ext-add-job-container .save-job-footer { width: 300px; position: absolute; bottom: 22px; background-color: rgb(243, 241, 245); border-top: 1px solid rgba(0, 0, 0, 0.1); border-bottom: 1px solid rgba(0, 0, 0, 0.1); }.huntr-ext-add-job-container .btn { margin: 10px auto !important; width: 150px !important; }.huntr-ext-add-job-container .btn.waiting { pointer-events: none; cursor: not-allowed; }.huntr-ext-add-job-container .list-item { text-transform: capitalize; }.huntr-ext-parsed-jobs-container .no-results { padding: 40px; text-align: center; font-size: 14px !important; color: rgba(25, 4, 69, 0.7) !important; }.huntr-ext-parsed-jobs-container .job-result { padding: 20px 25px; border-bottom: 1px solid rgba(0, 0, 0, 0.1); cursor: pointer; }.huntr-ext-parsed-jobs-container .job-result:hover { background-color: rgba(25, 4, 69, 0.1); }.huntr-ext-parsed-jobs-container .job-title { font-size: 14px !important; font-weight: bold !important; color: rgb(25, 4, 69) !important; margin-bottom: 3px !important; }.huntr-ext-parsed-jobs-container .job-company, .huntr-ext-parsed-jobs-container .job-location { max-width: 100px !important; }.huntr-ext-parsed-jobs-container .job-company { font-weight: bold; color: rgba(25, 4, 69, 0.9); margin-right: 10px !important; }.huntr-ext-parsed-jobs-container .job-location { color: rgba(25, 4, 69, 0.7); }.huntr-ext-parsed-jobs-container .job-description { color: rgba(25, 4, 69, 0.4); }.huntr-ext-parsed-jobs-container .job-company, .huntr-ext-parsed-jobs-container .job-description, .huntr-ext-parsed-jobs-container .job-location { font-size: 13px; }.huntr-ext-parsed-jobs-container p { line-height: 15px !important; margin: 0px !important; }.huntr-ext-parsed-jobs-container span { max-width: 240px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: inline-block; margin: 0px !important; }.huntr-capitalize { text-transform: capitalize; }.huntr-error-footer { position: absolute; bottom: 0px; left: 0px; right: 0px; cursor: pointer; background-color: rgb(255, 53, 105); padding: 15px; font-size: 12px; color: rgb(255, 255, 255); border-top: 1px solid rgba(0, 0, 0, 0.1); text-align: center; font-family: Lato, sans-serif; }.huntr-ext-add-job-success-container { padding: 30px; text-align: center; }.huntr-ext-add-job-success-container .message { height: 180px !important; margin-top: 20px !important; border-bottom: 1px solid rgb(234, 234, 234) !important; }.huntr-ext-add-job-success-container .message p { font-size: 22px !important; line-height: 50px !important; text-align: center !important; }.huntr-ext-add-job-success-container .message .huntr-icon { font-size: 45px !important; color: rgba(74, 74, 74, 0.2) !important; }.huntr-ext-add-job-success-container .huntr-footer { margin-top: 30px; }.huntr-ext-add-job-success-container .huntr-footer a.btn { color: rgb(255, 255, 255) !important; width: 200px; }.huntr-ext-add-job-success-container .huntr-footer .btn img { position: absolute; left: 8px; top: 7px; width: 20px; height: 20px; border-radius: 20px; }.huntr-ext-settings-container { font-size: 16px; text-align: center; color: rgb(74, 74, 74); height: 140px; margin-top: 50px; font-family: Lato, sans-serif !important; }.huntr-ext-settings-container p { line-height: 18px; }.huntr-ext-time-to-upgrade { padding: 35px; text-align: center; color: rgb(106, 79, 235); }.huntr-ext-time-to-upgrade .huntr-icon { margin: 10px 0px 40px; font-size: 60px; color: rgba(106, 79, 235, 0.1); }#huntr-react-container-2 { -webkit-font-smoothing: antialiased; position: absolute; font-family: Lato, sans-serif; display: block !important; }#huntr-react-container-2 a, #huntr-react-container-2 p, #huntr-react-container-2 span, #huntr-react-container-2 div { font-family: Lato, sans-serif !important; }#huntr-react-container-2 form { margin: 0px; padding: 0px; }#huntr-react-container-2 ::-webkit-scrollbar-button { width: 0px !important; height: 0px !important; }#huntr-react-container-2 ::-webkit-scrollbar-track { box-shadow: none !important; }#huntr-react-container-2 ::-webkit-scrollbar-thumb { background-color: rgba(24, 0, 69, 0.15) !important; border: 3px solid rgb(255, 255, 255) !important; border-radius: 100px !important; }#huntr-react-container-2 ::-webkit-scrollbar-thumb:hover { background-color: rgba(24, 0, 69, 0.2) !important; }#huntr-react-container-2 ::-webkit-scrollbar-thumb:active { background-color: rgba(24, 0, 69, 0.2) !important; }#huntr-react-container-2 ::-webkit-scrollbar { width: 10px !important; height: 20px !important; }#huntr-react-container-2 .huntr-title { font-size: 22px; color: rgb(25, 4, 69) !important; }#huntr-react-container-2 .huntr-description { font-size: 15px; color: rgba(25, 4, 69, 0.7) !important; }#huntr-react-container-2 a { cursor: pointer; }#huntr-react-container-2 .centered { margin-right: auto; margin-left: auto; text-align: center; }#huntr-react-container-2 .field { position: relative; }#huntr-react-container-2 .field-container .huntr-icon { position: absolute; right: 11px; bottom: 11px; font-size: 16px; color: rgba(24, 0, 69, 0.5); cursor: pointer; }#huntr-react-container-2 .field-container .input-image { width: 20px; height: 20px; position: absolute; right: 7px; bottom: 8px; border-radius: 100%; box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 4px; }#huntr-react-container-2 .hide { visibility: hidden; }#huntr-react-container-2 .btn { font-size: 14px; position: relative; line-height: 37px; font-family: Lato, sans-serif !important; border-radius: 4px !important; display: block !important; cursor: pointer !important; text-transform: capitalize !important; font-weight: 400 !important; letter-spacing: 0.2px !important; transition: 0.4s ease-out !important; text-align: center !important; box-shadow: none !important; border: none !important; padding: 0px !important; background-image: none !important; background-repeat: no-repeat !important; text-shadow: none !important; box-sizing: border-box !important; }#huntr-react-container-2 .btn .huntr-icon { position: absolute; right: 15px; top: 13px; color: rgba(255, 255, 255, 0.4); font-size: 16px; }#huntr-react-container-2 .btn-purple { color: rgb(255, 255, 255); text-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px; background-color: rgb(106, 79, 235); }#huntr-react-container-2 .btn-purple:hover { background-color: rgb(140, 53, 255); }#huntr-react-container-2 .btn-purple:disabled { cursor: not-allowed; color: rgba(25, 4, 69, 0.4) !important; background-color: rgba(25, 4, 69, 0.2) !important; }#huntr-react-container-2 ul { margin: 0px; padding: 0px; }#huntr-react-container-2 ul li { list-style: none; }#huntr-react-container-2 .location-search .huntr-drop-down-menu span { font-size: 11px; display: inline-block; }#huntr-react-container-2 .truncate { text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }#huntr-react-container-2 .huntr-drop-down-menu { color: rgb(74, 74, 74); font-family: Lato, sans-serif; background-color: rgb(255, 255, 255); position: absolute; width: 100%; border-radius: 4px; font-size: 13px; box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 4px; z-index: 1; border: 1px solid rgb(221, 221, 221); max-height: 250px; overflow-y: auto; }#huntr-react-container-2 .huntr-drop-down-menu .huntr-ddmenu-footer { padding: 10px; border-bottom: 1px solid rgb(238, 238, 238); text-align: left; cursor: pointer; }#huntr-react-container-2 .huntr-drop-down-menu .huntr-ddmenu-footer .huntr-icon { margin-right: 10px; }#huntr-react-container-2 .huntr-logo img { width: 16px; position: relative; top: -5px; }#huntr-react-container-2 .huntr-ext-nav-menu { width: 100%; position: relative; border-bottom: 1px solid rgba(0, 0, 0, 0.1); }#huntr-react-container-2 .huntr-ext-nav-menu .nav-tooltip { display: none; position: absolute; background-color: rgb(127, 123, 146); color: rgb(255, 255, 255); left: -45px; font-size: 11px; width: 90px; line-height: 30px; padding: 0px 15px; border-radius: 20px; top: -25px; text-align: center; }#huntr-react-container-2 .huntr-ext-nav-menu .nav-tooltip::before { content: ""; display: block; width: 0px; height: 0px; position: absolute; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid rgb(127, 123, 146); top: 30px; left: 45px; }#huntr-react-container-2 .huntr-ext-nav-menu ul li { position: relative; padding: 0px; cursor: pointer; margin: 0px 31px 0px 0px; font-size: 17px; display: inline-block; color: rgb(181, 181, 181); }#huntr-react-container-2 .huntr-ext-nav-menu ul li a, #huntr-react-container-2 .huntr-ext-nav-menu ul li span { line-height: 50px; vertical-align: middle; }#huntr-react-container-2 .huntr-ext-nav-menu ul li:first-child { margin-left: 20px; }#huntr-react-container-2 .huntr-ext-nav-menu ul li:last-child { margin: 0px; }#huntr-react-container-2 .huntr-ext-nav-menu ul li:hover { color: rgba(0, 0, 0, 0.8); }#huntr-react-container-2 .huntr-ext-nav-menu ul li:hover .nav-tooltip { display: inline-block; }#huntr-react-container-2 .huntr-ext-top-menu { background-color: rgb(243, 241, 245); border-bottom: 1px solid rgba(0, 0, 0, 0.1); position: relative; width: 100%; color: rgba(0, 0, 0, 0.25); }#huntr-react-container-2 .huntr-ext-top-menu img { max-width: 60px; box-sizing: content-box; padding: 12px 0px 10px 12px; }#huntr-react-container-2 p, #huntr-react-container-2 span { text-shadow: none; }#huntr-react-container-2 p.huntr-icon, #huntr-react-container-2 span.huntr-icon { font-family: simple-line-icons !important; }#huntr-react-container-2 p.huntr-icon::before, #huntr-react-container-2 span.huntr-icon::before { font-family: simple-line-icons !important; }#huntr-react-container-2 h1 { font-weight: 900; font-family: Lato, sans-serif !important; text-transform: uppercase !important; color: rgb(74, 74, 74) !important; letter-spacing: 5px !important; font-size: 16px !important; }#huntr-react-container-2 .huntr-ext-app-container { position: fixed; right: 30px; top: 30px; z-index: 100000; max-height: 600px; min-height: 300px; }#huntr-react-container-2 .huntr-ext-app-container .inner-container { height: 100%; background-color: rgb(255, 255, 255); width: 300px; box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px; outline: rgba(0, 0, 0, 0.1) solid 1px; }#huntr-react-container-2 .huntr-ext-minimize { position: absolute; right: 10px; top: 0px; font-size: 35px; font-family: Lato, sans-serif; line-height: normal; transform: rotate(45deg); cursor: pointer; color: rgba(74, 74, 74, 0.2); font-weight: 400; z-index: 1; }#huntr-react-container-2 .huntr-ext-minimize:hover { color: rgba(74, 74, 74, 0.7); }#huntr-react-container-2 .editable-text-field { width: 100%; }#huntr-react-container-2 .huntr-ext-app-mini { background-color: rgb(106, 79, 235); width: 50px; height: 50px; border-radius: 50px; position: fixed; z-index: 10000; bottom: 30px; right: 30px; cursor: pointer; }#huntr-react-container-2 .huntr-ext-app-mini::after { content: "h"; }#huntr-react-container-2 .huntr-ext-component-container h1 { text-align: center; margin: 60px 0px; }#huntr-react-container-2 .huntr-ext-component-container .drop-down-button { appearance: none !important; outline: 0px !important; border-radius: 2px !important; box-sizing: border-box !important; font-family: Lato, sans-serif !important; width: 100% !important; padding: 12px !important; font-size: 14px !important; color: rgba(74, 74, 74, 0.9) !important; margin-bottom: 14px !important; font-weight: 400 !important; background-color: rgb(250, 250, 250) !important; border: 1px solid rgb(220, 220, 220) !important; transition: none !important; text-align: left !important; cursor: pointer !important; }#huntr-react-container-2 .huntr-ext-component-container .dropdown-search-field input { padding: 0px 33px 0px 10px !important; }#huntr-react-container-2 .huntr-ext-component-container input { font-size: 14px !important; height: 35px; }#huntr-react-container-2 .huntr-ext-component-container input::-webkit-input-placeholder { font-size: 14px !important; font-weight: 400 !important; font-family: Lato, sans-serif !important; color: rgba(24, 0, 69, 0.3) !important; }#huntr-react-container-2 .huntr-ext-component-container textarea { font-size: 14px !important; height: 130px; }#huntr-react-container-2 .huntr-ext-component-container textarea::-webkit-input-placeholder { font-size: 14px !important; font-weight: 400 !important; font-family: Lato, sans-serif !important; color: rgba(24, 0, 69, 0.3) !important; }#huntr-react-container-2 .huntr-ext-component-container input, #huntr-react-container-2 .huntr-ext-component-container textarea { background-color: rgb(255, 255, 255); outline: 0px; box-sizing: border-box; letter-spacing: 0px; width: 100%; box-shadow: rgba(24, 0, 69, 0.1) 0px 0px 0px 1px, rgba(24, 0, 69, 0.05) 0px 4px 10px !important; background-image: none !important; font-family: Lato, sans-serif !important; border-width: initial !important; border-style: none !important; border-color: initial !important; font-weight: 400 !important; margin: 0px !important; color: rgba(25, 4, 69, 0.7) !important; border-radius: 6px !important; line-height: normal !important; padding: 0px 10px !important; }#huntr-react-container-2 .huntr-ext-component-container input:focus, #huntr-react-container-2 .huntr-ext-component-container textarea:focus { outline: rgb(140, 53, 255) solid 1px; box-shadow: rgb(140, 53, 255) 0px 0px 0px 2px, rgba(140, 53, 255, 0.1) 0px 4px 10px !important; }#huntr-react-container-2 .huntr-ext-component-container input.clean, #huntr-react-container-2 .huntr-ext-component-container textarea.clean { height: 100%; box-shadow: none !important; border: none !important; padding: 0px !important; }#huntr-react-container-2 .huntr-ext-component-container input.clean:focus, #huntr-react-container-2 .huntr-ext-component-container textarea.clean:focus, #huntr-react-container-2 .huntr-ext-component-container input.clean::selection, #huntr-react-container-2 .huntr-ext-component-container textarea.clean::selection { box-shadow: none !important; border-bottom: none !important; }#huntr-react-container-2 .huntr-ext-component-container input:focus, #huntr-react-container-2 .huntr-ext-component-container textarea:focus, #huntr-react-container-2 .huntr-ext-component-container input::selection, #huntr-react-container-2 .huntr-ext-component-container textarea::selection { outline: 0px; border-bottom: none !important; background-color: rgb(255, 255, 255) !important; }#huntr-react-container-2 .huntr-ext-component-container input::selection, #huntr-react-container-2 .huntr-ext-component-container textarea::selection { background-color: rgb(140, 53, 255) !important; color: rgb(255, 255, 255); }.huntr-loader ::after, .huntr-loader ::before { box-sizing: border-box; }.huntr-loader { display: block; height: 50px; width: 50px; animation: 3s linear 0s infinite normal none running huntr-loader-1; }@-webkit-keyframes huntr-loader-1 { \n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}.huntr-loader span { display: block; position: absolute; inset: 0px; margin: auto; height: 50px; width: 50px; clip: rect(0px, 50px, 50px, 0px); animation: 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0s infinite normal none running huntr-loader-2; }@-webkit-keyframes huntr-loader-2 { \n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}.huntr-loader span::before { content: ""; display: block; position: absolute; inset: 0px; margin: auto; height: 50px; width: 50px; border-width: 4px; border-style: solid; border-color: rgb(106, 79, 235) transparent transparent; border-image: initial; border-radius: 50%; animation: 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0s infinite normal none running huntr-loader-3; }@-webkit-keyframes huntr-loader-3 { \n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}.huntr-loader span::after { content: ""; display: block; position: absolute; inset: 0px; margin: auto; height: 50px; width: 50px; border: 4px solid rgba(106, 79, 235, 0.2); border-radius: 50%; }.react-datepicker-wrapper, .react-datepicker__input-container { display: block !important; }.huntr-date-picker-popper { font-size: 0.8rem; }.huntr-date-picker-popper .react-datepicker { font-family: Lato, Helvetica, Arial, sans-serif !important; background-color: rgb(255, 255, 255) !important; color: rgb(24, 0, 69) !important; border: 1px solid rgba(24, 0, 69, 0.1) !important; border-radius: 8px !important; box-shadow: rgba(24, 0, 69, 0.1) 0px 3px 7px -1px !important; }.huntr-date-picker-popper .react-datepicker__header { background-color: rgb(250, 250, 251) !important; border-bottom: 1px solid rgba(24, 0, 69, 0.1) !important; }.huntr-date-picker-popper .react-datepicker__day { color: rgba(24, 0, 69, 0.6) !important; }.huntr-date-picker-popper .react-datepicker__day-name { color: rgba(24, 0, 69, 0.7) !important; }.huntr-date-picker-popper .react-datepicker__day--disabled { color: rgba(24, 0, 69, 0.21) !important; }.huntr-date-picker-popper .react-datepicker__day--keyboard-selected, .huntr-date-picker-popper .react-datepicker__day--selected { background-color: rgb(140, 53, 255) !important; color: rgb(255, 255, 255) !important; }.huntr-date-picker-popper .react-datepicker__today-button { background-color: rgba(24, 0, 69, 0.02) !important; border-top: 1px solid rgba(24, 0, 69, 0.1) !important; }.huntr-date-picker-popper .react-datepicker__time-container--with-today-button { right: -96px !important; border: 1px solid rgba(24, 0, 69, 0.1) !important; border-radius: 8px !important; box-shadow: rgba(24, 0, 69, 0.1) 0px 3px 7px -1px !important; }.huntr-date-picker-popper .react-datepicker__time-list-item { color: rgba(24, 0, 69, 0.7) !important; height: 18px !important; }.huntr-date-picker-popper .react-datepicker__time-list-item--selected { background-color: rgb(140, 53, 255) !important; color: rgb(255, 255, 255); }.huntr-date-picker { display: block; }.react-datepicker__close-icon { width: auto !important; }.react-datepicker__close-icon::after { background-color: rgb(24, 0, 69) !important; width: 12px !important; height: 12px !important; }@-webkit-keyframes huntr-loader-1 { \n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}@keyframes huntr-loader-1 { \n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}@-webkit-keyframes huntr-loader-2 { \n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}@keyframes huntr-loader-2 { \n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}@-webkit-keyframes huntr-loader-3 { \n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}@keyframes huntr-loader-3 { \n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}',
            isStyle: true,
            id: 84,
          },
        },
        {
          parentId: 80,
          nextId: null,
          node: {
            type: 3,
            textContent:
              '#huntr-react-container-2 .ql-container span, #huntr-react-container-2 .ql-container li, #huntr-react-container-2 .ql-container ul, #huntr-react-container-2 .ql-container div, #huntr-react-container-2 .ql-container strong, #huntr-react-container-2 .ql-container b, #huntr-react-container-2 .ql-container h1, #huntr-react-container-2 .ql-container h2, #huntr-react-container-2 .ql-container h3, #huntr-react-container-2 .ql-container p { font-size: 14px; font-family: Lato, Arial, sans-serif !important; color: rgb(24, 0, 69) !important; }#huntr-react-container-2 .ql-container { box-sizing: border-box; font-family: Lato, Arial, sans-serif; font-size: 13px; height: 100%; margin: 0px; position: relative; }#huntr-react-container-2 .ql-container.ql-disabled .ql-tooltip { visibility: hidden; }#huntr-react-container-2 .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before { pointer-events: none; }#huntr-react-container-2 .ql-clipboard { left: -100000px; height: 1px; overflow-y: hidden; position: absolute; top: 50%; }#huntr-react-container-2 .ql-clipboard p { margin: 0px; padding: 0px; }#huntr-react-container-2 .ql-editor { box-sizing: border-box; line-height: 1.42; outline: none; overflow-y: auto; padding: 12px 18px; tab-size: 4; text-align: left; white-space: pre-wrap; overflow-wrap: break-word; height: 100% !important; }#huntr-react-container-2 .ql-editor > * { cursor: text; }#huntr-react-container-2 .ql-editor p, #huntr-react-container-2 .ql-editor ol, #huntr-react-container-2 .ql-editor ul, #huntr-react-container-2 .ql-editor pre, #huntr-react-container-2 .ql-editor blockquote, #huntr-react-container-2 .ql-editor h1, #huntr-react-container-2 .ql-editor h2, #huntr-react-container-2 .ql-editor h3, #huntr-react-container-2 .ql-editor h4, #huntr-react-container-2 .ql-editor h5, #huntr-react-container-2 .ql-editor h6 { margin: 0px; padding: 0px; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; }#huntr-react-container-2 .ql-editor ol, #huntr-react-container-2 .ql-editor ul { padding-left: 1.5em; }#huntr-react-container-2 .ql-editor ol > li, #huntr-react-container-2 .ql-editor ul > li { list-style-type: none; }#huntr-react-container-2 .ql-editor ul > li::before { content: "•"; }#huntr-react-container-2 .ql-editor ul[data-checked="true"], #huntr-react-container-2 .ql-editor ul[data-checked="false"] { pointer-events: none; }#huntr-react-container-2 .ql-editor ul[data-checked="true"] > li *, #huntr-react-container-2 .ql-editor ul[data-checked="false"] > li * { pointer-events: all; }#huntr-react-container-2 .ql-editor ul[data-checked="true"] > li::before, #huntr-react-container-2 .ql-editor ul[data-checked="false"] > li::before { color: rgb(119, 119, 119); cursor: pointer; pointer-events: all; }#huntr-react-container-2 .ql-editor ul[data-checked="true"] > li::before { content: "☑"; }#huntr-react-container-2 .ql-editor ul[data-checked="false"] > li::before { content: "☐"; }#huntr-react-container-2 .ql-editor li::before { display: inline-block; white-space: nowrap; width: 1.2em; }#huntr-react-container-2 .ql-editor li:not(.ql-direction-rtl)::before { margin-left: -1.5em; margin-right: 0.3em; text-align: right; }#huntr-react-container-2 .ql-editor li.ql-direction-rtl::before { margin-left: 0.3em; margin-right: -1.5em; }#huntr-react-container-2 .ql-editor ol li:not(.ql-direction-rtl), #huntr-react-container-2 .ql-editor ul li:not(.ql-direction-rtl) { padding-left: 1.5em; }#huntr-react-container-2 .ql-editor ol li.ql-direction-rtl, #huntr-react-container-2 .ql-editor ul li.ql-direction-rtl { padding-right: 1.5em; }#huntr-react-container-2 .ql-editor ol li { counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; counter-increment: list-0 1; }#huntr-react-container-2 .ql-editor ol li::before { content: counter(list-0) ". "; }#huntr-react-container-2 .ql-editor ol li.ql-indent-1 { counter-increment: list-1 1; }#huntr-react-container-2 .ql-editor ol li.ql-indent-1::before { content: counter(list-1, lower-alpha) ". "; }#huntr-react-container-2 .ql-editor ol li.ql-indent-1 { counter-reset: list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; }#huntr-react-container-2 .ql-editor ol li.ql-indent-2 { counter-increment: list-2 1; }#huntr-react-container-2 .ql-editor ol li.ql-indent-2::before { content: counter(list-2, lower-roman) ". "; }#huntr-react-container-2 .ql-editor ol li.ql-indent-2 { counter-reset: list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; }#huntr-react-container-2 .ql-editor ol li.ql-indent-3 { counter-increment: list-3 1; }#huntr-react-container-2 .ql-editor ol li.ql-indent-3::before { content: counter(list-3) ". "; }#huntr-react-container-2 .ql-editor ol li.ql-indent-3 { counter-reset: list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; }#huntr-react-container-2 .ql-editor ol li.ql-indent-4 { counter-increment: list-4 1; }#huntr-react-container-2 .ql-editor ol li.ql-indent-4::before { content: counter(list-4, lower-alpha) ". "; }#huntr-react-container-2 .ql-editor ol li.ql-indent-4 { counter-reset: list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; }#huntr-react-container-2 .ql-editor ol li.ql-indent-5 { counter-increment: list-5 1; }#huntr-react-container-2 .ql-editor ol li.ql-indent-5::before { content: counter(list-5, lower-roman) ". "; }#huntr-react-container-2 .ql-editor ol li.ql-indent-5 { counter-reset: list-6 0 list-7 0 list-8 0 list-9 0; }#huntr-react-container-2 .ql-editor ol li.ql-indent-6 { counter-increment: list-6 1; }#huntr-react-container-2 .ql-editor ol li.ql-indent-6::before { content: counter(list-6) ". "; }#huntr-react-container-2 .ql-editor ol li.ql-indent-6 { counter-reset: list-7 0 list-8 0 list-9 0; }#huntr-react-container-2 .ql-editor ol li.ql-indent-7 { counter-increment: list-7 1; }#huntr-react-container-2 .ql-editor ol li.ql-indent-7::before { content: counter(list-7, lower-alpha) ". "; }#huntr-react-container-2 .ql-editor ol li.ql-indent-7 { counter-reset: list-8 0 list-9 0; }#huntr-react-container-2 .ql-editor ol li.ql-indent-8 { counter-increment: list-8 1; }#huntr-react-container-2 .ql-editor ol li.ql-indent-8::before { content: counter(list-8, lower-roman) ". "; }#huntr-react-container-2 .ql-editor ol li.ql-indent-8 { counter-reset: list-9 0; }#huntr-react-container-2 .ql-editor ol li.ql-indent-9 { counter-increment: list-9 1; }#huntr-react-container-2 .ql-editor ol li.ql-indent-9::before { content: counter(list-9) ". "; }#huntr-react-container-2 .ql-editor .ql-indent-1:not(.ql-direction-rtl) { padding-left: 3em; }#huntr-react-container-2 .ql-editor li.ql-indent-1:not(.ql-direction-rtl) { padding-left: 4.5em; }#huntr-react-container-2 .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right { padding-right: 3em; }#huntr-react-container-2 .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right { padding-right: 4.5em; }#huntr-react-container-2 .ql-editor .ql-indent-2:not(.ql-direction-rtl) { padding-left: 6em; }#huntr-react-container-2 .ql-editor li.ql-indent-2:not(.ql-direction-rtl) { padding-left: 7.5em; }#huntr-react-container-2 .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right { padding-right: 6em; }#huntr-react-container-2 .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right { padding-right: 7.5em; }#huntr-react-container-2 .ql-editor .ql-indent-3:not(.ql-direction-rtl) { padding-left: 9em; }#huntr-react-container-2 .ql-editor li.ql-indent-3:not(.ql-direction-rtl) { padding-left: 10.5em; }#huntr-react-container-2 .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right { padding-right: 9em; }#huntr-react-container-2 .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right { padding-right: 10.5em; }#huntr-react-container-2 .ql-editor .ql-indent-4:not(.ql-direction-rtl) { padding-left: 12em; }#huntr-react-container-2 .ql-editor li.ql-indent-4:not(.ql-direction-rtl) { padding-left: 13.5em; }#huntr-react-container-2 .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right { padding-right: 12em; }#huntr-react-container-2 .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right { padding-right: 13.5em; }#huntr-react-container-2 .ql-editor .ql-indent-5:not(.ql-direction-rtl) { padding-left: 15em; }#huntr-react-container-2 .ql-editor li.ql-indent-5:not(.ql-direction-rtl) { padding-left: 16.5em; }#huntr-react-container-2 .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right { padding-right: 15em; }#huntr-react-container-2 .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right { padding-right: 16.5em; }#huntr-react-container-2 .ql-editor .ql-indent-6:not(.ql-direction-rtl) { padding-left: 18em; }#huntr-react-container-2 .ql-editor li.ql-indent-6:not(.ql-direction-rtl) { padding-left: 19.5em; }#huntr-react-container-2 .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right { padding-right: 18em; }#huntr-react-container-2 .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right { padding-right: 19.5em; }#huntr-react-container-2 .ql-editor .ql-indent-7:not(.ql-direction-rtl) { padding-left: 21em; }#huntr-react-container-2 .ql-editor li.ql-indent-7:not(.ql-direction-rtl) { padding-left: 22.5em; }#huntr-react-container-2 .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right { padding-right: 21em; }#huntr-react-container-2 .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right { padding-right: 22.5em; }#huntr-react-container-2 .ql-editor .ql-indent-8:not(.ql-direction-rtl) { padding-left: 24em; }#huntr-react-container-2 .ql-editor li.ql-indent-8:not(.ql-direction-rtl) { padding-left: 25.5em; }#huntr-react-container-2 .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right { padding-right: 24em; }#huntr-react-container-2 .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right { padding-right: 25.5em; }#huntr-react-container-2 .ql-editor .ql-indent-9:not(.ql-direction-rtl) { padding-left: 27em; }#huntr-react-container-2 .ql-editor li.ql-indent-9:not(.ql-direction-rtl) { padding-left: 28.5em; }#huntr-react-container-2 .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right { padding-right: 27em; }#huntr-react-container-2 .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right { padding-right: 28.5em; }#huntr-react-container-2 .ql-editor .ql-video { display: block; max-width: 100%; }#huntr-react-container-2 .ql-editor .ql-video.ql-align-center { margin: 0px auto; }#huntr-react-container-2 .ql-editor .ql-video.ql-align-right { margin: 0px 0px 0px auto; }#huntr-react-container-2 .ql-editor .ql-bg-black { background-color: rgb(0, 0, 0); }#huntr-react-container-2 .ql-editor .ql-bg-red { background-color: rgb(230, 0, 0); }#huntr-react-container-2 .ql-editor .ql-bg-orange { background-color: rgb(255, 153, 0); }#huntr-react-container-2 .ql-editor .ql-bg-yellow { background-color: rgb(255, 255, 0); }#huntr-react-container-2 .ql-editor .ql-bg-green { background-color: rgb(0, 138, 0); }#huntr-react-container-2 .ql-editor .ql-bg-blue { background-color: rgb(0, 102, 204); }#huntr-react-container-2 .ql-editor .ql-bg-purple { background-color: rgb(153, 51, 255); }#huntr-react-container-2 .ql-editor .ql-color-white { color: rgb(255, 255, 255); }#huntr-react-container-2 .ql-editor .ql-color-red { color: rgb(230, 0, 0); }#huntr-react-container-2 .ql-editor .ql-color-orange { color: rgb(255, 153, 0); }#huntr-react-container-2 .ql-editor .ql-color-yellow { color: rgb(255, 255, 0); }#huntr-react-container-2 .ql-editor .ql-color-green { color: rgb(0, 138, 0); }#huntr-react-container-2 .ql-editor .ql-color-blue { color: rgb(0, 102, 204); }#huntr-react-container-2 .ql-editor .ql-color-purple { color: rgb(153, 51, 255); }#huntr-react-container-2 .ql-editor .ql-font-serif { font-family: Georgia, "Times New Roman", serif; }#huntr-react-container-2 .ql-editor .ql-font-monospace { font-family: Monaco, "Courier New", monospace; }#huntr-react-container-2 .ql-editor .ql-size-small { font-size: 0.75em; }#huntr-react-container-2 .ql-editor .ql-size-large { font-size: 1.5em; }#huntr-react-container-2 .ql-editor .ql-size-huge { font-size: 2.5em; }#huntr-react-container-2 .ql-editor .ql-direction-rtl { direction: rtl; text-align: inherit; }#huntr-react-container-2 .ql-editor .ql-align-center { text-align: center; }#huntr-react-container-2 .ql-editor .ql-align-justify { text-align: justify; }#huntr-react-container-2 .ql-editor .ql-align-right { text-align: right; }#huntr-react-container-2 .ql-editor .ql-embed-selected { border: 1px solid rgb(119, 119, 119); user-select: none; }#huntr-react-container-2 .ql-editor.ql-blank::before { color: rgba(25, 4, 69, 0.4); content: attr(data-placeholder); font-style: normal; pointer-events: none; position: absolute; }#huntr-react-container-2 .ql-snow.ql-toolbar::after, #huntr-react-container-2 .ql-snow .ql-toolbar::after { clear: both; content: ""; display: table; }#huntr-react-container-2 .ql-snow.ql-toolbar button, #huntr-react-container-2 .ql-snow .ql-toolbar button { background: none; border: none; cursor: pointer; display: inline-block; float: left; height: 24px; padding: 3px 5px; width: 28px; box-shadow: none; min-height: 1em; }#huntr-react-container-2 .ql-snow.ql-toolbar button svg, #huntr-react-container-2 .ql-snow .ql-toolbar button svg { float: left; height: 100%; }#huntr-react-container-2 .ql-snow.ql-toolbar button:active:hover, #huntr-react-container-2 .ql-snow .ql-toolbar button:active:hover { outline: none; }#huntr-react-container-2 .ql-snow.ql-toolbar input.ql-image[type="file"], #huntr-react-container-2 .ql-snow .ql-toolbar input.ql-image[type="file"] { display: none; }#huntr-react-container-2 .ql-snow.ql-toolbar button:hover, #huntr-react-container-2 .ql-snow .ql-toolbar button:hover, #huntr-react-container-2 .ql-snow.ql-toolbar button:focus, #huntr-react-container-2 .ql-snow .ql-toolbar button:focus, #huntr-react-container-2 .ql-snow.ql-toolbar button.ql-active, #huntr-react-container-2 .ql-snow .ql-toolbar button.ql-active, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label:hover, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label:hover, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label.ql-active, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label.ql-active, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item:hover, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item:hover, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item.ql-selected, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item.ql-selected { color: rgb(0, 102, 204); }#huntr-react-container-2 .ql-snow.ql-toolbar button:hover .ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar button:hover .ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar button:focus .ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar button:focus .ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar button.ql-active .ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar button.ql-active .ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill { fill: rgb(0, 102, 204); }#huntr-react-container-2 .ql-snow.ql-toolbar button:hover .ql-stroke, #huntr-react-container-2 .ql-snow .ql-toolbar button:hover .ql-stroke, #huntr-react-container-2 .ql-snow.ql-toolbar button:focus .ql-stroke, #huntr-react-container-2 .ql-snow .ql-toolbar button:focus .ql-stroke, #huntr-react-container-2 .ql-snow.ql-toolbar button.ql-active .ql-stroke, #huntr-react-container-2 .ql-snow .ql-toolbar button.ql-active .ql-stroke, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, #huntr-react-container-2 .ql-snow.ql-toolbar button:hover .ql-stroke-miter, #huntr-react-container-2 .ql-snow .ql-toolbar button:hover .ql-stroke-miter, #huntr-react-container-2 .ql-snow.ql-toolbar button:focus .ql-stroke-miter, #huntr-react-container-2 .ql-snow .ql-toolbar button:focus .ql-stroke-miter, #huntr-react-container-2 .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, #huntr-react-container-2 .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, #huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, #huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter { stroke: rgb(0, 102, 204); }@media (pointer: coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active), .ql-snow .ql-toolbar button:hover:not(.ql-active) { color: rgb(68, 68, 68); }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill, .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill, .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill { fill: rgb(68, 68, 68); }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke, .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke, .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter, .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter { stroke: rgb(68, 68, 68); }\n}#huntr-react-container-2 .ql-snow { box-sizing: border-box; }#huntr-react-container-2 .ql-snow * { box-sizing: border-box; }#huntr-react-container-2 .ql-snow .ql-hidden { display: none; }#huntr-react-container-2 .ql-snow .ql-out-bottom, #huntr-react-container-2 .ql-snow .ql-out-top { visibility: hidden; }#huntr-react-container-2 .ql-snow .ql-tooltip { position: absolute; transform: translateY(10px); }#huntr-react-container-2 .ql-snow .ql-tooltip a { cursor: pointer; text-decoration: none; }#huntr-react-container-2 .ql-snow .ql-tooltip.ql-flip { transform: translateY(-10px); }#huntr-react-container-2 .ql-snow .ql-formats { display: inline-block; vertical-align: middle; }#huntr-react-container-2 .ql-snow .ql-formats::after { clear: both; content: ""; display: table; }#huntr-react-container-2 .ql-snow .ql-stroke { fill: none; stroke: rgb(68, 68, 68); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2; }#huntr-react-container-2 .ql-snow .ql-stroke-miter { fill: none; stroke: rgb(68, 68, 68); stroke-miterlimit: 10; stroke-width: 2; }#huntr-react-container-2 .ql-snow .ql-fill, #huntr-react-container-2 .ql-snow .ql-stroke.ql-fill { fill: rgb(68, 68, 68); }#huntr-react-container-2 .ql-snow .ql-empty { fill: none; }#huntr-react-container-2 .ql-snow .ql-even { fill-rule: evenodd; }#huntr-react-container-2 .ql-snow .ql-thin, #huntr-react-container-2 .ql-snow .ql-stroke.ql-thin { stroke-width: 1; }#huntr-react-container-2 .ql-snow .ql-transparent { opacity: 0.4; }#huntr-react-container-2 .ql-snow .ql-direction svg:last-child { display: none; }#huntr-react-container-2 .ql-snow .ql-direction.ql-active svg:last-child { display: inline; }#huntr-react-container-2 .ql-snow .ql-direction.ql-active svg:first-child { display: none; }#huntr-react-container-2 .ql-snow .ql-editor h1 { font-size: 2em; }#huntr-react-container-2 .ql-snow .ql-editor h2 { font-size: 1.5em; }#huntr-react-container-2 .ql-snow .ql-editor h3 { font-size: 1.17em; }#huntr-react-container-2 .ql-snow .ql-editor h4 { font-size: 1em; }#huntr-react-container-2 .ql-snow .ql-editor h5 { font-size: 0.83em; }#huntr-react-container-2 .ql-snow .ql-editor h6 { font-size: 0.67em; }#huntr-react-container-2 .ql-snow .ql-editor a { text-decoration: underline; }#huntr-react-container-2 .ql-snow .ql-editor blockquote { border-left: 4px solid rgb(204, 204, 204); margin-bottom: 5px; margin-top: 5px; padding-left: 16px; }#huntr-react-container-2 .ql-snow .ql-editor code, #huntr-react-container-2 .ql-snow .ql-editor pre { background-color: rgb(240, 240, 240); border-radius: 3px; }#huntr-react-container-2 .ql-snow .ql-editor pre { white-space: pre-wrap; margin-bottom: 5px; margin-top: 5px; padding: 5px 10px; }#huntr-react-container-2 .ql-snow .ql-editor code { font-size: 85%; padding-bottom: 2px; padding-top: 2px; }#huntr-react-container-2 .ql-snow .ql-editor code::before, #huntr-react-container-2 .ql-snow .ql-editor code::after { content: " "; letter-spacing: -2px; }#huntr-react-container-2 .ql-snow .ql-editor pre.ql-syntax { background-color: rgb(35, 36, 31); color: rgb(248, 248, 242); overflow: visible; }#huntr-react-container-2 .ql-snow .ql-editor img { max-width: 100%; }#huntr-react-container-2 .ql-snow .ql-picker { color: rgb(68, 68, 68); display: inline-block; float: left; font-size: 14px; font-weight: 500; height: 24px; position: relative; vertical-align: middle; }#huntr-react-container-2 .ql-snow .ql-picker-label { cursor: pointer; display: inline-block; height: 100%; padding-left: 8px; padding-right: 2px; position: relative; width: 100%; }#huntr-react-container-2 .ql-snow .ql-picker-label::before { display: inline-block; line-height: 22px; }#huntr-react-container-2 .ql-snow .ql-picker-options { background-color: rgb(255, 255, 255); display: none; min-width: 100%; padding: 4px 8px; position: absolute; white-space: nowrap; }#huntr-react-container-2 .ql-snow .ql-picker-options .ql-picker-item { cursor: pointer; display: block; padding-bottom: 5px; padding-top: 5px; }#huntr-react-container-2 .ql-snow .ql-picker.ql-expanded .ql-picker-label { color: rgb(204, 204, 204); z-index: 2; }#huntr-react-container-2 .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill { fill: rgb(204, 204, 204); }#huntr-react-container-2 .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke { stroke: rgb(204, 204, 204); }#huntr-react-container-2 .ql-snow .ql-picker.ql-expanded .ql-picker-options { display: block; margin-top: -1px; top: 100%; z-index: 1; }#huntr-react-container-2 .ql-snow .ql-color-picker, #huntr-react-container-2 .ql-snow .ql-icon-picker { width: 28px; }#huntr-react-container-2 .ql-snow .ql-color-picker .ql-picker-label, #huntr-react-container-2 .ql-snow .ql-icon-picker .ql-picker-label { padding: 2px 4px; }#huntr-react-container-2 .ql-snow .ql-color-picker .ql-picker-label svg, #huntr-react-container-2 .ql-snow .ql-icon-picker .ql-picker-label svg { right: 4px; }#huntr-react-container-2 .ql-snow .ql-icon-picker .ql-picker-options { padding: 4px 0px; }#huntr-react-container-2 .ql-snow .ql-icon-picker .ql-picker-item { height: 24px; width: 24px; padding: 2px 4px; }#huntr-react-container-2 .ql-snow .ql-color-picker .ql-picker-options { padding: 3px 5px; width: 152px; }#huntr-react-container-2 .ql-snow .ql-color-picker .ql-picker-item { border: 1px solid transparent; float: left; height: 16px; margin: 2px; padding: 0px; width: 16px; }#huntr-react-container-2 .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg { position: absolute; margin-top: -9px; right: 0px; top: 50%; width: 18px; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""])::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""])::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""])::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""])::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""])::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""])::before { content: attr(data-label); }#huntr-react-container-2 .ql-snow .ql-picker.ql-header { width: 98px; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item::before { content: "Normal"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before { content: "Heading 1"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before { content: "Heading 2"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before { content: "Heading 3"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before { content: "Heading 4"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before { content: "Heading 5"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before { content: "Heading 6"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before { font-size: 2em; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before { font-size: 1.5em; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before { font-size: 1.17em; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before { font-size: 1em; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before { font-size: 0.83em; }#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before { font-size: 0.67em; }#huntr-react-container-2 .ql-snow .ql-picker.ql-font { width: 108px; }#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-label::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-item::before { content: "Sans Serif"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before { content: "Serif"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before { content: "Monospace"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before { font-family: Georgia, "Times New Roman", serif; }#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before { font-family: Monaco, "Courier New", monospace; }#huntr-react-container-2 .ql-snow .ql-picker.ql-size { width: 98px; }#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-label::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item::before { content: "Normal"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before { content: "Small"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before { content: "Large"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before, #huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before { content: "Huge"; }#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before { font-size: 10px; }#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before { font-size: 18px; }#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before { font-size: 32px; }#huntr-react-container-2 .ql-snow .ql-color-picker.ql-background .ql-picker-item { background-color: rgb(255, 255, 255); }#huntr-react-container-2 .ql-snow .ql-color-picker.ql-color .ql-picker-item { background-color: rgb(0, 0, 0); }#huntr-react-container-2 .ql-toolbar.ql-snow { border-bottom: 1px solid rgb(236, 233, 242); border-top: none; border-left: none; border-right: none; box-sizing: border-box; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; padding: 8px; }#huntr-react-container-2 .ql-toolbar.ql-snow .ql-formats { margin-right: 15px; }#huntr-react-container-2 .ql-toolbar.ql-snow .ql-picker-label { border: 1px solid transparent; }#huntr-react-container-2 .ql-toolbar.ql-snow .ql-picker-options { border: 1px solid transparent; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px; }#huntr-react-container-2 .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label { border-color: rgb(204, 204, 204); }#huntr-react-container-2 .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options { border-color: rgb(204, 204, 204); }#huntr-react-container-2 .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected, #huntr-react-container-2 .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover { border-color: rgb(0, 0, 0); }#huntr-react-container-2 .ql-toolbar.ql-snow + .ql-container.ql-snow { border: none; padding-bottom: 40px; }#huntr-react-container-2 .ql-snow .ql-tooltip { background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); box-shadow: rgb(221, 221, 221) 0px 0px 5px; color: rgb(68, 68, 68); padding: 5px 12px; white-space: nowrap; }#huntr-react-container-2 .ql-snow .ql-tooltip::before { content: "Visit URL:"; line-height: 26px; margin-right: 8px; }#huntr-react-container-2 .ql-snow .ql-tooltip input[type="text"] { display: none; border: 1px solid rgb(204, 204, 204); font-size: 13px; height: 26px; margin: 0px; padding: 3px 5px; width: 170px; }#huntr-react-container-2 .ql-snow .ql-tooltip a.ql-preview { display: inline-block; max-width: 200px; overflow-x: hidden; text-overflow: ellipsis; vertical-align: top; }#huntr-react-container-2 .ql-snow .ql-tooltip a.ql-action::after { border-right: 1px solid rgb(204, 204, 204); content: "Edit"; margin-left: 16px; padding-right: 8px; }#huntr-react-container-2 .ql-snow .ql-tooltip a.ql-remove::before { content: "Remove"; margin-left: 8px; }#huntr-react-container-2 .ql-snow .ql-tooltip a { line-height: 26px; }#huntr-react-container-2 .ql-snow .ql-tooltip.ql-editing a.ql-preview, #huntr-react-container-2 .ql-snow .ql-tooltip.ql-editing a.ql-remove { display: none; }#huntr-react-container-2 .ql-snow .ql-tooltip.ql-editing input[type="text"] { display: inline-block; }#huntr-react-container-2 .ql-snow .ql-tooltip.ql-editing a.ql-action::after { border-right: 0px; content: "Save"; padding-right: 0px; }#huntr-react-container-2 .ql-snow .ql-tooltip[data-mode="link"]::before { content: "Enter link:"; }#huntr-react-container-2 .ql-snow .ql-tooltip[data-mode="formula"]::before { content: "Enter formula:"; }#huntr-react-container-2 .ql-snow .ql-tooltip[data-mode="video"]::before { content: "Enter video:"; }#huntr-react-container-2 .ql-snow a { color: rgb(0, 102, 204); }',
            isStyle: true,
            id: 85,
          },
        },
      ],
    },
    timestamp: 1725125692247,
  },
  {
    type: 3,
    data: {
      source: 0,
      texts: [],
      attributes: [],
      removes: [],
      adds: [
        {
          parentId: 5,
          nextId: null,
          node: {
            type: 2,
            tagName: "script",
            attributes: {
              src:
                "chrome-extension://nhdogjmejiglipccpnnnanhbledajbpd/build/detector-exec.js",
            },
            childNodes: [],
            id: 86,
          },
        },
      ],
    },
    timestamp: 1725125692249,
  },
  {
    type: 3,
    data: {
      source: 0,
      texts: [],
      attributes: [],
      removes: [],
      adds: [
        {
          parentId: 5,
          nextId: null,
          node: {
            type: 2,
            tagName: "style",
            attributes: {},
            childNodes: [],
            id: 87,
          },
        },
        {
          parentId: 87,
          nextId: null,
          node: {
            type: 3,
            textContent:
              "ch-app .search-app__wrapper__[data-v-0a4e498b] .search-suggest .list .tool-item{padding:0 9px 0 10px}.search-app .search-app__wrapper__[data-v-0a4e498b] .search-suggest .list .tool-item .content{margin-left:12px}.search-app .juejin-search[data-v-0a4e498b]{margin:8px}:root{--jjext-color-brand:#1e80ff;--jjext-color-brand-light:#e8f3ff;--jjext-color-nav-title:#86909c;--jjext-color-nav-popup-bg:#ffffff;--jjext-color-primary:#1d2129;--jjext-color-secondary-app:#4e5969;--jjext-color-thirdly:#86909c;--jjext-color-hover:#1e80ff;--jjext-color-hover-thirdly:#86909c;--jjext-color-dropdown-text:#1e80ff;--jjext-color-divider:#e5e6eb;--jjext-color-main-bg:#f4f5f5;--jjext-color-secondary-bg:#ffffff;--jjext-color-thirdly-bg:#f4f5f5;--jjext-color-hover-bg:#e8f3ff;--jjext-color-comment-bg:rgba(244, 245, 245, 0.5);--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(232, 243, 255, 0) 0%,\n    rgba(232, 243, 255, 0.8) 25.09%,\n    #e8f3ff 50.16%,\n    rgba(232, 243, 255, 0.8) 75.47%,\n    rgba(232, 243, 255, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#ffffff;--jjext-color-nav-bg:rgba(255, 255, 255, 0.13);--jjext-color-nav-selected-border:rgba(229, 230, 235, 0.3);--jjext-color-tips:#f53f3f;--jjext-color-fourthly:#c9cdd4;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#e5e6eb;--jjext-color-icon-search:#ffffff;--jjext-color-navbar-icon:#1e80ff;--jjext-color-layout-dropdown-bg:rgba(232, 243, 255, 0.8);--jjext-color-layout-title:#4e5969;--jjext-color-layout-title-active:#1e80ff;--jjext-color-layout-icon-outline:rgba(30, 128, 255, 0.5);--jjext-color-layout-icon-fill:#ffffff;--jjext-color-layer-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-layer-4:#ffffff;--jjext-color-font-brand1-normal:#1e80ff;--jjext-color-font-brand-4:#abcdff;--jjext-color-font-1:#252933;--jjext-color-font-2:#515767;--jjext-color-font-3:#8a919f;--jjext-color-font-4:#c2c8d1;--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.05);--jjext-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-gray-0:#fff;--jjext-color-gray-1-1:#e4e6eb;--jjext-color-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-gray-1-3:#e4e6eb;--jjext-color-gray-2:#f2f3f5;--jjext-color-gray-3:#f7f8fa;--jjext-color-background:#f2f3f5;--jjext-color-layer-1:#fff;--jjext-color-layer-2-1:#f7f8fa;--jjext-color-layer-2-2:rgba(247, 248, 250, 0.7);--jjext-color-layer-3-fill:#f2f3f5;--jjext-color-layer-3-border:#e4e6eb;--jjext-color-layer-4-dropdown:#fff;--jjext-color-layer-5:#fff;--jjext-color-brand-1-normal:#1e80ff;--jjext-color-brand-2-hover:#1171ee;--jjext-color-brand-3-click:#0060dd;--jjext-color-brand-4-disable:#abcdff;--jjext-color-brand-5-light:#eaf2ff;--jjext-color-mask-1:rgba(0, 0, 0, 0.4);--jjext-color-mask-2:#fff;--jjext-color-mask-3:none;--jjext-color-mask-6:#ffffff;--jjext-color-brand-fill1-normal:rgba(30, 128, 255, 0.05);--jjext-color-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-brand-fill3-click:rgba(30, 128, 255, 0.2);--jjext-color-brand-stroke1-normal:rgba(30, 128, 255, 0.3);--jjext-color-brand-stroke2-hover:rgba(30, 128, 255, 0.45);--jjext-color-brand-stroke3-click:rgba(30, 128, 255, 0.6);--jjext-color-font_danger:#ff5132;--jjext-color-shade-1:rgba(0, 0, 0, 0.4);--jjext-color-popup:#fff;--jjext-color-popover:rgba(0, 0, 0, 0.8)}:root .dark{--jjext-color-brand:#1352a3;--jjext-color-nav-title:#e3e3e3;--jjext-color-nav-popup-bg:#1352a3;--jjext-color-primary:#e3e3e3;--jjext-color-secondary-app:#a9a9a9;--jjext-color-thirdly:#7d7d7f;--jjext-color-hover:#eeeeee;--jjext-color-hover-thirdly:#878789;--jjext-color-dropdown-text:#878789;--jjext-color-divider:#4a4a4a;--jjext-color-main-bg:#121212;--jjext-color-secondary-bg:#272727;--jjext-color-thirdly-bg:#3a3a3a;--jjext-color-hover-bg:#3a3a3a;--jjext-color-comment-bg:#313131;--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(58, 58, 58, 0) 0%,\n    rgba(58, 58, 58, 0.8) 25.09%,\n    #3a3a3a 50.16%,\n    rgba(58, 58, 58, 0.8) 75.47%,\n    rgba(58, 58, 58, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#e3e3e3;--jjext-color-nav-bg:rgb(30, 30, 30);--jjext-color-nav-selected-border:#4a4a4a;--jjext-color-tips:#bc3030;--jjext-color-fourthly:#878789;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#3a3a3a;--jjext-color-icon-search:#e3e3e3;--jjext-color-navbar-icon:#e3e3e3;--jjext-color-layout-dropdown-bg:rgba(125, 125, 127, 0.8);--jjext-color-layout-title:#eeeeee;--jjext-color-layout-title-active:#eeeeee;--jjext-color-layout-icon-outline:#131313;--jjext-color-layout-icon-fill:#e3e3e3;--jjext-color-layer-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-layer-4:#2f2f2f;--jjext-color-font-brand1-normal:#4495ff;--jjext-color-font-brand-4:rgba(19, 113, 236, 0.2);--jjext-color-font-1:rgba(255, 255, 255, 0.9);--jjext-color-font-2:rgba(255, 255, 255, 0.7);--jjext-color-font-3:rgba(255, 255, 255, 0.55);--jjext-color-font-4:rgba(255, 255, 255, 0.45);--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.1);--jjext-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-gray-0:#000;--jjext-color-gray-1-1:rgba(255, 255, 255, 0.2);--jjext-color-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-gray-1-3:#464646;--jjext-color-gray-2:rgba(255, 255, 255, 0.12);--jjext-color-gray-3:rgba(255, 255, 255, 0.08);--jjext-color-background:#000;--jjext-color-layer-1:#181818;--jjext-color-layer-2-1:rgba(255, 255, 255, 0.08);--jjext-color-layer-2-2:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-fill:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-border:rgba(255, 255, 255, 0.2);--jjext-color-layer-4-dropdown:#2f2f2f;--jjext-color-layer-5:rgba(255, 255, 255, 0.12);--jjext-color-brand-1-normal:#2986ff;--jjext-color-brand-2-hover:#1473ed;--jjext-color-brand-3-click:#0563dd;--jjext-color-brand-4-disable:rgba(41, 134, 255, 0.4);--jjext-color-brand-5-light:rgba(30, 128, 255, 0.2);--jjext-color-mask-1:rgba(255, 255, 255, 0.4);--jjext-color-mask-2:#282828;--jjext-color-mask-3:rgba(0, 0, 0, 0.05);--jjext-color-mask-6:#181818;--jjext-color-brand-fill1-normal:rgba(41, 134, 255, 0.15);--jjext-color-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-brand-fill3-click:rgba(5, 99, 221, 0.35);--jjext-color-brand-stroke1-normal:rgba(41, 134, 255, 0.4);--jjext-color-brand-stroke2-hover:rgba(20, 115, 237, 0.6);--jjext-color-brand-stroke3-click:rgba(5, 99, 221, 0.6);--jjext-color-font_danger:#f85959;--jjext-color-shade-1:rgba(0, 0, 0, 0.6);--jjext-color-popup:#282828;--jjext-color-popover:#323232}",
            isStyle: true,
            id: 88,
          },
        },
        {
          parentId: 87,
          nextId: 88,
          node: {
            type: 3,
            textContent:
              '.jj-flash-note__popper[data-v-44225974]{position:absolute;border:none;outline:0;text-align:center;width:28px;height:28px;background:#f7f8fa;border:1px solid #e5e6eb;border-radius:2px;padding:4px}.jj-flash-note__popper .icon[data-v-44225974]{pointer-events:none}.jj-flash-note__popup.vdr-container{position:absolute;box-sizing:border-box}.jj-flash-note__popup.vdr-container .vdr-handle-tl{top:-4px;left:-4px;cursor:nwse-resize}.jj-flash-note__popup.vdr-container .vdr-handle-tm{top:-2px;left:50%;margin-left:-3px;cursor:ns-resize}.jj-flash-note__popup.vdr-container .vdr-handle-tr{top:-4px;right:-4px;cursor:nesw-resize}.jj-flash-note__popup.vdr-container .vdr-handle-ml{top:50%;margin-top:-3px;left:-2px;cursor:ew-resize}.jj-flash-note__popup.vdr-container .vdr-handle-mr{top:50%;margin-top:-3px;right:-2px;cursor:ew-resize}.jj-flash-note__popup.vdr-container .vdr-handle-bl{bottom:-4px;left:-4px;cursor:nesw-resize}.jj-flash-note__popup.vdr-container .vdr-handle-bm{bottom:-2px;left:50%;margin-left:-4px;cursor:ns-resize}.jj-flash-note__popup.vdr-container .vdr-handle-br{bottom:-4px;right:-4px;cursor:nwse-resize}.jj-flash-note__popup.vdr-container .vdr-handle{box-sizing:border-box;position:absolute;width:7px;height:7px}.jj-flash-note__popup.vdr-container .vdr-handle.vdr-handle-tl.handle-tl{top:0;left:0}.jj-flash-note__popup.vdr-container .vdr-handle.vdr-handle-tr.handle-tr{top:0;right:0}.jj-flash-note__popup.vdr-container .vdr-handle.vdr-handle-bl.handle-bl{bottom:0;left:0}.jj-flash-note__popup.vdr-container .vdr-handle.vdr-handle-br.handle-br{bottom:0;right:0}.jj-flash-note__popup.vdr-container .vdr-handle.vdr-handle-bm.handle-bm,.jj-flash-note__popup.vdr-container .vdr-handle.vdr-handle-tm.handle-tm{left:10px;right:10px;width:unset;margin-left:0}.jj-flash-note__popup.vdr-container .vdr-handle.vdr-handle-ml.handle-ml,.jj-flash-note__popup.vdr-container .vdr-handle.vdr-handle-mr.handle-mr{top:10px;bottom:10px;height:unset;margin-top:0}.jj-flash-note__popup[data-v-45165cc7]{position:absolute;border:1px solid #e4e6eb;filter:drop-shadow(0 2px 15px rgba(0, 0, 0, .2));border-radius:4px;overflow:hidden;z-index:9999;background-color:#fff}.jj-flash-note__frame[data-v-45165cc7]{border:none}.jj-flash-note__app[data-v-6ad74fae]{z-index:9999;position:fixed;left:0;top:0}.jj-flash-note__app .mask[data-v-6ad74fae]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:9000;background-color:rgba(0,0,0,.4);opacity:1}.jj-flash-note__app .fade-enter-active[data-v-6ad74fae],.jj-flash-note__app .fade-leave-active[data-v-6ad74fae]{transition:opacity .15s ease}.jj-flash-note__app .fade-enter-from[data-v-6ad74fae],.jj-flash-note__app .fade-leave-to[data-v-6ad74fae]{opacity:0}[data-v-41285de6]:root{--jjext-color-brand:#1e80ff;--jjext-color-brand-light:#e8f3ff;--jjext-color-nav-title:#86909c;--jjext-color-nav-popup-bg:#ffffff;--jjext-color-primary:#1d2129;--jjext-color-secondary-app:#4e5969;--jjext-color-thirdly:#86909c;--jjext-color-hover:#1e80ff;--jjext-color-hover-thirdly:#86909c;--jjext-color-dropdown-text:#1e80ff;--jjext-color-divider:#e5e6eb;--jjext-color-main-bg:#f4f5f5;--jjext-color-secondary-bg:#ffffff;--jjext-color-thirdly-bg:#f4f5f5;--jjext-color-hover-bg:#e8f3ff;--jjext-color-comment-bg:rgba(244, 245, 245, 0.5);--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(232, 243, 255, 0) 0%,\n    rgba(232, 243, 255, 0.8) 25.09%,\n    #e8f3ff 50.16%,\n    rgba(232, 243, 255, 0.8) 75.47%,\n    rgba(232, 243, 255, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#ffffff;--jjext-color-nav-bg:rgba(255, 255, 255, 0.13);--jjext-color-nav-selected-border:rgba(229, 230, 235, 0.3);--jjext-color-tips:#f53f3f;--jjext-color-fourthly:#c9cdd4;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#e5e6eb;--jjext-color-icon-search:#ffffff;--jjext-color-navbar-icon:#1e80ff;--jjext-color-layout-dropdown-bg:rgba(232, 243, 255, 0.8);--jjext-color-layout-title:#4e5969;--jjext-color-layout-title-active:#1e80ff;--jjext-color-layout-icon-outline:rgba(30, 128, 255, 0.5);--jjext-color-layout-icon-fill:#ffffff;--jjext-color-layer-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-layer-4:#ffffff;--jjext-color-font-brand1-normal:#1e80ff;--jjext-color-font-brand-4:#abcdff;--jjext-color-font-1:#252933;--jjext-color-font-2:#515767;--jjext-color-font-3:#8a919f;--jjext-color-font-4:#c2c8d1;--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.05);--jjext-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-gray-0:#fff;--jjext-color-gray-1-1:#e4e6eb;--jjext-color-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-gray-1-3:#e4e6eb;--jjext-color-gray-2:#f2f3f5;--jjext-color-gray-3:#f7f8fa;--jjext-color-background:#f2f3f5;--jjext-color-layer-1:#fff;--jjext-color-layer-2-1:#f7f8fa;--jjext-color-layer-2-2:rgba(247, 248, 250, 0.7);--jjext-color-layer-3-fill:#f2f3f5;--jjext-color-layer-3-border:#e4e6eb;--jjext-color-layer-4-dropdown:#fff;--jjext-color-layer-5:#fff;--jjext-color-brand-1-normal:#1e80ff;--jjext-color-brand-2-hover:#1171ee;--jjext-color-brand-3-click:#0060dd;--jjext-color-brand-4-disable:#abcdff;--jjext-color-brand-5-light:#eaf2ff;--jjext-color-mask-1:rgba(0, 0, 0, 0.4);--jjext-color-mask-2:#fff;--jjext-color-mask-3:none;--jjext-color-mask-6:#ffffff;--jjext-color-brand-fill1-normal:rgba(30, 128, 255, 0.05);--jjext-color-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-brand-fill3-click:rgba(30, 128, 255, 0.2);--jjext-color-brand-stroke1-normal:rgba(30, 128, 255, 0.3);--jjext-color-brand-stroke2-hover:rgba(30, 128, 255, 0.45);--jjext-color-brand-stroke3-click:rgba(30, 128, 255, 0.6);--jjext-color-font_danger:#ff5132;--jjext-color-shade-1:rgba(0, 0, 0, 0.4);--jjext-color-popup:#fff;--jjext-color-popover:rgba(0, 0, 0, 0.8)}:root .dark[data-v-41285de6]{--jjext-color-brand:#1352a3;--jjext-color-nav-title:#e3e3e3;--jjext-color-nav-popup-bg:#1352a3;--jjext-color-primary:#e3e3e3;--jjext-color-secondary-app:#a9a9a9;--jjext-color-thirdly:#7d7d7f;--jjext-color-hover:#eeeeee;--jjext-color-hover-thirdly:#878789;--jjext-color-dropdown-text:#878789;--jjext-color-divider:#4a4a4a;--jjext-color-main-bg:#121212;--jjext-color-secondary-bg:#272727;--jjext-color-thirdly-bg:#3a3a3a;--jjext-color-hover-bg:#3a3a3a;--jjext-color-comment-bg:#313131;--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(58, 58, 58, 0) 0%,\n    rgba(58, 58, 58, 0.8) 25.09%,\n    #3a3a3a 50.16%,\n    rgba(58, 58, 58, 0.8) 75.47%,\n    rgba(58, 58, 58, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#e3e3e3;--jjext-color-nav-bg:rgb(30, 30, 30);--jjext-color-nav-selected-border:#4a4a4a;--jjext-color-tips:#bc3030;--jjext-color-fourthly:#878789;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#3a3a3a;--jjext-color-icon-search:#e3e3e3;--jjext-color-navbar-icon:#e3e3e3;--jjext-color-layout-dropdown-bg:rgba(125, 125, 127, 0.8);--jjext-color-layout-title:#eeeeee;--jjext-color-layout-title-active:#eeeeee;--jjext-color-layout-icon-outline:#131313;--jjext-color-layout-icon-fill:#e3e3e3;--jjext-color-layer-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-layer-4:#2f2f2f;--jjext-color-font-brand1-normal:#4495ff;--jjext-color-font-brand-4:rgba(19, 113, 236, 0.2);--jjext-color-font-1:rgba(255, 255, 255, 0.9);--jjext-color-font-2:rgba(255, 255, 255, 0.7);--jjext-color-font-3:rgba(255, 255, 255, 0.55);--jjext-color-font-4:rgba(255, 255, 255, 0.45);--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.1);--jjext-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-gray-0:#000;--jjext-color-gray-1-1:rgba(255, 255, 255, 0.2);--jjext-color-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-gray-1-3:#464646;--jjext-color-gray-2:rgba(255, 255, 255, 0.12);--jjext-color-gray-3:rgba(255, 255, 255, 0.08);--jjext-color-background:#000;--jjext-color-layer-1:#181818;--jjext-color-layer-2-1:rgba(255, 255, 255, 0.08);--jjext-color-layer-2-2:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-fill:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-border:rgba(255, 255, 255, 0.2);--jjext-color-layer-4-dropdown:#2f2f2f;--jjext-color-layer-5:rgba(255, 255, 255, 0.12);--jjext-color-brand-1-normal:#2986ff;--jjext-color-brand-2-hover:#1473ed;--jjext-color-brand-3-click:#0563dd;--jjext-color-brand-4-disable:rgba(41, 134, 255, 0.4);--jjext-color-brand-5-light:rgba(30, 128, 255, 0.2);--jjext-color-mask-1:rgba(255, 255, 255, 0.4);--jjext-color-mask-2:#282828;--jjext-color-mask-3:rgba(0, 0, 0, 0.05);--jjext-color-mask-6:#181818;--jjext-color-brand-fill1-normal:rgba(41, 134, 255, 0.15);--jjext-color-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-brand-fill3-click:rgba(5, 99, 221, 0.35);--jjext-color-brand-stroke1-normal:rgba(41, 134, 255, 0.4);--jjext-color-brand-stroke2-hover:rgba(20, 115, 237, 0.6);--jjext-color-brand-stroke3-click:rgba(5, 99, 221, 0.6);--jjext-color-font_danger:#f85959;--jjext-color-shade-1:rgba(0, 0, 0, 0.6);--jjext-color-popup:#282828;--jjext-color-popover:#323232}.juejin-search[data-v-41285de6]{display:flex;width:682px;height:46px;border-radius:2px;flex-direction:row;align-items:center;justify-content:center;position:relative}.juejin-search .search-anim[data-v-41285de6]{position:absolute;left:8px;width:28px;height:28px;object-fit:contain;animation-play-state:paused}.juejin-search .search-anim.slide-right-enter-active[data-v-41285de6],.juejin-search .search-anim.slide-right-leave-active[data-v-41285de6]{transition:width .3s linear}.juejin-search .search-anim.slide-right-enter-from[data-v-41285de6],.juejin-search .search-anim.slide-right-leave-to[data-v-41285de6]{width:0}.juejin-search .juejin-search-logo[data-v-41285de6]{right:16px;position:absolute;width:23px;height:18px;object-fit:contain}.juejin-search .juejin-search-logo path[data-v-41285de6]{transition:all .3s linear}.juejin-search #juejin-search-input-global[data-v-41285de6]{height:100%;width:100%}.juejin-search #juejin-search-input-global .input[data-v-41285de6]{padding:0 39px 0 33px;width:100%;height:100%;outline:0;border:none;border-radius:2px;color:var(--jjext-color-font-1);font-size:18px;line-height:22px;font-weight:500;caret-color:transparent;box-sizing:border-box;background-color:var(--jjext-color-layer-4-plugin)}.juejin-search #juejin-search-input-global .input.active[data-v-41285de6]{border:2px solid var(--jjext-color-font-brand-4)}.juejin-search #juejin-search-input-global .input.animation-stopped[data-v-41285de6]{caret-color:#1e80ff;padding-left:16px}.juejin-search #juejin-search-input-global .input[data-v-41285de6]::placeholder{font-weight:400;color:#86909c}.calculator[data-v-4faf9c0e]{display:flex;align-items:center;height:36px;padding:0 16px;cursor:pointer}.calculator .result[data-v-4faf9c0e]{font-size:14px;text-align:start;font-weight:500;line-height:22px;color:#1d2129;margin:0 12px;text-overflow:ellipsis;flex:1 0 auto;overflow:hidden;white-space:nowrap;max-width:494px}.calculator .hint[data-v-4faf9c0e]{font-size:14px;line-height:22px;color:#8a919f}[data-v-ef0f272e]:root{--jjext-color-brand:#1e80ff;--jjext-color-brand-light:#e8f3ff;--jjext-color-nav-title:#86909c;--jjext-color-nav-popup-bg:#ffffff;--jjext-color-primary:#1d2129;--jjext-color-secondary-app:#4e5969;--jjext-color-thirdly:#86909c;--jjext-color-hover:#1e80ff;--jjext-color-hover-thirdly:#86909c;--jjext-color-dropdown-text:#1e80ff;--jjext-color-divider:#e5e6eb;--jjext-color-main-bg:#f4f5f5;--jjext-color-secondary-bg:#ffffff;--jjext-color-thirdly-bg:#f4f5f5;--jjext-color-hover-bg:#e8f3ff;--jjext-color-comment-bg:rgba(244, 245, 245, 0.5);--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(232, 243, 255, 0) 0%,\n    rgba(232, 243, 255, 0.8) 25.09%,\n    #e8f3ff 50.16%,\n    rgba(232, 243, 255, 0.8) 75.47%,\n    rgba(232, 243, 255, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#ffffff;--jjext-color-nav-bg:rgba(255, 255, 255, 0.13);--jjext-color-nav-selected-border:rgba(229, 230, 235, 0.3);--jjext-color-tips:#f53f3f;--jjext-color-fourthly:#c9cdd4;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#e5e6eb;--jjext-color-icon-search:#ffffff;--jjext-color-navbar-icon:#1e80ff;--jjext-color-layout-dropdown-bg:rgba(232, 243, 255, 0.8);--jjext-color-layout-title:#4e5969;--jjext-color-layout-title-active:#1e80ff;--jjext-color-layout-icon-outline:rgba(30, 128, 255, 0.5);--jjext-color-layout-icon-fill:#ffffff;--jjext-color-layer-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-layer-4:#ffffff;--jjext-color-font-brand1-normal:#1e80ff;--jjext-color-font-brand-4:#abcdff;--jjext-color-font-1:#252933;--jjext-color-font-2:#515767;--jjext-color-font-3:#8a919f;--jjext-color-font-4:#c2c8d1;--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.05);--jjext-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-gray-0:#fff;--jjext-color-gray-1-1:#e4e6eb;--jjext-color-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-gray-1-3:#e4e6eb;--jjext-color-gray-2:#f2f3f5;--jjext-color-gray-3:#f7f8fa;--jjext-color-background:#f2f3f5;--jjext-color-layer-1:#fff;--jjext-color-layer-2-1:#f7f8fa;--jjext-color-layer-2-2:rgba(247, 248, 250, 0.7);--jjext-color-layer-3-fill:#f2f3f5;--jjext-color-layer-3-border:#e4e6eb;--jjext-color-layer-4-dropdown:#fff;--jjext-color-layer-5:#fff;--jjext-color-brand-1-normal:#1e80ff;--jjext-color-brand-2-hover:#1171ee;--jjext-color-brand-3-click:#0060dd;--jjext-color-brand-4-disable:#abcdff;--jjext-color-brand-5-light:#eaf2ff;--jjext-color-mask-1:rgba(0, 0, 0, 0.4);--jjext-color-mask-2:#fff;--jjext-color-mask-3:none;--jjext-color-mask-6:#ffffff;--jjext-color-brand-fill1-normal:rgba(30, 128, 255, 0.05);--jjext-color-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-brand-fill3-click:rgba(30, 128, 255, 0.2);--jjext-color-brand-stroke1-normal:rgba(30, 128, 255, 0.3);--jjext-color-brand-stroke2-hover:rgba(30, 128, 255, 0.45);--jjext-color-brand-stroke3-click:rgba(30, 128, 255, 0.6);--jjext-color-font_danger:#ff5132;--jjext-color-shade-1:rgba(0, 0, 0, 0.4);--jjext-color-popup:#fff;--jjext-color-popover:rgba(0, 0, 0, 0.8)}:root .dark[data-v-ef0f272e]{--jjext-color-brand:#1352a3;--jjext-color-nav-title:#e3e3e3;--jjext-color-nav-popup-bg:#1352a3;--jjext-color-primary:#e3e3e3;--jjext-color-secondary-app:#a9a9a9;--jjext-color-thirdly:#7d7d7f;--jjext-color-hover:#eeeeee;--jjext-color-hover-thirdly:#878789;--jjext-color-dropdown-text:#878789;--jjext-color-divider:#4a4a4a;--jjext-color-main-bg:#121212;--jjext-color-secondary-bg:#272727;--jjext-color-thirdly-bg:#3a3a3a;--jjext-color-hover-bg:#3a3a3a;--jjext-color-comment-bg:#313131;--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(58, 58, 58, 0) 0%,\n    rgba(58, 58, 58, 0.8) 25.09%,\n    #3a3a3a 50.16%,\n    rgba(58, 58, 58, 0.8) 75.47%,\n    rgba(58, 58, 58, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#e3e3e3;--jjext-color-nav-bg:rgb(30, 30, 30);--jjext-color-nav-selected-border:#4a4a4a;--jjext-color-tips:#bc3030;--jjext-color-fourthly:#878789;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#3a3a3a;--jjext-color-icon-search:#e3e3e3;--jjext-color-navbar-icon:#e3e3e3;--jjext-color-layout-dropdown-bg:rgba(125, 125, 127, 0.8);--jjext-color-layout-title:#eeeeee;--jjext-color-layout-title-active:#eeeeee;--jjext-color-layout-icon-outline:#131313;--jjext-color-layout-icon-fill:#e3e3e3;--jjext-color-layer-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-layer-4:#2f2f2f;--jjext-color-font-brand1-normal:#4495ff;--jjext-color-font-brand-4:rgba(19, 113, 236, 0.2);--jjext-color-font-1:rgba(255, 255, 255, 0.9);--jjext-color-font-2:rgba(255, 255, 255, 0.7);--jjext-color-font-3:rgba(255, 255, 255, 0.55);--jjext-color-font-4:rgba(255, 255, 255, 0.45);--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.1);--jjext-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-gray-0:#000;--jjext-color-gray-1-1:rgba(255, 255, 255, 0.2);--jjext-color-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-gray-1-3:#464646;--jjext-color-gray-2:rgba(255, 255, 255, 0.12);--jjext-color-gray-3:rgba(255, 255, 255, 0.08);--jjext-color-background:#000;--jjext-color-layer-1:#181818;--jjext-color-layer-2-1:rgba(255, 255, 255, 0.08);--jjext-color-layer-2-2:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-fill:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-border:rgba(255, 255, 255, 0.2);--jjext-color-layer-4-dropdown:#2f2f2f;--jjext-color-layer-5:rgba(255, 255, 255, 0.12);--jjext-color-brand-1-normal:#2986ff;--jjext-color-brand-2-hover:#1473ed;--jjext-color-brand-3-click:#0563dd;--jjext-color-brand-4-disable:rgba(41, 134, 255, 0.4);--jjext-color-brand-5-light:rgba(30, 128, 255, 0.2);--jjext-color-mask-1:rgba(255, 255, 255, 0.4);--jjext-color-mask-2:#282828;--jjext-color-mask-3:rgba(0, 0, 0, 0.05);--jjext-color-mask-6:#181818;--jjext-color-brand-fill1-normal:rgba(41, 134, 255, 0.15);--jjext-color-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-brand-fill3-click:rgba(5, 99, 221, 0.35);--jjext-color-brand-stroke1-normal:rgba(41, 134, 255, 0.4);--jjext-color-brand-stroke2-hover:rgba(20, 115, 237, 0.6);--jjext-color-brand-stroke3-click:rgba(5, 99, 221, 0.6);--jjext-color-font_danger:#f85959;--jjext-color-shade-1:rgba(0, 0, 0, 0.6);--jjext-color-popup:#282828;--jjext-color-popover:#323232}.search-action[data-v-ef0f272e]{display:flex;align-items:center;box-sizing:border-box;user-select:none;cursor:pointer;height:36px;border-left:4px solid transparent;border-top:4px solid transparent;border-bottom:4px solid transparent;transition:all .15s linear;padding:0 16px 0 12px}.search-action.active[data-v-ef0f272e]{border-left-color:var(--jjext-color-font-brand1-normal);background-color:#f4f5f5}.search-action .search-content[data-v-ef0f272e]{display:flex;align-items:center;flex:1 0 auto;margin-right:16px}.search-action .search-content .search-content__logo[data-v-ef0f272e]{width:28px;height:28px;margin:0}.search-action .search-content .search-content__engine[data-v-ef0f272e],.search-action .search-content .search-content__keyword[data-v-ef0f272e]{font-size:14px;font-weight:500;line-height:22px}.search-action .search-content .search-content__keyword[data-v-ef0f272e]{color:var(--jjext-color-font-1);margin:0 4px 0 12px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:396px}.search-action .search-content .search-content__engine[data-v-ef0f272e]{color:var(--jjext-color-font-brand1-normal)}.search-action .hint[data-v-ef0f272e]{font-size:14px;line-height:22px;color:var(--jjext-color-font-brand1-normal)}em[data-v-b1604592]{font-style:normal;color:#f53f3f}[data-v-6cedf366]:root{--jjext-color-brand:#1e80ff;--jjext-color-brand-light:#e8f3ff;--jjext-color-nav-title:#86909c;--jjext-color-nav-popup-bg:#ffffff;--jjext-color-primary:#1d2129;--jjext-color-secondary-app:#4e5969;--jjext-color-thirdly:#86909c;--jjext-color-hover:#1e80ff;--jjext-color-hover-thirdly:#86909c;--jjext-color-dropdown-text:#1e80ff;--jjext-color-divider:#e5e6eb;--jjext-color-main-bg:#f4f5f5;--jjext-color-secondary-bg:#ffffff;--jjext-color-thirdly-bg:#f4f5f5;--jjext-color-hover-bg:#e8f3ff;--jjext-color-comment-bg:rgba(244, 245, 245, 0.5);--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(232, 243, 255, 0) 0%,\n    rgba(232, 243, 255, 0.8) 25.09%,\n    #e8f3ff 50.16%,\n    rgba(232, 243, 255, 0.8) 75.47%,\n    rgba(232, 243, 255, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#ffffff;--jjext-color-nav-bg:rgba(255, 255, 255, 0.13);--jjext-color-nav-selected-border:rgba(229, 230, 235, 0.3);--jjext-color-tips:#f53f3f;--jjext-color-fourthly:#c9cdd4;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#e5e6eb;--jjext-color-icon-search:#ffffff;--jjext-color-navbar-icon:#1e80ff;--jjext-color-layout-dropdown-bg:rgba(232, 243, 255, 0.8);--jjext-color-layout-title:#4e5969;--jjext-color-layout-title-active:#1e80ff;--jjext-color-layout-icon-outline:rgba(30, 128, 255, 0.5);--jjext-color-layout-icon-fill:#ffffff;--jjext-color-layer-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-layer-4:#ffffff;--jjext-color-font-brand1-normal:#1e80ff;--jjext-color-font-brand-4:#abcdff;--jjext-color-font-1:#252933;--jjext-color-font-2:#515767;--jjext-color-font-3:#8a919f;--jjext-color-font-4:#c2c8d1;--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.05);--jjext-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-gray-0:#fff;--jjext-color-gray-1-1:#e4e6eb;--jjext-color-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-gray-1-3:#e4e6eb;--jjext-color-gray-2:#f2f3f5;--jjext-color-gray-3:#f7f8fa;--jjext-color-background:#f2f3f5;--jjext-color-layer-1:#fff;--jjext-color-layer-2-1:#f7f8fa;--jjext-color-layer-2-2:rgba(247, 248, 250, 0.7);--jjext-color-layer-3-fill:#f2f3f5;--jjext-color-layer-3-border:#e4e6eb;--jjext-color-layer-4-dropdown:#fff;--jjext-color-layer-5:#fff;--jjext-color-brand-1-normal:#1e80ff;--jjext-color-brand-2-hover:#1171ee;--jjext-color-brand-3-click:#0060dd;--jjext-color-brand-4-disable:#abcdff;--jjext-color-brand-5-light:#eaf2ff;--jjext-color-mask-1:rgba(0, 0, 0, 0.4);--jjext-color-mask-2:#fff;--jjext-color-mask-3:none;--jjext-color-mask-6:#ffffff;--jjext-color-brand-fill1-normal:rgba(30, 128, 255, 0.05);--jjext-color-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-brand-fill3-click:rgba(30, 128, 255, 0.2);--jjext-color-brand-stroke1-normal:rgba(30, 128, 255, 0.3);--jjext-color-brand-stroke2-hover:rgba(30, 128, 255, 0.45);--jjext-color-brand-stroke3-click:rgba(30, 128, 255, 0.6);--jjext-color-font_danger:#ff5132;--jjext-color-shade-1:rgba(0, 0, 0, 0.4);--jjext-color-popup:#fff;--jjext-color-popover:rgba(0, 0, 0, 0.8)}:root .dark[data-v-6cedf366]{--jjext-color-brand:#1352a3;--jjext-color-nav-title:#e3e3e3;--jjext-color-nav-popup-bg:#1352a3;--jjext-color-primary:#e3e3e3;--jjext-color-secondary-app:#a9a9a9;--jjext-color-thirdly:#7d7d7f;--jjext-color-hover:#eeeeee;--jjext-color-hover-thirdly:#878789;--jjext-color-dropdown-text:#878789;--jjext-color-divider:#4a4a4a;--jjext-color-main-bg:#121212;--jjext-color-secondary-bg:#272727;--jjext-color-thirdly-bg:#3a3a3a;--jjext-color-hover-bg:#3a3a3a;--jjext-color-comment-bg:#313131;--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(58, 58, 58, 0) 0%,\n    rgba(58, 58, 58, 0.8) 25.09%,\n    #3a3a3a 50.16%,\n    rgba(58, 58, 58, 0.8) 75.47%,\n    rgba(58, 58, 58, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#e3e3e3;--jjext-color-nav-bg:rgb(30, 30, 30);--jjext-color-nav-selected-border:#4a4a4a;--jjext-color-tips:#bc3030;--jjext-color-fourthly:#878789;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#3a3a3a;--jjext-color-icon-search:#e3e3e3;--jjext-color-navbar-icon:#e3e3e3;--jjext-color-layout-dropdown-bg:rgba(125, 125, 127, 0.8);--jjext-color-layout-title:#eeeeee;--jjext-color-layout-title-active:#eeeeee;--jjext-color-layout-icon-outline:#131313;--jjext-color-layout-icon-fill:#e3e3e3;--jjext-color-layer-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-layer-4:#2f2f2f;--jjext-color-font-brand1-normal:#4495ff;--jjext-color-font-brand-4:rgba(19, 113, 236, 0.2);--jjext-color-font-1:rgba(255, 255, 255, 0.9);--jjext-color-font-2:rgba(255, 255, 255, 0.7);--jjext-color-font-3:rgba(255, 255, 255, 0.55);--jjext-color-font-4:rgba(255, 255, 255, 0.45);--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.1);--jjext-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-gray-0:#000;--jjext-color-gray-1-1:rgba(255, 255, 255, 0.2);--jjext-color-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-gray-1-3:#464646;--jjext-color-gray-2:rgba(255, 255, 255, 0.12);--jjext-color-gray-3:rgba(255, 255, 255, 0.08);--jjext-color-background:#000;--jjext-color-layer-1:#181818;--jjext-color-layer-2-1:rgba(255, 255, 255, 0.08);--jjext-color-layer-2-2:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-fill:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-border:rgba(255, 255, 255, 0.2);--jjext-color-layer-4-dropdown:#2f2f2f;--jjext-color-layer-5:rgba(255, 255, 255, 0.12);--jjext-color-brand-1-normal:#2986ff;--jjext-color-brand-2-hover:#1473ed;--jjext-color-brand-3-click:#0563dd;--jjext-color-brand-4-disable:rgba(41, 134, 255, 0.4);--jjext-color-brand-5-light:rgba(30, 128, 255, 0.2);--jjext-color-mask-1:rgba(255, 255, 255, 0.4);--jjext-color-mask-2:#282828;--jjext-color-mask-3:rgba(0, 0, 0, 0.05);--jjext-color-mask-6:#181818;--jjext-color-brand-fill1-normal:rgba(41, 134, 255, 0.15);--jjext-color-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-brand-fill3-click:rgba(5, 99, 221, 0.35);--jjext-color-brand-stroke1-normal:rgba(41, 134, 255, 0.4);--jjext-color-brand-stroke2-hover:rgba(20, 115, 237, 0.6);--jjext-color-brand-stroke3-click:rgba(5, 99, 221, 0.6);--jjext-color-font_danger:#f85959;--jjext-color-shade-1:rgba(0, 0, 0, 0.6);--jjext-color-popup:#282828;--jjext-color-popover:#323232}.search-suggest[data-v-6cedf366]{background:var(--jjext-color-layer-4);padding:0 4px 8px 4px}.search-suggest .calculator.active[data-v-6cedf366],.search-suggest .search-action.active[data-v-6cedf366]{background:var(--jjext-color-layer-2-1)}.search-suggest .calculator[data-v-6cedf366]{transition:background-color .15s linear}.search-suggest .list[data-v-6cedf366]{display:flex;border-top:1px solid var(--jjext-color-layer-gray-1-2);flex-direction:column;padding-top:4px}.search-suggest .list .item[data-v-6cedf366]{display:flex;flex-direction:row;align-items:center;height:36px;cursor:pointer}.search-suggest .list .item .content[data-v-6cedf366]{color:var(--jjext-color-font-1);font-size:14px}.search-suggest .list .item.active[data-v-6cedf366],.search-suggest .list .item[data-v-6cedf366]:hover{background:var(--jjext-color-layer-2-1)}.search-suggest .list .tool-item[data-v-6cedf366]{position:relative;padding:0 9px 0 4px}.search-suggest .list .tool-item .tool-icon[data-v-6cedf366]{width:24px;height:24px;background-size:100% 100%;background-position:0 0;background-repeat:no-repeat}.search-suggest .list .tool-item .content[data-v-6cedf366]{margin-left:8px}.search-suggest .list .tool-item .icon-tool-arrow[data-v-6cedf366]{opacity:0;transition:all .15s linear;position:absolute;stroke:var(--jjext-color-font-brand1-normal);top:50%;transform:translateY(-50%);right:9px}.search-suggest .list .tool-item.active .icon-tool-arrow[data-v-6cedf366],.search-suggest .list .tool-item:hover .icon-tool-arrow[data-v-6cedf366]{opacity:1}.search-suggest .list .suggest-item[data-v-6cedf366]{padding:0 7px;transition:background-color .15s linear}.search-suggest .list .suggest-item .icon-search[data-v-6cedf366]{stroke:var(--jjext-color-font-4)}.search-suggest .list .suggest-item .content[data-v-6cedf366]{margin:0 0 0 12px}.search-suggest .list .suggest-item[data-v-6cedf366] .highlight-keyword{color:var(--jjext-color-font-3)}.search-suggest .setting-hint[data-v-6cedf366]{display:flex;align-items:center;justify-content:flex-end;margin:8px 16px 0 16px}.search-suggest .setting-hint .text[data-v-6cedf366]{color:#8a919f;line-height:22px;cursor:pointer;user-select:none}.search-suggest .setting-hint .text[data-v-6cedf366]:hover:not(.disabled){color:#1e80ff;transition:all .15s linear}.search-suggest .setting-hint .text.disabled[data-v-6cedf366]{cursor:initial}:root{--jjext-color-input-bg:#f4f5f5;--jjext-color-input-error-bg:#ffece8;--jjext-color-input-placeholder:#86909c;--jjext-color-input-text:#4e5969;--jjext-color-input-icon:#f53f3f}:root .dark{--jjext-color-input-bg:rgba(255, 255, 255, 0.12);--jjext-color-input-error-bg:rgba(255, 81, 50, 0.15);--jjext-color-input-placeholder:#e3e3e3;--jjext-color-input-text:#e3e3e3;--jjext-color-input-icon:#ff6247}[data-v-341e7439]:root{--jjext-color-brand:#1e80ff;--jjext-color-brand-light:#e8f3ff;--jjext-color-nav-title:#86909c;--jjext-color-nav-popup-bg:#ffffff;--jjext-color-primary:#1d2129;--jjext-color-secondary-app:#4e5969;--jjext-color-thirdly:#86909c;--jjext-color-hover:#1e80ff;--jjext-color-hover-thirdly:#86909c;--jjext-color-dropdown-text:#1e80ff;--jjext-color-divider:#e5e6eb;--jjext-color-main-bg:#f4f5f5;--jjext-color-secondary-bg:#ffffff;--jjext-color-thirdly-bg:#f4f5f5;--jjext-color-hover-bg:#e8f3ff;--jjext-color-comment-bg:rgba(244, 245, 245, 0.5);--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(232, 243, 255, 0) 0%,\n    rgba(232, 243, 255, 0.8) 25.09%,\n    #e8f3ff 50.16%,\n    rgba(232, 243, 255, 0.8) 75.47%,\n    rgba(232, 243, 255, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#ffffff;--jjext-color-nav-bg:rgba(255, 255, 255, 0.13);--jjext-color-nav-selected-border:rgba(229, 230, 235, 0.3);--jjext-color-tips:#f53f3f;--jjext-color-fourthly:#c9cdd4;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#e5e6eb;--jjext-color-icon-search:#ffffff;--jjext-color-navbar-icon:#1e80ff;--jjext-color-layout-dropdown-bg:rgba(232, 243, 255, 0.8);--jjext-color-layout-title:#4e5969;--jjext-color-layout-title-active:#1e80ff;--jjext-color-layout-icon-outline:rgba(30, 128, 255, 0.5);--jjext-color-layout-icon-fill:#ffffff;--jjext-color-layer-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-layer-4:#ffffff;--jjext-color-font-brand1-normal:#1e80ff;--jjext-color-font-brand-4:#abcdff;--jjext-color-font-1:#252933;--jjext-color-font-2:#515767;--jjext-color-font-3:#8a919f;--jjext-color-font-4:#c2c8d1;--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.05);--jjext-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-gray-0:#fff;--jjext-color-gray-1-1:#e4e6eb;--jjext-color-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-gray-1-3:#e4e6eb;--jjext-color-gray-2:#f2f3f5;--jjext-color-gray-3:#f7f8fa;--jjext-color-background:#f2f3f5;--jjext-color-layer-1:#fff;--jjext-color-layer-2-1:#f7f8fa;--jjext-color-layer-2-2:rgba(247, 248, 250, 0.7);--jjext-color-layer-3-fill:#f2f3f5;--jjext-color-layer-3-border:#e4e6eb;--jjext-color-layer-4-dropdown:#fff;--jjext-color-layer-5:#fff;--jjext-color-brand-1-normal:#1e80ff;--jjext-color-brand-2-hover:#1171ee;--jjext-color-brand-3-click:#0060dd;--jjext-color-brand-4-disable:#abcdff;--jjext-color-brand-5-light:#eaf2ff;--jjext-color-mask-1:rgba(0, 0, 0, 0.4);--jjext-color-mask-2:#fff;--jjext-color-mask-3:none;--jjext-color-mask-6:#ffffff;--jjext-color-brand-fill1-normal:rgba(30, 128, 255, 0.05);--jjext-color-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-brand-fill3-click:rgba(30, 128, 255, 0.2);--jjext-color-brand-stroke1-normal:rgba(30, 128, 255, 0.3);--jjext-color-brand-stroke2-hover:rgba(30, 128, 255, 0.45);--jjext-color-brand-stroke3-click:rgba(30, 128, 255, 0.6);--jjext-color-font_danger:#ff5132;--jjext-color-shade-1:rgba(0, 0, 0, 0.4);--jjext-color-popup:#fff;--jjext-color-popover:rgba(0, 0, 0, 0.8)}:root .dark[data-v-341e7439]{--jjext-color-brand:#1352a3;--jjext-color-nav-title:#e3e3e3;--jjext-color-nav-popup-bg:#1352a3;--jjext-color-primary:#e3e3e3;--jjext-color-secondary-app:#a9a9a9;--jjext-color-thirdly:#7d7d7f;--jjext-color-hover:#eeeeee;--jjext-color-hover-thirdly:#878789;--jjext-color-dropdown-text:#878789;--jjext-color-divider:#4a4a4a;--jjext-color-main-bg:#121212;--jjext-color-secondary-bg:#272727;--jjext-color-thirdly-bg:#3a3a3a;--jjext-color-hover-bg:#3a3a3a;--jjext-color-comment-bg:#313131;--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(58, 58, 58, 0) 0%,\n    rgba(58, 58, 58, 0.8) 25.09%,\n    #3a3a3a 50.16%,\n    rgba(58, 58, 58, 0.8) 75.47%,\n    rgba(58, 58, 58, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#e3e3e3;--jjext-color-nav-bg:rgb(30, 30, 30);--jjext-color-nav-selected-border:#4a4a4a;--jjext-color-tips:#bc3030;--jjext-color-fourthly:#878789;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#3a3a3a;--jjext-color-icon-search:#e3e3e3;--jjext-color-navbar-icon:#e3e3e3;--jjext-color-layout-dropdown-bg:rgba(125, 125, 127, 0.8);--jjext-color-layout-title:#eeeeee;--jjext-color-layout-title-active:#eeeeee;--jjext-color-layout-icon-outline:#131313;--jjext-color-layout-icon-fill:#e3e3e3;--jjext-color-layer-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-layer-4:#2f2f2f;--jjext-color-font-brand1-normal:#4495ff;--jjext-color-font-brand-4:rgba(19, 113, 236, 0.2);--jjext-color-font-1:rgba(255, 255, 255, 0.9);--jjext-color-font-2:rgba(255, 255, 255, 0.7);--jjext-color-font-3:rgba(255, 255, 255, 0.55);--jjext-color-font-4:rgba(255, 255, 255, 0.45);--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.1);--jjext-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-gray-0:#000;--jjext-color-gray-1-1:rgba(255, 255, 255, 0.2);--jjext-color-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-gray-1-3:#464646;--jjext-color-gray-2:rgba(255, 255, 255, 0.12);--jjext-color-gray-3:rgba(255, 255, 255, 0.08);--jjext-color-background:#000;--jjext-color-layer-1:#181818;--jjext-color-layer-2-1:rgba(255, 255, 255, 0.08);--jjext-color-layer-2-2:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-fill:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-border:rgba(255, 255, 255, 0.2);--jjext-color-layer-4-dropdown:#2f2f2f;--jjext-color-layer-5:rgba(255, 255, 255, 0.12);--jjext-color-brand-1-normal:#2986ff;--jjext-color-brand-2-hover:#1473ed;--jjext-color-brand-3-click:#0563dd;--jjext-color-brand-4-disable:rgba(41, 134, 255, 0.4);--jjext-color-brand-5-light:rgba(30, 128, 255, 0.2);--jjext-color-mask-1:rgba(255, 255, 255, 0.4);--jjext-color-mask-2:#282828;--jjext-color-mask-3:rgba(0, 0, 0, 0.05);--jjext-color-mask-6:#181818;--jjext-color-brand-fill1-normal:rgba(41, 134, 255, 0.15);--jjext-color-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-brand-fill3-click:rgba(5, 99, 221, 0.35);--jjext-color-brand-stroke1-normal:rgba(41, 134, 255, 0.4);--jjext-color-brand-stroke2-hover:rgba(20, 115, 237, 0.6);--jjext-color-brand-stroke3-click:rgba(5, 99, 221, 0.6);--jjext-color-font_danger:#f85959;--jjext-color-shade-1:rgba(0, 0, 0, 0.6);--jjext-color-popup:#282828;--jjext-color-popover:#323232}.input-option[data-v-341e7439]{display:flex;flex-direction:column}.input-option span.error[data-v-341e7439]{margin-left:6.6666666667rem;font-size:1rem;line-height:20px;display:inline-block;height:20px;color:var(--jjext-color-tips)}.input-wrapper[data-v-341e7439]{display:flex;flex-direction:row;align-items:center;width:100%}.input-wrapper label[data-v-341e7439]{width:4em;font-size:1.1666666667rem;line-height:1.8333333333rem;color:var(--jjext-color-thirdly);margin-right:1rem}.input-wrapper .input[data-v-341e7439]{flex:1 0 auto;position:relative}.input-wrapper .input.error .input-inner[data-v-341e7439]{background-color:var(--jjext-color-input-error-bg)}.input-wrapper .input.error .btn-clear[data-v-341e7439]{color:var(--jjext-color-input-icon)}.input-wrapper .input .input-inner[data-v-341e7439]{background:var(--jjext-color-input-bg);border-radius:2px;color:var(--jjext-color-input-text);font-size:1.0833333333rem;line-height:1.8333333333rem;height:2.3333333333rem;padding:0 8px;outline:0;border:none;width:100%}.input-wrapper .input .input-inner[data-v-341e7439]::placeholder{color:var(--jjext-color-input-placeholder)}.input-wrapper .btn-clear[data-v-341e7439]{position:absolute;top:50%;right:0;transform:translateY(-50%);background:0 0;border:none;outline:0;color:var(--jjext-color-fourthly)}.input-wrapper .btn-clear[data-v-341e7439]::before{font-size:10px;line-height:10px}[data-v-5a92de1e]:root{--jjext-color-brand:#1e80ff;--jjext-color-brand-light:#e8f3ff;--jjext-color-nav-title:#86909c;--jjext-color-nav-popup-bg:#ffffff;--jjext-color-primary:#1d2129;--jjext-color-secondary-app:#4e5969;--jjext-color-thirdly:#86909c;--jjext-color-hover:#1e80ff;--jjext-color-hover-thirdly:#86909c;--jjext-color-dropdown-text:#1e80ff;--jjext-color-divider:#e5e6eb;--jjext-color-main-bg:#f4f5f5;--jjext-color-secondary-bg:#ffffff;--jjext-color-thirdly-bg:#f4f5f5;--jjext-color-hover-bg:#e8f3ff;--jjext-color-comment-bg:rgba(244, 245, 245, 0.5);--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(232, 243, 255, 0) 0%,\n    rgba(232, 243, 255, 0.8) 25.09%,\n    #e8f3ff 50.16%,\n    rgba(232, 243, 255, 0.8) 75.47%,\n    rgba(232, 243, 255, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#ffffff;--jjext-color-nav-bg:rgba(255, 255, 255, 0.13);--jjext-color-nav-selected-border:rgba(229, 230, 235, 0.3);--jjext-color-tips:#f53f3f;--jjext-color-fourthly:#c9cdd4;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#e5e6eb;--jjext-color-icon-search:#ffffff;--jjext-color-navbar-icon:#1e80ff;--jjext-color-layout-dropdown-bg:rgba(232, 243, 255, 0.8);--jjext-color-layout-title:#4e5969;--jjext-color-layout-title-active:#1e80ff;--jjext-color-layout-icon-outline:rgba(30, 128, 255, 0.5);--jjext-color-layout-icon-fill:#ffffff;--jjext-color-layer-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-layer-4:#ffffff;--jjext-color-font-brand1-normal:#1e80ff;--jjext-color-font-brand-4:#abcdff;--jjext-color-font-1:#252933;--jjext-color-font-2:#515767;--jjext-color-font-3:#8a919f;--jjext-color-font-4:#c2c8d1;--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.05);--jjext-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-gray-0:#fff;--jjext-color-gray-1-1:#e4e6eb;--jjext-color-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-gray-1-3:#e4e6eb;--jjext-color-gray-2:#f2f3f5;--jjext-color-gray-3:#f7f8fa;--jjext-color-background:#f2f3f5;--jjext-color-layer-1:#fff;--jjext-color-layer-2-1:#f7f8fa;--jjext-color-layer-2-2:rgba(247, 248, 250, 0.7);--jjext-color-layer-3-fill:#f2f3f5;--jjext-color-layer-3-border:#e4e6eb;--jjext-color-layer-4-dropdown:#fff;--jjext-color-layer-5:#fff;--jjext-color-brand-1-normal:#1e80ff;--jjext-color-brand-2-hover:#1171ee;--jjext-color-brand-3-click:#0060dd;--jjext-color-brand-4-disable:#abcdff;--jjext-color-brand-5-light:#eaf2ff;--jjext-color-mask-1:rgba(0, 0, 0, 0.4);--jjext-color-mask-2:#fff;--jjext-color-mask-3:none;--jjext-color-mask-6:#ffffff;--jjext-color-brand-fill1-normal:rgba(30, 128, 255, 0.05);--jjext-color-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-brand-fill3-click:rgba(30, 128, 255, 0.2);--jjext-color-brand-stroke1-normal:rgba(30, 128, 255, 0.3);--jjext-color-brand-stroke2-hover:rgba(30, 128, 255, 0.45);--jjext-color-brand-stroke3-click:rgba(30, 128, 255, 0.6);--jjext-color-font_danger:#ff5132;--jjext-color-shade-1:rgba(0, 0, 0, 0.4);--jjext-color-popup:#fff;--jjext-color-popover:rgba(0, 0, 0, 0.8)}:root .dark[data-v-5a92de1e]{--jjext-color-brand:#1352a3;--jjext-color-nav-title:#e3e3e3;--jjext-color-nav-popup-bg:#1352a3;--jjext-color-primary:#e3e3e3;--jjext-color-secondary-app:#a9a9a9;--jjext-color-thirdly:#7d7d7f;--jjext-color-hover:#eeeeee;--jjext-color-hover-thirdly:#878789;--jjext-color-dropdown-text:#878789;--jjext-color-divider:#4a4a4a;--jjext-color-main-bg:#121212;--jjext-color-secondary-bg:#272727;--jjext-color-thirdly-bg:#3a3a3a;--jjext-color-hover-bg:#3a3a3a;--jjext-color-comment-bg:#313131;--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(58, 58, 58, 0) 0%,\n    rgba(58, 58, 58, 0.8) 25.09%,\n    #3a3a3a 50.16%,\n    rgba(58, 58, 58, 0.8) 75.47%,\n    rgba(58, 58, 58, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#e3e3e3;--jjext-color-nav-bg:rgb(30, 30, 30);--jjext-color-nav-selected-border:#4a4a4a;--jjext-color-tips:#bc3030;--jjext-color-fourthly:#878789;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#3a3a3a;--jjext-color-icon-search:#e3e3e3;--jjext-color-navbar-icon:#e3e3e3;--jjext-color-layout-dropdown-bg:rgba(125, 125, 127, 0.8);--jjext-color-layout-title:#eeeeee;--jjext-color-layout-title-active:#eeeeee;--jjext-color-layout-icon-outline:#131313;--jjext-color-layout-icon-fill:#e3e3e3;--jjext-color-layer-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-layer-4:#2f2f2f;--jjext-color-font-brand1-normal:#4495ff;--jjext-color-font-brand-4:rgba(19, 113, 236, 0.2);--jjext-color-font-1:rgba(255, 255, 255, 0.9);--jjext-color-font-2:rgba(255, 255, 255, 0.7);--jjext-color-font-3:rgba(255, 255, 255, 0.55);--jjext-color-font-4:rgba(255, 255, 255, 0.45);--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.1);--jjext-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-gray-0:#000;--jjext-color-gray-1-1:rgba(255, 255, 255, 0.2);--jjext-color-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-gray-1-3:#464646;--jjext-color-gray-2:rgba(255, 255, 255, 0.12);--jjext-color-gray-3:rgba(255, 255, 255, 0.08);--jjext-color-background:#000;--jjext-color-layer-1:#181818;--jjext-color-layer-2-1:rgba(255, 255, 255, 0.08);--jjext-color-layer-2-2:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-fill:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-border:rgba(255, 255, 255, 0.2);--jjext-color-layer-4-dropdown:#2f2f2f;--jjext-color-layer-5:rgba(255, 255, 255, 0.12);--jjext-color-brand-1-normal:#2986ff;--jjext-color-brand-2-hover:#1473ed;--jjext-color-brand-3-click:#0563dd;--jjext-color-brand-4-disable:rgba(41, 134, 255, 0.4);--jjext-color-brand-5-light:rgba(30, 128, 255, 0.2);--jjext-color-mask-1:rgba(255, 255, 255, 0.4);--jjext-color-mask-2:#282828;--jjext-color-mask-3:rgba(0, 0, 0, 0.05);--jjext-color-mask-6:#181818;--jjext-color-brand-fill1-normal:rgba(41, 134, 255, 0.15);--jjext-color-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-brand-fill3-click:rgba(5, 99, 221, 0.35);--jjext-color-brand-stroke1-normal:rgba(41, 134, 255, 0.4);--jjext-color-brand-stroke2-hover:rgba(20, 115, 237, 0.6);--jjext-color-brand-stroke3-click:rgba(5, 99, 221, 0.6);--jjext-color-font_danger:#f85959;--jjext-color-shade-1:rgba(0, 0, 0, 0.6);--jjext-color-popup:#282828;--jjext-color-popover:#323232}[data-v-5a92de1e]{box-sizing:border-box}.color-tool[data-v-5a92de1e]{padding:0 16px!important}.color-tool .row[data-v-5a92de1e]{display:flex;align-items:center}.color-tool .color-picker[data-v-5a92de1e]{cursor:pointer;outline:0;border:none;padding:0;margin:0;border-radius:2px;background-color:transparent;width:92px;height:40px}.color-tool .color-picker[data-v-5a92de1e]::-webkit-color-swatch-wrapper{padding:3px;border:1px solid transparent;border-radius:4px;transition:all .15s linear}.color-tool .color-picker[data-v-5a92de1e]::-webkit-color-swatch-wrapper:hover{border:1px solid #bedaff}.color-tool .color-picker[data-v-5a92de1e]::-webkit-color-swatch{border-radius:2px;border:none}.color-tool .input[data-v-5a92de1e]{transform:translateY(10px);flex:1 1 auto;margin:0 12px}.color-tool .input[data-v-5a92de1e] input.input-inner{height:40px;padding-left:16px;font-size:14px;color:var(--jjext-color-primary);box-sizing:border-box;background:var(--jjext-color-main-bg)}.color-tool .input[data-v-5a92de1e] label{display:none}.color-tool .input[data-v-5a92de1e] span.error{margin-left:16px}.color-tool .input[data-v-5a92de1e] .input-wrapper .btn-clear{right:8px}.color-tool .input[data-v-5a92de1e] .input-wrapper .btn-clear::before{font-size:14px;color:#c9cdd4}.color-tool button[data-v-5a92de1e]{outline:0;border:none;background-color:unset;width:93px;height:40px;font-size:14px}.color-tool .btn-convert[data-v-5a92de1e]{background:var(--jjext-color-brand);border-radius:2px;color:#fff;transition:all .15s linear}.color-tool .btn-convert[data-v-5a92de1e]:hover{background:#5399ff}.color-tool .btn-convert[data-v-5a92de1e]:active{background:#0060dd}.color-tool .btn-copy[data-v-5a92de1e]{background:rgba(30,128,255,.05);border:1px solid rgba(30,128,255,.3);border-radius:2px;color:var(--jjext-color-brand);transition:all .15s linear}.color-tool .btn-copy[data-v-5a92de1e]:hover{background:rgba(30,128,255,.1);border-color:rgba(30,128,255,.45)}.color-tool .btn-copy[data-v-5a92de1e]:active{background:rgba(30,128,255,.2);border-color:rgba(30,128,255,.6)}.color-tool .display[data-v-5a92de1e]{flex:1;text-align:start;background-color:var(--jjext-color-main-bg);height:40px;margin:0 12px;border-radius:2px;line-height:40px;padding-left:16px;font-size:14px;color:var(--jjext-color-primary)}.color-tool .label[data-v-5a92de1e]{width:92px;font-size:16px;font-weight:500;color:var(--jjext-color-primary);text-align:end}.color-tool .row[data-v-5a92de1e]:not(:first-of-type){margin-top:16px}[data-v-6b3fcf66]:root{--jjext-color-brand:#1e80ff;--jjext-color-brand-light:#e8f3ff;--jjext-color-nav-title:#86909c;--jjext-color-nav-popup-bg:#ffffff;--jjext-color-primary:#1d2129;--jjext-color-secondary-app:#4e5969;--jjext-color-thirdly:#86909c;--jjext-color-hover:#1e80ff;--jjext-color-hover-thirdly:#86909c;--jjext-color-dropdown-text:#1e80ff;--jjext-color-divider:#e5e6eb;--jjext-color-main-bg:#f4f5f5;--jjext-color-secondary-bg:#ffffff;--jjext-color-thirdly-bg:#f4f5f5;--jjext-color-hover-bg:#e8f3ff;--jjext-color-comment-bg:rgba(244, 245, 245, 0.5);--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(232, 243, 255, 0) 0%,\n    rgba(232, 243, 255, 0.8) 25.09%,\n    #e8f3ff 50.16%,\n    rgba(232, 243, 255, 0.8) 75.47%,\n    rgba(232, 243, 255, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#ffffff;--jjext-color-nav-bg:rgba(255, 255, 255, 0.13);--jjext-color-nav-selected-border:rgba(229, 230, 235, 0.3);--jjext-color-tips:#f53f3f;--jjext-color-fourthly:#c9cdd4;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#e5e6eb;--jjext-color-icon-search:#ffffff;--jjext-color-navbar-icon:#1e80ff;--jjext-color-layout-dropdown-bg:rgba(232, 243, 255, 0.8);--jjext-color-layout-title:#4e5969;--jjext-color-layout-title-active:#1e80ff;--jjext-color-layout-icon-outline:rgba(30, 128, 255, 0.5);--jjext-color-layout-icon-fill:#ffffff;--jjext-color-layer-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-layer-4:#ffffff;--jjext-color-font-brand1-normal:#1e80ff;--jjext-color-font-brand-4:#abcdff;--jjext-color-font-1:#252933;--jjext-color-font-2:#515767;--jjext-color-font-3:#8a919f;--jjext-color-font-4:#c2c8d1;--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.05);--jjext-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-gray-0:#fff;--jjext-color-gray-1-1:#e4e6eb;--jjext-color-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-gray-1-3:#e4e6eb;--jjext-color-gray-2:#f2f3f5;--jjext-color-gray-3:#f7f8fa;--jjext-color-background:#f2f3f5;--jjext-color-layer-1:#fff;--jjext-color-layer-2-1:#f7f8fa;--jjext-color-layer-2-2:rgba(247, 248, 250, 0.7);--jjext-color-layer-3-fill:#f2f3f5;--jjext-color-layer-3-border:#e4e6eb;--jjext-color-layer-4-dropdown:#fff;--jjext-color-layer-5:#fff;--jjext-color-brand-1-normal:#1e80ff;--jjext-color-brand-2-hover:#1171ee;--jjext-color-brand-3-click:#0060dd;--jjext-color-brand-4-disable:#abcdff;--jjext-color-brand-5-light:#eaf2ff;--jjext-color-mask-1:rgba(0, 0, 0, 0.4);--jjext-color-mask-2:#fff;--jjext-color-mask-3:none;--jjext-color-mask-6:#ffffff;--jjext-color-brand-fill1-normal:rgba(30, 128, 255, 0.05);--jjext-color-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-brand-fill3-click:rgba(30, 128, 255, 0.2);--jjext-color-brand-stroke1-normal:rgba(30, 128, 255, 0.3);--jjext-color-brand-stroke2-hover:rgba(30, 128, 255, 0.45);--jjext-color-brand-stroke3-click:rgba(30, 128, 255, 0.6);--jjext-color-font_danger:#ff5132;--jjext-color-shade-1:rgba(0, 0, 0, 0.4);--jjext-color-popup:#fff;--jjext-color-popover:rgba(0, 0, 0, 0.8)}:root .dark[data-v-6b3fcf66]{--jjext-color-brand:#1352a3;--jjext-color-nav-title:#e3e3e3;--jjext-color-nav-popup-bg:#1352a3;--jjext-color-primary:#e3e3e3;--jjext-color-secondary-app:#a9a9a9;--jjext-color-thirdly:#7d7d7f;--jjext-color-hover:#eeeeee;--jjext-color-hover-thirdly:#878789;--jjext-color-dropdown-text:#878789;--jjext-color-divider:#4a4a4a;--jjext-color-main-bg:#121212;--jjext-color-secondary-bg:#272727;--jjext-color-thirdly-bg:#3a3a3a;--jjext-color-hover-bg:#3a3a3a;--jjext-color-comment-bg:#313131;--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(58, 58, 58, 0) 0%,\n    rgba(58, 58, 58, 0.8) 25.09%,\n    #3a3a3a 50.16%,\n    rgba(58, 58, 58, 0.8) 75.47%,\n    rgba(58, 58, 58, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#e3e3e3;--jjext-color-nav-bg:rgb(30, 30, 30);--jjext-color-nav-selected-border:#4a4a4a;--jjext-color-tips:#bc3030;--jjext-color-fourthly:#878789;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#3a3a3a;--jjext-color-icon-search:#e3e3e3;--jjext-color-navbar-icon:#e3e3e3;--jjext-color-layout-dropdown-bg:rgba(125, 125, 127, 0.8);--jjext-color-layout-title:#eeeeee;--jjext-color-layout-title-active:#eeeeee;--jjext-color-layout-icon-outline:#131313;--jjext-color-layout-icon-fill:#e3e3e3;--jjext-color-layer-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-layer-4:#2f2f2f;--jjext-color-font-brand1-normal:#4495ff;--jjext-color-font-brand-4:rgba(19, 113, 236, 0.2);--jjext-color-font-1:rgba(255, 255, 255, 0.9);--jjext-color-font-2:rgba(255, 255, 255, 0.7);--jjext-color-font-3:rgba(255, 255, 255, 0.55);--jjext-color-font-4:rgba(255, 255, 255, 0.45);--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.1);--jjext-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-gray-0:#000;--jjext-color-gray-1-1:rgba(255, 255, 255, 0.2);--jjext-color-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-gray-1-3:#464646;--jjext-color-gray-2:rgba(255, 255, 255, 0.12);--jjext-color-gray-3:rgba(255, 255, 255, 0.08);--jjext-color-background:#000;--jjext-color-layer-1:#181818;--jjext-color-layer-2-1:rgba(255, 255, 255, 0.08);--jjext-color-layer-2-2:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-fill:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-border:rgba(255, 255, 255, 0.2);--jjext-color-layer-4-dropdown:#2f2f2f;--jjext-color-layer-5:rgba(255, 255, 255, 0.12);--jjext-color-brand-1-normal:#2986ff;--jjext-color-brand-2-hover:#1473ed;--jjext-color-brand-3-click:#0563dd;--jjext-color-brand-4-disable:rgba(41, 134, 255, 0.4);--jjext-color-brand-5-light:rgba(30, 128, 255, 0.2);--jjext-color-mask-1:rgba(255, 255, 255, 0.4);--jjext-color-mask-2:#282828;--jjext-color-mask-3:rgba(0, 0, 0, 0.05);--jjext-color-mask-6:#181818;--jjext-color-brand-fill1-normal:rgba(41, 134, 255, 0.15);--jjext-color-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-brand-fill3-click:rgba(5, 99, 221, 0.35);--jjext-color-brand-stroke1-normal:rgba(41, 134, 255, 0.4);--jjext-color-brand-stroke2-hover:rgba(20, 115, 237, 0.6);--jjext-color-brand-stroke3-click:rgba(5, 99, 221, 0.6);--jjext-color-font_danger:#f85959;--jjext-color-shade-1:rgba(0, 0, 0, 0.6);--jjext-color-popup:#282828;--jjext-color-popover:#323232}.quick-tool-drawer[data-v-6b3fcf66]{z-index:750;position:fixed;right:0;top:0;bottom:0;width:60%;background:var(--jjext-color-thirdly-bg)}.quick-tool-drawer.dark .header .title[data-v-6b3fcf66]{color:#e3e3e3}.quick-tool-drawer .quick-tool-drawer__header__[data-v-6b3fcf66]{position:relative;height:64px;padding:0 16px;display:flex;flex-direction:row;align-items:center}.quick-tool-drawer .quick-tool-drawer__header__ .quick-tool-drawer__icon__[data-v-6b3fcf66]{width:40px;height:40px}.quick-tool-drawer .quick-tool-drawer__header__ .quick-tool-drawer__title__[data-v-6b3fcf66]{margin:0 0 0 9px;padding:0;font-size:16px;font-weight:500;line-height:22px;color:var(--jjext-color-brand)}.quick-tool-drawer .quick-tool-drawer__header__ .quick-tool-drawer__btn-close__[data-v-6b3fcf66]{cursor:pointer;position:absolute;right:16px;top:50%;font-size:18px;transform:translateY(-50%)}.quick-tool-drawer .quick-tool-drawer__header__ .quick-tool-drawer__btn-close__[data-v-6b3fcf66]::after{display:block;content:" ";position:absolute;padding:10px;width:100%;height:100%;top:-50%;left:-50%}.quick-tool-drawer .quick-tool-drawer__header__ .quick-tool-drawer__btn-close__ svg[data-v-6b3fcf66]{fill:var(--jjext-color-thirdly)}.quick-tool-drawer .quick-tool-drawer__tool__[data-v-6b3fcf66]{width:100%;height:100%;box-sizing:border-box}[data-v-19f1e2c8]:root{--jjext-color-brand:#1e80ff;--jjext-color-brand-light:#e8f3ff;--jjext-color-nav-title:#86909c;--jjext-color-nav-popup-bg:#ffffff;--jjext-color-primary:#1d2129;--jjext-color-secondary-app:#4e5969;--jjext-color-thirdly:#86909c;--jjext-color-hover:#1e80ff;--jjext-color-hover-thirdly:#86909c;--jjext-color-dropdown-text:#1e80ff;--jjext-color-divider:#e5e6eb;--jjext-color-main-bg:#f4f5f5;--jjext-color-secondary-bg:#ffffff;--jjext-color-thirdly-bg:#f4f5f5;--jjext-color-hover-bg:#e8f3ff;--jjext-color-comment-bg:rgba(244, 245, 245, 0.5);--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(232, 243, 255, 0) 0%,\n    rgba(232, 243, 255, 0.8) 25.09%,\n    #e8f3ff 50.16%,\n    rgba(232, 243, 255, 0.8) 75.47%,\n    rgba(232, 243, 255, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#ffffff;--jjext-color-nav-bg:rgba(255, 255, 255, 0.13);--jjext-color-nav-selected-border:rgba(229, 230, 235, 0.3);--jjext-color-tips:#f53f3f;--jjext-color-fourthly:#c9cdd4;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#e5e6eb;--jjext-color-icon-search:#ffffff;--jjext-color-navbar-icon:#1e80ff;--jjext-color-layout-dropdown-bg:rgba(232, 243, 255, 0.8);--jjext-color-layout-title:#4e5969;--jjext-color-layout-title-active:#1e80ff;--jjext-color-layout-icon-outline:rgba(30, 128, 255, 0.5);--jjext-color-layout-icon-fill:#ffffff;--jjext-color-layer-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-layer-4:#ffffff;--jjext-color-font-brand1-normal:#1e80ff;--jjext-color-font-brand-4:#abcdff;--jjext-color-font-1:#252933;--jjext-color-font-2:#515767;--jjext-color-font-3:#8a919f;--jjext-color-font-4:#c2c8d1;--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.05);--jjext-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-gray-0:#fff;--jjext-color-gray-1-1:#e4e6eb;--jjext-color-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-gray-1-3:#e4e6eb;--jjext-color-gray-2:#f2f3f5;--jjext-color-gray-3:#f7f8fa;--jjext-color-background:#f2f3f5;--jjext-color-layer-1:#fff;--jjext-color-layer-2-1:#f7f8fa;--jjext-color-layer-2-2:rgba(247, 248, 250, 0.7);--jjext-color-layer-3-fill:#f2f3f5;--jjext-color-layer-3-border:#e4e6eb;--jjext-color-layer-4-dropdown:#fff;--jjext-color-layer-5:#fff;--jjext-color-brand-1-normal:#1e80ff;--jjext-color-brand-2-hover:#1171ee;--jjext-color-brand-3-click:#0060dd;--jjext-color-brand-4-disable:#abcdff;--jjext-color-brand-5-light:#eaf2ff;--jjext-color-mask-1:rgba(0, 0, 0, 0.4);--jjext-color-mask-2:#fff;--jjext-color-mask-3:none;--jjext-color-mask-6:#ffffff;--jjext-color-brand-fill1-normal:rgba(30, 128, 255, 0.05);--jjext-color-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-brand-fill3-click:rgba(30, 128, 255, 0.2);--jjext-color-brand-stroke1-normal:rgba(30, 128, 255, 0.3);--jjext-color-brand-stroke2-hover:rgba(30, 128, 255, 0.45);--jjext-color-brand-stroke3-click:rgba(30, 128, 255, 0.6);--jjext-color-font_danger:#ff5132;--jjext-color-shade-1:rgba(0, 0, 0, 0.4);--jjext-color-popup:#fff;--jjext-color-popover:rgba(0, 0, 0, 0.8)}:root .dark[data-v-19f1e2c8]{--jjext-color-brand:#1352a3;--jjext-color-nav-title:#e3e3e3;--jjext-color-nav-popup-bg:#1352a3;--jjext-color-primary:#e3e3e3;--jjext-color-secondary-app:#a9a9a9;--jjext-color-thirdly:#7d7d7f;--jjext-color-hover:#eeeeee;--jjext-color-hover-thirdly:#878789;--jjext-color-dropdown-text:#878789;--jjext-color-divider:#4a4a4a;--jjext-color-main-bg:#121212;--jjext-color-secondary-bg:#272727;--jjext-color-thirdly-bg:#3a3a3a;--jjext-color-hover-bg:#3a3a3a;--jjext-color-comment-bg:#313131;--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(58, 58, 58, 0) 0%,\n    rgba(58, 58, 58, 0.8) 25.09%,\n    #3a3a3a 50.16%,\n    rgba(58, 58, 58, 0.8) 75.47%,\n    rgba(58, 58, 58, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#e3e3e3;--jjext-color-nav-bg:rgb(30, 30, 30);--jjext-color-nav-selected-border:#4a4a4a;--jjext-color-tips:#bc3030;--jjext-color-fourthly:#878789;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#3a3a3a;--jjext-color-icon-search:#e3e3e3;--jjext-color-navbar-icon:#e3e3e3;--jjext-color-layout-dropdown-bg:rgba(125, 125, 127, 0.8);--jjext-color-layout-title:#eeeeee;--jjext-color-layout-title-active:#eeeeee;--jjext-color-layout-icon-outline:#131313;--jjext-color-layout-icon-fill:#e3e3e3;--jjext-color-layer-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-layer-4:#2f2f2f;--jjext-color-font-brand1-normal:#4495ff;--jjext-color-font-brand-4:rgba(19, 113, 236, 0.2);--jjext-color-font-1:rgba(255, 255, 255, 0.9);--jjext-color-font-2:rgba(255, 255, 255, 0.7);--jjext-color-font-3:rgba(255, 255, 255, 0.55);--jjext-color-font-4:rgba(255, 255, 255, 0.45);--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.1);--jjext-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-gray-0:#000;--jjext-color-gray-1-1:rgba(255, 255, 255, 0.2);--jjext-color-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-gray-1-3:#464646;--jjext-color-gray-2:rgba(255, 255, 255, 0.12);--jjext-color-gray-3:rgba(255, 255, 255, 0.08);--jjext-color-background:#000;--jjext-color-layer-1:#181818;--jjext-color-layer-2-1:rgba(255, 255, 255, 0.08);--jjext-color-layer-2-2:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-fill:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-border:rgba(255, 255, 255, 0.2);--jjext-color-layer-4-dropdown:#2f2f2f;--jjext-color-layer-5:rgba(255, 255, 255, 0.12);--jjext-color-brand-1-normal:#2986ff;--jjext-color-brand-2-hover:#1473ed;--jjext-color-brand-3-click:#0563dd;--jjext-color-brand-4-disable:rgba(41, 134, 255, 0.4);--jjext-color-brand-5-light:rgba(30, 128, 255, 0.2);--jjext-color-mask-1:rgba(255, 255, 255, 0.4);--jjext-color-mask-2:#282828;--jjext-color-mask-3:rgba(0, 0, 0, 0.05);--jjext-color-mask-6:#181818;--jjext-color-brand-fill1-normal:rgba(41, 134, 255, 0.15);--jjext-color-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-brand-fill3-click:rgba(5, 99, 221, 0.35);--jjext-color-brand-stroke1-normal:rgba(41, 134, 255, 0.4);--jjext-color-brand-stroke2-hover:rgba(20, 115, 237, 0.6);--jjext-color-brand-stroke3-click:rgba(5, 99, 221, 0.6);--jjext-color-font_danger:#f85959;--jjext-color-shade-1:rgba(0, 0, 0, 0.6);--jjext-color-popup:#282828;--jjext-color-popover:#323232}.mask[data-v-19f1e2c8]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:600;background-color:var(--jjext-color-mask)}.slide-left-enter-active,.slide-left-leave-active{transition:transform .3s linear}.slide-left-enter-from,.slide-left-leave-to{transform:translateX(100%)}[data-v-0a4e498b]:root{--jjext-color-brand:#1e80ff;--jjext-color-brand-light:#e8f3ff;--jjext-color-nav-title:#86909c;--jjext-color-nav-popup-bg:#ffffff;--jjext-color-primary:#1d2129;--jjext-color-secondary-app:#4e5969;--jjext-color-thirdly:#86909c;--jjext-color-hover:#1e80ff;--jjext-color-hover-thirdly:#86909c;--jjext-color-dropdown-text:#1e80ff;--jjext-color-divider:#e5e6eb;--jjext-color-main-bg:#f4f5f5;--jjext-color-secondary-bg:#ffffff;--jjext-color-thirdly-bg:#f4f5f5;--jjext-color-hover-bg:#e8f3ff;--jjext-color-comment-bg:rgba(244, 245, 245, 0.5);--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(232, 243, 255, 0) 0%,\n    rgba(232, 243, 255, 0.8) 25.09%,\n    #e8f3ff 50.16%,\n    rgba(232, 243, 255, 0.8) 75.47%,\n    rgba(232, 243, 255, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#ffffff;--jjext-color-nav-bg:rgba(255, 255, 255, 0.13);--jjext-color-nav-selected-border:rgba(229, 230, 235, 0.3);--jjext-color-tips:#f53f3f;--jjext-color-fourthly:#c9cdd4;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#e5e6eb;--jjext-color-icon-search:#ffffff;--jjext-color-navbar-icon:#1e80ff;--jjext-color-layout-dropdown-bg:rgba(232, 243, 255, 0.8);--jjext-color-layout-title:#4e5969;--jjext-color-layout-title-active:#1e80ff;--jjext-color-layout-icon-outline:rgba(30, 128, 255, 0.5);--jjext-color-layout-icon-fill:#ffffff;--jjext-color-layer-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-layer-4:#ffffff;--jjext-color-font-brand1-normal:#1e80ff;--jjext-color-font-brand-4:#abcdff;--jjext-color-font-1:#252933;--jjext-color-font-2:#515767;--jjext-color-font-3:#8a919f;--jjext-color-font-4:#c2c8d1;--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.05);--jjext-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-gray-0:#fff;--jjext-color-gray-1-1:#e4e6eb;--jjext-color-gray-1-2:rgba(228, 230, 235, 0.5);--jjext-color-gray-1-3:#e4e6eb;--jjext-color-gray-2:#f2f3f5;--jjext-color-gray-3:#f7f8fa;--jjext-color-background:#f2f3f5;--jjext-color-layer-1:#fff;--jjext-color-layer-2-1:#f7f8fa;--jjext-color-layer-2-2:rgba(247, 248, 250, 0.7);--jjext-color-layer-3-fill:#f2f3f5;--jjext-color-layer-3-border:#e4e6eb;--jjext-color-layer-4-dropdown:#fff;--jjext-color-layer-5:#fff;--jjext-color-brand-1-normal:#1e80ff;--jjext-color-brand-2-hover:#1171ee;--jjext-color-brand-3-click:#0060dd;--jjext-color-brand-4-disable:#abcdff;--jjext-color-brand-5-light:#eaf2ff;--jjext-color-mask-1:rgba(0, 0, 0, 0.4);--jjext-color-mask-2:#fff;--jjext-color-mask-3:none;--jjext-color-mask-6:#ffffff;--jjext-color-brand-fill1-normal:rgba(30, 128, 255, 0.05);--jjext-color-brand-fill2-hover:rgba(30, 128, 255, 0.1);--jjext-color-brand-fill3-click:rgba(30, 128, 255, 0.2);--jjext-color-brand-stroke1-normal:rgba(30, 128, 255, 0.3);--jjext-color-brand-stroke2-hover:rgba(30, 128, 255, 0.45);--jjext-color-brand-stroke3-click:rgba(30, 128, 255, 0.6);--jjext-color-font_danger:#ff5132;--jjext-color-shade-1:rgba(0, 0, 0, 0.4);--jjext-color-popup:#fff;--jjext-color-popover:rgba(0, 0, 0, 0.8)}:root .dark[data-v-0a4e498b]{--jjext-color-brand:#1352a3;--jjext-color-nav-title:#e3e3e3;--jjext-color-nav-popup-bg:#1352a3;--jjext-color-primary:#e3e3e3;--jjext-color-secondary-app:#a9a9a9;--jjext-color-thirdly:#7d7d7f;--jjext-color-hover:#eeeeee;--jjext-color-hover-thirdly:#878789;--jjext-color-dropdown-text:#878789;--jjext-color-divider:#4a4a4a;--jjext-color-main-bg:#121212;--jjext-color-secondary-bg:#272727;--jjext-color-thirdly-bg:#3a3a3a;--jjext-color-hover-bg:#3a3a3a;--jjext-color-comment-bg:#313131;--jjext-hover-bg:linear-gradient(\n    90deg,\n    rgba(58, 58, 58, 0) 0%,\n    rgba(58, 58, 58, 0.8) 25.09%,\n    #3a3a3a 50.16%,\n    rgba(58, 58, 58, 0.8) 75.47%,\n    rgba(58, 58, 58, 0) 100%\n  );--jjext-color-mask:rgba(0, 0, 0, 0.4);--jjext-color-quick-nav-text:#e3e3e3;--jjext-color-nav-bg:rgb(30, 30, 30);--jjext-color-nav-selected-border:#4a4a4a;--jjext-color-tips:#bc3030;--jjext-color-fourthly:#878789;--jjext-color-shadow:rgba(0, 0, 0, 0.16);--jjext-color-grey-triangle:#3a3a3a;--jjext-color-icon-search:#e3e3e3;--jjext-color-navbar-icon:#e3e3e3;--jjext-color-layout-dropdown-bg:rgba(125, 125, 127, 0.8);--jjext-color-layout-title:#eeeeee;--jjext-color-layout-title-active:#eeeeee;--jjext-color-layout-icon-outline:#131313;--jjext-color-layout-icon-fill:#e3e3e3;--jjext-color-layer-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-layer-4:#2f2f2f;--jjext-color-font-brand1-normal:#4495ff;--jjext-color-font-brand-4:rgba(19, 113, 236, 0.2);--jjext-color-font-1:rgba(255, 255, 255, 0.9);--jjext-color-font-2:rgba(255, 255, 255, 0.7);--jjext-color-font-3:rgba(255, 255, 255, 0.55);--jjext-color-font-4:rgba(255, 255, 255, 0.45);--jjext-color-font-white:#fff;--jjext-color-layer-4-plugin:rgba(30, 128, 255, 0.1);--jjext-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-gray-0:#000;--jjext-color-gray-1-1:rgba(255, 255, 255, 0.2);--jjext-color-gray-1-2:rgba(255, 255, 255, 0.1);--jjext-color-gray-1-3:#464646;--jjext-color-gray-2:rgba(255, 255, 255, 0.12);--jjext-color-gray-3:rgba(255, 255, 255, 0.08);--jjext-color-background:#000;--jjext-color-layer-1:#181818;--jjext-color-layer-2-1:rgba(255, 255, 255, 0.08);--jjext-color-layer-2-2:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-fill:rgba(255, 255, 255, 0.08);--jjext-color-layer-3-border:rgba(255, 255, 255, 0.2);--jjext-color-layer-4-dropdown:#2f2f2f;--jjext-color-layer-5:rgba(255, 255, 255, 0.12);--jjext-color-brand-1-normal:#2986ff;--jjext-color-brand-2-hover:#1473ed;--jjext-color-brand-3-click:#0563dd;--jjext-color-brand-4-disable:rgba(41, 134, 255, 0.4);--jjext-color-brand-5-light:rgba(30, 128, 255, 0.2);--jjext-color-mask-1:rgba(255, 255, 255, 0.4);--jjext-color-mask-2:#282828;--jjext-color-mask-3:rgba(0, 0, 0, 0.05);--jjext-color-mask-6:#181818;--jjext-color-brand-fill1-normal:rgba(41, 134, 255, 0.15);--jjext-color-brand-fill2-hover:rgba(20, 115, 237, 0.25);--jjext-color-brand-fill3-click:rgba(5, 99, 221, 0.35);--jjext-color-brand-stroke1-normal:rgba(41, 134, 255, 0.4);--jjext-color-brand-stroke2-hover:rgba(20, 115, 237, 0.6);--jjext-color-brand-stroke3-click:rgba(5, 99, 221, 0.6);--jjext-color-font_danger:#f85959;--jjext-color-shade-1:rgba(0, 0, 0, 0.6);--jjext-color-popup:#282828;--jjext-color-popover:#323232}.search-app[data-v-0a4e498b]{z-index:9999;padding-top:160px;position:fixed;left:0;right:0;top:0;bottom:0;display:flex;align-items:flex-start;justify-content:center}.search-app.extension[data-v-0a4e498b]{z-index:500}@media (max-height:720px){.search-app.tool-active[data-v-0a4e498b]{padding-top:80px}}@media (max-height:640px){.search-app.tool-active[data-v-0a4e498b]{padding-top:30px}}.search-app .search-app__wrapper__[data-v-0a4e498b]{overflow:hidden;border-radius:4px;border:1px solid var(--jjext-color-font-brand1-normal);background:var(--jjext-color-layer-4);box-shadow:0 0 0 4px rgba(30,128,255,.2),0 0 20px rgba(0,0,0,.15);backdrop-filter:blur(15px)}.search-app .search-app__wrapper__ .search-result[data-v-0a4e498b]{margin-top:8px}.search-app .search-app__wrapper__ .search-result .tool[data-v-0a4e498b]{padding:0 8px}.search-app .search-app__wrapper__[data-v-0a4e498b] .search-suggest{padding:0 0 8px 0}.search-app .search-app__wrapper__[data-v-0a4e498b] .search-suggest .list{border-top:none;padding-left:8px;padding-right:8px}.search-app .search-app__wrapper__[data-v-0a4e498b] .search-suggest .list .suggest-item{padding:0 13px}.search-app .search-app__wrapper__[data-v-0a4e498b] .search-suggest .list .suggest-item .content{margin:0 0 0 17px}.sear',
            isStyle: true,
            id: 89,
          },
        },
      ],
    },
    timestamp: 1725125692287,
  },
  {
    type: 3,
    data: {
      source: 0,
      texts: [],
      attributes: [],
      removes: [
        {
          parentId: 5,
          id: 86,
        },
      ],
      adds: [],
    },
    timestamp: 1725125692291,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 489,
          y: 185,
          id: 49,
          timeOffset: 0,
        },
      ],
    },
    timestamp: 1725125692410,
  },
  {
    type: 3,
    data: {
      source: 0,
      texts: [],
      attributes: [],
      removes: [],
      adds: [
        {
          parentId: 5,
          nextId: null,
          node: {
            type: 2,
            tagName: "style",
            attributes: {
              "data-id": "immersive-translate-input-injected-css",
            },
            childNodes: [],
            id: 90,
          },
        },
        {
          parentId: 90,
          nextId: null,
          node: {
            type: 3,
            textContent:
              '.immersive-translate-input { position: absolute; inset: 0px; z-index: 2147483647; display: flex; justify-content: center; align-items: center; }.immersive-translate-attach-loading::after { content: " "; --loading-color: #f78fb6; width: 6px; height: 6px; border-radius: 50%; display: block; margin: 12px auto; color: white; box-sizing: border-box; animation: 1.5s linear 0s infinite normal none running immersiveTranslateShadowRolling; position: absolute; top: 50%; left: 50%; transform: translate(-2000%, -50%); z-index: 100; }.immersive-translate-loading-spinner { vertical-align: middle !important; width: 10px !important; height: 10px !important; display: inline-block !important; margin: 0px 4px !important; border-width: 2px !important; border-style: solid !important; border-color: rgba(0, 0, 0, 0.376) rgba(221, 244, 255, 0.6) rgba(221, 244, 255, 0.6) rgba(0, 0, 0, 0.376) !important; border-image: initial !important; border-radius: 50% !important; padding: 0px !important; animation: 0.6s linear 0s infinite normal none running immersive-translate-loading-animation !important; }@-webkit-keyframes immersive-translate-loading-animation { \n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(359deg); }\n}@keyframes immersive-translate-loading-animation { \n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(359deg); }\n}.immersive-translate-input-loading { --loading-color: #f78fb6; width: 6px; height: 6px; border-radius: 50%; display: block; margin: 12px auto; position: relative; color: white; left: -100px; box-sizing: border-box; animation: 1.5s linear 0s infinite normal none running immersiveTranslateShadowRolling; }@keyframes immersiveTranslateShadowRolling { \n  0% { box-shadow: rgba(255, 255, 255, 0) 0px 0px, rgba(255, 255, 255, 0) 0px 0px, rgba(255, 255, 255, 0) 0px 0px, rgba(255, 255, 255, 0) 0px 0px; }\n  12% { box-shadow: 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0); }\n  25% { box-shadow: 110px 0 var(--loading-color), 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0); }\n  36% { box-shadow: 120px 0 var(--loading-color), 110px 0 var(--loading-color), 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0); }\n  50% { box-shadow: 130px 0 var(--loading-color), 120px 0 var(--loading-color), 110px 0 var(--loading-color), 100px 0 var(--loading-color); }\n  62% { box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color), 120px 0 var(--loading-color), 110px 0 var(--loading-color); }\n  75% { box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color), 120px 0 var(--loading-color); }\n  87% { box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color); }\n  100% { box-shadow: rgba(255, 255, 255, 0) 200px 0px, rgba(255, 255, 255, 0) 200px 0px, rgba(255, 255, 255, 0) 200px 0px, rgba(255, 255, 255, 0) 200px 0px; }\n}.immersive-translate-search-recomend { border: 1px solid rgb(218, 220, 224); border-radius: 8px; padding: 16px; margin-bottom: 16px; position: relative; font-size: 16px; }.immersive-translate-search-enhancement-en-title { color: rgb(77, 81, 86); }.immersive-translate-search-settings { position: absolute; top: 16px; right: 16px; cursor: pointer; }.immersive-translate-search-recomend::before { }.immersive-translate-search-title { }.immersive-translate-search-title-wrapper { }.immersive-translate-search-time { font-size: 12px; margin: 4px 0px 24px; color: rgb(112, 117, 122); }.immersive-translate-expand-items { display: none; }.immersive-translate-search-more { margin-top: 16px; font-size: 14px; }.immersive-translate-modal { display: none; position: fixed; z-index: 2147483647; left: 0px; top: 0px; width: 100%; height: 100%; overflow: auto; background-color: rgba(0, 0, 0, 0.4); font-size: 15px; }.immersive-translate-modal-content { background-color: rgb(254, 254, 254); margin: 10% auto; padding: 40px 24px 24px; border: 1px solid rgb(136, 136, 136); border-radius: 10px; width: 80%; max-width: 270px; font-family: system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; position: relative; }@media screen and (max-width: 768px) {\n  .immersive-translate-modal-content { margin: 50% auto !important; }\n}.immersive-translate-modal .immersive-translate-modal-content-in-input { max-width: 500px; }.immersive-translate-modal-content-in-input .immersive-translate-modal-body { text-align: left; max-height: unset; }.immersive-translate-modal-title { text-align: center; font-size: 16px; font-weight: 700; color: rgb(51, 51, 51); }.immersive-translate-modal-body { text-align: center; font-size: 14px; font-weight: 400; color: rgb(51, 51, 51); word-break: break-all; margin-top: 24px; }@media screen and (max-width: 768px) {\n  .immersive-translate-modal-body { max-height: 250px; overflow-y: auto; }\n}.immersive-translate-close { color: rgb(102, 102, 102); position: absolute; right: 16px; top: 16px; font-size: 20px; font-weight: bold; }.immersive-translate-close:hover, .immersive-translate-close:focus { color: black; text-decoration: none; cursor: pointer; }.immersive-translate-modal-footer { display: flex; justify-content: center; flex-wrap: wrap; margin-top: 24px; }.immersive-translate-btn { width: fit-content; color: rgb(255, 255, 255); background-color: rgb(234, 76, 137); border: none; font-size: 16px; margin: 0px 8px; padding: 9px 30px; border-radius: 5px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background-color 0.3s; }.immersive-translate-btn:hover { background-color: rgb(240, 130, 172); }.immersive-translate-cancel-btn { background-color: rgb(89, 107, 120); }.immersive-translate-cancel-btn:hover { background-color: rgb(65, 84, 98); }.immersive-translate-action-btn { background-color: transparent; color: rgb(234, 76, 137); border: 1px solid rgb(234, 76, 137); }.immersive-translate-btn svg { margin-right: 5px; }.immersive-translate-link { cursor: pointer; user-select: none; -webkit-user-drag: none; text-decoration: none; color: rgb(0, 123, 255); -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1); }.immersive-translate-primary-link { cursor: pointer; user-select: none; -webkit-user-drag: none; text-decoration: none; color: rgb(234, 76, 137); -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1); }.immersive-translate-modal input[type="radio"] { margin: 0px 6px; cursor: pointer; }.immersive-translate-modal label { cursor: pointer; }.immersive-translate-close-action { position: absolute; top: 2px; right: 0px; cursor: pointer; }',
            isStyle: true,
            id: 91,
          },
        },
      ],
    },
    timestamp: 1725125692500,
  },
  {
    type: 3,
    data: {
      source: 0,
      texts: [],
      attributes: [],
      removes: [],
      adds: [
        {
          parentId: 5,
          nextId: null,
          node: {
            type: 2,
            tagName: "style",
            attributes: {
              type: "text/css",
            },
            childNodes: [],
            id: 92,
          },
        },
        {
          parentId: 92,
          nextId: null,
          node: {
            type: 3,
            textContent:
              '@font-face { font-family: simple-line-icons; src: url("http://localhost:5174/chrome-extension://mihdfbecejheednfigjpdacgeilhlmnf/assets/fonts/Simple-Line-Icons.ttf") format("truetype"); }',
            isStyle: true,
            id: 93,
          },
        },
        {
          parentId: 3,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              id: "huntr-react-container-2",
            },
            childNodes: [],
            id: 94,
          },
        },
      ],
    },
    timestamp: 1725125692542,
  },
  {
    type: 3,
    data: {
      source: 0,
      texts: [],
      attributes: [],
      removes: [],
      adds: [
        {
          parentId: 3,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              id: "immersive-translate-popup",
              style: "all: initial",
            },
            childNodes: [],
            id: 95,
            isShadowHost: true,
          },
        },
      ],
    },
    timestamp: 1725125692566,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 533,
          y: 216,
          id: 49,
          timeOffset: -450,
        },
        {
          x: 581,
          y: 252,
          id: 49,
          timeOffset: -387,
        },
        {
          x: 582,
          y: 252,
          id: 49,
          timeOffset: -225,
        },
      ],
    },
    timestamp: 1725125692911,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 615,
          y: 340,
          id: 29,
          timeOffset: 0,
        },
      ],
    },
    timestamp: 1725125694942,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 532,
          y: 340,
          id: 59,
          timeOffset: -443,
        },
        {
          x: 499,
          y: 354,
          id: 59,
          timeOffset: -388,
        },
        {
          x: 470,
          y: 377,
          id: 59,
          timeOffset: -332,
        },
        {
          x: 449,
          y: 393,
          id: 59,
          timeOffset: -282,
        },
        {
          x: 444,
          y: 397,
          id: 59,
          timeOffset: -79,
        },
        {
          x: 403,
          y: 386,
          id: 59,
          timeOffset: -22,
        },
      ],
    },
    timestamp: 1725125695443,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 364,
          y: 359,
          id: 59,
          timeOffset: -466,
        },
        {
          x: 352,
          y: 351,
          id: 59,
          timeOffset: -409,
        },
        {
          x: 350,
          y: 349,
          id: 59,
          timeOffset: -353,
        },
        {
          x: 350,
          y: 349,
          id: 59,
          timeOffset: -295,
        },
        {
          x: 350,
          y: 349,
          id: 59,
          timeOffset: -242,
        },
        {
          x: 350,
          y: 349,
          id: 59,
          timeOffset: -58,
        },
        {
          x: 346,
          y: 349,
          id: 59,
          timeOffset: -2,
        },
      ],
    },
    timestamp: 1725125695944,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 341,
          y: 348,
          id: 63,
          timeOffset: -450,
        },
        {
          x: 335,
          y: 346,
          id: 63,
          timeOffset: -398,
        },
        {
          x: 332,
          y: 344,
          id: 63,
          timeOffset: -348,
        },
        {
          x: 330,
          y: 342,
          id: 63,
          timeOffset: -292,
        },
        {
          x: 329,
          y: 342,
          id: 63,
          timeOffset: -240,
        },
        {
          x: 329,
          y: 342,
          id: 63,
          timeOffset: -136,
        },
      ],
    },
    timestamp: 1725125696445,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 1,
      id: 63,
      x: 329,
      y: 342,
    },
    timestamp: 1725125696540,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 5,
      id: 63,
    },
    timestamp: 1725125696540,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 0,
      id: 63,
      x: 329,
      y: 342,
    },
    timestamp: 1725125696554,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 2,
      id: 63,
      x: 329,
      y: 342,
    },
    timestamp: 1725125696555,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 329,
          y: 342,
          id: 63,
          timeOffset: 0,
        },
      ],
    },
    timestamp: 1725125704156,
  },
];

const rrwebPlayerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  new rrwebPlayer({
    target: rrwebPlayerRef.value!,
    props: {
      events,
    },
  });
});
</script>

<style lang="scss" scoped></style>
