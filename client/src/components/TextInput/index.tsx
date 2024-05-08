import { useField } from "formik";
import "./index.css";

const TextInput = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className="text-input-contaier">
      <input className="input-field" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error-message-container">
          <p className="input-error-message">{meta.error}</p>
        </div>
      ) : null}
    </div>
  );
};

export default TextInput;
