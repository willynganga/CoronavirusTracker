import React, { Component } from 'react'
import {LocationStatContext} from '../Context'

export default class Info extends Component {
    static contextType = LocationStatContext

    render() {
        let allCases = this.context.locationStat.map(
            stat => stat.latestCases
        )

        let totalNumberOfCases = allCases.reduce((a,b) => a + b, 0)
        
        // console.log(totalNumberOfCases)
        

        return (
            <section className="info">
                <h3>total number of cases globally</h3>
                <h4>{totalNumberOfCases.toLocaleString()}</h4>
            </section>
        )
    }
}
