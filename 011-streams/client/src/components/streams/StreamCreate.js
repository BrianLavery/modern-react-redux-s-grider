import React, { Component } from "react"
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createStream } from '../../actions'

class StreamCreate extends React.Component {
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error': '' }`
        return (
            <div className={className}>
                <label>{label}</label>
                {/* This ... takes values on the object and adds them to the input */}
                <input {...input} autoComplete="off" />                    
                {/* Below is long-version way to do above 
                onChange={formProps.input.onChange} value={formProps.input.value} */}
                {this.renderError(meta)}
            </div>
        )
    }

    // onSubmit isn't called with event now - but values we submit
    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}> {/* With redux form we pass in our onSubmit function into the handleSubmit function */}
                <Field name="title" component={this.renderInput} label="Enter title" /> {/*The field doesn't display anything - more about connecting input to Redux*/}
                <Field name="description" component={this.renderInput}  label="Enter description"  />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

// We have to use exact field names below
const validate = (formValues) => {
    const errors = {}

    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate)

export default connect(null, { createStream })(formWrapped)

// One way to write out above - more ugly syntax
// export default connect()(reduxForm({
//     form: 'streamCreate',
//     validate
// })(StreamCreate))


// This is how the export looked before we combined connect and reduxForm
// export default reduxForm({
//     form: 'streamCreate',
//     validate
// })(StreamCreate)