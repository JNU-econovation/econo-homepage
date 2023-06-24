import strings from "@/assets/strings/recruit.ko.json";
import Fileds from "@/components/recruit/Fields";
import Faq from "@/components/recruit/Faq";
import Subscription from "@/components/recruit/Subscription";

const data = strings;
const Recruit = () => {
  return (
    <div className="flex-col justify-center w-full px-16">
      <section className="text-xl leading-relaxed text-center my-20">
        <h1 className="text-[7rem] uppercase font-bold text-center my-20">
          {data.title}
        </h1>
        {data.content.split("\n").map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </section>
      <section className="w-full flex justify-start my-64 gap-16">
        {data.schedule.map((d, i) => (
          <div className="w-full" key={i}>
            <div className="text-6xl mb-6">{d.date}</div>
            {/* TODO: min-with 설정 */}
            <div className="border-t-[2px] border-t-transparent border-b-[2px] border-b-transparent shadow-[inset_0_0_0_2px] h-[4px] w-full border-black relative after:border-t-2 after:border-r-2 after:rotate-45 after:right-[1px] after:-bottom-[5px] after:h-3 after:w-3 after:absolute after:border-black"></div>
            <div className="text-lg mt-4">{d.text}</div>
          </div>
        ))}
      </section>
      <section>
        <Fileds />
      </section>
      <section>
        <Subscription />
      </section>
      <section>
        <Faq />
      </section>
    </div>
  );
};

export default Recruit;
