import { EditOutlined, DeleteFilled, HeartFilled, MailOutlined, GlobalOutlined, PhoneOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React, { useState, useContext } from 'react';
import EditVendorModal from '../EditVender/EditVenderModal'
import './Vendor.css';
import { VendorContext } from '../../stote/VendorContext'



const { Meta } = Card;
export default function VendorItem({ vendor }) {
    const vendorContexts = useContext(VendorContext);
    const [favorite, setFavorite] = useState(false)
    const FavoriteHandle = () => {
        if (favorite) {
            setFavorite(false)
        }
        else {
            setFavorite(true)
        }
    }
    const HeartStyleTrue = {
        color: 'red'
    }
    const HeartStyleFalse = {
        color: 'currentColor',
    }

    //--------------- update vendor -----------------------
    const [open, setOpen] = useState(false);
    const vendorDB = vendorContexts.vendor.find((item) => item.id === vendor.id);

    const onEdit = (values) => {
        if (vendorDB.name !== values.name) {
            vendorDB.name = values.name;
        }
        if (vendorDB.email !== values.email) {
            vendorDB.email = values.email;
        }
        if (vendorDB.phone !== values.phone) {
            vendorDB.phone = values.phone;
        }
        if (vendorDB.website !== values.website) {
            vendorDB.website = values.website;
        }

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(vendorDB)
        };
        fetch('http://localhost:3003/vendor/' + vendorDB.id, requestOptions)
            .then(response => response.json())
            .then(vendor => {
                console.log(vendor)
            });
        console.log(vendorDB)
        setOpen(false);
    };

    //--------------- delete vendor -----------------------    

    const onDelete = () => {
        fetch('http://localhost:3003/vendor/' + vendor.id, { method: 'DELETE' })
            .then(vendor => {
                console.log(vendor.status)
            })
        vendorContexts.setVendor(vendorContexts.vendor.filter((item) => item.id !== vendor.id))
    }
    //--------------------------------------------------- 
    
    return (
        <Card
            hoverable={true}
            style={{
                width: 300,
                margin: '0 auto'
            }}
            cover={
                <img
                    alt="avatar"
                    src={vendor.linkImage}
                    style={{ width: '200px', margin: '0 auto', paddingTop: '25px' }}
                />
            }
            actions={[
                <HeartFilled
                    onClick={FavoriteHandle}
                    style={favorite === true ? HeartStyleTrue : HeartStyleFalse}
                />,
                <EditOutlined
                    key="edit"
                    onClick={() => {
                        setOpen(true);
                    }}
                />,
                <DeleteFilled
                    key="delete"
                    onClick={onDelete}
                />,
            ]}
        >
            <Meta
                title={vendor.name}
                description={<ul style={{ color: "#373737" }}>
                    <li><MailOutlined className='VenderItem_icon' /> {vendor.email}</li>
                    <li><PhoneOutlined className='VenderItem_icon' /> {vendor.phone}</li>
                    <li><GlobalOutlined className='VenderItem_icon' /> {vendor.website}</li>
                </ul>}
            />
            <EditVendorModal
                open={open}
                onEdit={onEdit}
                onCancel={() => {
                    setOpen(false);
                }}

                vendor={vendor}
            />
        </Card>
    )
}