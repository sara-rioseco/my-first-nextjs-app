type ContainerProps = {
  children: React.ReactNode;
};

export default function Container( props : ContainerProps) : React.ReactNode {
  return (
    <div className="text-center pt-0 px-5 max-w-[750px] flex-col self-center">
      {props.children}
    </div>
  )
}