import Image from "next/image";
import TextButton from "./components/textButton";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="w-[1041px] h-[594px] flex flex-col justify-center items-center py-[215px] border border-black/15 shadow-md bg-[#F8F3E2]">
          <div className=" flex flex-row justify-flex-start items-start">
            <TextButton>Hello</TextButton>
            <TextButton>World</TextButton>
          </div>  
          <TextButton>No</TextButton>
      </div>
    </div>
  );
}
