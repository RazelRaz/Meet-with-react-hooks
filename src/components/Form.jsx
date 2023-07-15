

const Form = () => {
    return (
        <div style={{marginTop:'30px', background:'#ccc', padding:'40px'}}>
            <h2>Form</h2>

            <form>
                <input type="text" placeholder="First Name"/><br />
                <input type="text" placeholder="Last Name"/><br />
                <select name="" id="">
                    <option value="">Choose City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Sylhet">Sylhet</option>
                </select>
                <br />
                <input type="radio" name="gender" id="" />Male
                <input type="radio" name="gender" id="" />Female
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;