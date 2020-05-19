import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import labelAndInput from '../common/form/labelAndInput';
import { init } from './billingCycleActions';
import { connect } from 'react-redux';
import CreditList from './creditList';

class BillingCycleForm extends Component{
    render(){
        const { handleSubmit, readOnly } = this.props;

        return(
            <form role='form' onSubmit={ handleSubmit } >
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} readOnly={readOnly} label='Nome' cols='12 4' placeholder='Informe o Nome' />
                    <Field name='month' component={labelAndInput} readOnly={readOnly} label='Mês' type='number' cols='12 4' placeholder='Informe o Numero do mês'/>
                    <Field name='year' component={labelAndInput} readOnly={readOnly} label='Ano' cols='12 4' type='number' placeholder='Informe o Ano'/>
                    <CreditList cols='12 6' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button> 
                </div>
            </form>
        )
    }
}
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount:false })(BillingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);