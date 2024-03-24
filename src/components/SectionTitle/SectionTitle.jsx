const SectionTitle = ({ sectionTitle, sectionDescription }) => {
  return (
    <div className="text-center my-16">
      <h2 className="text-5xl font-extrabold">{sectionTitle}</h2>
      <p className="mt-4">{sectionDescription}</p>
    </div>
  );
};
export default SectionTitle;
