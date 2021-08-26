const InputComment = ({ lbl, value, id, type, name, onChange }) => {
    return ( 
        <fieldset className={`d-flex-row border-none p-3`}>
            <label htmlFor={id}>{lbl}</label>
            <input id={id} type={type} name={name} onChange={onChange} value={value} />
        </fieldset>
     );
}
 
export default InputComment;