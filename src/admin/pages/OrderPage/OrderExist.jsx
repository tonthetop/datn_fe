import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useLoading } from '../../../hooks/useLoading';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import './index.css'
import { useAdminOrderExist, useDeleteAdminOrder } from '../../../hooks/useAdminOrder';
import { OrderPopup } from './OrderPopup';
import { CSVLink } from 'react-csv';
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';

const OrderExist = () => {


    const [showLoading, hideLoading] = useLoading()
    //

    let { data, status } = useAdminOrderExist()
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
    const { mutate: deleteAdminOrder } = useDeleteAdminOrder()

    const handleDelete = async (record) => {
        deleteAdminOrder(record)
    }
    // Column
    const columns = [
        {
            title: 'Name',
            dataIndex: 'clientName',
            key: 'clientName',
            width: '12%',
            ...getColumnSearchProps('clientName'),
        },
        {
            title: 'Email',
            dataIndex: 'clientEmail',
            key: 'clientEmail',
            width: '10%',
            ...getColumnSearchProps('clientEmail'),
        },
        {
            title: 'Phone',
            dataIndex: 'clientPhone',
            key: 'clientPhone',
            width: '8%',
            ...getColumnSearchProps('clientPhone'),
        },
        {
            title: 'Type',
            dataIndex: 'orderType',
            width: '5%',
            filters: [
                {
                    text: 'COD',
                    value: 'COD',
                },
                {
                    text: 'PAYONL',
                    value: 'PAYONL',
                }
            ],
            onFilter: (value, record) => record.orderType.startsWith(value),
            filterSearch: true,
        },
        {
            title: 'Status',
            dataIndex: 'currentStatus',
            width: '5%',
            render: (value) => {
                let typeColor
                switch (value) {
                    case "SUCCESS":
                        typeColor = 'btn-success'
                        break;
                    case "ACCEPTED":
                        typeColor = 'btn-warning'
                        break;
                    case "PENDING":
                        typeColor = 'btn-info'
                        break;
                    case "CANCEL":
                        typeColor = 'btn-secondary'
                        break;
                    default:
                        break;
                }
                return (
                    <span className={`px-2 py-1 w-100 text-center d-block  rounded-pill ${typeColor}`}>{value}</span>
                )
            },
            filters: [
                {
                    text: 'PENDING',
                    value: 'PENDING',
                },
                {
                    text: 'ACCEPTED',
                    value: 'ACCEPTED',
                },
                {
                    text: 'SUCCESS',
                    value: 'SUCCESS',
                },
                {
                    text: 'CANCEL',
                    value: 'CANCEL',
                }
            ],
            onFilter: (value, record) => record.currentStatus.startsWith(value),
            filterSearch: true,
        },
        {
            title: 'TotalPrice',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            width: '10%',
            render: (value) => value.toLocaleString(),
            sorter: {
                compare: (a, b) => a.totalPrice - b.totalPrice,
                multiple: 2,
            }
        },
        {
            title: 'Receiver Phone',
            dataIndex: 'receivePhone',
            key: 'receivePhone',
            width: '10%',
            ...getColumnSearchProps('receivePhone'),
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            width: '15%',
            render: (value) => new Date(value).toString().split("GMT").shift(),
            sorter: {
                compare: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
                multiple: 2,
            }
        },
        // {
        //     title: 'Address',
        //     dataIndex: 'deliveryAddress',
        //     key: 'deliveryAddress',
        //     width: '20%',
        //     ...getColumnSearchProps('deliveryAddress'),
        // },
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
    const [orderSelected, setOrderSelected] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <div className='position-relative'>
            <div className='left-option-admin-product'>
                <Button className='me-3' type="primary" shape="round" icon={<DownloadOutlined />} >
                    <CSVLink
                        style={{
                            color: "#fff",
                            textDecoration: "none",
                        }}
                        filename={`Order-exist-${new Date()}.csv`}
                        data={data ? data : []}
                    >
                        Export Excel
                    </CSVLink>
                </Button>
            </div>
            <Table
                responsive
                bordered
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            setOrderSelected(record);
                            setIsModalVisible(true)
                        },
                    };
                }} rowSelection={rowSelection} columns={columns} dataSource={data}
            />
            <OrderPopup isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} order={orderSelected}></OrderPopup>
        </div>

    )

};

export { OrderExist };