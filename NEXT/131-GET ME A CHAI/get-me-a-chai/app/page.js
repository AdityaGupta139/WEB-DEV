import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[44vh] gap-4  text-white">
        <div className="font-bold text-5xl flex justify-center items-center gap-2">Buy Me a Chai <span><img width={88} src="/tea.gif" alt="" /></span></div>
        <p>Crowd funding for your favorite chai</p>
        <div>
          <button type="button" class="text-white bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg shadow-pink-500/10 transition-all duration-200">
            Start Here
          </button>
          <button type="button" class="text-white bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg shadow-pink-500/10 transition-all duration-200">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">

      </div>
      <div className="text-white container mx-auto">
        <h1 className="text-2xl font-bold my-14 text-center">Your fans can buy you a chai</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center ">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center ">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center ">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>
    </>
  );
}
