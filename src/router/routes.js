
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MailIncom.vue') },
      { path: 'send', component: () => import('pages/MailSend.vue') },
      { path: 'draft', component: () => import('pages/MailDraft.vue') },
      { path: 'basket', component: () => import('src/pages/MailBasket.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
