import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { productApi } from '../../../api';
import { useLoading } from '../../../hooks/useLoading';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Popconfirm, Result } from 'antd';
import Highlighter from 'react-highlight-words';
import { ProductPopup } from './ProductPopup';
import './index.css'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify';
import { useAdminProductDeteted } from '../../../hooks/useAdminProduct';

const ProductDeleted = () => {


    const [dataSource, setDataSource] = useState([]);
    const [showLoading, hideLoading] = useLoading()

    const { data, status } = useAdminProductDeteted()
    useEffect(() => {
        if (status === 'success') {
            hideLoading()
            let _data = data.products.map((e, index) => {
                return {
                    _id: e._id,
                    imgList: e.imgList,
                    key: index,
                    name: e.name,
                    brand: e.brand,
                    productType: e.productType,
                    image: (<img style={{ height: "50px", width: "70px", objectFit: "cover" }} src={e.imgList[1]}></img>),
                    price: e.price,
                    discount: e.discountIds.length > 0 ? e.discountIds[0].value : 0,
                    createdAt: e.createdAt,
                }
            })
            setDataSource(_data);
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
    const handleDelete = async (record) => {
        const _dataSource = [...dataSource]
        setDataSource(_dataSource.filter(item => item.key !== record.key));
        //
        try {
            showLoading()
            const result = await productApi.remove(record._id)
            hideLoading()
        } catch (error) {
            hideLoading()
        }
        //
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
                dataSource.length >= 1 ? (
                    <>
                        <div className="cell-delete d-flex flex-column" style={{rowGap:"10%"}} onClick={e => e.stopPropagation()}>
                            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record)}>
                                <Button type='danger'>Remove</Button>
                            </Popconfirm>
                            <Popconfirm title="Sure to delete?" >
                                <Button type='primary'>Recover</Button>
                            </Popconfirm>
                        </div>
                    </>
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
        <div className=''>
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
                }} rowSelection={rowSelection} columns={columns} dataSource={dataSource}
            />
            <ProductPopup setDataSource={setDataSource} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} product={productSelected}></ProductPopup>
        </div>

    )

};

export { ProductDeleted };