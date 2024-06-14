import type { ImageWidget } from "apps/admin/widgets.ts";

interface PaymentI {
    label?: string;
    image: ImageWidget;
}

interface Props {
    payments: PaymentI[];
}

function Payments({ payments }: Props) {
    return (
        <div>
            <span class="block text-[#666461] text-[10px] not-italic font-normal leading-[normal] mb-4">Formas
                de pagamento</span>
            <ul class="flex items-center flex-wrap gap-2">
                {payments?.length > 0 && payments?.map((payment: PaymentI) => (
                    <li>
                        <img src={payment?.image} alt="icone de pagamento" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Payments;