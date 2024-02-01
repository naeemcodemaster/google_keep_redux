import React from 'react'
import Aside from './Aside'
import Content from './Content'

const Container = () => {
    return (
        <>
            <div className='container'>
                <Aside />
                <Content />
            </div>
        </>
    )
}

export default Container