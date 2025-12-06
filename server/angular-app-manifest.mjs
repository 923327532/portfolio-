
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28570, hash: 'd4578b9426e83b96fd28c8b6e790e874022656f78c394edb272cc55a8f5bb6bb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 24780, hash: 'c87bac32a0eae3da7a41a2961ef97b95140f05b3d5bf4d1deddbc9f38250674a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57433, hash: '8d7b6fc8c73e98ccf53aee9e9b9fe0e11a668e33eb0bc411e6ebec72ef5e0998', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-URFTFUY5.css': {size: 39353, hash: 'nNRz3yc90hw', text: () => import('./assets-chunks/styles-URFTFUY5_css.mjs').then(m => m.default)}
  },
};
