import { Switch } from 'antd';
import { useState } from 'react';
import { ProductDeleted } from './ProductDeleted';
import { ProductExist } from './ProductExist';

function ProductPage() {
    const [query, setQuery] = useState(true)
    const handleSwitch = (value) => {
        if (value) setQuery(true)
        else setQuery(false)

    }
    return (
        <>
            <Switch checkedChildren="Existing" size="default" onChange={handleSwitch} unCheckedChildren="Deleted" defaultChecked />
            {query ? <ProductExist></ProductExist> : <ProductDeleted />}
        </>
    )
}
export { ProductPage }