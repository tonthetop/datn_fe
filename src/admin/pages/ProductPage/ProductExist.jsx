import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useLoading } from '../../../hooks/useLoading';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import { ProductPopup } from './ProductPopup';
import './index.css'
import { useAdminProductExist, useDeleteAdminProduct } from '../../../hooks/useAdminProduct';
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { CSVLink } from 'react-csv';

const ProductExist = () => {


    // const [dataSource, setDataSource] = useState([]);
    const [showLoading, hideLoading] = useLoading()
    const { data, status } = useAdminProductExist()
    useEffect(() => {
        if (status === 'success') {
            hideLoading()
        }
        else if (status === 'loading') {
            showLoading()
        }
        else {
            hideLoading()
        }
    }, [status])
    // search Name
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    //
    const { mutate: deleteAdminProduct } = useDeleteAdminProduct()

    const handleDelete = async (record) => {
        deleteAdminProduct(record)
    }
    // Column
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            width: '8%',
            filters: [
                {
                    text: 'NIKE',
                    value: 'NIKE',
                },
                {
                    text: 'ADIDAS',
                    value: 'ADIDAS',
                },
                {
                    text: 'JORDAN',
                    value: 'JORDAN',
                }
            ],
            onFilter: (value, record) => record.brand.startsWith(value),
            filterSearch: true,

        },
        {
            title: 'Type',
            dataIndex: 'productType',
            width: '8%',
            filters: [
                {
                    text: 'GIAY',
                    value: 'GIAY',
                },
                {
                    text: 'DEP',
                    value: 'DEP',
                },
                {
                    text: 'PHUKIEN',
                    value: 'PHUKIEN',
                }
            ],
            onFilter: (value, record) => record.productType.startsWith(value),
            filterSearch: true,

        },
        {
            title: 'Image',
            dataIndex: 'image',
            width: '12%',

        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            width: '15%',
            render: (value) => value.toLocaleString() + "đ",
            sorter: {
                compare: (a, b) => a.price - b.price,
                multiple: 1,
            }
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
            width: '8%',
            render: (value) => value + "%",
            sorter: {
                compare: (a, b) => a.discount - b.discount,
                multiple: 1,
            }
        },
        {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
            key: 'createdAt',
            width: '15%',
            render: (value) => new Date(value).toString().split("GMT").shift(),
            sorter: {
                compare: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
                multiple: 2,
            }
        },
        {
            title: 'Operation',
            dataIndex: 'operation',
            render: (text, record) =>
                data.length >= 1 ? (
                    <div className="cell-delete" onClick={e => e.stopPropagation()}>
                        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record)}>
                            <Button type='danger'>Delete</Button>
                        </Popconfirm>
                    </div>
                ) : null,
        }, ,
    ];

    //
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }

                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };
    const [productSelected, setProductSelected] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className='position-relative'>
            <div className='left-option-admin-product'>
                <Button className='me-3' type="primary" shape="round" icon={<DownloadOutlined />} >
                    <CSVLink
                        style={{
                            color:"#fff",
                            textDecoration: "none",
                        }}
                        filename={`Product-exist-${new Date()}.csv`}
                        data={data ? data : []}
                    >
                        Export Excel
                    </CSVLink>
                </Button>
                <Button type="primary" className='me-2' shape="round" icon={< PlusOutlined />}>
                    Create
                </Button>
            </div>
            <Table
                responsive
                bordered
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            setProductSelected(record);
                            setIsModalVisible(true)
                        },
                    };
                }} rowSelection={rowSelection} columns={columns} dataSource={data}
            />
            <ProductPopup isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} product={productSelected}></ProductPopup>
        </div >

    )

};

export { ProductExist };