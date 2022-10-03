import Card from 'antd/lib/card/Card';
import React, { useState, useContext } from 'react';
import AddVendorModal from './AddVendorModal';
import { PlusOutlined } from '@ant-design/icons';
import { VendorContext } from '../../stote/VendorContext'

const AddVendorItem = () => {
    const [open, setOpen] = useState(false);
    const vendorContexts = useContext(VendorContext);

    const onCreate = (values) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(values)
        };
        if (values != null) {
            fetch('http://localhost:3003/vendor/', requestOptions)
                .then(response => response.json())
                .then(vendor => {
                    console.log(vendor)
                });
            vendorContexts.setVendor([...vendorContexts.vendor, values]);
        }
        setOpen(false);
    };

    return (
        <div>
            <Card
                hoverable={true}
                style={{
                    width: 300,
                    height: '376.39px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '19px',
                    marginRight: '19px'

                }}
                onClick={() => {
                    setOpen(true);
                }}
            >
                <PlusOutlined style={{ fontSize: '80px', color: '#037D18' }} />
            </Card>
            <AddVendorModal
                open={open}
                onCreate={onCreate}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </div>
    );
};

export default AddVendorItem;