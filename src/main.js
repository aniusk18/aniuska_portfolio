//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
//import './css/main.css'
import "./css/global.css"
// Añadir iconos a la biblioteca
library.add(faEnvelope,faLinkedin);
const app = createApp(App);

// Registrar el componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
