;
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import Categories from "./_components/categories";
import Banner from "./_components/banner";
import Schedules from "@/app/_components/schedules";
import { Header } from "../_components/header";

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
     <div className="mb-6">
      <Search />
      </div>
      <div className="mt-6">
        <Categories />
      </div>
      <div className="mt-6 px-5">
        <Banner />
      </div>
      <div className="mt-6 px-5">
        <h2 className="uppercase text-xs mb-6 font-bold text-gray-03">Agendamentos</h2>
        <Schedules />
      </div>
      <div className="mt-6 px-5">
        <h2 className="uppercase text-xs font-bold text-gray-03">Recomendados</h2>
        
      </div>
      <div className="mt-6 px-5">
        <h2 className="uppercase text-xs font-bold text-gray-03">Populares</h2>
      </div>
    </div>
    
  );
}
