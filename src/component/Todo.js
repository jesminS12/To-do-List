import { useState, useEffect } from "react";

function Todo() {

    let [data, setData] = useState([]);

    useEffect(() => {
        let localRecord = JSON.parse(localStorage.getItem('Task'));
        if (localRecord == null) {
            setData([]);
        }
        else {
            setData(localRecord);
        }

    }, setData);

    let deleteTask = (id) => {
        let pos = data.findIndex(v => v.id == id);
        data.splice(pos, 1);
        setData(data);
        localStorage.setItem('Task', JSON.stringify(data));
        let localRecord = JSON.parse(localStorage.getItem('Task'));
        setData(localRecord);
    }

    let formSubmit = (e) => {
        e.preventDefault()
        var obj = {
            task: e.target.task.value,
            date: e.target.date.value,
            choice: e.target.choice.value,
            id: Math.round(Math.random() * 1000)
        }
        var newRacord = ([...data, obj]);
        setData(newRacord);
        localStorage.setItem('Task', JSON.stringify(newRacord));

        e.target.task.value = ""
        e.target.choice.value = "Personal"
        e.target.date.value = ""
    }
    var color = ""

    return (
        <div>
            <div>
                <center>
                    <br/>
                    <h1 style={{ color: "lightsalmon" }}>-- Daily Task --</h1>
                    <form method="post" onSubmit={(e) => formSubmit(e)}>
                        <table>
                            <tr>
                                <td>
                                    <h2>Write Your Task :</h2>
                                </td>
                                <td>
                                    <textarea cols="30" rows="3" name="task" required="name">
                                        Lorem ipsum dolor sit amet elit. Esse reprehenderit quia quibusdam consequatur est suscipit aspernatur, nulla placeat hic? Porro recusandae eius omnis reiciendis? 
                                    </textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2>Select Type :</h2>
                                </td>
                                <td>
                                    <select name="choice" required="name">
                                        <option value="Personal">Personal</option>
                                        <option value="Family">Family</option>
                                        <option value="Friend">Friend</option>
                                        <option value="Office">Office</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2>Select Date : </h2>
                                </td>
                                <td>
                                    <input type="date" name="date" required="name"/>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="submit" style={{ backgroundColor: "lightsalmon" ,fontWeight:"bold" }} />
                                </td>
                            </tr>
                        </table>
                    </form><br/>
                <h2 style={{fontSize:'40px' , color:'lightsalmon'}}>-- View Task --</h2>
                <div className="colorbox">
                    <div className="color">
                        <span style={{background:"linear-gradient(60deg,lime,white)"}}></span>
                        <h4 style={{color:"lime"}}>Personal</h4>
                    </div>
                    <div className="color">
                        <span style={{background:"linear-gradient(60deg,skyblue,white)"}}></span>
                        <h4 style={{color:"skyblue"}}>Family</h4>
                    </div>
                    <div className="color">
                        <span style={{background:"linear-gradient(60deg,yellow,white)"}}></span>
                        <h4 style={{color:"yellow"}}>Friend</h4>
                    </div>
                    <div className="color">
                        <span style={{background:"linear-gradient(60deg,tomato,white)"}}></span>
                        <h4 style={{color:"tomato"}}>Office</h4>
                    </div>
                    <div className="color">
                        <span style={{background:"linear-gradient(60deg,orange,white)"}}></span>
                        <h4 style={{color:"orange"}}>Other</h4>
                    </div>
                </div>
                </center>
            </div>
            <div className="oneTask">
            {data.map((v, i) => {
                return (
                    <div>
                        <span style={{ display: "none" }}>
                            {
                            v.choice == 'Personal' ? color = "linear-gradient(60deg,lime,white)"
                            : v.choice == 'Family' ? color = "linear-gradient(60deg,skyblue,white)"
                            : v.choice == 'Friend' ? color = "linear-gradient(60deg,yellow,white)"
                            : v.choice == 'Office' ? color = "linear-gradient(60deg,tomato,white)"
                            : v.choice == 'Other' ? color = "linear-gradient(60deg,orange,white)"
                            : alert = "color is not define"
                            }
                        </span>
                        <div className="box" style={{ background: color }}>
                            <div className="heading">
                                <h3>Date : {v.date}</h3>
                                <h3>Type : {v.choice}</h3>
                                <button onClick={(e) => deleteTask(v.id)}>❌</button>
                            </div>
                            <h3 style={{fontSize:"30px",textAlign:"center",margin:"10px"}}>◆ Task ◆</h3>
                            <h3 className="task">{v.task}</h3>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Todo;
