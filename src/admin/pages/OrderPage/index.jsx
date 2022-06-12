import { Switch } from 'antd';
import { useState } from 'react';
import { OrderDeleted } from './OrderDeleted';
import { OrderExist } from './OrderExist';

function OrderPage() {
    const [query, setQuery] = useState(true)
    const handleSwitch = (value) => {
        if (value) setQuery(true)
        else setQuery(false)

    }
    return (
        <>
            <Switch checkedChildren="Existing" size="default" onChange={handleSwitch} unCheckedChildren="Deleted" defaultChecked />
            {query ? <OrderExist></OrderExist> : <OrderDeleted />}
        </>
    )
}
export { OrderPage }