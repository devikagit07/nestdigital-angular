
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/nestdigital-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/nestdigital-angular"
  },
  {
    "renderMode": 2,
    "route": "/nestdigital-angular/about"
  },
  {
    "renderMode": 2,
    "route": "/nestdigital-angular/services"
  },
  {
    "renderMode": 2,
    "route": "/nestdigital-angular/service-software"
  },
  {
    "renderMode": 2,
    "route": "/nestdigital-angular/service-cloud"
  },
  {
    "renderMode": 2,
    "route": "/nestdigital-angular/service-ai"
  },
  {
    "renderMode": 2,
    "route": "/nestdigital-angular/service-cyber"
  },
  {
    "renderMode": 2,
    "route": "/nestdigital-angular/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/nestdigital-angular",
    "route": "/nestdigital-angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 665, hash: 'b7fee9d5bac9c8a5041ed108cee747b893e3fd2c60968275426e0050b2da6bda', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1178, hash: '659a1bb79d97bb1d9359cc174aa4508258f6bb03b944a54d4d812cc2d50ba9cc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 5961, hash: '70c187f4fe1b4cb473bd975ce06c73c3387b0c5e41d6ae9e199c5c65472a7c4c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9115, hash: '197be2da4fdfc7d09a5afc5ff7d32d75662f9b5467e0090dba9c41eaab5fb52f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'service-cyber/index.html': {size: 5022, hash: 'c3411c389b7053657afc9c5607e57f16e465b728f431ba9c89dd2faed0c645c4', text: () => import('./assets-chunks/service-cyber_index_html.mjs').then(m => m.default)},
    'service-ai/index.html': {size: 4981, hash: 'f15acf51b01c6eea70264ce2209647ac8838edd88a238b29c786de7aa21a6aaa', text: () => import('./assets-chunks/service-ai_index_html.mjs').then(m => m.default)},
    'service-cloud/index.html': {size: 5267, hash: '867395648520db23013b07d2a638bf2374fae39ee7bd129855cb0103d5ec69b1', text: () => import('./assets-chunks/service-cloud_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 6197, hash: '620f2b8f1ab15f7a48c68cbe7d14fd15b41798fa975453a188061f342decbaa5', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'service-software/index.html': {size: 5555, hash: '2d4357518b6774181eae86102f2542630e891aa858f0ed6659e4925a76b975cd', text: () => import('./assets-chunks/service-software_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7834, hash: '8413880b124129fbdb32b26147b321305cb9f93dfecf622e124bcedcfd678f2d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
