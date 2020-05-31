import Home from '../pages/home'
import classify from '../pages/classify'
import list1 from '../pages/classify/list1'
import purchase from '../pages/purchase'
export default [{
    path: '/',
    component: Home
  },
  {
    path: '/classify',
    component: classify,
    children: [
      {
        path: '/classify/list1:id',
        component: list1
      }
    ]
  },
  {
    path: '/purchase',
    component: purchase
  },
  {
    path: '/',
    redirect: '/'
  }
]