import { useState } from 'react';
import { OrderDeleted } from './OrderDeleted';
import { OrderExist } from './OrderExist';
import { Switch, Button } from 'antd';
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';

function OrderPage() {
    const [query, setQuery] = useState(true)
    const handleSwitch = (value) => {
        if (value) setQuery(true)
        else setQuery(false)

    }
    return (
        <>
            <Switch className='mb-4' checkedChildren="Existing" size="default" onChange={handleSwitch} unCheckedChildren="Deleted" defaultChecked />
            {query ? <OrderExist></OrderExist> : <OrderDeleted />}
        </>
    )
}
export { OrderPage }
