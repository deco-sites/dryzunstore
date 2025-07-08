function BlackNovember() {
    const items = [
        {
            src: "https://dryzun.vteximg.com.br/arquivos/desk-30-r-welove.png",
            link: "/welovesale-2025?tag=30-OFF",
            isMobile: false
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/desk-40-r-welove.png",
            link: "/welovesale-2025?tag=40-OFF",
            isMobile: false
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/desk-50-r-welove.png",
            link: "/welovesale-2025?tag=50-OFF",
            isMobile: false
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/desk-relogios-r-welove.png",
            link: "/welovesale-2025?tag=relogios-OFF",
            isMobile: false
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/desk-todos-r-welove.png",
            link: "/welovesale-2025",
            isMobile: false
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mob-30-r-welove.png",
            link: "/welovesale-2025?tag=30-OFF",
            isMobile: true
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mob-40-r-welove.png",
            link: "/welovesale-2025?tag=40-OFF",
            isMobile: true
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mob-50-r-welove.png",
            link: "/welovesale-2025?tag=50-OFF",
            isMobile: true
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mob-relogios-r-welove.png",
            link: "/welovesale-2025?tag=relogios-OFF",
            isMobile: true
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/mob-todos-r-welove.png",
            link: "/welovesale-2025",
            allMobile: true,
            isMobile: true
        }
    ];

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 w-full">
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className={item.isMobile ? "block md:hidden" : "hidden md:block"}
                    >
                        <img
                            loading="lazy"
                            src={item.src}
                            width={item.allMobile ? 280 : 132}
                            height={132}
                            className="object-contain"
                        />
                    </a>
                ))}
            </div>

            <h1 className="container-2 mt-12 uppercase">We Love Sale 2025</h1>
        </>
    );
}

export default BlackNovember;