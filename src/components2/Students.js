import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "reactstrap";
import Student from "./Student";
import Footer from "./Footer";
import Add from "./Add";
export default function Students(){
    const [flag,setFlag] = useState("")
    const [checkAll, setCheckAll] = useState(false)

    const [list,setList] = useState([
        {
            id: 1,
            name: "Le 1",
            checked: false
        },
        {
            id: 2,
            name: "Le 2",
            checked: false
        },
        {
            id: 3,
            name: "Le 3",
            checked: false
        },
        {
            id: 4,
            name: "Le 4",
            checked: false
        }
    ])

    // const deleteById = (id) => {
    //     setList(list.filter(stud=>stud.id!==id))
    // }
    // const reChecked = (id) => {
    //     let newList = list.map((stud => stud.id === id?{...stud,checked: !stud.checked}:stud))
    //     setList(newList)
    // }
    // const rename = (id,name) => {
    //     let newList = list.map(stud=>stud.id===id?{...stud,name:name}:stud)
    //     setList(newList)
    // }
    // const addNewStudent = (name) => {
    //     let idMax = list.reduce((max_value,stud) => Math.max(max_value,stud.id), -Infinity)
    //     setList([...list, {id:list.length==0?1:idMax+1,name:name}])
    // }


    // const filterStudent = (list,flag) => {
    //     if(flag=="CHECK"){
    //         return list.filter(stud=>stud.checked)
    //     } else if(flag=="NOCHECK"){
    //         return list.filter(stud=>!stud.checked)
    //     } else if(flag=="DELETEALL"){
    //         setList(list.filter(student=>student.checked==false))
    //         setFlag("")
    //     } else if(flag=="CHECKALL"){
    //         setList(list.map(student=>({...student,checked:!checkAll})))
    //         setCheckAll(!checkAll)
    //         setFlag("")
    //     } return list;
    // }
    useEffect(()=>{
        if(localStorage.getItem("list")){
            setList(JSON.parse(localStorage.getItem("list")))
        }
    },[])

    const deleteById = (id) => {
        const newList = list.filter(stud=>stud.id!==id);
        setList(newList)
        localStorage.setItem("list",JSON.stringify(newList))
    }
    const reChecked = (id) => {
        let newList = list.map((stud => stud.id === id?{...stud,checked: !stud.checked}:stud))
        setList(newList)
        localStorage.setItem("list",JSON.stringify(newList))
    }
    const rename = (id,name) => {
        let newList = list.map(stud=>stud.id===id?{...stud,name:name}:stud)
        setList(newList)
        localStorage.setItem("list",JSON.stringify(newList))
    }
    const addNewStudent = (name) => {
        let newList = [...list, {id:list.length==0?1:list.reduce((max_value,stud) => Math.max(max_value,stud.id)+1, 0),name:name,checked:false}]
        setList(newList)
        localStorage.setItem("list",JSON.stringify(newList))
    }


    const filterStudent = (list,flag) => {
        if(flag=="CHECK"){
            return list.filter(stud=>stud.checked)
        } else if(flag=="NOCHECK"){
            return list.filter(stud=>!stud.checked)
        } else if(flag=="DELETEALL"){
            setList(list.filter(student=>student.checked==false))
            localStorage.setItem("list",JSON.stringify(list.filter(student=>student.checked==false)))
            setFlag("")
        } else if(flag=="CHECKALL"){
            setList(list.map(student=>({...student,checked:!checkAll})))
            localStorage.setItem("list",JSON.stringify(student=>({...student,checked:!checkAll})))
            setCheckAll(!checkAll)
            setFlag("")
        } return list;
    }
    return (
        <div>
            <Container className="w-50 text-center p-5 my-5">
                <h1>Student List</h1>
                <Add addNewStudent={addNewStudent}/>
                <ListGroup>
                    {
                        //list.map((stud,index)=>(<Student key={index} student={stud} deleteById={deleteById} reChecked={reChecked}/>))
                        filterStudent(list,flag).map((stud,index)=>(<Student key={index} student={stud} deleteById={deleteById} reChecked={reChecked} rename={rename}/>))
                    }
                </ListGroup>
                <Footer setFlag={setFlag} checkAll={checkAll} setCheckAll={setCheckAll}/>
            </Container>
        </div>
    )
}