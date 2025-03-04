import Image from 'next/image';

interface TechnologyIconProps {
  name: string;
}

const TechnologyIcon = ({ name }: TechnologyIconProps) => {
  return (
    <div className="tooltip" data-tip={name}>
      <div className="w-8 h-8 relative">
        <Image
          src={`/icons/${name}.svg`}
          alt={name}
          fill
          className="object-contain opacity-75 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
};

export default TechnologyIcon;
