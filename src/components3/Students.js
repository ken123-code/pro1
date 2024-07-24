import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Input, Table } from "reactstrap";
export default function Students() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(null);
  const [text, setText] = useState("")
  const [textEdit, setTextEdit] = useState("")
  const [isEdit,setIsEdit] =useState(false)
  const url = "https://66a07be77053166bcabb8fcc.mockapi.io/student";
  const getStudents = () => {
    axios
      .get(url)
      .then(function (res) {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteStudent = (id) => {
    axios
      .delete(url + "/" + id)
      .then(function (res) {
        setMessage("delete successful");
        // getStudents();
        setData(data.filter(item=>item.id!==id))
      })
      .catch(function (error) {
        console.log(error);
      });
  };

//   const addNewStudent = () => {
//     axios
//       .post(url, {
//         name: "Le Buoi",
//       })
//       .then(function (res) {
//         setMessage("add successful");
//         getStudents();
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

    const addNewStudent = (txt) => {
        axios
        .post(url, {
            name: txt,
        })
        .then(function (res) {
            console.log(res)
            setMessage("add successful");
            setData([...data,{id:res.data.id, name:txt}])
        })
        .catch(function (error) {
            console.log(error);
        });
    };    

  const updateStudent = (id,text) => {
    axios
      .put(url + "/" + id, {
        name: "Le Buoi",
      })
      .then(function (res) {
        setMessage("add successful");
        // getStudents();
        setData(data.map(item=>item.id === id? {...item,name:text}:item))
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <div>
      <Container>
        {/* <Button className="btn btn-success" onClick={addNewStudent}>
          Add new student
        </Button> */}
        {message && <p>{message}</p>}
        <h1>Student List</h1>
        <Input type="text" value={text} onChange={(event)=>setText(event.target.value)} onKeyDown={(e)=>{
            if(e.key==="Enter"){
                addNewStudent(text)
                setText("")
            }
        }}/>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            {
            data &&
              data.map((item, index) => (
                <tr>
                  <td>{item.id}</td>
                  <td>
                  {
            isEdit.id===item.id&&isEdit.flag===true?
            <Input
                type="text" value={textEdit} 
                onChange={(e)=>setTextEdit(e.target.value)} 
                onKeyDown={(e)=>{
                    if(e.key=="Enter"){
                        setIsEdit({id:"",flag:false})
                        updateStudent(item.id,textEdit)
                    }
                }}
            />:<p onDoubleClick={()=>{
                setIsEdit({id:item.id,flag:true})
                setTextEdit(item.name)
            }}>{item.name}</p>
        }
                  </td>
                  <td>
                    <Button 
                      onClick={() => deleteStudent(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => updateStudent(item.id)}
                      className="btn btn-success"
                    >
                      Update
                    </Button>
                    
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
      
    </div>
  );
}
