
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
    'index.csr.html': {size: 665, hash: '1e93c5334668a37eac31d65b0add2f7bcefaae3915738d93df497c8c9807fb34', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1178, hash: '8db05039836ef9fe1fb0cf19326444f9206f789e896fd2b25c96174aa8fcbbb1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 5957, hash: 'c28533e33d8113eab7bbf6cf86d0392855c01ea1cb0c45d6b5f84b787930d7ee', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'service-cyber/index.html': {size: 5018, hash: 'f0b71fb39302e3c30ad664c77003153efde998f5b69b51a381eb57f929452592', text: () => import('./assets-chunks/service-cyber_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9111, hash: '764004adeadda3eab2f4c82f6c4960f8925f9da42137607862c4708e445beba2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'service-cloud/index.html': {size: 5263, hash: '8c7f902338c0891c62a45d7cbf933858bd6cffa86979bdc4d320560eaab64bf8', text: () => import('./assets-chunks/service-cloud_index_html.mjs').then(m => m.default)},
    'service-ai/index.html': {size: 4977, hash: 'e42e4ea5b2f90d87788a0fad1dbf0706cc03661de6f7a7aaac95284516cdecee', text: () => import('./assets-chunks/service-ai_index_html.mjs').then(m => m.default)},
    'service-software/index.html': {size: 5551, hash: 'dc140c99916c485308e09ec0e505ffc9b0c3412237a2a14a6a858352bb4d6920', text: () => import('./assets-chunks/service-software_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 6193, hash: 'c5aacb68d2cfa2cadf93cf824009855e9067e2bc17bf4b60d5639536ad85f623', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7830, hash: '288f90cc5d015bda02cc6986036938c636b4cdcbd575b968deac732187bf6bd1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
