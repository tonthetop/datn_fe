import { Switch, Button } from 'antd';
import React, { useState } from 'react';
import { ProductDeleted } from './ProductDeleted';
import { ProductExist } from './ProductExist';
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { CSVLink } from 'react-csv';

function ProductPage() {
    const [query, setQuery] = useState(true)
    const handleSwitch = (value) => {
        if (value) setQuery(true)
        else setQuery(false)

    }
    return (
        <>
            <Switch className='mb-4' checkedChildren="Existing" size="default" onChange={handleSwitch} unCheckedChildren="Deleted" defaultChecked />
            {query ? <ProductExist ></ProductExist> : <ProductDeleted />}
        </>
    )
}
export { ProductPage }