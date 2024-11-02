import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {},  formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setformValidation] = useState({})

    useEffect(() => {
    createValidators()
    }, [formState])

    useEffect(() => {
      onResetForm()
    }, [initialForm])
    

    const isFormValid = useMemo(()=> {

        for( const formValue of Object.keys( formValidation)){
            if (formValidation[formValue] !== null) return false;
        }
        return true
    }, [ formValidation])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const OnMessageSend = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const formCheckedvalues = {}
        for( const formField of Object.keys(formValidations)) {
            const [fn, errorMessage = 'Este campo es requerido'] = formValidations[formField]

            formCheckedvalues[`${ formField}Valid`] = fn( formState[formField]) ? null : errorMessage
        }
        setformValidation( formCheckedvalues )

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid,
    }
}