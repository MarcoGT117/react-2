import { useField } from 'formik';

const Radio = ({ label, ...props })=> {
    const field = useField({ props, type: 'radio' })
    return(
        <div>
            <input type='radio' {...field} {...props}/>
            <label>{label}</label>
        </div>
    );
}

export default Radio