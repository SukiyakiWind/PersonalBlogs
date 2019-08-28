import ShowBlog from './components/ShowBlog'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import ShowProgress from './components/ShowProgress'
import Immortal from './components/Dota2Immortal'

export default[
  {path:'/',component:ShowBlog},
  {path:'/add',component:AddBlog},
  {path:'/blog/:id',component:SingleBlog},
  {path:'/showprogress',component:ShowProgress},
  {path:'/immortal',component:Immortal},
]
