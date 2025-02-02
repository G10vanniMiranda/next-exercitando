import Button from "@/components/Button";

export default function Home() {

  return (
    <div className="flex flex-col gap-4 bg-black h-screen w-screen items-center">
      <h1 className="bg-violet-600 text-white p-2 rounded-md mt-10">Home</h1>
      
      <Button nomeButton="Teste" className="animate-bounce" />

      <Button nomeButton="Entrar" className="animate-pulse"  />

    </div>
  );
}
