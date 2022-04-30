import Form from "../Form/Form";
import Facebook from '../../assets/img/logo_facebook.svg'

export default function Main(){
  return(
    <main>
      <div className="md:bg-main-gray md:pt-30 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-980px mx-auto">
          <div className="pt-10"> 
            <img src={Facebook} alt="Facebook" className="w-30 mx-auto md:mx-0 md:w-290px md:-mb-4 md:-ml-8"/>
            <p className="hidden md:flex text-subtitle leading-8 w-500px pr-6">O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</p>
          </div>
          <div className="md:w-396px md:place-self-end">
            <div >
              <Form />
              <div  >
                <div >
                  <a href=""  >Esqueceu a senha?</a>
                </div>
                <div >
                  <a href="#"  >Criar nova conta</a>
                </div>
              </div>
            </div>
            <div  >
              <p><a href="#" >Criar uma Página</a> para uma celebridade, banda ou empresa.</p>
            </div>
          </div>
        </div>
    </div>
    </main>  
  );
}