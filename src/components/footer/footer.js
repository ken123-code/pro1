import "./footer.css"
function Footer(){
    const x =5;
    // const {name1,age1}=props
    const arr = [{name: "le meo", age: 3}, {name:"le tho", age:2}, {name:"le nai", age:4}]
    return(
        <>
            <div className="footer" id="footer1">
                Footer 1
                <h1>X = {x}</h1>
                {/* <h1>Ten : {name1}</h1>
                <h1>Tuoi : {age1}</h1> */}
                {
                    arr&&arr.map((item,index)=>(<p key={index}>{item.name}</p>))
                }
            </div>
            <div className="footer">
                Footer 2
            </div>
        </>
    )
}
export default Footer;