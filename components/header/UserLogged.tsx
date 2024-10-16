import Icon from "../../components/ui/Icon.tsx";
import { useUser } from "apps/vtex/hooks/useUser.ts";

const { user } = useUser();

const UserLogged = () => (
  <div class="relative group">
    {user.value?.email
      ? (
        <>
          <a
            href="/_secure/account"
            class="items_menu flex items-center text-xs font-thin text-[#1A1A1A]"
            aria-label="Account"
          >
            <div class="flex btn border-0 shadow-none btn-sm bg-transparent hover:bg-transparent px-0 gap-1">
              <Icon id="Profile" size={20} strokeWidth={0.4} />
            </div>
          </a>

          <div class="after:content-[''] after:absolute after:w-0 after:h-0 after:rotate-180 after:border-t-[5px] after:border-t-white after:border-x-[5px] after:border-x-transparent after:border-solid after:right-[65px] after:top-[-5px] absolute right-[-55px] flex flex-col items-center w-[150px] z-[9] border invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-[0.2s] p-[15px] rounded-sm border-t-0 border-solid border-[#EBEBEB] top-[40px] bg-white">
            <a
              class="text-center text-[13px] not-italic font-light leading-[140%] tracking-[0.65px] text-[#333] p-[5px]"
              href="/_secure/account"
            >
              minha conta
            </a>
            <a
              class="text-center text-[13px] not-italic font-light leading-[140%] tracking-[0.65px] text-[#333] p-[5px]"
              href="/_secure/account#/orders"
            >
              meus pedidos
            </a>
            <a
              class="text-center text-[13px] not-italic font-light leading-[140%] tracking-[0.65px] text-[#333] p-[5px]"
              href="/api/vtexid/pub/logout?scope=tfcszo&amp;returnUrl=%2F"
            >
              sair
            </a>
          </div>
        </>
      )
      : (
        <a
          href="/login"
          class="items_menu flex items-center text-xs font-thin text-[#1A1A1A]"
          aria-label="Account"
        >
          <div class="flex btn border-0 shadow-none btn-sm bg-transparent hover:bg-transparent px-0 gap-1">
            <Icon id="Profile" size={20} strokeWidth={0.4} />
          </div>
        </a>
      )}
  </div>
);

export default UserLogged;
