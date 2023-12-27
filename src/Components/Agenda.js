import {useState,useEffect} from 'react'
import axios from 'axios';
import Card from "react-bootstrap/Card";

export default function Agenda(){
    const [dias,setDias] = useState([]);
    const[obj,setObj]=useState({"Item":"","Pos":0});
    const [ini,setIni]=useState(false)
let pag;


    
useEffect(async ()=>
  await axios.get('https://gym-group.herokuapp.com/training/plan/'+ localStorage.getItem('id')).then((res)=>setDias(res.data)),[])


const tra=()=>{
   

   //console.log(dias);
   if(dias.length==0) 
    return  <div className="text-center">Sem Treinos Agendados</div>
    
    return dias.map((item,index)=>
       
    <Card style={{ width: "95vw" , margin:'2%'}}>
      {}
    <Card.Body>
      <Card.Title style={{ color: "#323740" }}>Turno {turno(item.training_period_id)}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {item.date}
      </Card.Subtitle>
      <Card.Text>
        Exercicios programados: {item.exercises.length}
      </Card.Text>
      <Card.Link  onClick={()=>{setIni(!ini)}} onMouseEnter={()=>setObj({"Item":item,"Pos":index})}> Lista de Exercicios</Card.Link>
    </Card.Body>
      {exer(index)}
    
  </Card>)
  
}

const exer=(ine)=>{
 if(ini!=false){
  
  if(obj.Pos ==ine){



    if(obj.Item.exercises.length==0)
        return <div>Sem exercicios</div>

        return obj.Item.exercises.map((ite)=> 
        <Card.Text style={{margin:'2%'}}>
          Exercicio: {ite.exercise}<br/>
          Tempo    :{ite.minutes} minutos
        </Card.Text>)
  }
  
 }
}
 const turno=(c)=>{
  switch(c){
    case 1: return " da Manhã";
    case 2: return "da Tarde";
    case 3: return "Noturno"

  }
    

 }


  return(<>
    {tra()}
</>)
}

