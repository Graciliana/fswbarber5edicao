import { Header } from "../../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";


export default function Home() {
  return (
    <div className="min-w-96 max-[1440px]">
      <Header />
      <div className="py-6 ">
         <span className="ml-6 text-xl text-normal text-primary-purple">Olá, </span>
        <span className="text-xl text-white text-normal "> Faça seu Login!</span> 
        <p></p>
      <span className="ml-6 text-sm text-white capitalize">
        {format(new Date(), "EEEE", {
          locale: ptBR,
        })}
        ,
      </span>
      <span className="ml-2 text-sm text-white">
        {format(new Date(), "dd", {
          locale: ptBR,
        })}{" "}
        de
      </span>
      <span className="ml-2 text-sm text-white">
        {format(new Date(), "MMMM", {
          locale: ptBR,
        })}
      </span>
      <span className="ml-2 text-sm text-white capitalize">
        {format(new Date(), "yyyy", {})}
      </span>
      </div>
     
    </div>
    
  );
}
