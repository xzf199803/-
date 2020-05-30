import Home from '../pages/home'
import classify from '../pages/classify'
import purchase from '../pages/purchase'
export default [{
    path: '/',
    component: Home
  },
  {
    path: '/classify',
    component: classify
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