import React, { Component } from 'react'
import {LocationStatContext} from '../Context'
import Banner from '../components/Banner';
import Info from '../components/Info';

export default class Home extends Component {
    static contextType = LocationStatContext
    
    render() {
        // console.log(this.context);        
        return (
            <>
                <Banner />
                <Info />                
            </>
        )
    }
}
