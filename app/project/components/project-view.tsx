import Image from "next/image";

interface Props {
  data: any;
}

const ProjectView = ({ data }: Props) => {
  return (
    <div className="py-20 px-5">
      <div className="grid grid-cols-2 h-fit gap-5">
        <div className="order-2 grid grid-cols-2 gap-5">
          <Image
            className="col-span-2"
            src={data?.bigImg}
            width={915}
            height={552}
            priority
            alt="img"
          />
          <div className="grid h-fit gap-5">
            {data?.imgCol1?.map((img: string) => {
              return (
                <Image
                  key={img}
                  src={img}
                  className="w-ful h-auto"
                  width={442}
                  height={291}
                  priority
                  alt="img"
                />
              );
            })}
          </div>
          <div className="grid h-fit gap-5">
            {data?.imgCol2?.map((img: string) => {
              return (
                <Image
                  key={img}
                  src={img}
                  className="w-ful h-auto"
                  width={442}
                  height={291}
                  priority
                  alt="img"
                />
              );
            })}
          </div>
        </div>
        <div className="order-1 grid grid-cols-2 h-fit gap-5">
          <div className="grid h-fit gap-5">
            {data?.imgCol3?.map((img: string) => {
              return (
                <Image
                  key={img}
                  src={img}
                  className="w-ful h-auto"
                  width={442}
                  height={291}
                  priority
                  alt="img"
                />
              );
            })}
          </div>
          <div className="grid h-fit gap-5">
            {data?.imgCol4?.map((img: string) => {
              return (
                <Image
                  key={img}
                  src={img}
                  className="w-ful h-auto"
                  width={442}
                  height={291}
                  priority
                  alt="img"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid mt-10 font-semibold text-center uppercase">
        <span className="text-[#383C50]">view trailer</span>
        <span className="w-[100px] h-[2px] mx-auto bg-[#383C50]" />
      </div>
    </div>
  );
};

export default ProjectView;
