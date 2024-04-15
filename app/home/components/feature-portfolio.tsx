const FeaturePortfolio = () => {
  return (
    <div className="feature-portfolio-bg relative lg:row-span-2">
      <div className="absolute flex w-full h-full top-0 left-0 items-center justify-center p-8 text-center">
        <div>
          <div className="text-[20px] 2xl:text-[24px] font-medium">
            Featured Archibuild Projects
          </div>
          <p className="mt-2 text-[14px] text-[#B8B8B8]">
            Discover our wide portfolio, which highlights our experience in 3D
            modeling and visualization services. From residential settings to
            large-scale projects, each demonstrates our dedication to quality
            and client pleasure.
          </p>
          <button className="btn btn-style1 mt-6">portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturePortfolio;
