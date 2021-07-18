import React from 'react';


const thirdComponent = () => (
    <form>
        <label for="age">select age</label>

        <select name="age" id="age">
            <option value="below 17">Below 17</option>
            <option value="18-25">18-25</option>
            <option value="26-45">26-45</option>
            <option value="above 45">above 45</option>
        </select><br />
        <label for="height">Height(cm):</label><br />
        <input type="text" id="fname" name="fname" /><br />
        <label for="weigth">Weigth:</label><br />
        <input type="text" id="lname" name="lname" /><br></br>

    </form>
);

export default thirdComponent;