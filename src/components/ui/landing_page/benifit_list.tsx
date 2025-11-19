import  CheckIcon  from "@/components/svgs/check_icon";


interface BenefitsListProps {
  items: string[];
  textClassName?: string;
  icon?: React.ReactNode;
}

const BenefitsList = ({ items, textClassName, icon }: BenefitsListProps) => {
  return (
    <div className="space-y-4">
      {items.map((text, index) => (
        <div key={index} className="flex items-start gap-3">
          {icon ? icon : <CheckIcon />}
          <p className={textClassName ? textClassName : "text-white text-lg leading-snug"}>
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;
