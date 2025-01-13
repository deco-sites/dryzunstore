export interface Props {
    /**
     * @description Adicione uma Descrição
     */
    description?: string;
}

function SummerSaleRegulation(props: Props) {
    return (
        <>
            <div className="container-2">
                <p className="text-center text-[13px] not-italic font-light leading-[140%] tracking-[0.65px] text-[#333]">
                    {props.description}
                </p>
            </div>
        </>
    );
}

export default SummerSaleRegulation;
