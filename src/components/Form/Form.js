export default function Form(){
  return(
    <form actio="" className="flex flex-col">
      <input type="text" placeholder="Email ou telefone" class="flex-1 mb-2 md:mb-3 p-3 rounded md:rounded-md border border-gray-400 bg-gray-200 md:bg-white text-sm md:text-base placeholder-gray-600 md:placeholder-gray-500" />
      <input type="password" placeholder="Senha" class="flex-1 mb-3 p-3 rounded md:rounded-md border border-gray-400 bg-gray-200 md:bg-white text-sm md:text-base placeholder-gray-600 md:placeholder-gray-500" />
      <input type="submit" value="Entrar" class="flex-1 mb-3 py-2 px-3 rounded-md bg-main-blue hover:bg-main-blue-hover font-semibold text-white text-xl" />
    </form>
  );
}