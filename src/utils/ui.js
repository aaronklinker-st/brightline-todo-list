const EVENT_NAME = "brightline-render";

export function onRender(cb) {
  window.addEventListener(EVENT_NAME, cb)
}

export function render() {
  window.dispatchEvent(new CustomEvent(EVENT_NAME))
}
