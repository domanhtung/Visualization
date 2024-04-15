const FeatureMap = () => {
  const googleMapKey = process?.env?.GOOGLE_MAP_KEY || "";

  return (
    <div className="w-full h-[300px] sm:h-full">
      <iframe
        width="600"
        height="450"
        className="w-full h-full border-0"
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?q=10%20P.%20Ch%C6%B0%C6%A1ng%20D%C6%B0%C6%A1ng%20%C4%90%E1%BB%99%2C%20Ch%C6%B0%C6%A1ng%20D%C6%B0%C6%A1ng%20%C4%90%E1%BB%99%2C%20Ho%C3%A0n%20Ki%E1%BA%BFm%2C%20H%C3%A0%20N%E1%BB%99i&key=${googleMapKey}`}
      ></iframe>
    </div>
  );
};

export default FeatureMap;
