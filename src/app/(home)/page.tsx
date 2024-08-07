import { Header } from "../../_components/header";



export default function Home() {
  return (
    <div className="min-w-96 max-[1440px]">
      <Header />
      <div className="py-6 ">
         <span className="ml-6 text-xl text-bold text-primary-purple">Olá, </span>
      <span className="text-sm text-white"> Faça seu Login!</span> 
      </div>
     
    </div>
    
  );
}
