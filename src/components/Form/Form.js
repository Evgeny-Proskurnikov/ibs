import './Form.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { connect } from 'react-redux';
import { addCityName, removeItems } from '../../actions';


function Form({ removeStoreItems, addCityToStore, storeData }) {
  const { register, handleSubmit, errors } = useForm({mode: 'onChange'});

  const onSubmit = formData => {
    removeStoreItems();
    addCityToStore(formData.name);
  };

  return (
    <form name="user-form" className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input
        name="name"
        type="text"
        className={cn('form__input', { "form__input_type_error":  errors.name })}
        ref={register({
          required: {value: true, message: 'Required'},
          minLength: {value: 2, message: 'Minimal length is 2 simb.'},
          pattern: {value: /^[a-z\s]+$/i, message: 'Letters only'}
        })}
        maxLength="40"
        placeholder="Location"
        autoComplete="off"
      />

      {errors.name && <span className="form__input-error">{errors.name.message}</span>}

      <button
        type="submit"
        className={cn('form__save-button', { "form__save-button_inactive": (errors.name) })}
        disabled={(errors.name)}
      >
        Search
      </button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  storeData: state
});

const mapDispatchToProps = (dispatch) => ({
  removeStoreItems: () => dispatch(removeItems()),
  addCityToStore: item => dispatch(addCityName(item)),
});

export default (connect(mapStateToProps, mapDispatchToProps))(Form);
