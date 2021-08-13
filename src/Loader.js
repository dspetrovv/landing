import React, { Fragment } from 'react'
import './index.css'

export default function Loader() {
    return (
        <Fragment>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div className="animated ball" style={{paddingLeft: '20%'}}>
                    <img
                        src={process.env.PUBLIC_URL + "/Images/Ball.png"}
                        style={{width: 'auto', height: '2.5vw'}}
                        alt={"Ball.png"}
                    />
                </div>
                <div className="animated rocket">
                    <img
                        src={process.env.PUBLIC_URL + "/Images/Rocket.png"}
                        style={{width: '70%', height: '5rem'}}
                        alt={"Rocket.png"}
                    />
                </div>
            </div>
        </Fragment>
    )
}