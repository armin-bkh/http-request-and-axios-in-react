import http from "../../Services/httpServices";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import InputComment from "../InputComment/InputComment";
import { addNewComment } from '../../Services/addNewCommentService';
import { getAllComments } from "../../Services/getAllCommentsService";

const NewComment = ({ setComments }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        body: ''
    });
    const [error, setError] = useState('');

    useEffect(()=>{
        if(error){
            if(error.type === 'error')
            toast.error(error.message);
            if(error.type === 'success')
            toast.success(error.message);
        }
    }, [error])

    const changeHandler = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e) =>{
        e.preventDefault();
        try{
            await addNewComment(formValues);
            const { data } = await getAllComments();
            setComments(data);
            setError({message: "comment successfully added", type: "success"});
        }
        catch(err){
            setError({message: "same error has been accord", type: "error"});
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
                    <label htmlFor="body" className={`text-purple-400 font-medium`}>content: </label>
                    <textarea className={`ml-2 outline-none rounded-md border border-gray-400 p-2`} id="body" value={formValues.body} name="body"onChange={changeHandler}>
                    </textarea>
                </fieldset>
                <button className={`mt-10 block mx-auto border-1 outline-none
                 text-purple-400 rounded-md px-3 py-1 bg-white border-2
                 border-purple-400 hover:text-white hover:bg-purple-400
                 hover:border-0 font-medium`} type="submit" >submit</button>
            </form>
        </section>
     );
}
 
export default NewComment;