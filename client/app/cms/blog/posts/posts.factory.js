// import angular from 'angular';

// export default function ($http, API_URL_ROOT) {
//   'ngInject';

//   const Route = `${API_URL_ROOT}/posts/`

//   return {
//     get(id) {
//       return $http.get(Route + (angular.isNumber(id) ? id : ''))
//     },
//     add(post) {
//       return $http.post(Route, post)
//     },
//     update(post) {
//       return $http.put(Route + post.id, post)
//     },
//     delete(id) {
//       return $http.delete(Route + post.id)
//     }
//   };

// }

export default function ($resource) {
  'ngInject';
  return $resource('http://localhost:9999/posts/:id');
}

