import React, { Component } from 'react'

const LocationStatContext = React.createContext();

class LocationStatProvider extends Component {
    state= {
        locationStat: []
    }

    componentDidMount() {
        fetch("https://floating-lowlands-24943.herokuapp.com/api/v1/corona-virus-data").then(
            result => {                
                return result.json()
            }
        ).then(
            data => {
                // console.log(data)
                this.setState({locationStat: data})
            }
        )
    }

    getNumberOfCases() {
        let tempStats = [...this.state.locationStat]
        const stats = tempStats.map(
            stat => stat.latestCases
        )
        return stats
    }

    render() {
        // console.log(this.state.locationStat);
        
        return(
            <div>
                <LocationStatContext.Provider value={{...this.state, getNumberOfCases: this.getNumberOfCases}}>
                    {this.props.children}
                </LocationStatContext.Provider>
            </div>
        )
    }
}


const LocationStatConsumer = LocationStatContext.Consumer

export{LocationStatProvider, LocationStatConsumer, LocationStatContext}
