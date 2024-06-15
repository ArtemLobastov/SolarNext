type props = {
  variant: string;
};
export default function StatsCard({ variant }: props) {
  return (
    <div className=" h-40 bg-blue-200 ">
      <h1>{variant}</h1>
      <p>123</p>
      <p>+156% since last month</p>
    </div>
  );
}
