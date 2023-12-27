import "./planos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'

export default function Planos(){
    let navigate = useNavigate();
    const plano=(e)=> {

        localStorage.setItem("plano",e);
        navigate("/Pagamento", { replace: true })
      
    }


    
    return(
    <><Menu/>
    
    <div className="lay" style={{display: 'flex',marginTop:'5%'}}>
        
           
        
        <div class="container " style={{marginLeft: '',width: '85vw', }}>
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">Estudante</h5>
                  <h6 class="card-price text-center">1000MZN <span class="period">/mês</span></h6>
                  <hr/>
                  <ul class="fa-ul">
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Personal Trainer</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Acesso ao Ginasio</li>
                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Personal Trainer Privado</li>
                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Suporte Online </li>
                  </ul>
                  <div class=" text-center">
                  <a href="#" class="btn btn-primary text-uppercase " onClick={(e)=>plano(1)} style={{width:'100%',wordWrap:'normal'}}>Subscrever</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">Adulto</h5>
                  <h6 class="card-price text-center" >3000MZN<span class="period">/mês</span></h6>
                  <hr/>
                  <ul class="fa-ul">
                    <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Personal Trainer</strong></li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Acesso ao Ginasio</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Suporte Online</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Accesso a Comunidade</li>
                 
                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Personal Trainer Privado</li>
                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Plano Alimentar</li>
                  </ul>
                  <div class=" text-center">
                    <Link to="/Pagamento" className="btn btn-primary text-uppercase text-center" onClick={(e)=>plano(2)} style={{width:'100%',wordWrap:'normal',margin:'2%'}}>Subscrever</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
                  <h6 class="card-price text-center">10000MZN<span class="period">/mês</span></h6>
                  <hr/>
                  <ul class="fa-ul">
                    <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Personal Trainer</strong></li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Acesso ao Ginasio</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Suporte Online</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Accesso a Comunidade</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Personal Trainer Privado</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Plano Alimentar personalizado</li>
                  </ul>
                  <div class=" text-center">
                   
                    <Link to="/Pagamento" className="btn btn-primary text-uppercase" onClick={(e)=>plano(3)} style={{width:'100%',wordWrap:'normal',margin:'2%'}}>Subscrever</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>  
    )
}