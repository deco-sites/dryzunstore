function BlackNovember() {
    const items = [
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mini-banner6.png",
            link: "/summer-sale?tag=15-OFF",
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
            src: "https://dryzun.vteximg.com.br/arquivos/mini-banner9.png",
            link: "/summer-sale?tag=50-OFF",
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mini-banner10.png",
            link: "/summer-sale?tag=60-0FF",
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mini-banner11.png",
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

            <h1 className="container-2 mt-12 uppercase">Summer Sale</h1>
        </>
    );
}

export default BlackNovember;
