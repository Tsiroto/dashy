import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

import { PostList, PostEdit, PostCreate, PostShow } from './components/Posts';
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import UserShow from './components/UserShow'
import Dashboard from './components/dashboard/Dashboard'
import TodoList from './components/TodoList'
import ProductList from './components/production/ProductList'


import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';


function App() {
  return (
    <Admin title="Dashboard" disableTelemetry dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')} dashboard={Dashboard} >
      <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} />
      <Resource name="users" list={UserList} icon={UserIcon} create={UserCreate} edit={UserEdit} show={UserShow} />
      <Resource name="todos" list={TodoList} icon={FormatListBulletedIcon} />
      <Resource name="photos" list={ProductList} icon={PictureInPictureAltIcon} />
      <Resource name="catalog" list={Dashboard} icon={LibraryBooksIcon} />
      <Resource name="clientele" list={Dashboard} icon={SupervisorAccountIcon} />
      <Resource name="sales" list={Dashboard} icon={AttachMoneyIcon} />
      <Resource name="production" list={Dashboard} icon={HomeWorkIcon} />
      <Resource name="communication" list={Dashboard} icon={ChatBubbleOutlineIcon} />
      <Resource name="settings" list={Dashboard} icon={SettingsIcon} />
    </Admin>
  );
}

export default App;
