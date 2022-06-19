import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";





import "./form.css"


const Form =()=> {
  const { register, handleSubmit } = useForm();
  
  
  
  const [data, setData] = useState({});
  const navigate = useNavigate();
  

  const onSubmit =(data)=>{
    setData(data)
  }
  useEffect(()=>{
    if(data.firstName){
    localStorage.setItem("user", data.firstName);
    navigate('/services')
    }

  },[data])




  return (
    
    <div className="App-a">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First name" />
        <div>
          <select {...register("category")}>
            <option value="">Select...</option>
            <option value="A">Recruiter</option>
            <option value="B">Visitant</option>
          </select>
        <input type="submit" value="ingresar" className="login" />
      </div>     
      </form>
    </div>
  );
}
export default Form;