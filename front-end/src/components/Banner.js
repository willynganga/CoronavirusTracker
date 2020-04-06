import React from 'react'
import Title from './Title'

export default function Banner() {
    return (
        <header className="banner">
            <section className="inner-banner">
                <Title title="corona virus tracker" />
                <p>covid-19</p>
                <div className="under-line"></div>
            </section>
        </header>
    )
}
