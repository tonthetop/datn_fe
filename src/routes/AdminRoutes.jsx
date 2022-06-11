import { Link, Route, Routes, useLocation } from 'react-router-dom'
import * as adminPages from '../admin/pages/index'
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
    PieChartOutlined,
    ShopOutlined,
    SnippetsOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const { Content, Footer, Sider } = Layout;

const AdminRoutes = () => {
    let arrayPath = useLocation().pathname.replace("/", "").split("/")
    const pathList = {
        product: { name: "sản phẩm", value: 1 },
        order: { name: "Đơn hàng", value: 2 },
        chart: { name: "Biểu đồ" },
        revenue: { name: "doanh thu", value: 3 },
        orders: { name: "đơn đặt hàng", value: 4 },
        products: { name: "sản phẩm", value: 5 },
    }
    arrayPath.shift()
    const pathName = arrayPath.map(item => {
        return pathList[item]
    })
    const defaultSelectedKey = [...pathName]?.pop()?.value || 1
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider
                width={190}
                collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "sticky",
                    top: 0,
                    left: 0
                }}>

                <div className="logo-admin my-3" >
                    <Link to="/" className="logo d-flex justify-content-center" title="Trạm Tabo">
                        <img
                            className=""
                            style={{ height: "45px" }}
                            src="//bizweb.dktcdn.net/100/377/398/themes/755909/assets/logo.png?1649394240577"
                            alt="logo Trạm Tabo"
                        />
                    </Link>
                </div>
                <Menu theme="dark" defaultSelectedKeys={[`${defaultSelectedKey}`]} mode="inline"
                    style={{
                    }}>
                    <Menu.Item key="1">
                        <Link to="/admin/product" className="nav-text">
                            <span className='d-flex align-items-center fs-5'>
                                <ShopOutlined style={{ fontSize: '20px' }} />
                                <span>Sản phẩm</span>
                            </span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/admin/order" className="nav-text">
                            <span className='d-flex align-items-center fs-5'>
                                <SnippetsOutlined style={{ fontSize: '20px' }} />
                                <span>Đơn hàng</span>
                            </span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span className='d-flex align-items-center  nav-text fs-5'>
                                <PieChartOutlined style={{ fontSize: '20px' }} />
                                <span>Biểu đồ</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">
                            <Link to="/admin/chart/revenue">Doanh thu</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/admin/chart/orders">Đơn đặt hàng</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/admin/chart/products">Sản phẩm</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout" >
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            marginTop: 20,
                            marginBottom: 12,
                        }}>
                        <Breadcrumb.Item style={{
                            textTransform: 'uppercase'
                        }}>Dashboard</Breadcrumb.Item>
                        {pathName.map((item, index) => {
                            return (
                                <Breadcrumb.Item key={index} style={{
                                    textTransform: 'uppercase'
                                }}>{item.name}</Breadcrumb.Item>
                            )
                        })}
                    </Breadcrumb>
                    <div
                        className="site-layout-background container"
                        style={{
                            padding: 24,
                            minHeight: 360,
                            backgroundColor: "#fff"
                        }}
                    >
                        <Routes>
                            <Route index element={<adminPages.ProductPage />} />
                            <Route
                                path="/product"
                                element={<adminPages.ProductPage> </adminPages.ProductPage>}
                            ></Route>
                            <Route
                                path="/order"
                                element={<adminPages.OrderPage> </adminPages.OrderPage>}
                            ></Route>
                            <Route path='/chart'>
                                <Route
                                    path="revenue"
                                    element={<adminPages.RevenuePage> </adminPages.RevenuePage>}
                                ></Route>
                                <Route
                                    path="orders"
                                    element={<adminPages.OrderChartPage> </adminPages.OrderChartPage>}
                                ></Route>
                                <Route
                                    path="products"
                                    element={<adminPages.ProductChartPage> </adminPages.ProductChartPage>}
                                ></Route>
                            </Route>
                        </Routes>
                    </div>
                </Content>
                {/* <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Shoes App ©2022
                </Footer> */}
            </Layout>
        </Layout>
    );
};

export { AdminRoutes };