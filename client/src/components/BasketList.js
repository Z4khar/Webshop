import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import BasketItem from './BasketItem';
import Basket from '../pages/Basket';

const BasketList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.devices.map(device =>
                <BasketItem key={device.id} device={device}/>
            )}
        </Row>
    );
});

export default BasketList;
