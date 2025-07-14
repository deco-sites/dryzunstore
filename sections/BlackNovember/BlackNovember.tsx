function BlackNovember() {
    const items = [
        {
            src: "https://dryzun.vteximg.com.br/arquivos/1-desk-we-love.jpg",
            link: "/welovesale-2025?tag=30-OFF",
            isMobile: false
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/2-desk-we-love.jpg",
            link: "/welovesale-2025?tag=40-OFF",
            isMobile: false
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/3-desk-we-love.jpg",
            link: "/welovesale-2025?tag=50-OFF",
            isMobile: false
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/4-desk-we-love.jpg",
            link: "/welovesale-2025?tag=relogios-OFF",
            isMobile: false
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/5-desk-we-love.jpg",
            link: "/welovesale-2025",
            isMobile: false
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/1-mob-we-love.jpg",
            link: "/welovesale-2025?tag=30-OFF",
            isMobile: true
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/2-mob-we-love.jpg",
            link: "/welovesale-2025?tag=40-OFF",
            isMobile: true
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/3-mob-welove-02.jpg",
            link: "/welovesale-2025?tag=50-OFF",
            isMobile: true
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/4-mob-we-love.jpg",
            link: "/welovesale-2025?tag=relogios-OFF",
            isMobile: true
        },
        {
            src: "https://dryzun.vteximg.com.br/arquivos/5-mob-we-love.jpg",
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