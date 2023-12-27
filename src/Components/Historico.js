import {useState,useEffect} from 'react'
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Menu from './Menu'
import ReactLoading from "react-loading";
import { TailSpin } from  'react-loader-spinner'

export default function Historico(){
    const [dias,setDias] = useState([]);
    const [done, setDone] = useState(false);

const load=()=>{
  return  <div className="text-center" margin="0  auto"> <TailSpin className="text-center" color="#00BFFF" margin="0  auto" /> </div>
}

useEffect(() => {setTimeout(() => setDone(true), 1200)},[])
    
useEffect(async ()=>
  await axios.get('https://gym-group.herokuapp.com/finance/payments/'+ localStorage.getItem('id')).then((res)=>setDias(res.data)),[])


const tra=()=>{
   

   console.log(dias);
   
   if(dias.length==0) 
      return  <div className="text-center">Sem Historico</div>
    return dias.map((item)=>
    
    <Card style={{ width: "95vw" , margin:'2%'}}>

    <Card.Body>
      <Card.Title style={{ color: "#323740" }}>Subscrição {turno(item.category_id)}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        Dia de Pagamento: {item.date}
      </Card.Subtitle>
      <Card.Text>
      Duração: {item.number_mounths} meses
      </Card.Text>
      <Card.Text>
       Estado: {item.state==true ?'Valido':'Expirado'} 
      </Card.Text>
      <Card.Text className="mb-2 text-muted">
        Valor Pago: {item.value} MZN
      </Card.Text>
    </Card.Body>
  </Card>)
  
}
 const turno=(c)=>{
  switch(c){
    case 1: return " Estudante";
    case 2: return "Adulto";
    case 3: return "Professional"

  }
    

 }


  return(
  <div style={{position:"sticky",top:"0" ,height:"opx",position:"-webkit-sticky"}}><Menu />
    

    {!done ? (
        load()
    ) : (tra())}
    </div>
)
}

