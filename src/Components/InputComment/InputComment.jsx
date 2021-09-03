const InputComment = ({ lbl, value, id, type, name, onChange }) => {
    return ( 
        <fieldset className={`d-flex-row justify-center border-none p-3`}>
            <label htmlFor={id} className={`text-purple-400 font-medium`}>{lbl}: </label>
            <input className={`ml-2 outline-none rounded-md border border-gray-400 p-2`} id={id} type={type} name={name} onChange={onChange} value={value} />
        </fieldset>
     );
}
 
export default InputComment;