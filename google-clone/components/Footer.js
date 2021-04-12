const Footer = () => {
  return (
    <footer className="grid w-full divide-y-[2px] divide-gray-300 divide-gray-200 bg-gray-100 text-sm text-gray-500 ">
      <div className="px-8 py-3">
        <p>Magyarország</p>
      </div>
      <div className="grid grid-cols-1   lg:grid-cols-2 gap-y-4 px-8 py-3 grid-flow-row-dense">
        <div className="flex space-x-8 justify-center whitespace-nowrap md:justify-self-start">
          <p >Névjegy</p>
          <p>Hirdetés</p>
          <p>Vállalkozás</p>
          <p>A Keresés müködése</p>
        </div>
        <div className="flex space-x-8 justify-center md:ml-auto">
          <p>Adatvédelem</p>
          <p>Általános Szerződési Feltételek</p>
          <p>Beállitások</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
