import RightNavbar from '../RightNavbar';

const Slide6 = ({ onMenuClick }) => {
    return (
      <div className="w-full h-screen flex flex-col justify-start items-start bg-[#F2EDE7]">
        <RightNavbar onMenuClick={onMenuClick} />

        {/* Main Content - Left Aligned */}
        <div className="flex flex-col items-start pl-8 pt-8">
          {/* Main Title - 70px */}
          <h1 className="font-josefin-sans text-[70px] leading-tight text-[#413C36] mb-4">
            01
          </h1>

          {/* Vertical Line - 400px */}
          <div className="w-[2px] h-[250px] bg-[#413C36] mb-8"></div>
          {/* Subtitle - 16px */}
          <p className="font-josefin-sans text-[16px] leading-relaxed text-[#413C36] mb-6 uppercase tracking-wide">
          interior <br></br>design studio           </p>

          {/* Secondary Title - 48px */}
          <h2 className="font-kinta text-[48px] leading-tight text-[#413C36] mb-6">
            Vamos criar algo incrível?
          </h2>

          {/* Body Text - 16px */}
          <p className="font-josefin-sans text-[16px] leading-normal text-[#413C36] max-w-md">
Pronto para transformar o seu espaço? Desde a concepção até a execução, estamos aqui para ajudar. Desde projetos 3d, projetos de arquitetura e projetos de decoração de interiores, até à fabricação e instalação de móveis personalizados.       </p>
        </div>
      </div>
    );
  };
  
  export default Slide6;
  