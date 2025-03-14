import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const languageData = [
  { name: "JavaScript", value: 40 },
  { name: "TypeScript", value: 25 },
  { name: "Python", value: 15 },
  { name: "Go", value: 10 },
  { name: "C++", value: 10 },
];

const projectData = [
  { name: "Web App", value: 50 },
  { name: "Mobile App", value: 20 },
  { name: "ML/AI", value: 20 },
  { name: "Other", value: 10 },
];

const COLORS = ["#E63946", "#F4A261", "#2A9D8F", "#E9C46A"];

export default function TechStatsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
      {/* Language Usage Chart */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Languages Used</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart layout="vertical" data={languageData}>
            <XAxis type="number" hide domain={[0, 50]} />
            <YAxis type="category" dataKey="name" width={80} tick={{ fill: "#ddd" }} />
            <Tooltip cursor={{ fill: "#333" }} contentStyle={{ backgroundColor: "#222", borderRadius: "5px" }} />
            <Bar dataKey="value" fill="#4A90E2" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Project Type Distribution Chart */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Project Types</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={projectData} dataKey="value" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" label>
              {projectData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} wrapperStyle={{ color: "#ddd" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
