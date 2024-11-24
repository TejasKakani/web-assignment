import AllTimeMetrics from "../ui/dashboard/metrics/alltimemetrics";

export default function Dashboard({ model, graphType }: { model: string, graphType?: string }): JSX.Element {

  return (
    <div className="md:flex justify-items-center md:pl-48 pl-16 pt-20 bg-gray-100">
      <div className="w-full md:w-1/2">
      <h1 className="justify-self-center">User Metrics</h1>
      <AllTimeMetrics model="userMetrics" graphType="doughnut"/>
      <h1 className="justify-self-center">Content Metrics</h1>
      <AllTimeMetrics model="contentMetrics" graphType="doughnut"/>
      </div>
      <div className="w-full md:w-1/2">
      <h1 className="justify-self-center">Engagement Metrics</h1>
      <AllTimeMetrics model="engagementMetrics" graphType="doughnut"/>
      <h1 className="justify-self-center">Blockchain Metrics</h1>
      <AllTimeMetrics model="blockchainMetrics" graphType="doughnut"/>
      </div>
    </div>
  );
}