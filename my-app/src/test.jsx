import React,{useState} from 'react'


function Test() {
    function add(){
        setNum(num+1)
    }

    const [num, setNum] = useState(0)
    const [name, setName] = useState("")
    const [obj, setObj] = useState({name:"",lastnam:""})
    const [arr, setArr] = useState([1,2,3,4,5])
    return (
        <div> 
            <p>{num}</p>
            <button onClick={add}>
                +
            </button>
        </div>
    );
}

export default Test;