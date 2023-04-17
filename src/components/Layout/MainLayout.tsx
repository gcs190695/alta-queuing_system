import { Layout } from 'antd'
import { Menubar } from './Menubar';
import { Topbar } from './Topbar';
import { MainContent } from './Content/MainContent';
import { useSelector } from 'react-redux';
import { reducerTypes } from '../../state/reducers';
import { GenerateGuestRoutes } from '../../utils/Routes/GenerateRoutes';

export const MainLayout = () => {
  const loginInfo = useSelector((state: reducerTypes) => state.loginInfo)
  // console.log(loginInfo)

  return loginInfo?.isLoggedIn ? (
    <Layout style={{ minHeight: '100vh' }}>
      <Menubar />
      <Layout>
        <Topbar />
        <MainContent />
      </Layout>
    </Layout>
  ) : 
  (
    <Layout style={{ minHeight: '100vh' }}>
      {GenerateGuestRoutes()}
    </Layout>
  )
}