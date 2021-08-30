import axios from "axios";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import InputComment from "../InputComment/InputComment"

const NewComment = ({ setComments, error }) => {
    const { addToast } = useToasts();
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

    const submitHandler = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/comments", formValues);
            const { data } = axios.get("http://localhost:3001/comments");
            setComments(data);
            addToast("successed", {appearance: 'success', autoDismiss: true})
        }
        catch(err){
            addToast("cant add it", {appearance: 'success', autoDismiss: true})
        }
        setFormValues({
            name: '',
            email: '',
            body: ''
        });
    }

    return ( 
        <section className={`mt-5 p-10 flex justify-center items-center bg-white`}>
            <form onSubmit={submitHandler}>
                <InputComment id="name" name="name" lbl="name" type="text" onChange={changeHandler} value={formValues.name} />
                <InputComment id="email" name="email" lbl="email" type="email" onChange={changeHandler} value={formValues.email} />
                <fieldset className={`d-flex-row justify-center`}>
                    <label htmlFor="body">content: </label>
                    <textarea className={`ml-2 outline-none rounded-md border border-gray-400`} id="body" value={formValues.body} name="body"onChange={changeHandler}>
                    </textarea>
                </fieldset>
                <button className={`mt-10 block mx-auto border-1 outline-none text-white rounded-md px-3 py-1 bg-gray-900 border-gray-400`} type="submit" >submit</button>
            </form>
        </section>
     );
}
 
export default NewComment;