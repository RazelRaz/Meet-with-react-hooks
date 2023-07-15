import { useState } from "react";


const Form = () => {

    let [FormObj, setFormObj] = useState({
        fName: '',
        lName: '',
        city: '',
        gender:''
    })

    // function to mange all form fields - onChange
    const OnInputChange = (property,value) => {
        setFormObj(prevObj => ({
            ...prevObj,
            [property]:value
        }))
    }


    // submit the form
    const FormSubmit = (e) => {
        e.preventDefault();
        console.log(FormObj);
    }

    return (
        <div style={{marginTop:'30px', background:'#ccc', padding:'40px'}}>
            <h2>Form</h2>

            <form onSubmit={FormSubmit}>
                <input onChange={(e) => {OnInputChange('fName', e.target.value)}} value={FormObj.fName} type="text" placeholder="First Name"/><br />

                <input onChange={(e) => OnInputChange('lName', e.target.value)} value={FormObj.lName} type="text" placeholder="Last Name"/><br />

                <select onChange={(e) => OnInputChange('city', e.target.value)} value={FormObj.city} name="" id="">
                    <option value="">Choose City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Sylhet">Sylhet</option>
                </select>
                <br />
                <input onChange={() => OnInputChange('gender', 'Male')} checked={FormObj.gender === 'Male'} type="radio" name="gender" id="" />Male
                <input onChange={() => OnInputChange('gender', 'Female')} checked={FormObj.gender === 'Female'} type="radio" name="gender" id="" />Female
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;