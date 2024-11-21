import { useState } from "react"

const useForm= (values) =>{
    const [form,setForm] = useState(values);
    const updateForm = (event) => {
        setForm({
                ...form,
                [event.target.name]: event.target.value,
            })
            console.log(form)
    };
    const setFieldValue = (fieldName, value) => {
        setForm((prevForm) => ({
            ...prevForm,
            [fieldName]: value,
        }));
    };

    return { form, updateForm, setFieldValue };

 }

export default useForm