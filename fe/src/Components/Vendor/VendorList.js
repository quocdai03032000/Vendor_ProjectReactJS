import React, { useEffect, useContext } from 'react'
import VendorItem from './VendorItem'
import { Col, Row } from 'antd'
import AddVendorItem from '../AddVendor/AddVendorItem'
import { VendorContext } from '../../stote/VendorContext'
import './Vendor.css';


export default function VendorList() {
    const vendorContexts = useContext(VendorContext);

    useEffect(() => {
        fetch('http://localhost:3003/vendor/')
            .then(res => res.json())
            .then(vendor => {
                vendorContexts.setVendor(vendor)
            })
        console.log("Set vendor API successfully")
    }, [])

    const addVenderBtnStyle = {
        display: 'none'
    }
    //---------------------------------------------------

    console.log("vendor list Re-render")
    const RowStyle = {
        justifyContent: 'start',
        marginTop: '20px',
    }
    return (

        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

            <Row
                style={RowStyle}
                gutter={[16, 16]}
            >
                {
                    vendorContexts.vendor.map((vendor) => (
                        <Col key={vendor.id} xs={24} sm={8} md={6} >
                            <VendorItem vendor={vendor} />
                        </Col>
                    ))
                }

                <Col id='add-item' key={'add-vendor'} xs={24} sm={8} md={5}
                    style={
                        vendorContexts.vendor.length >= 12 ? addVenderBtnStyle : { display: 'block' }
                    }>
                    <AddVendorItem />
                </Col>
            </Row>
        </div>
    )
}
