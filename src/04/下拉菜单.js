import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    SmileOutlined,
    DownOutlined
} from '@ant-design/icons';
import './antd.css'
import { Layout, Menu, theme, Dropdown, Space, Button, Steps, DatePicker, message,ConfigProvider } from 'antd';

import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/locale/zh_CN';
import React, { useState } from 'react';
const { RangePicker } = DatePicker;
const { Header, Sider, Content } = Layout;
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items = [
        {
            key: '1',
            label: (
                <div>
                    1st menu item
                </div>
            ),
            onClick: (value) => { console.log(value); }

        },
        {
            key: '2',
            label: (
                <div>
                    2nd menu item (disabled)
                </div>
            ),
            icon: <SmileOutlined />,
            disabled: true,
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            ),
            disabled: true,
        },
        {
            key: '4',
            danger: true,
            label: 'a danger item',
        },
    ];
    const steps = [
        {
            title: 'First',
            content: 'First-content',
        },
        {
            title: 'Second',
            content: 'Second-content',
        },
        {
            title: 'Last',
            content: 'Last-content',
        },
    ];
    const items2 = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Hover me
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <Steps current={current} items={items2} />
                    <div >{steps[current].content}</div>
                    <div style={{ marginTop: 24 }}>
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>
                        )}
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                    </div>
                    <ConfigProvider locale={locale}>
                    <RangePicker  />
                    </ConfigProvider>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App