import NavConfig from './nav.config.json';
import demos from './demos.vue'
const registerRoute = (config) => {
  let route = [];
  config.map(nav =>
    nav.list.map(page =>
      route.push({
        name: page.name,
        path: page.path,
        components: require(`./views${page.path}`),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      })
    )
  );

  return { route, navs: config };
};

const route = registerRoute(NavConfig);
console.log('route', route)
route.route.push({
  path: '/',
  components: require('./demos.vue')
});
export const navs = route.navs;
export default route.route;
