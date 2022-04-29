import React from "react"

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div class="ui big text loader">{props.message}</div>
        </div>
    )
}

// Can use for default value of propss
Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner
