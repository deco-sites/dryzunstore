import { useEffect, useState } from "preact/hooks";
import { useCallback } from "preact/hooks";
import { useCart } from "apps/vtex/hooks/useCart.ts";
import { formatPrice } from "../../../sdk/format.ts";

interface Props {
    isTudor: boolean;
    productID: string;
}

function Installments({ isTudor, productID }: Props) {    
    const { simulate } = useCart();
    const [installs, setInstalls] = useState<any>([]);
    const [active, setActive] = useState<boolean>(false);

    const handleSimulation = useCallback(async () => {
        const items: any = [{
            id: productID,
            quantity: 1,
            seller: "1"
        }
        ];

        
        const simulateResult = await simulate({
            items: items,
            postalCode: '12400100',
            country: "BRA",
        });

        const { paymentData } = simulateResult;
        const { installmentOptions } = paymentData;
        setInstalls(installmentOptions[0]?.installments);

    }, []);

    useEffect(() => {
        handleSimulation();
    }, []);

    return (
        <div class="relative">
            <p onClick={() => setActive(!active)} class={`cursor-pointer ${isTudor ? 'flex' : 'hidden'} items-center text-[13px] not-italic font-normal leading-[normal] tracking-[0.65px] text-[#666461] mb-2`}>
                Ver opções de parcelamento
                <div class={`ml-2 transition-[0.4s] ${active ? 'rotate-180' : 'rotate-0'}`}>
                    <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.10156 5.94092L0.601562 1.44092C0.367188 1.22998 0.367188 0.878418 0.601562 0.644043C0.8125 0.433105 1.16406 0.433105 1.39844 0.644043L5.5 4.76904L9.60156 0.66748C9.8125 0.433105 10.1641 0.433105 10.3984 0.66748C10.6094 0.878418 10.6094 1.22998 10.3984 1.44092L5.875 5.94092C5.66406 6.17529 5.3125 6.17529 5.10156 5.94092Z" fill="#666461" />
                    </svg>
                </div>
            </p>
            <ul class={`w-full bg-white ${isTudor ? 'py-2 px-3 shadow-[0px_10px_8px_#0000001f] overflow-hidden absolute top-7 left-0 transition-[0.4s]' : 'relative'} ${isTudor ? (active ? 'max-h-[1000px] opacity-1' : 'max-h-0 opacity-0') : ''}`}>
                {installs.length > 0 && installs?.map((item: any, index: number) => (
                    <li class={`${isTudor ? 'block py-1' : index === installs.length - 1 ? 'block pb-1' : 'hidden'} text-xs not-italic font-normal leading-[normal] tex-[#333]`}>
                        {index === 0 ?
                            <span> à vista {formatPrice(item.value / 100, 'BRL')}</span>
                            :
                            <span>{item.count}x de {formatPrice(item.value / 100, 'BRL')}</span>
                        }
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default Installments;