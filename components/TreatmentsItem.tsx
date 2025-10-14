type PropsType = {
  title: string;
  description: string;
};

const TreatmentsItem = ({ title, description }: PropsType) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
      <div className="flex items-center gap-[12px] mb-2">
        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
        <h3 className="text-2xl">{title}</h3>
      </div>
      <p className="pl-6 text-[15px]">{description}</p>
    </div>
  );
};

export default TreatmentsItem;
