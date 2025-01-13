function BlackNovember() {
    const items = [
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mini banner(2).png",
            link: "/summer-sale?tag=10-OFF",
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mini-banner-25.png",
            link: "/summer-sale?tag=25-OFF",
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mini-banner7.png",
            link: "/summer-sale?tag=30-OFF",
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mini-banner8.png",
            link: "/summer-sale?tag=40-OFF",
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mini banner.png",
            link: "/summer-sale?tag=relogios-15-OFF",
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mini-relogio-banner-30.png",
            link: "/summer-sale?tag=relogios-OFF",
        },
        // {
        //     src: "https://dryzun.vteximg.com.br/arquivos/mini-banner11.png",
        //     link: "/summer-sale?tag=todos",
        // },
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

            <h1 className="container-2 mt-12 uppercase">Summer Sale</h1>
        </>
    );
}

export default BlackNovember;
