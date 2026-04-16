import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter} from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Root from './Layout/Root'
import Home from './Pages/Home'
import FriendDetails from './Pages/FriendDetails'

const router =createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/friend/:id",
        element: <FriendDetails/>,
        loader: ()=>fetch("/FriendsData.json")
      }

    ]

  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
