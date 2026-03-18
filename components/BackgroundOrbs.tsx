export default function BackgroundOrbs() {
  return (
    <>
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[rgba(0,212,255,0.06)] rounded-full blur-[120px] pointer-events-none z-0 -top-[200px] -right-[100px] animate-drift"></div>
      <div className="fixed bottom-[10%] left-0 w-[400px] h-[400px] bg-[rgba(123,92,255,0.08)] rounded-full blur-[120px] pointer-events-none z-0 -left-[100px] animate-drift" style={{animationDelay: '-7s'}}></div>
      <div className="fixed top-1/2 left-1/2 w-[300px] h-[300px] bg-[rgba(0,255,163,0.05)] rounded-full blur-[120px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 animate-drift" style={{animationDelay: '-14s'}}></div>
    </>
  );
}