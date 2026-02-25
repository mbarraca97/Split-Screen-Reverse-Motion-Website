const Slide1 = () => {
  return (
    <div 
      className="w-full h-screen grid grid-rows-[auto,1fr,auto] justify-items-end text-right px-6 md:px-8 pt-16 pb-12 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/sl1.png)'
      }}
    >
      <h1 className="font-josefin-sans uppercase text-[clamp(56px,10vw,100px)] leading-tight mb-6">
        Causa
      </h1>

      <div className="w-full flex justify-end self-center">
        <p className="font-josefin-sans text-[clamp(14px,2vw,18px)] leading-tight font-light uppercase">
          Interior Design <br />Studio
        </p>
      </div>

      <div className="opacity-80 self-end">
        <p className="font-kinta text-[clamp(28px,5vw,46px)] leading-tight">
          Da sua Causa <br/>Nasce o Nosso Design
        </p>
      </div>
    </div>
  );
};

export default Slide1;
