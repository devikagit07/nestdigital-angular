
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
    'index.csr.html': {size: 665, hash: '71d0c7c70587386e22b82d9e2e9283132820f30180da052d5c7b9316386c0e19', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1178, hash: 'a8066d05874e97a00a586b71df05401b5f38616b271c29e40405329e64fbc79f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 5936, hash: 'cfe7da396a44e4e7da29831b930b220a3457c88f1a62c6018276aa79fb7510dc', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'service-ai/index.html': {size: 4956, hash: 'a9b3cf571ef941268f41e8460396f246556075e925726a254fd2a241b7dbd217', text: () => import('./assets-chunks/service-ai_index_html.mjs').then(m => m.default)},
    'service-cyber/index.html': {size: 4997, hash: 'a0902c280a292ff11bb15fb668b8ab8aae776566f00b3443c237b665cf250f80', text: () => import('./assets-chunks/service-cyber_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9090, hash: '63b292df7dd5f4ba1fa03c9b0e3a1abcb02cd01d66666dd85e0f5fd6ddfa0019', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 6172, hash: '73093fcaa2d7481e97bc5b3bed717a7a6064fb2b0a110579551119728f762578', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'service-cloud/index.html': {size: 5242, hash: '8e129bfc63df71a8e54cbb2247bf86a9f7d662a361bd071b1d71ef13a8d6405b', text: () => import('./assets-chunks/service-cloud_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7809, hash: '6d5597e4b4c24b801977245cfba61971bb6f7f120729e805f18c5f9ea335ea46', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'service-software/index.html': {size: 5530, hash: '2b1b42e77738b6b53672f3cfd7eeaa23ac9e6b51731dec9e09e42b8b9840251a', text: () => import('./assets-chunks/service-software_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
