import "./escolha.css";
import { useState} from 'react'
import axios from 'axios'
import Menu from './Menu'
import ReactLoading from "react-loading";


export default function Es(){
    const [valor,setValor] =useState("");
    const [nr,setNr] = useState("");
    const [horario,setHorario] = useState(1)
    const[load,setLoad] = useState(false)

    const pac=()=>{
        switch(localStorage.getItem("plano")){
            case "1":{return {'nome':'Estudante' ,'valor':'1000'};};break;
            case "2":{return {'nome':'Adulto' ,'valor':'3000'}};break;
            case "3":{return {'nome':'Pro','valor':'10000'}};break;
        }
        
    }
    
    const res= async() => await axios.post('https://gym-group.herokuapp.com/finance/payments/'+ localStorage.getItem('id'),{
            "category_id":  Number(localStorage.getItem("plano")),
            "number_mounths": Number(nr),
            "training_period_id": Number(horario)
           
           
           
    }).then(response=>{setLoad(false); response.data.status=='ok' ?setValor("Pago com sucesso: "+response.data.value+" MZN"):setValor("Erro, Periodo lotado! ");setLoad(false)})

    

    

    return(<div style={{height:"100%"}} >
    <Menu/>
    
        <div class="container text-center scroll" style={{marginTop:"0%",maxHeight:"100vh", overflow:'scroll'}}>
        <div class="row m-0" style={{marginTop:"0%"}} >
            <div class=" " style={{marginTop:"0%"}}>
                <h2 className="text-center">PAGAMENTO</h2>
                    
                   
            </div>
            <div class="col-lg-5 p-0 ps-lg-4">
                <div class="row m-0">
                    <div class="col-12 px-3">
                        <div class="d-flex justify-content-between mb-2">
                            <p class="textmuted">Meses</p>
                            <input  type="number" class="form-control text-center" onChange={(e) => setNr(e.target.value)}/>
                            
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <p class="textmuted">Pacote</p>
                            <p class="fs-14 fw-bold">{pac().nome}<span class="fas fa-dollar-sign pe-1"></span></p>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <p class="textmuted">Valor Unitario</p>
                            <p class="fs-14 fw-bold ">{pac().valor} MZN </p>
                        </div>
        
                        <div class="d-flex justify-content-between mb-3">
                            <p class="textmuted fw-bold">Horário</p>
                            <div class="d-flex align-text-top ">
                            <select class="form-select" aria-label="Default select example" onClick={(e)=>{setHorario(e.target.value)}}>
                                <option value="1" >Manhã</option>
                                <option value="2" >Tarde</option>
                                <option value="3" >Noite</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div class="row m-0">
                            <div class="col-12  mb-4 p-0 text-center">
                            {load==true?
                                <ReactLoading
                                type={"bars"}
                                color={"#adadad"}
                                height={"20px"}
                                width={100}/>:<span>{valor}</span>} 
                                
                                
                            </div>
                        </div>
                    <div class="col-12 px-0 ">
                        <div class="row bg-light m-0">
                            <div class="col-12 px-4 my-4">
                                <p class="fw-bold text-center">Detalhes de Pagamento</p>
                            </div>
                            <div class="col-12 px-4">
                                <div class="d-flex  mb-4">
                                    <span class="">
                                        <p class="text-muted">cartão</p>
                                        <input  type="text" class="form-control" placeholder=""/>
                                    </span>
                                    <div class=" w-100 d-flex flex-column align-items-center">
                                        <p class="text-muted">Expira</p>
                                        <input  type="text" class="form-control2" placeholder="MM/YYYY"/>
                                    </div>
                                </div>
                                <div class="d-flex mb-5">
                                    <span class="me-5">
                                        <p class="">Dono</p>
                                        <input  type="text" class="form-control"/>
                                    </span>
                                    <div class="w-100 d-flex flex-column align-items-center">
                                        <p class="text-muted">CVC</p>
                                        <input  type="text" class="form-control3"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row m-0">
                            <div class="col-12  mb-4 p-0 text-center">
                                <div class="btn btn-primary " onClick={(e)=>{setLoad(true);res(); }} >Pagamento<span class="fas fa-arrow-right ps-2"></span>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    </div>   )


}