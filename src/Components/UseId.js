import { useId, useState } from "react";
function UseId() {
    const id = useId();
    const [name, setName] = useState();
    const handleSubmit = () => {
        alert("id " + id + "-name : " + name);
    };
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <p>
                    Enter Name :{" "}
                    <input
                        id={id + "-name"}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                    />
                </p>
  
                <button type="submit"> submit</button>
            </form>
            <h4> UseId hook generates unique IDs i.e, returns a string that is stable across both the server and the client sides.</h4>
        </div>
    );
}


export default UseId