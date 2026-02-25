const Slide2 = () => {
    return (
        <div className="w-full h-screen grid grid-rows-[auto,1fr,auto] justify-items-start text-left px-6 md:px-8 pt-16 pb-12 bg-cover bg-center bg-no-repeat bg-[#F2EDE7] font-light">
            <h1 className="font-josefin-sans uppercase text-[clamp(56px,10vw,100px)] leading-tight text-[#413C36] mb-6">
                EFEITO
            </h1>
            
            <div className="flex flex-row items-center gap-16 self-center">
                <p className="font-josefin-sans text-[clamp(14px,2vw,18px)] leading-tight font-light uppercase text-[#413C36]">
                    based in <br></br>porto
                </p>
                <img
                    src="/sl2.png"
                    alt="efeito"
                    className="w-[240px] h-[280px] md:w-[300px] md:h-[350px] object-cover"
                />
            </div>

            <div className="self-end">
                <p className="font-kinta text-[clamp(28px,5vw,46px)] leading-tight text-[#413C36]">
                    O Efeito <br></br> e o seu conforto
                </p>
            </div>
        </div>
    );
};

export default Slide2;
