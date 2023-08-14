interface ISecondaryHeader {
  headerContent: String;
}
function SecondaryHeader(props: ISecondaryHeader) {
  const { headerContent } = props;
  return (
    <div className="text-4xl font-extrabold text-center">
      <div>{headerContent}</div>
      <div className="border-b-2 border-black w-14 mx-auto" />
    </div>
  );
}

export default SecondaryHeader;
