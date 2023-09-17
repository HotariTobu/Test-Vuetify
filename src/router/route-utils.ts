const getComponent = (path: string) => {
  const parts = path.split('/').filter(p => p.length > 0)

  switch (parts.length) {
    case 0: throw 'No path: ' + path
    case 1: return () => import(`@/views/${parts[0]}.vue`)
    case 2: return () => import(`@/views/${parts[0]}/${parts[1]}.vue`)
  }

  throw 'Too deep path: ' + path
}

export const createRoutes = (path: string, views: string[]) => [
  {
    path,
    component: getComponent(path + '/index'),
  },
  ...views.map(view => {
    const viewPath = path + '/' + view
    return {
      path: viewPath,
      component: getComponent(viewPath),
    }
  }),
]
