const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'ajax-bar', component: () => import('pages/AjaxbarPage.vue') },
      { path: 'avatar', component: () => import('pages/AvatarPage.vue') },
      { path: 'badge', component: () => import('pages/BadgePage.vue') },
      { path: 'banner', component: () => import('pages/BannerPage.vue') },
      { path: 'bar', component: () => import('pages/BarPage.vue') },
      { path: 'breadcrumbs', component: () => import('pages/BreadcrumbsPage.vue') },
      { path: 'card', component: () => import('pages/CardPage.vue') },
      { path: 'chip', component: () => import('pages/ChipPage.vue') },
      { path: 'dialog', component: () => import('pages/DialogPage.vue') },
      { path: 'menu', component: () => import('pages/MenuPage.vue') },
      { path: 'table', component: () => import('pages/TablePage.vue') },
      { path: 'fab', component: () => import('pages/FloatingActionButtonPage.vue') },
      { path: 'list', component: () => import('pages/ListPage.vue') },
      { path: 'form-components', component: () => import('pages/FormComponentsPage.vue') },
      { path: 'test', component: () => import('pages/TestPage.vue') }
    ]
  },
  {
    path: '/buttons',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ButtonsPage.vue') },
      { path: 'group', component: () => import('pages/ButtonGroupPage.vue') },
      { path: 'dropdown', component: () => import('pages/ButtonDropDown.vue') }
    ]
  },
  {
    path: '/todos',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TodoPage.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
