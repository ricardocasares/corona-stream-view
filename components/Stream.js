import { ResponsiveStream } from "@nivo/stream";

export const Stream = ({ data }) => (
  <div className="stream">
    <ResponsiveStream
      className="page test"
      data={data}
      keys={["confirmed", "deaths", "recovered"]}
      offsetType="expand"
      fillOpacity={0.75}
      enableGridX={true}
      enableGridY={true}
      axisLeft={null}
      axisBottom={null}
    />
  </div>
);
