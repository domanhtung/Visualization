const ProjectContact = () => {
  return (
    <div className="project-grow-bg py-10 2xl:py-20">
      <div className="grid lg:grid-cols-2 max-w-[1210px] mx-auto px-5 gap-5">
        <div>
          <div className="font-semibold">CONTACT</div>
          <div className="font-neuton text-[36px]">
            {"Let’s start new project."}
          </div>
          <p className="py-3">
            Ready to start your next project? We are here to bring your vision
            to life. Whether you want to design a new space, rejuvenate an
            existing property, or take on a building challenge, let&apos;s work
            together to create something amazing. Contact us now to get started!
          </p>
          <div className="grid md:grid-cols-2 mt-5 gap-x-5 gap-y-2">
            <div className="flex gap-5 items-center">
              <span className="text-[12px] font-bold uppercase">PHONE</span>
              <span>+84 337 777 815</span>
            </div>
            <div className="flex gap-5 items-center">
              <span className="text-[12px] font-bold uppercase">Telegram</span>
              <span>+84 91 5943340</span>
            </div>
            <div className="flex gap-5 items-center">
              <span className="text-[12px] font-bold uppercase">EMAIL</span>
              <span>hello@archibuild.ai</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 h-fit lg:pl-20 gap-5">
          <div>
            <div className="font-neuton">Name *</div>
            <input className="w-full h-[34px] px-3 bg-white outline-none text-[#383C50]" />
          </div>
          <div>
            <div className="font-neuton">Phone *</div>
            <input className="w-full h-[34px] px-3 bg-white outline-none text-[#383C50]" />
          </div>
          <div className="md:col-span-2">
            <div className="font-neuton">Mail *</div>
            <input className="w-full h-[34px] px-3 bg-white outline-none text-[#383C50]" />
          </div>
          <div className="md:col-span-2">
            <div className="font-neuton">Message *</div>
            <textarea className="w-full h-[120px] px-3 bg-white outline-none text-[#383C50]" />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button className="btn btn-style1 w-full md:w-[140px]">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContact;
