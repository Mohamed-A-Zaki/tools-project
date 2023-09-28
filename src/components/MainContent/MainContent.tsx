export type MainContentProps = {
  children: React.ReactNode;
};
export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-grow-1 bg-black">
      <div className="p-3">{children}</div>
    </main>
  );
}
