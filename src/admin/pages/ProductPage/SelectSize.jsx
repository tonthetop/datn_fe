import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Typography } from 'antd';
import React, { useState } from 'react';
const { Option } = Select;
let index = 0;

const App = () => {
  const [items, setItems] = useState(['jack', 'lucy']);
  const [name, setName] = useState('');

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName('');
  };

  return (
    <Select
      style={{
        width: 300,
      }}
      placeholder="custom dropdown render"
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider
            style={{
              margin: '8px 0',
            }}
          />
          <Space
            align="center"
            style={{
              padding: '0 8px 4px',
            }}
          >
            <Input placeholder="Please enter item" value={name} onChange={onNameChange} />
            <Typography.Link
              onClick={addItem}
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              <PlusOutlined /> Add item
            </Typography.Link>
          </Space>
        </>
      )}
    >
      {items.map((item) => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
  );
};

export default App;