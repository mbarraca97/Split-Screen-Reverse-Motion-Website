const Slide3 = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-start items-end text-right px-6 md:px-8 text-white bg-cover bg-center bg-no-repeat bg-[#D7D0C6] pt-16 ">
            <h1 className="font-josefin-sans uppercase text-[100px] leading-tight text-[#413C36] mb-2 mr-[-20px]">
                Causa
            </h1>
            
            <div className="flex flex-row items-center align-baseline mb-6">
            <img src="/sl3.png" alt="efeito" className="w-[300px] h-[350px] mr-16" /> 

                <p className="font-josefin-sans md:text-[18px] leading-tight font-light uppercase text-[#413C36]">
                    based in <br></br>porto
                </p>
            </div>

            <div>
                <p className="font-kinta text-[46px] leading-tight text-[#413C36]">
                    O Efeito <br></br> e o seu conforto
                </p>
            </div>
        </div>
    );
};

export default Slide3;
