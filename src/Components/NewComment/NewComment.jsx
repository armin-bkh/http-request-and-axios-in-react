import { useState } from "react";
import InputComment from "../InputComment/InputComment"

const NewComment = ({onSumbit}) => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        body: ''
    });

    const changeHandler = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    return ( 
        <section>
            <form onSubmit={onSumbit}>
                <InputComment id="name" name="name" lbl="name" type="text" onChange={changeHandler} value={formValues.name} />
                <InputComment id="email" name="email" lbl="email" type="email" onChange={changeHandler} value={formValues.email} />
                <InputComment id="body" name="body" lbl="content" type="text" onChange={changeHandler} value={formValues.body} />
                <button type="submit" >submit</button>
            </form>
        </section>
     );
}
 
export default NewComment;