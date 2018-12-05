import * as React from 'react'

export default class Alert extends React.Component {
    state = {
        showed: false
    }
    message = ''
    alert = (str) => {
        this.setState({ showed: true })
        setTimeout(() => {
            this.setState({ showed: false })
        }, 1000)
        this.message = str
    }

    render() {
        return (
            <div>
                {!this.props.viewSaved && <div className={`alert__container ${this.state.showed && 'alert__open'}`}>
                    <p className="alert__text">{this.message}</p>
                </div>}

            </div>)
    }
}