import React, { Component } from 'react'
import { NameContext, WorkContext } from '../Context/Context'

class ChildComponent extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
            <NameContext.Consumer>
                {
                    name => {
                        <WorkContext.Consumer>
                            {
                                work => {
                                    return <div>child component {name} & {work}</div>
                                }
                            }
                        </WorkContext.Consumer>
                    }
                }
            </NameContext.Consumer>
        )
    }
}

export default ChildComponent