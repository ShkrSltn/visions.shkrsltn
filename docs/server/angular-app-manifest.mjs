
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/visions.shkrsltn/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/visions.shkrsltn"
  },
  {
    "renderMode": 2,
    "route": "/visions.shkrsltn/projects"
  },
  {
    "renderMode": 2,
    "route": "/visions.shkrsltn/about-me"
  },
  {
    "renderMode": 2,
    "route": "/visions.shkrsltn/contact-me"
  },
  {
    "renderMode": 2,
    "route": "/visions.shkrsltn/blog"
  }
],
  assets: {
    'index.csr.html': {size: 11243, hash: 'e921d90c083f6c9bd5ef1ccb3de453f7304ed491226a319a08003a9e3f37901b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2069, hash: '2ac4e67e1147aa37953391bb7a623bcaa34434553495bc9a629dfa42b3eefc68', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 60514, hash: '2bdb74e6b8d4b08c40424c897e51e49adcab9c4315e00ce63c024b1c4eb50e2d', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 61749, hash: '428a0e613be30971ab690e1663088b1bef70140d8e104602db7bd961145f04a3', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'contact-me/index.html': {size: 58234, hash: '279a461c7ceabae42af19c7c5de35235efd7f5a180c9267d34a8dabf53f9874c', text: () => import('./assets-chunks/contact-me_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 48413, hash: '9aae0dd6a79d9591bd7b87100c231b6a5788737299ff5bada21417ba29934bcb', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108752, hash: '857c2b9501a52d56688dc8443989b4cbb876c957282cf5dd535ad21a3e74d979', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4IJYVPNQ.css': {size: 41759, hash: 'PNZn68Rm+9s', text: () => import('./assets-chunks/styles-4IJYVPNQ_css.mjs').then(m => m.default)}
  },
};
