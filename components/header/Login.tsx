import { useUser } from "deco-sites/std/packs/vtex/hooks/useUser.ts";

function Login() {
const {user} = useUser();
//console.log("useUser", user.value?.email)
//console.log("user", user.value)
//console.log("user email", user.email)

return (
<div class="relative group">
  {
  user.value?.email ?
  <div>
    <a class="btn btn-circle btn-sm btn-ghost hover:bg-[#171413] text-white" href="#" aria-label="Log in">
      <img src="/arquivos/icone-profile.svg" alt="icone do perfil" title="icone do perfil" />
    </a>
    <div
      class="after:content-[''] after:absolute after:w-0 after:h-0 after:rotate-180 after:border-t-[5px] after:border-t-white after:border-x-[5px] after:border-x-transparent after:border-solid after:right-[65px] after:top-[-5px] absolute right-[-55px] flex flex-col items-center w-[150px] z-[9] border invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-[0.2s] p-[15px] rounded-sm border-t-0 border-solid border-[#EBEBEB] top-[45px] bg-white">
      <a class="text-sm font-medium text-shadow hover:underline leading-[19px] tracking-[0px] text-[#171413] capitalize block p-[5px]"
        href="/_secure/account">minha conta</a>
      <a class="text-sm font-medium text-shadow hover:underline leading-[19px] tracking-[0px] text-[#171413] capitalize block p-[5px]"
        href="/_secure/account#/orders">meus pedidos</a>
      <a class="text-sm font-medium text-shadow hover:underline leading-[19px] tracking-[0px] text-[#171413] capitalize block p-[5px]"
        href="/_secure/lista-de-desejos">Favoritos</a>
      <a class="text-sm font-medium text-shadow hover:underline leading-[19px] tracking-[0px] text-[#171413] capitalize block p-[5px]"
        href="/api/vtexid/pub/logout?scope=tfcszo&amp;returnUrl=%2F">sair</a>
    </div>
  </div>
  :
  <div>
    <a class="btn btn-circle btn-sm btn-ghost hover:bg-[#171413] text-white" href="/login" aria-label="Log in">
      <img src="/arquivos/icone-profile.svg" alt="icone do perfil" title="icone do perfil" />
    </a>
    <div
      class="after:content-[''] after:absolute after:w-0 after:h-0 after:rotate-180 after:border-t-[5px] after:border-t-white after:border-x-[5px] after:border-x-transparent after:border-solid after:right-[65px] after:top-[-5px] absolute right-[-55px] flex flex-col items-center w-[150px] z-[9] border invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-[0.2s] py-0 px-[15px] rounded-sm border-t-0 border-solid border-[#EBEBEB] top-[45px] bg-white">
      <a class="text-sm font-medium text-shadow hover:underline leading-[19px] tracking-[0px] text-[#171413] capitalize block p-[5px]"
        href="/_secure/account">Faça seu Login</a>
    </div>
  </div>
}
</div>
);
}

export default Login;