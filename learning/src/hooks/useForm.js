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
    return {form , updateForm};
}

export default useForm