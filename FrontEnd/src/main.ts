import { createApp, h, render, createVNode, ref } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import notification from "@/components/Notification.vue";
import input from "@/components/InputInfo.vue";

import Home from "@/views/home.vue";
import Editor from "@/views/editor.vue";

import { useColorMode } from "@vueuse/core";
export const routes = [
  { "name":"Home", path: "/", component: Home, "props": true},
  { "name":"Editor", path: "/editor", component: Editor }
];
export const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  // 404 => home page
  routes: routes,
});
// import { useColorMode } from "@vueuse/core";
export const themeMode = useColorMode();

const app = createApp(App);

app.use(router);

let notifycount = 0;
// Define the global Vue property $notify
app.config.globalProperties.$notify = (duration: Number, title:string ,msg: string, type: string, recall: Promise<{ success: boolean, notify: string | undefined }>) => {
  const notificationInstance = h(<any>notification, {
    duration:duration,
    msg,
    title,
    type,
    promise: recall,
    count: notifycount++,
  });
  console.log(notificationInstance.props)
  // Render the notification component
  const vnode = createVNode(notificationInstance);
  // Mount the VNode to an element outside of the app root
  const container = document.createElement('div');
  document.body.appendChild(container);
  render(vnode, container);
};

let inputcount = 0;
app.config.globalProperties.$input = (
  title: string,
  upload: boolean
) => {
  let recall = ref();
  const inputInstance = h(<any>input ,{
    title,
    upload,
    count: inputcount++,
    recall
  });
  console.log(recall)
  console.log(inputInstance.props)
  // Render the notification component
  const vnode = createVNode(inputInstance);
  // Mount the VNode to an element outside of the app root
  const container = document.createElement('div');
  document.body.appendChild(container);
  render(vnode, container);
  return recall;
}


app.mount("#app");