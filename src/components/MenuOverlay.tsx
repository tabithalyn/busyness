
const MenuOverlay = ({ menuList }:{
  menuList: {title: string;}[];
}) => {
  return (
    <div className="text-center w-full flex justify-center flex-wrap z-50">
      <div className="w-3/12 pb-10 flex flex-wrap justify-center">
        {menuList.map((item:{title:string}, id:number) => (
          <h1 key={id} className="text-white text-lg mb-6 justify-center mt-10 hover:scale-110 transition-all cursor-pointer w-full">
            <a href="/" className="text-3xl relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer">
              {item.title}
            </a>
          </h1>
        ))}
      </div>
    </div>
  );
}
 
export default MenuOverlay;