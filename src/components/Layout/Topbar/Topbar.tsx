import { Layout } from 'antd'
import './styles/TopBar.css'

const { Header } = Layout

export const Topbar = () => {
    return (
        // ">"
        <Header className='topbar' >
            <h1>TopBar</h1>
        </Header>
    );
}