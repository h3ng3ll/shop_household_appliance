


const RouterHeader : React.FC<{
    nameRouter : string
}> = ({nameRouter}) => 
     (
        <div style={{
            padding: "30px",
            margin: "10px  0px  50px  0px",
            display: "grid",
            
            placeItems: "center",
            gridTemplateColumns: "50%  ",
            }} className="orangeBG">
            <h1> {nameRouter}</h1>
        </div>
    )

export default  RouterHeader
