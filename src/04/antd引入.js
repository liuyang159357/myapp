import React from 'react'
import {Button,Col,Row} from 'antd'
import { PlusOutlined } from '@ant-design/icons';

import 'antd/dist/antd'
export default function Antd() {
  return (
    <div>
        <Button style={{backgroundColor:'#f759ab'}} type='primary'  icon={<PlusOutlined />}> 按钮</Button>
        <Row>
          <Col span={8}>1</Col>
          <Col span={8}>2</Col>
          <Col span={8}>3</Col>
        </Row>
    </div>
  )
}
