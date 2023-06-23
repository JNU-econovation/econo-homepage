import strings from "@/components/recruit/recruit.ko.json";
import Fileds from "./Fields";

const RecruitMain = () => {
  return (
    <div className="flex-col justify-center w-full">
      <section className="text-xl leading-relaxed text-center my-20">
        <header className="text-[7rem] uppercase font-bold text-center my-20">
          {strings.title}
        </header>
        {strings.content.split("\n").map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </section>
      <section className="w-full flex justify-between p-24 gap-16">
        {strings.schedule.map((d, i) => (
          <div className="w-full" key={i}>
            <div className="text-6xl mb-6">{d.date}</div>
            {/* TODO: min-with 설정 */}
            <div className="border-t-[1px] border-t-transparent border-b-[1px] border-b-transparent shadow-[inset_0_0_0_2px] h-[4px] w-full border-black relative after:border-t after:border-r after:rotate-45 after:right-0 after:-bottom-[5px] after:h-3 after:w-3 after:absolute after:border-black"></div>
            <div className="text-lg mt-4">{d.text}</div>
          </div>
        ))}
      </section>
      <section>
        <Fileds />
      </section>
    </div>
  );
};

export default RecruitMain;
