import { Layout } from 'antd'
import { Menubar } from "./Menubar";
import { Topbar } from './Topbar';
import { MainContent } from './Content/MainContent';


export const MainLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Menubar />
      <Layout>
        <Topbar />
        <MainContent />
      </Layout>
    </Layout>
  )
}