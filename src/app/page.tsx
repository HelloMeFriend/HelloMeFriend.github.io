"use client";
import TextButton from "./components/textButton";
import Text from "./components/text";
import Icon from "./components/Icon";
import Hand from "/Hand.png";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <img
        src={"/Hand.png"}
        alt="Hand"
        className="absolute left-1/2 -translate-x-1/2 top-0 z-20 w-[500px] pointer-events-none"
      />
      <div
        className="w-[1041px] h-[594px] flex flex-col justify-between items-center mt-20  p-10 border border-black/15 shadow-md bg-[#f0e4be]/90 relative z-10"
        style={{
          borderRadius: '4px 4px 4px 4px',
        }}
      >
        <div className="w-full flex flex-row justify-between items-start">
          <TextButton>About Me</TextButton>
          <TextButton>Resume</TextButton>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <Text size="large">Omar ALSHANYOUR</Text>
          <Text size="small">Software Developer</Text>
        </div>
        <div className="w-full flex flex-row justify-between items-start px-60">
          <TextButton>Projects</TextButton>
          <Icon width={40} height={40}>
            <path id="Icon" d="M15 31.6667C6.66671 34.1667 6.66671 27.5 3.33337 26.6667M26.6667 36.6667L26.6667 30.2167C26.7292 29.4219 26.6219 28.623 26.3517 27.873C26.0816 27.123 25.6549 26.439 25.1 25.8667C30.3334 25.2833 35.8334 23.3 35.8334 14.2C35.8329 11.873 34.9379 9.63533 33.3334 7.95C34.0931 5.91418 34.0394 3.66391 33.1834 1.66666C33.1834 1.66666 31.2167 1.08333 26.6667 4.13333C22.8467 3.09803 18.82 3.09803 15 4.13333C10.45 1.08333 8.48337 1.66666 8.48337 1.66666C7.62733 3.66391 7.57361 5.91418 8.33337 7.95C6.71692 9.64783 5.82091 11.9058 5.83337 14.25C5.83337 23.2833 11.3334 25.2667 16.5667 25.9167C16.0184 26.4833 15.5955 27.159 15.3256 27.8999C15.0556 28.6407 14.9447 29.4301 15 30.2167L15 36.6667" fillRule="nonzero" stroke="rgb(30,30,30)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          </Icon>
          <Icon width={40} height={40}>
            <path id="Icon" d="M33.7378 16.2623C35.6131 18.1377 36.6667 20.6812 36.6667 23.3334L36.6667 35L30 35L30 23.3334C30 22.4493 29.6488 21.6015 29.0237 20.9764C28.3986 20.3512 27.5508 20 26.6667 20C25.7827 20 24.9348 20.3512 24.3097 20.9764C23.6846 21.6015 23.3334 22.4493 23.3334 23.3334L23.3334 35L16.6667 35L16.6667 23.3334C16.6667 20.6812 17.7203 18.1377 19.5956 16.2623C21.471 14.3869 24.0145 13.3334 26.6667 13.3334C29.3189 13.3334 31.8624 14.3869 33.7378 16.2623ZM10 15L10 35L3.33337 35L3.33337 15L10 15ZM6.66671 10C4.82576 10 3.33337 8.50766 3.33337 6.66671C3.33337 4.82576 4.82576 3.33337 6.66671 3.33337C8.50766 3.33337 10 4.82576 10 6.66671C10 8.50766 8.50766 10 6.66671 10Z" fillRule="evenodd" stroke="rgb(30,30,30)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          </Icon>
          <Icon width={40} height={40}>
            <path id="Icon" d="M33.3334 6.66663C35.1667 6.66663 36.6667 8.16663 36.6667 9.99996L36.6667 30C36.6667 31.8333 35.1667 33.3333 33.3334 33.3333L6.66671 33.3333C4.83337 33.3333 3.33337 31.8333 3.33337 30L3.33337 9.99996C3.33337 8.16663 4.83337 6.66663 6.66671 6.66663L33.3334 6.66663ZM36.6667 9.99996L20 21.6666L3.33337 9.99996" fillRule="evenodd" stroke="rgb(30,30,30)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          </Icon>
        </div>
      </div>
    </div>
  );
}
