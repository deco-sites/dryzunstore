function SummerSale() {
    const items = [
        {
            src: "https://dryzun.vteximg.com.br/arquivos/desconto-01.png",
            link: "/summer-sale?tag=15-OFF",
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/desconto-02.png",
            link: "/summer-sale?tag=30-OFF",
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/desconto-03.png?v=01",
            link: "/summer-sale?tag=40-OFF",
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/desconto-04.png",
            link: "/summer-sale?tag=50-OFF",
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/desconto-05.png",
            link: "/summer-sale?tag=60-OFF",
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/desconto-06.png",
            link: "/summer-sale?tag=todos",
        },
    ];

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 w-full">
                {items.map((item, index) => (
                    <a key={index} href={item.link}>
                        <img
                            loading="lazy"
                            src={item.src}
                            width={132}
                            height={132}
                            className="object-contain"
                        />
                    </a>
                ))}
            </div>

            <h1 className="container-2 mt-12 uppercase">Black November</h1>
        </>
    );
}

export default SummerSale;
