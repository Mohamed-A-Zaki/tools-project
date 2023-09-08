export type MainContentProps = {
  children: React.ReactNode;
};
export default function MainContent({ children }: MainContentProps) {
  return (
    <main style={{ marginTop: "56px" }} className="flex-grow-1 bg-black">
      <div className="container pt-4">{children}</div>
    </main>
  );
}
