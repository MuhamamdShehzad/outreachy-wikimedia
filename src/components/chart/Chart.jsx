import "./chart.scss";
import {
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,YAxis,Bar,Line
} from "recharts";

const data = [
  {name: 'wikidata_qid',Total: 2665,},
  {name: 'replaced_by',Total: 2680},
  {name: 'for_wikis',Total: 2622},
  {name:'icon',Total: 2655},
  {name:'available_ui_languages',Total:2349},
  {name: 'tool_type',Total: 1147},
  {name: 'repository',Total: 1872},
  {name: 'api_url',Total: 2633},
   {name:'developer_docs_url',Total: 2432},
   {name: 'user_docs_url',Total: 1944},
   {name: 'feedback_url',Total: 2639},
   {name: 'privacy_policy_url',Total: 2678},
   {name: 'translate_url',Total: 2667},
   {name: 'bugtracker_url',Total: 2210}
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
        <ComposedChart width={1000} height={250} data={data}>
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="Total" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="Total" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Total" stroke="#ff7300" />
        </ComposedChart>
    </div>
  );
};

export default Chart;