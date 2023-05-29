import { useField } from "formik"

const Select = ({ label, ...props }) => {
    const [ fields, meta ] = useField(props);   
    return(
        <div>
            {label}
            <select {...fields} {...props}></select>
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
    )
}

export default Select