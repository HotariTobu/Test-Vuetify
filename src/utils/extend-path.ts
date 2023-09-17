import { useRoute } from 'vue-router';

export default (view: string) => {
  const route = useRoute()

  if (route.path.endsWith('/')) {
    return route.path + view
  }
  else {
    return route.path + '/' + view
  }
}
